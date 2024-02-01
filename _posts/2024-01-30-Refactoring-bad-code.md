---
title:  "Refactoring Bad Code"
mathjax: true
layout: post
categories: media
---


I know this is the never ending story but let me add this chapter.

I will begin by providing my previous code that was the same exact idea for 3 different game types. Human vs human, human vs computer, and finally computer vs computer.

```clojure
(defn two-humans [board]
 (let [x-o (ui/get-user-x-o)
       display board/display]
   (loop [grid board
          X? x-o]
     (ui/print-board grid display)
     (let [new-grid (ui/update-board grid X?)]
       (if (ui/endgame-result new-grid)
         (ui/print-end new-grid display)
         (recur new-grid (not X?)))))))

(defn comp-vs-comp [board difficulty-1 difficulty-2]
 (loop [grid board
        x-turn? true]
   (let [move (if x-turn?
                (difficulty-1 grid)
                (difficulty-2 grid))
        new-grid (comp-move-statement x-turn? grid move)]
     (ui/print-board new-grid board/display)
     (if (not (ui/endgame-result new-grid))
       (recur new-grid (not x-turn?))
       (ui/print-end-computer new-grid)))))

(defn human-vs-comp [board difficulty]
 (let [user-token (ui/get-user-vs-ai-x-o)
       difficulty (hard-ai-x-o difficulty user-token)]
   (loop [grid board
          comp-turn? (ui/start-first? board)]
     (let [move (difficulty grid)
  new-grid (grid-after-comp comp-turn? grid move user-token)]
       (ui/print-board new-grid board/display)
       (if (not (ui/endgame-result new-grid))
         (recur new-grid (not comp-turn?))
         (ui/print-end-computer new-grid))))))
```
As you can see they have basically identical structures. However I built them at different times, and so I built added to my code instead of refactoring.

Classic newbie mistake. Hopefully, I give myself more time in the future to refactor the code nicely and quickly instead of trying to do it once I’ve already created a mess.

I wanted to create new loop that could handle every combination you can imagine, player 1 as Ai or human, and same for player 2. But I would only need the 1 loop to function. This could get rid of a lot of previous code that was needed to support these 3 frankensteins.

After much deliberation, this is the solution I have as of today. It needs more work especially with the player maps. But as of right now it works, and it is glorious. But again it needs to be refactored more.

```clojure
(defn player-vs-player []
 (let [board (board-size)
       player-1 (create-player 1 nil)
       player-2 (create-player 2 (:token player-1))
       diff-1 (when (= :ai (:kind player-1)) (ui/get-difficulty))
       diff-2 (when (= :ai (:kind player-2)) (ui/get-difficulty))
       token-1 (name (:token player-1))
       token-2 (name (:token player-2))]
   (loop [grid board
          player-1? true]
     (let [move (if player-1?
                  (get-move player-1 grid token-2 diff-1)
                  (get-move player-2 grid token-1 diff-2))
           new-grid (grid-after-move player-1? grid move token-1 token-2)]
       (ui/print-board new-grid board/display)
       (if (board/game-over? new-grid token-1 token-2)
         (ui/print-end-2 new-grid token-1 token-2)
         (recur new-grid (not player-1?)))))))
```

Refactoring is like the dishes and laundry, you will never be done!

Best,

Merl
