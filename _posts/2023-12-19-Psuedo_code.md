---
title:  "Psuedo Code"
mathjax: true
layout: post
categories: media
---

Maybe I should title this pseudo-psuedo-code, it's my blog though and I do what I want.

 I’m surprised I haven’t written about this yet but I just wanted to mention how helpful pseudo code has been for me.

Previously I was working on a few euler problems. They can definitely be challenging especially if you are learning a new language. Since the syntax was new, and even the problems took some logic to do I decided to do something drastic.

I bought a 3 foot by 2 foot white board. I guess I wanted to be that guy that had the cool equations or what have you on the board behind me. And now I am!

I was initially unsure about  my purchase, but then I sat down. I wrote a few concepts that were breaking down the problem, and then I wrote pseudo code to write an algorithm.

It wasn’t perfect but it was a start. The refactoring came later but the fact there was a path to a solution was great.

Point is I did something similar to write Tic Tac Toe in Clojure and let me present you with this example. It actually helped guide me in the necessary functions I needed to create in order to finish this project.

```clojure
;(defn game-loop
;loop [grid [1-9]
;       X?   true]
;
;ask for player to go
;update board
;print board
;see if game over
;change xo
;recur new grid


;)
```

This eventually led to creating everything below `game-over`.

Here is the evental loop in clojure.

```clojure
(defn -main []
 (loop [grid [1 2 3 4 5 6 7 8 9]
        X? true]
   (ui/print-board grid)
   (let [new-grid (ui/update-board grid X?)]
     (if (ui/endgame-result new-grid)
       (ui/print-end new-grid)
       (recur new-grid (not X?))))))

```

Not bad eh?

Merl
