---
title:  "Connecting the GUI"
mathjax: true
layout: post
categories: media
---

I have been making the GUI for Tic Tac Toe but I have been having a challenge connecting it to my previous game logic.

I think this is because of several reasons.

First, I created it in the wrong order. I created a GUI by just making boxes, then making Xs and Os, then I made it clickable.

Now I think I should have made a connection to my game logic first, then build it from there.

This is my setup, and my `mouse-clicked` for my `:play` multimethod:

```clojure


(defn setup []
 (q/color-mode :rgb)
 {:screen :size
  :game   {:game-id  1
           :player-1 {:kind :human :token "X"}
           :player-2 {:kind :human :token "O"}
           :size     :4x4
           :moves    []}})

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

As you can see I have been changing the setup from `mouse-clicked` and it is changing the game.

I have added some game logic where it can tell who wins, and if it’s a tie. But I need to add in an AI!

I am still in the process of figuring out exactly how to do this but I am getting an idea.

See I have this code for my previous games.

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
```

What if, instead of changing my moves in my GUI, i just get the number that was clicked and send it out.

Then I can send that number to `get-move` or  `get-move :human` and see if that number is valid. Then my previous logic can update the game rather than the GUI changing it.

The one problem is I am unsure how to change the board when an AI is playing. I think the click should still have the board change, yet I hope it will not interfere with the play round.

Again since this is a thought as of now, I wonder if I have to make a new `play-round` like `play-round :gui` and use that when a GUI is chosen at the start.

I will provide an update when the next time comes.

Best,

Merl   
