(ns ttt-clojure.core-spec
  (:require-macros [speclj.core :refer [describe it should= should-contain
                                        before-all before should-not-be-nil
                                        should-be-nil context should-not=]])
  (:require
    [reagent.core :as reagent]
    [reagent.dom :as rdom]
    [ttt-clojure.components :as sut]
    [speclj.core]))

;limit duplication in let statement

(defn click-and-flush [button]
  (.click button)
  (reagent/flush))

(defn should-click-letter [letter buttons index]
  (click-and-flush (nth buttons index))
  (should= letter (.-value (nth buttons index))))

(defn should-click-radio [element expected-state get-state]
  (click-and-flush element)
  (should= expected-state (get-state @sut/game-state)))

(def default-game-state
  {:game-id  1
   :player-1 {:kind :human :token "X"}
   :player-2 {:kind :human :token "O"}
   :size     :3x3
   :moves    []
   :new-game true})

(def simple-game-over
  {:game-id  1
   :player-1 {:kind :human :token "X"}
   :player-2 {:kind :human :token "O"}
   :size     :3x3
   :moves    [1 5 2 6 3]
   :new-game false})

(defn update-moves [game-state moves]
  (assoc game-state :moves moves))

(defn update-players [game-state player-1 player-2]
  (assoc game-state :player-1 player-1 :player-2 player-2))

(defn invoke-query [element]
  (js-invoke js/document "querySelector" element))

(defn invoke-query-all [element]
  (js-invoke js/document "querySelectorAll" element))

(defn setup-game-state [initial-state]
  (set! (.-innerHTML (.-body js/document)) "<div id=\"root\"></div>")
  (reset! sut/game-state initial-state)
  (let [root (js-invoke js/document "getElementById" "root")]
    (rdom/render [sut/tic-tac-toe] root)))

