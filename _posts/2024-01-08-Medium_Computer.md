---
title:  "Medium Computer"
mathjax: true
layout: post
categories: media
---

I am quite proud of this one. When I first contemplated how to create a medium-level computer, I was unsure of how to approach the problem.

As I had previously managed to create both an Easy-AI and a Hard-AI, my initial thought was to combine them.
Fortunately, Clojure has a built-in random function, which sparked an idea. What if, for the Medium-AI, I have the Hard-AI execute the first few moves, then the function ‘flips a coin’ and either transitions into easy mode or remains as the Hard-AI?

This way, the Medium-AI doesn’t lose early and can win or draw due to the Hard-AI or ‘luck’ from the Easy-AI. Alternatively, the Medium-AI can lose to you if the coin flips to easy mode.

```clojure
(defn medium-difficulty [next-move grid]
 (let [move-count (count (remove number? grid))
       hard-ai? (or (< move-count 5) (zero? (rand-int 2)))]
   (if hard-ai?
     (next-move grid)
     (ec/place-easy-move grid))))
     ```
Here, `grid` represents the board, `next-move` represents the specific Hard-AI to use, and `place-easy-move` does exactly what it sounds like. The grid might look something like [“X” “O” “X” 4 5 6 7 8 9].

I was able to count the moves based on how many numbers were available in the `grid`. If there had been 5 moves, then the proverbial coin is flipped. This random generator provides either a 1 or a 0. If it’s a zero, then it is the Hard-AI; if not, it is the Easy-AI.
Then, I incorporated it into my function that runs the logic for all of the modes.


```clojure
(defn ai [difficulty]
 (loop [grid [1 2 3 4 5 6 7 8 9]
        x-turn? (ui/start-first?)]
   (let [move (difficulty grid)
         new-grid (grid-after-comp x-turn? grid move)]
     (ui/print-board new-grid)
     (if (not (ui/endgame-result new-grid))
       (recur new-grid (not x-turn?))
       (ui/print-end-computer new-grid)))))


(defn medium-ai []
 (ai #(medium-difficulty mm/next-move %)))
```
With the logic and refactoring, it took me a while to piece everything together. But all in all, it was a rewarding experience.

Best,

Merl
