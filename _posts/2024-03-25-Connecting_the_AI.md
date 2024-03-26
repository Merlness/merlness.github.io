---
title:  "Connecting the AI"
mathjax: true
layout: post
categories: media
---


For my last post I provided a hypothesis.

That hypothesis was wrong.

I found the best way to incorporate my GUI and logic was to use what I had already created, and place it in the GUI.

Let’s take a look again at my two functions that I combined.

```clojure


(defmulti get-move (fn [player _opponent _grid] (:kind player)))
(defmethod get-move :human [_player _opponent grid] (ui/get-move grid))
(defmethod get-move :ai [player opponent grid]
 (comp/ai-move grid (:token player) (:token opponent) (:difficulty player)))


(defn play-round [db-type {:keys [player-1 player-2 moves] :as game}]
 (let [[player opponent] (if (board/player1? moves) [player-1 player-2] [player-2 player-1])
       new-board (game/convert-moves-to-board game)
       move (get-move player opponent new-board)
       new-grid (grid-after-move move game)
       game (assoc game :moves (conj moves move))]
   (save/save game db-type)
   (ui/print-board new-grid)
   game))


(defmethod mouse-clicked :play [state mouse]
 (let [size (size (:game state))
       index (get-index size mouse)
       game (:game state);
       board (game/convert-moves-to-board game)
       token (get board index)
       new-moves (conj (:moves game) (inc index))]
   (cond
     (board/game-over? board game) (assoc state :screen :game-over :winner (get-winner game))
     (available-move? token) (do
                               (prn "game:" game)
                               (assoc state :game (assoc game :moves new-moves)))
     :else state)

```
Of course you see my multimethods that get a move depending on whether the player is `:ai` or `:human`. In this multimethod to get the player input I had to get an input from the terminal. Of course I do not want this in my GUI, I want a click input like I have in my mouse clicked method.

How can I incorporate `get-move` into `mouse-clicked` without using the terminal?

I get the necessary logic from `play-round` and add it in to `:play`

```clojure

(defmethod mouse-clicked :play [state mouse]
 (let [{:keys [moves player-1 player-2]} (:game state)
       [player opponent] (if (board/player1? moves) [player-1 player-2] [player-2 player-1])
       size (size (:game state))
       index (get-index size mouse)
       game (:game state)
       board (game/convert-moves-to-board game)
       move (if (= :ai (:kind player))
              (gm/get-move player opponent board)
              (inc index))
       token (get board index)
       new-moves (conj (:moves game) move)]


   (cond
     (board/game-over? board game) (assoc state :screen :again :winner (get-winner game))
     (= :ai (:kind player)) (assoc-in state [:game :moves] new-moves)
     (available-move? token size move) (assoc-in state [:game :moves] new-moves)
     :else state)))
```

I take the keys like I did in `play-round`, along with identifying which player is going.

If the number of moves is even then it is player 1’s turn, and if the count of moves is odd it will be player 2’s turn.

Next `move` will be using the `get-move` method only if it is an `:ai` player. If not it will be used the same way it was originally, by clicking the correct box.

Finally, all that is needed to show the ai move is to click anywhere and the move will reveal itself.

This was a simple yet tough way to incorporate the AI into my GUI.

Best,

Merl
