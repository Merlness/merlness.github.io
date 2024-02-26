---
title:  "Game of Life 3"
mathjax: true
layout: post
categories: media
---


As you might remember I have been working on creating Conway’s Game of Life.

I was able to predict the next state and get the neighboring states of a particular cell I am looking at, I changed next-generation to `survived`.

Here it is
```clojure


(defn survived? [state row column]
 (let [neighbors (get-neighbors state row column)
       living-cell? (= 1 (get-in state [row column]))]
   (or
     (= 3 neighbors)
     (and
       living-cell?
       (= 2 neighbors)))))
```

These are the rules of the game so let me tell you how I implemented them.

Some one very wise told me recently “the truth is in the code”. So Let me present to you the code first.


```clojure


(defn evolve-cell [state row column]
 (if (survived? state row column) 1 0))


(defn evolve [state]
 (for [row (range (count state))]
   (for [column (range (count state))]
     (evolve-cell state row column))))
```
Let’s look at evolved cell, I see if it did survive then place a 1, and if it did not place a 0. Easy enough.

Now let’s look at `evolve`. I had been struggling with this function for a long time. I kep trying to complete this using `doseq` however I have learned that the function is particularly useful for side-effects and not this situation.

I adapted and went back to list comprehensions. Others have asked why I did not use `(range row)` for column in `evolve`. The reason why is because Instead of going through every cell in my matrix, it is a cone because while row is 0, so is column, which row is 1, column is 0 and 1…
This does not get every cell.

All in all I am pleased to have been able to complete this and represent it visually.

Probably my proudest Kata yet!

Best,

Merl  
