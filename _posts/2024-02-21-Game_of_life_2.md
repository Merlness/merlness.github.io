---
title:  "Game of Life 2"
mathjax: true
layout: post
categories: media
---

They say the sequels are better than the originals right?

I wanted to talk about the middle of the Game of Life!

Initially I wrote the 4 laws and their functions. Now I will write about the other half of the coin and how I can find information regarding the laws.
There are two important pieces of information that are necessary to create this game.

1. The state of the individual cell, whether it is alive or dead
2. The number of neighbors that cell has.

## The State
This will not be a rant on taxes, this will be how I got the state of the cell.
In this code snippet I did something different and provided the grid and tests with their respective function below it.


```clojure


(def default-grid [[0 0 0]
                  [0 1 0]
                  [0 0 0]])
;                          row of grid
;                          | column of grid
;                          | |
(it "gets state 1"        ;V V
 (should= 1 (sut/get-state 1 1 default-grid)))
(it "gets state 0"
 (should= 0 (sut/get-state 0 0 default-grid)))



(defn get-state [row column grid]
 (get-in grid [row column] 0))

```
As you can see I wrote the coordinates for the respective cell before the grid to find out it’s state. In the same grid [1 1] gave us the number 1 in the middle of the default grid. And [0 0] gave us the very first number in the default grid.

This was very simple, and the 0 after `[row column]` is for protection in case the there are any edge cases.

## Neighbors

The challenging part was here like it always is, the neighbors. Like the previous function row and column were previous to the grid. While the should provides the total number of neighbors that coordinate has.

```clojure
(it "gets 2 neighbors"
 (should= 2 (sut/get-neighbors 0 0 [[0 1 0]
                                    [0 1 0]
                                    [0 0 0]])))
(it "gets 3 neighbors"
 (should= 3 (sut/get-neighbors 0 0 [[0 1 0]
                                    [1 1 0]
                                    [0 0 0]])))


(defn get-neighbors [row column grid]
 (let [neighbors (for [x [-1 0 1]
                       y [-1 0 1]
                       :when (not (and (zero? y) (zero? x)))]
                   (get-state (+ row x) (+ column y) grid))]
   (reduce + neighbors)))


```
Initially for `get-neighbors` I used `get-state` over and over again. I found I could use the list comprehension `for`.

That refactoring took some time, but it was well worth it. I had to make sure the function did not include the cell I was finding the neighbors for, hence the not zero `:when` line.

It is nice and neat after the tests, and refactoring is done.

Thanks for reading this one. For my next piece I will connect these states with my laws functions.

Best,

Merl
