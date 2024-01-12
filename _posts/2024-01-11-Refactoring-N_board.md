---
title:  "Refactoring for NxN sized board"
mathjax: true
layout: post
categories: media
---

I know the title is a little wordy but so is this post so buckle up!


I am in the process of creating Tic Tac Toe 4x4! This is exciting and necessary because it simulates the future, where I will have to build upon the code I have written before. The better my previous code, the easier this should be.


### Bad Code

This brings me to refactoring. Previously, I had hard-coded the winning combinations.


```clojure

(def winning-combinations
[
;rows
[0 1 2]
[3 4 5]
[6 7 8]
; columns
[0 3 6]
[1 4 7]
[2 5 8]
;diagonals
[0 4 8]
[2 4 6]
]

(defn winning-combo? [board combo letter]
  (every? #(= (nth board %) letter) combo))

```

This code would look through my winning combinations, which accounted for rows, columns, and diagonals. Think of it like this if the board is:

X O O
4 X O
7 8 X

Of course, if you saw this, you would question what O is doing, but let’s get to the important part. My board in the computer looks like [“X” “O” “O” 4 “X” “O” 7 8 “X”]. X wins obviously, but the way in which X won is by a diagonal, and the combination of the board’s indices is `[0 4 8]`.

The `winnning-combo` takes the board, checks if the indices provided by the `winning combinations` and if X or O are in one of those combinations then it returns true. There is a winning combination!

### 4X4

This is where it gets tricky. I did hard code the 4x4 combinations initially, however, that is not sustainable. If in the future I had to build a 1000x1000 board, there is no way I am hard coding the combinations.
There had to be another way. I had to separate rows, columns, and diagonals. I will spare you some details since this post is getting slightly long.

## Rows

Using the previous `winning-combo` function I tweaked it slightly to not include the board, just the combinations passed through.  Solving for Rows was straightforward because we can partition the grid based on the size of the rows.  `size` gives the side of the square. So we just cut up the board by the number of elements per row and violà.
.

```clojure
(defn size [board]
  (int (Math/sqrt (count board))))

(defn rows [board]
  (partition (size board) board))

(defn winning-lines? [letter lines]
  (some #(every? #{letter} %) lines))

(defn winner? [board letter]
  (or (winning-lines? letter (rows board))
    (winning-lines? letter (diagonals grid))
    (winning-lines? letter (columns grid))))

```

## Columns

Now that I write this I think I can do something similar to what I did with the diagonals but this is what I did initially.

```clojure
(defn column [index rows]
  (map #(nth % index) rows))

(defn rows->columns [rows]
  (let [indices (range (count rows))]
    (map #(column % rows) indices)))

(defn columns [grid]
  (rows->columns (rows grid)))

```

## Diagonals

This is what this post was all about. Thanks for making it this far. I was initially scared with how I would solve this but I noticed a pattern in both the 3x3 [0 4 8] [2 4 6], and the 4x4 [0 5 10 15] [3 6 9 12].

Let’s call “\” `back-diagonal` which for 3x3 is [0 4 8], and for 4x4 is [0 5 10 15]. I noticed that the size respectively is 3 and 4. Which means they both start at 0 and add (size +) for size number of times. This changed to multiplying by the range of size.

Here is my example to find the 4x4:
0 x (4 +1) = 0
1 x (4 +1) = 5
2 x (4 +1) = 10
3 x (4 +1) = 15
[0 5 10 15]
You can do the same thing for 3x3.

Next I noticed [2 4 6] for 3x3, and [3 6 9 12] for 4x4. This is similar, except for we take away 1 from the size of the row, and we multiply that by the range of the size increased by 1.

1 x (4-1) = 3
2 x (4-1) = 6
3 x (4-1) = 9
4 x (4-1) = 12

This is the code for that.



```clojure
(defn back-diagonal [grid]
  (let [size (size grid)
        indices (range size)]
    (vec (map #(nth grid (* % (inc size))) indices))))

(defn front-diagonal [grid]
  (let [size (size grid)
        indices (map inc (range size))]
    (vec (map #(nth grid (* % (- size 1))) indices))))

(defn diagonals [grid]
  (conj [(back-diagonal grid)]
        (front-diagonal grid)))

```

Thanks for making it this far.

Merl
