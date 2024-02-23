---
title:  "Game of Life"
mathjax: true
layout: post
categories: media
---

Since I do updates every day this will only go over the concept of Conway's Game of Life as well as the first bit of code I wrote for it.

## Game of Life

To those of us who do not know, I wouldn’t call this a game. I would call this a simulation based on an initial state. It reminds me of a chaotic system like a double pendulum, where changing a small condition initially can have drastic effects later on. What most people call the butterfly effect.

Here are the 4 rules this game is based on:

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Coding

Here are my first tests to  check my concepts on these rules:

```clojure

(it "checks rule 1"
         ;| whether the cell lives or dies
         ;|                 | number of neighbors
         ;V                 V V  1 for live cell, 0 for dead cell
 (should= 0 (sut/next-state 0 1))
 (should= 0 (sut/next-state 1 1)))


(it "checks rule 2"
 (should= 1 (sut/next-state 2 1))
 (should= 1 (sut/next-state 3 1)))


(it "checks rule 3"
 (should= 0 (sut/next-state 4 1))
 (should= 0 (sut/next-state 100 1)))


(it "checks rule 4"
 (should= 0 (sut/next-state 0 0))
 (should= 0 (sut/next-state 1 0))
 (should= 0 (sut/next-state 2 0))
 (should= 1 (sut/next-state 3 0)))

```

Of course I used TDD and did these incrementally. However I wanted to show what I came up with.


```clojure
(defn alive? [neighbors state]
 (or
   (= 3 neighbors)
   (and (= 1 state)
        (= 2 neighbors))))


(defn next-state [neighbors state]
 (if (alive? neighbors state)
   1
   0))

```
I thought this was very interesting because it seems like you could potentially limit it to 3 rules. I guess it really depends on how you define rules but I still think 3 is a reasonable number.

1. Any cell with three  live neighbors lives, because 3 is amazing
2. Any live cell with two neighbors lives, because alive plus 2 equals 3
3. Everything else is dead, probably because of 3

After writing these I can see why there are 4 rules. The descriptions as to why they are so might be pretty important.

Anywho, thanks for reading. Hope you have a good one.

Best,

Merl
