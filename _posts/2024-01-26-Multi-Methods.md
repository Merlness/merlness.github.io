---
title:  "Multi-Methods"
mathjax: true
layout: post
categories: media
---


For several weeks now I have heard the magic of multi-methods.

I have been focusing so much on completing my work that I have not allowed myself time to learn more and refactor. I have built my code on spaghetti!

Today I will take the small step to learn multi-methods to begin to untangle my code.

```clojure
(defn board-type [board] (if (two-dimensional? board) :2d :3d))


(defmulti display board-type)


(defmethod display :2d [board]
 (->> board
      rows
      (map separate)
      (str/join "\n")))


(defmethod display :3d [board]
 (->> board
      (partition 9)
      (map display)
      (str/join "\n\n")))

```
This was my first step. Nice and simple, I have a 3x3 board, a 4x4 board, and now a 3x3x3 board.

I needed to change the display depending on the 1-D board that I passed through. Initially I had a few functions that did not look this nice. I am very pleased.

One last multi-method that I tried today.

```clojure
(defmulti winner? (fn [board _letter] (board-type board)))


(defmethod winner? :2d [grid letter]
 (or (winning-lines? letter (rows grid))
     (winning-lines? letter (diagonals grid))
     (winning-lines? letter (columns grid))))


(defmethod winner? :3d [grid letter]
 (let [faces (partition 9 grid)]
   (or
     (some #(winner? % letter) faces)
     (some #(winning-combo? grid % letter) edge-cases-3d)
     (winning-lines? letter (same-space-all-faces grid))
     (winning-lines? letter (back-diagonal-through grid))
     (winning-lines? letter (back-diagonal-across grid))
     (winning-lines? letter (front-diagonal-across grid))
     (winning-lines? letter (front-diagonal-through grid)))))


```

It is a multi-dimensional kind of day.

I have been focusing on providing my board and providing the winning conditions based on if the board is 2-D or 3-D.

These were great beginner ways to get started on multi-methods!

Best,

Merl
