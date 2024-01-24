---
title:  "Flexible Conditionals"
mathjax: true
layout: post
categories: media
---

One of my favorite abilities of Clojure is its flexibility to place conditionals wherever you want, as well as `let`.

I have created the logic for the 3 dimensional Tic Tac Toe but today I was in the process of integrating the logic to the UI and the board.

Initially there were a few aspects that were incompatible with my previous functions so I began to write new functions that behave similarly. It was until after I wrote multiple functions that I noticed integration was not that complicated.

It begins with this function:

```clojure
(defn two-dimensional? [board]
 (> 17 (count board)))

```
I wrote this to tell if it would be my 2D 3x3/ 4x4, or 3D 3x3x3. It is slightly hard coded and could change if I need to add new modes but at least the hard code is limited to this function.

 The next part was adding arguments to previous functions that relied on the board being 2D, this wasn’t too bad it was mostly tough tracking all of them down.

The important part that I wanted to highlight is this:

```clojure
(let [x-o (ui/get-user-x-o)
     display (if (board/two-dimensional? board)
               board/display
               board/display-3-3)]


```
This is of course part of a larger function but this ability  right here is *chef’s kiss*.
This section of the code is inside my 2 player function, in both the 3x3 and 4x4 mode.  Now it works for the 3x3x3 mode as well. And it is because of that ability.

```clojure
(defn two-player [board]
 (let [x-o (ui/get-user-x-o)
       display (if (board/two-dimensional? board)
                 board/display
                 board/display-3-3)]
   (loop [grid board
          X? x-o]
     (ui/print-board grid display)
     (let [new-grid (ui/update-board grid X?)]
       (if (ui/endgame-result new-grid)
         (ui/print-end new-grid display)
         (recur new-grid (not X?)))))))

```

I can now use `display` as my new arguments for the previous functions that relied on a NxN board.

Working previously in Python, I am not sure if I would have had the ability to use this 1 function for all of those modes. I may have had to write 2 or 3 separate functions to do the same thing.

Thank you Clojure!

Merl
