---
title:  "GUI Boards"
mathjax: true
layout: post
categories: media
---


Learning something new is always challenging, GUIs are no exception.

Going through the Quill library I was able to find functions that helped me change my GUI when I clicked on something. `mouse-pressed` if you are interested, without the question mark.

What is interesting is I was able to create rectangles and have them change color by clicking on them. But I wanted to move on to bringing in my game-map which contained all of the important information needed for my Tic Tac Toe game. Now I needed to bring in such a map and have the GUI transform that into a visual experience.

I am proud that I have done such a thing.

```clojure
(defn draw-state [state]                                   
 (q/background 245)
 (let [size (size (:game state))
       w (/ (q/width) size)
       h (/ (q/height) size)
       game (:game state)
       board (convert-moves-to-board game)]
   (doseq [y (range size)
           x (range size)]
     (let [index (+ x (* y size))
           token (get board index)]
       (q/fill (case token
                 "X" (X x y w h)
                 "O" (O x y w h)
                 [255 255 255]))
       (q/rect (* x w) (* y h) w h)
       (q/fill 0)))))
```
It is important to be resourceful because I had written a previous function that can get the size of the board, the moves present and transform that into a 1-D vector which contains the Xs and Os present, and the available moves. That function is called `convert-moves-to-board`.

I also created a function X and O which draw their respective letters.
What is great is based on the height, width and index, I can create the letter in its place. Which looks lovely.

The trouble is now, I am not changing boxes to colors, i am making boards. This ruined my clicking function. Of which I have been banging my head against the wall in order to find a solution.

As of right now that has not helped, but I hope soon to write another blog in which I solved this dilemma.

Until then...

Best,

Merl
