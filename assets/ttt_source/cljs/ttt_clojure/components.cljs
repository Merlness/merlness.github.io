(ns ttt-clojure.components
  (:require [reagent.core :as r]
            [ttt-clojure.board :as board]
            [ttt-clojure.game-modes :as gm]
            [ttt-clojure.game :as game]
            [ttt-clojure.ui :as ui]))

(def default-game-state
  {:game-id  1
   :player-1 {:kind :human :token "X"}
   :player-2 {:kind :human :token "O"}
   :size     :3x3
   :moves    []
   :new-game true})

(defonce game-state (r/atom default-game-state))

(defn handle-submit [e]
  (.preventDefault e)
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
    [:p "Please choose which board you want to play with"]
    [radio-option "3x3" "size" :3x3 "3x3" #(swap! game-state assoc :size :3x3)]
    [radio-option "4x4" "size" :4x4 "4x4" #(swap! game-state assoc :size :4x4)]

    [:p "Please Select Player 1"]
    [radio-option "human1" "player_1" :human "human" #(swap! game-state assoc-in [:player-1 :kind] :human)]
    [radio-option "ai_easy1" "player_1" :ai_easy "easy ai" (update-player :player-1 :ai :easy)]
    [radio-option "ai_medium1" "player_1" :ai_medium "medium ai" (update-player :player-1 :ai :medium)]
    [radio-option "ai_hard1" "player_1" :ai_hard "hard ai" (update-player :player-1 :ai :hard)]

    [:p "Please Select Player 2"]
    [radio-option "human2" "player_2" :human "human" #(swap! game-state assoc-in [:player-2 :kind] :human)]
    [radio-option "ai_easy2" "player_2" :ai_easy "easy ai" (update-player :player-2 :ai :easy)]
    [radio-option "ai_medium2" "player_2" :ai_medium "medium ai" (update-player :player-2 :ai :medium)]
    [radio-option "ai_hard2" "player_2" :ai_hard "hard ai" (update-player :player-2 :ai :hard)]
    [:br]
    [:input {:type "submit" :value "Submit"}]]])

(defn new-game-button []
  [:form {:on-submit (fn [e]
                       (.preventDefault e)
                       (reset! game-state default-game-state))}
   [:button
    {:type "submit" :class "new-game-btn" :name "newGame" :value "true"}
    "New Game"]])

(defn can-update? [grid index]
  (and (not (board/game-over? grid {:token "X"} {:token "O"}))
       (some #(= index %) grid)
       (integer? (get grid (dec index)))))

(defn get-players [game moves]
  (if (even? (count moves))
    [(:player-1 game) (:player-2 game)]
    [(:player-2 game) (:player-1 game)]))

(defn calculate-move [state index]
  (let [moves (:moves state)
        [current-player opponent] (get-players state moves)
        grid (game/convert-moves-to-board state)]
    (if (= :ai (:kind current-player))
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

(defn button [value index on-click]
  [:input {:id       (str "-my-button-" index)
           :type     "button"
           :value    (if (number? value) "" value)
           :on-click on-click}])

(defn new-line [side index]
  (when (= (dec side) (mod index side))
    [:br]))

(defn group-buttons [grid side index]
  [:<>
   [button (get grid index) index #(update-grid index)]
   (new-line side index)])

(defn make-grid [grid side]
  [:div
   (for [index (range (count grid))]
     ^{:key index}
     [group-buttons grid side index])])

(defn game-over-display [grid]
  (when (board/game-over? grid {:token "X"} {:token "O"})
    [:div.game-result
     [:p (ui/endgame-result grid "X" "O")]]))

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

(defn ai-move-button [current-player]
  (when (= :ai (:kind current-player))
    [:div.flex-center
     [:button
      {:class    "ai-move-btn"
       :on-click #(update-grid -1)}
      "AI Move"]]))

(defn in-progress-display [grid current-player]
  (when (not (board/game-over? grid {:token "X"} {:token "O"}))
    [:div
     [turn-message @game-state]
     [ai-move-button current-player]]))

(defn game-screen [grid side]
  (let [moves (:moves @game-state)
        [current-player _] (get-players @game-state moves)]
    [:<>
     [:h1 "Welcome to Merl's Tic Tac Toe"]
     [in-progress-display grid current-player]
     [make-grid grid side]
     [game-over-display grid]
     [new-game-button]]))

(defn tic-tac-toe []
  (let [{:keys [new-game size]} @game-state
        side (if (= size :3x3) 3 4)
        grid (game/convert-moves-to-board @game-state)]
    [:div.container
     (if new-game
       [game-options-form]
       [game-screen grid side])]))

;how to host a clojure project on netlify
