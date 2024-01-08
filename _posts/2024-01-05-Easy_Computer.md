---
title:  "Easy Computer"
mathjax: true
layout: post
categories: media
---


If I were to go back a year and tell myself that I would be focusing heavily on the ins and outs of Tic Tac Toe, I would have said “What a specific thing to do,and for how long? Also did I lose those 10 pounds I was hoping for?”

Sorry previous Merl, fitness is not a linear journey, neither is Tic Tac Toe.

Linear in the sense where previously I have learned the Minimax Algorithm to create an unbeatable TTT computer. Now I must make a very beatable( “easy”)  TTT.

Thankfully I was asked this question months ago and my answer is still the same. Use a random number generator to place the moves for the available positions.

Here was my idea for the computer:

—Get the open available spaces

—Pick a random space

—Place the random move

That turned into this:

```clojure

(defn find-actions [board]
 (filter number? board))


(defn find-rand-int [coll]
 (rand-nth coll))


(defn place-easy-move [board]
 (->> board
      (find-actions)
      (find-rand-int)))
```

I am very fortunate that you can filter numbers easily in Clojure. I am especially fortunate that in the syntax there is a built in random number generator. If it weren’t for that I’m not sure what I would have done. Probably used "Eeny, meeny, miny, moe"

I need to create a medium computer that is tough but possible to beat sometimes. I was thinking of combining minimax and this randomness for the easy computer.

It will be interesting implementing such a thing. Until then aloha.

I’m not in Hawaii, I just like how it sounds.

Aloha,

Merl
