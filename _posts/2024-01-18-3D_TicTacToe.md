---
title:  "3D Tic Tac Toe"
mathjax: true
layout: post
categories: media
---


I have been working on creating a 3 dimensional tic tac toe.

First I wanted to be able to print/present the board. As of right now I don’t have the skills to be able to create a 3-d animation, so this will still be printed 2-d in the terminal. That means I need to print 3 separate boards.

Initially I wanted to print the boards separate horizontally like so:
``` clojure
#_( 1 | 2 | 3     10 | 11 | 12    19 | 20 | 21
   4 | 5 | 6     13 | 14 | 15    22 | 23 | 24
   7 | 8 | 9     16 | 17 | 18    25 | 26 | 27)
```
But after trying and thinking, I decided to make it easier on myself and do it vertically like so.

``` clojure
#_(
 1 | 2 | 3   
 4 | 5 | 6
 7 | 8 | 9


10 | 11 | 12    
13 | 14 | 15    
16 | 17 | 18    


19 | 20 | 21
22 | 23 | 24
25 | 26 | 27
)
```
I am now not sure if there is a difference in style but let me show you why it was easier to do it this way.

```clojure
(defn separate [row]
 (str/join " | " row))


(defn display [grid]
 (->> grid
      rows
      (map separate)
      (str/join "\n")))
```
This was the previous function I had to present the original 2-d board, either for the 3x3 or 4x4 board. `rows` was a way to separate the rows based on the square root of the total number of elements.
I gained inspiration from that and was able to conjure my own idea to create a new grid in a similar manner.

So i did this:

```clojure

(defn separate-3-3 [grid]
 (partition 9 grid))


(defn display [grid]
 (->> grid
      rows
      (map separate)
      (str/join "\n")))


(defn display-3-3 [grid]
 (->> grid
      separate-3-3
      (map display)
      (str/join "\n\n")))
```
I decided to take the display format, use it again. You can see it in display 3-3, it is the same format instead of rows and separate, I placed separate-3-3 which would partition it into its separate faces. And since display was already a function I was able to map through it once again.

I think this was a nice and clever solution to this problem.

I am now stuck on the winning conditions but that maybe for another time.

Best,

Merl