(describe "Tic Tac Toe"
  (before
    (setup-game-state default-game-state))

  (it "displays the options form"
    (should= "Choose your Tic Tac Toe Options" (.-textContent (invoke-query "h1"))))

  (it "contains radio buttons for board size"
    (should= 2 (count (array-seq (invoke-query-all "input[name='size']")))))

  (it "contains radio buttons for player 1"
    (should= 4 (count (array-seq (invoke-query-all "input[name='player_1']")))))

  (it "contains radio buttons for player 2"
    (should= 4 (count (array-seq (invoke-query-all "input[name='player_2']")))))

  (it "does not allow grid modifications after game over"
    (reset! sut/game-state simple-game-over)
    (reagent/flush)
    (let [id-button-6 (invoke-query "#-my-button-6")]
      (click-and-flush id-button-6)
      (should= "" (.-value id-button-6))))

  (it "updates game state when radio buttons are clicked"
    (reagent/flush)
    (let [size-radio (invoke-query "input[name='size'][value='4x4']")
          player1-radio (invoke-query "input[name='player_1'][value='ai_easy']")
          player2-radio (invoke-query "input[name='player_2'][value='ai_hard']")
          submit-button (invoke-query "input[type='submit']")]

      (should-not-be-nil size-radio)
      (should-not-be-nil player1-radio)
      (should-not-be-nil player2-radio)
      (should-not-be-nil submit-button)

      (should-click-radio size-radio :4x4 #(get % :size))
      (should-click-radio player1-radio {:kind :ai :difficulty :easy :token "X"} #(get % :player-1))
      (should-click-radio player2-radio {:kind :ai :difficulty :hard :token "O"} #(get % :player-2))
      (should-click-radio submit-button false #(get % :new-game))))

  (it "does not show AI move button, new game button, turn message, welcome message, and game buttons when :new-game is true"
    (reset! sut/game-state (assoc sut/default-game-state :new-game true))
    (reagent/flush)
    (let [ai-move-btn (invoke-query ".ai-move-btn")
          new-game-btn (invoke-query ".new-game-btn")
          turn-msg (invoke-query ".turn-message")
          welcome-msg (invoke-query "h1")
          game-buttons (invoke-query-all "input[type='button']")]
      (should-be-nil ai-move-btn)
      (should-be-nil new-game-btn)
      (should-be-nil turn-msg)
      (should-not= "Welcome to Merl's Tic Tac Toe" (.-textContent welcome-msg))
      (should= 0 (.-length game-buttons))))

  (context "game state"

    (before
      (setup-game-state (assoc default-game-state :new-game false)))

    (it "has the title"
      (should= "Welcome to Merl's Tic Tac Toe" (.-textContent (invoke-query "h1"))))

    (it "produces the correct number of buttons"
      (let [buttons (invoke-query-all "input[type='button']")]
        (should= 9 (.-length buttons))))

    (it "makes buttons with correct initial labels"
      (let [buttons (invoke-query "input[type='button']")]
        (should-contain "" (.-innerHTML buttons))))

    (it "updates button label on click"
      (let [buttons (map #(invoke-query (str "#-my-button-" %)) (range 9))]
        (doseq [button buttons]
          (should= "" (.-value button)))
        (should-click-letter "X" buttons 1)
        (should-click-letter "O" buttons 2)
        (should-click-letter "O" buttons 2)
        (doseq [i [0 3 4 5 6 7 8]]
          (should= "" (.-value (nth buttons i))))))

    (it "checks if there are line breaks"
      (let [breaks (invoke-query-all ".container br")]
        (should= 3 (count (seq breaks)))))

    (it "does not show game-over message initially"
      (let [game-over-message (invoke-query ".game-result")]
        (should-be-nil game-over-message)))

    (it "displays X is the winner message when game ends"
      (reset! sut/game-state simple-game-over)
      (reagent/flush)
      (let [game-over-message (invoke-query ".game-result")]
        (should-not-be-nil game-over-message)
        (should-contain "X is the winner!" (.-textContent game-over-message))))

    (it "displays O is the winner message when game ends"
      (reset! sut/game-state (assoc simple-game-over :moves [1 2 3 5 6 8]))
      (reagent/flush)
      (let [game-over-message (invoke-query ".game-result")]
        (should-not-be-nil game-over-message)
        (should-contain "O is the winner" (.-textContent game-over-message))))

    (it "displays draw message when no moves are left"
      (reset! sut/game-state (assoc simple-game-over :moves [1 2 4 5 8 7 3 6 9]))
      (reagent/flush)
      (let [game-over-message (invoke-query ".game-result")]
        (should-not-be-nil game-over-message)
        (should-contain "Womp, its a tie" (.-textContent game-over-message))))

    (it "has the correct initial values"
      (let [initial-state @sut/game-state]
        (should= {:kind :human :token "X"} (:player-1 initial-state))
        (should= {:kind :human :token "O"} (:player-2 initial-state))
        (should= :3x3 (:size initial-state))
        (should= [] (:moves initial-state))))

    (it "resets game-state and shows options form on new game button click"
      (let [root (js-invoke js/document "getElementById" "root")]
        (rdom/render [sut/tic-tac-toe] root))
      (let [new-game-button (invoke-query ".new-game-btn")]
        (click-and-flush new-game-button)
        (should= true (:new-game @sut/game-state))
        (should= "Choose your Tic Tac Toe Options" (.-textContent (invoke-query "h1")))))

    (it "resets the board and shows the options form on new game"
      (reset! sut/game-state (assoc sut/default-game-state
                               :moves [1 2 3 4]
                               :new-game false))
      (reagent/flush)
      (let [new-game-button (invoke-query ".new-game-btn")]
        (click-and-flush new-game-button)
        (should= true (:new-game @sut/game-state))
        (should= "Choose your Tic Tac Toe Options" (.-textContent (invoke-query "h1")))))

    (it "shows and works the AI move button correctly"
      (reset! sut/game-state (assoc sut/default-game-state
                               :moves [1 5 3]
                               :player-1 {:kind :human :token "X"}
                               :player-2 {:kind :ai :difficulty :hard :token "O"}
                               :new-game false))
      (reagent/flush)
      (let [ai-move-btn (invoke-query ".ai-move-btn")]
        (should-not-be-nil ai-move-btn)
        (click-and-flush ai-move-btn)
        (should= [1 5 3] (:moves @sut/game-state))
        (js/setTimeout
          #((click-and-flush ai-move-btn)
            (should= [1 5 3 2] (:moves @sut/game-state))))))

    (it "displays the correct player token on the buttons after a move"
      (let [buttons (map #(invoke-query (str "#-my-button-" %)) (range 9))]
        (doseq [button buttons]
          (should= "" (.-value button)))
        (should-click-letter "X" buttons 0)
        (should-click-letter "O" buttons 1)
        (should= "X" (.-value (nth buttons 0)))
        (should= "O" (.-value (nth buttons 1)))))


    (it "returns the correct turn message for Player 1's turn"
      (let [game-state (update-moves simple-game-over [])]
        (should= "Player 1 human's turn" (sut/turn-message game-state))))

    (it "returns the correct turn message for Player 2's turn"
      (let [game-state (-> simple-game-over
                           (update-moves [1])
                           (update-players {:kind :ai :difficulty :hard :token "X"}
                                           {:kind :ai :difficulty :medium :token "O"}))]
        (should= "Player 2 medium ai's turn" (sut/turn-message game-state))))

    (it "returns the correct turn message for Player 1 when player types are different"
      (let [game-state (-> simple-game-over
                           (update-moves [1 2])
                           (update-players {:kind :ai :difficulty :hard :token "X"}
                                           {:kind :human :token "O"}))]
        (should= "Player 1 hard ai's turn" (sut/turn-message game-state))))

    (it "returns the correct turn message for Player 2 when player types are different"
      (let [game-state (-> simple-game-over
                           (update-moves [1 2 3])
                           (update-players {:kind :ai :difficulty :hard :token "X"}
                                           {:kind :ai :difficulty :easy :token "O"}))]
        (should= "Player 2 easy ai's turn" (sut/turn-message game-state))))

    (it "does not display AI move button or turn message when the game is over"
      (reset! sut/game-state simple-game-over)
      (reagent/flush)
      (let [ai-move-btn (invoke-query ".ai-move-btn")
            turn-message (invoke-query ".turn-message")
            new-button (invoke-query ".new-game-btn")]
        (should-be-nil ai-move-btn)
        (should-be-nil turn-message)
        (should-not-be-nil new-button)))

    (it "does not show radio buttons when :new-game is false"
      (reset! sut/game-state (assoc sut/default-game-state :new-game false))
      (reagent/flush)
      (let [size-radios (invoke-query-all "input[name='size']")
            player1-radios (invoke-query-all "input[name='player_1']")
            player2-radios (invoke-query-all "input[name='player_2']")]
        (should= 0 (.-length size-radios))
        (should= 0 (.-length player1-radios))
        (should= 0 (.-length player2-radios))))

    )
  )
