(ns ttt-clojure.ui
  (:require [ttt-clojure.board :as board]
            [ttt-clojure.game :as game]))

(def cui-or-other (atom :cui)) ;test

(defn invalid-move? [num grid] (not-any? #{num} grid))

(defn valid-input? [input grid]
  (let [move (try
               input
               (catch NumberFormatException _
                 nil))
        size (count grid)]
    (and move (<= 1 move size))))

(defmulti get-move (fn [_grid] @cui-or-other))
(defmethod get-move :cui [grid]
  (println "Choose your position")
  (loop []
    (let [user-input (Integer/parseInt (read-line))]
      (if (and (not (invalid-move? user-input grid)) (valid-input? user-input grid))
        user-input
        (do
          (println "Invalid input. Please place a number that is available.")
          (recur))))))

(defn endgame-result [grid token-1 token-2] ;used in web ttt
  (cond
    (board/token-wins grid token-1) (str token-1 " is the winner!")
    (board/token-wins grid token-2) (str token-2 " is the winner!")
    (board/tie grid) "Womp, its a tie"))

(defmulti print-board (fn [_grid] @cui-or-other)) ;ready
(defmethod print-board :cui [grid]
  (println (board/display grid)))

(defmulti print-end (fn [_game] @cui-or-other)) ;ready
(defmethod print-end :cui [game]
  (let [player-1 (board/player-token (:player-1 game))
        player-2 (board/player-token (:player-2 game))
        size (:size game)
        moves (:moves game)
        board (game/convert-moves-to-board player-1 player-2 size moves)]
    (println (endgame-result board player-1 player-2))))

(defn player-statement [num] (println (str "Player " num "'s turn")))

(defn get-game-board []
  (println "Welcome to Merl's Tic Tac Toe
  Please press 3 if you would like to play on a 3x3 board,
    4 if you would like to play on a 4x4 board,
    or 9 if you would like to play 3D Tic Tac Toe")
  (case (read-line)
    "3" :3x3
    "4" :4x4
    "9" :3x3x3
    (recur)))

(defn get-difficulty []
  (println "Please press 1 for an easy AI
             2 for a medium AI
             3 for a hard AI")
  (case (read-line)
    "1" :easy
    "2" :medium
    "3" :hard
    (recur)))

(defn get-player [player-number]
  (println (str "If you would like Player " player-number
                " to be human press 1, or press 2 for AI?"))
  (case (read-line)
    "1" :human
    "2" :ai
    (recur player-number)))

(defn get-player-1-token []
  (println "Please press 1 if you want Player 1 to be X and Player 2 to be O,
or anything else for Player 1 to be O and Player 2 to be X")
  (if (= "1" (read-line)) "X" "O"))

(defn get-player-2-token [player-1-token]
  (if (= player-1-token "X") "O" "X"))

(defn continue-last-game? []
  (println "Would you like to finish your previous game?
  1 for Yes, anything else for No")
  (= "1" (read-line)))

(defn difficulty-to-string [difficulty]
  (case difficulty
    :easy "Easy AI"
    :medium "Medium AI"
    :hard "Hard AI"
    "Unknown"))

(defn print-player-kind [player-number player]
  (if (= :ai (:kind player))
    (println (str "Player-" player-number ": " (difficulty-to-string (:difficulty player)) " " (:token player)))
    (println (str "Player-" player-number ": Human " (:token player)))))

(defn print-player-kinds [game]
  (print-player-kind "1" (:player-1 game))
  (print-player-kind "2" (:player-2 game)))

(defn print-resume-game [game]
  (println "\nResuming game:")
  (print-player-kinds game))

(defn print-id [id] (println (str "Game-ID: " id)))

(defmulti print-id-and-board (fn [game-id game] @cui-or-other))
(defmethod print-id-and-board :cui [game-id game]
  (let [board (game/convert-moves-to-board game)]
    (print-id game-id)
    (print-board board)))

(defn print-previous-player-kinds [game]
  (println "\nPrevious game:")
  (print-player-kinds game))

(defn print-previous-moves [game-data]
  (run! (fn [game]
          (println "Player"
                   (if
                     (even? (count (filter string? game)))
                     "2" "1") "made a move:")
          (print-board game))
        game-data))

(defn play-again-message [] ;multi
  (println "Would you like to play a new game?
  Please press 1 for a new game or anything else to exit.")
  (= "1" (read-line)))
