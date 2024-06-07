(ns ttt-clojure.components
  (:require [reagent.core :as r]
            [ttt-clojure.board :as board]
            [ttt-clojure.game-modes :as gm]
            [ttt-clojure.game :as game]
            [ttt-clojure.ui :as ui]))

(def default-game-state
  {:game-id     1
   :player-1    {:kind :human :token "X"}
   :player-2    {:kind :human :token "O"}
   :size        :3x3
   :moves       []
   :new-game    true
   :ai-thinking false})

(defonce game-state (r/atom default-game-state))

(defn handle-submit [event]
  (.preventDefault event)
  (swap! game-state assoc :new-game false))

(defn update-player [player-key kind difficulty]
  (fn []
    (swap! game-state assoc-in [player-key]
           {:kind kind, :difficulty difficulty, :token
            (if (= player-key :player-1) "X" "O")})))

(defn radio-option [id option-name value label on-change-fn]
  [:div
   [:input
    {:type      "radio"
     :id        id
     :name      option-name
     :value     value
     :on-change on-change-fn}]
   [:label {:for id} label]])

(defn game-options-form []
  [:div
   [:h1 "Choose your Tic Tac Toe Options"]
   [:form {:on-submit #(handle-submit %)}
    [:p {:class "centered-text"} "Please choose which board you want to play with"]
    [radio-option "3x3" "size" :3x3 "3x3" #(swap! game-state assoc :size :3x3)]
    [radio-option "4x4" "size" :4x4 "4x4" #(swap! game-state assoc :size :4x4)]

    [:p {:class "centered-text"} "Please Select Player 1"]
    [radio-option "human1" "player_1" :human "human" #(swap! game-state assoc-in [:player-1 :kind] :human)]
    [radio-option "ai_easy1" "player_1" :ai_easy "easy ai" (update-player :player-1 :ai :easy)]
    [radio-option "ai_medium1" "player_1" :ai_medium "medium ai" (update-player :player-1 :ai :medium)]
    [radio-option "ai_hard1" "player_1" :ai_hard "hard ai" (update-player :player-1 :ai :hard)]

    [:p {:class "centered-text"} "Please Select Player 2"]
    [radio-option "human2" "player_2" :human "human" #(swap! game-state assoc-in [:player-2 :kind] :human)]
    [radio-option "ai_easy2" "player_2" :ai_easy "easy ai" (update-player :player-2 :ai :easy)]
    [radio-option "ai_medium2" "player_2" :ai_medium "medium ai" (update-player :player-2 :ai :medium)]
    [radio-option "ai_hard2" "player_2" :ai_hard "hard ai" (update-player :player-2 :ai :hard)]
    [:br]
    [:input {:type "submit" :value "Submit"}]]])

(defn new-game-button []
  [:form {:on-submit (fn [event]
                       (.preventDefault event)
                       (reset! game-state default-game-state))}
   [:button
    {:type  "submit"
     :class "new-game-btn"
     :name  "newGame"
     :value "true"}
    "New Game"]])

(defn can-update? [grid index]
  (and (not (board/game-over? grid {:token "X"} {:token "O"}))
       (some #(= index %) grid)
       (integer? (get grid (dec index)))))

(defn get-players [game moves]
  (if (even? (count moves))
    [(:player-1 game) (:player-2 game)]
    [(:player-2 game) (:player-1 game)]))

(defn human-or-ai [player]
  (let
    [moves (:moves @game-state)
     [current-player _] (get-players @game-state moves)]
    (= (:kind current-player) player)))

(defn human? [] (human-or-ai :human))
(defn ai? [] (human-or-ai :ai))

(defn calculate-move [state index]
  (let [moves (:moves state)
        [current-player opponent] (get-players state moves)
        grid (game/convert-moves-to-board state)]
    (if (ai?)
      (gm/get-move current-player opponent grid)
      (inc index))))

(defn update-grid [index]
  (swap! game-state
         (fn [state]
           (let [move (calculate-move state index)
                 grid (game/convert-moves-to-board state)]
             (if (can-update? grid move)
               (update state :moves conj move)
               state)))))

(defn button [value index]
  [:input {:id       (str "-my-button-" index)
           :type     "button"
           :value    (if (number? value) "" value)
           :on-click #(when (human?)
                        (update-grid index))}])

(defn new-line [side index]
  ;add in grid here and find side later
  ;maybe double breaks after 9 buttons in 3x3x3
  ;else keep the same logic
  (when (= (dec side) (mod index side))
    [:br]))

(defn group-buttons [grid side index]
  [:<>
   [button (get grid index) index #(update-grid index)]
   (new-line side index)])                                  ;add in grid here

(defn make-grid [grid side]
  ; place cond here for side,
  ; remove side param
  [:div
   (for [index (range (count grid))]
     ^{:key index}
     [group-buttons grid side index])])

(defn game-over-display [grid]
  (when (board/game-over? grid {:token "X"} {:token "O"})
    [:div.game-result
     [:p {:class "centered-text"} (ui/endgame-result grid "X" "O")]]))

(defn player-name [current-player]
  (if (= (:kind current-player) :human)
    "human"
    (str (name (:difficulty current-player)) " ai")))

(defn turn-message [game]
  (let [moves (:moves game)
        player-1 (:player-1 game)
        player-2 (:player-2 game)
        [current-player player-number] (if (odd? (count moves))
                                         [player-2 "2"]
                                         [player-1 "1"])
        player-name (player-name current-player)]
    (str "Player " player-number " " player-name "'s turn")))

(defn ai-thinking-message []
  [:div.flex-center
   [:p "The AI is thinking..."]])

(defn handle-ai-move-click []
  (swap! game-state assoc :ai-thinking true)
  (js/setTimeout
    (fn []
      (update-grid -1)
      (swap! game-state assoc :ai-thinking false))
    500))

(defn ai-move-button []
  (let [ai-thinking (:ai-thinking @game-state)]
    (when (ai?)
      (if ai-thinking
        [ai-thinking-message]
        [:div.flex-center
         [:button
          {:class    "ai-move-btn"
           :on-click handle-ai-move-click}
          "AI Move"]]))))

(defn in-progress-display [grid]
  (when (not (board/game-over? grid {:token "X"} {:token "O"}))
    [:div
     [turn-message @game-state]
     [ai-move-button]]))

(defn game-screen [grid side]
  (let [moves (:moves @game-state)
        [current-player _] (get-players @game-state moves)]
    [:<>
     [:h1 "Welcome to Merl's Tic Tac Toe"]
     [new-game-button]
     [make-grid grid side]
     [in-progress-display grid current-player]
     [game-over-display grid]]))

(defn tic-tac-toe []
  (let [{:keys [new-game size]} @game-state
        side (if (= size :4x4) 4 3)                         ; cond for 3 4 or 9
        grid (game/convert-moves-to-board @game-state)]
    [:div.container
     (if new-game
       [game-options-form]
       [game-screen grid side])]))

;tests in cljc, tests match source
;move ai-move so the grid doesn't change
; place "AI is thinking"



;Internal Dev
;Complete stories
;be productive in a brand new code base
;styles of dev, gotta learn to connect
;might find some bad styles, clean it up
;follow patterns that you see, mostly
;pair programming, do it
;hit up greg

;future clients less tech savy, get it to work
;new stories less scripted,


;pair as much as possible to
; learn more to be better equipped to estimate
