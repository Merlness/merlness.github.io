---
title:  "Making Buttons"
mathjax: true
layout: post
categories: media
---

In the world of Quil is is important to make boxes/rectangles/buttons.

Before I was able to make those boxes, however I made them one after the other. This meant I was able to use a `doseq` to make one after another. Also the size of the box was the dimensions of the GUI divided by 3 or 4.

Now I have to make boxes that are in the middle of my GUI with text inside of it.

This is not the toughest of tasks but there was a small wrinkle when trying to implement this. When you choose the coordinates of `(q/rect x y h w)` this chooses the top left corner of where to place the box.

If you want the box in the center of your GUI
using '(q/rect (/ x 2) (/ y 2) w h)' this would not do this. This would place the top left corner of the box in the center and the rest would be hangin down in the 4th quadrant of this Cartesian plane.

How can you make the box with the coordinates at the center of the box along with the text in the middle also?

Here it is.

```clojure
(defn draw-button [text x y w h]
  (q/fill 237)
  (q/rect (- x (/ w 2)) y w h)
  (q/fill 0)
  (q/text-align :center :center)
  (q/text text x (+ y (/ h 2))))

(defn draw-state [state]
  (let [w (q/width)
       h (q/height)]
   (q/background 255)
   (q/text-size 38)
   (q/text-align :center :center)
   (q/text (str "Welcome to Merl's Tic Tac Toe game!\n Please choose your board size:") (/ w 2) (/ h 5))
   (draw-button "3x3" (/ w 2) (* h 0.33) (/ w 10) (/ h 10))
   (draw-button "4x4" (/ w 2) (* h 0.5) (/ w 10) (/ h 10))))

```

Ok in this situation I was able to fix the X coordinate so it will be at the halfway point in the GUI, the y is the default value for quil.

This was my solution to display the rectangle in the center of the GUI according to X `  (q/rect (- x (/ w 2)) y w h)`
The only part that changed was the X. I took half the width of the box and subtracted the starting X coordinate `x- (w/2)', so I can focus on my center point when calling `draw-button`.

When it comes to my solution to have the text be in the middle of the box.
I used:
`(q/text-align :center :center)
(q/text text x (+ y (/ h 2)))`
As was mentioned before, the y was unchanged so it would be at the top of the box is unchanged. So I had to add half the height of the box so the text will go to the center of the box. Since X was also located at the center of the box. Now I can call the alighment to the coordinates in the center and voila.

Everything is in it's rightful place.

Now I can choose exactly where I want my boxes, and also what I want them to say with these 2 simple functions.

This will be very helpful when I make my other pages so a player can choose, their size of the game, and which types of players they want.

Things are slowly coming together.

Best,

Merl
