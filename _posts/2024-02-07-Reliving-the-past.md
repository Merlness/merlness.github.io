---
title:  "Reliving the Past"
mathjax: true
layout: post
categories: media
---


I have never been to war but I have faced battles. Battles between myself and the computer. These battles consist of none other than Tic Tac Toe.

Dramatic but I wouldn’t have it any other way.

I have been working on many things, primarily I have been working on saving my game. Today I have been working on printing the previous moves made by the players.

So if you were in the middle of a Tic Tac Toe game, and something urgent came up, there was an opportunity to resume your previous game. And if you don’t remember what the logic you were thinking at the time was, I wanted to be able to provide the player that made the move as well as what moves were made and in what order.

This is a daunting task. I have all of that information saved but how to retrieve it?

Here is how:

```clojure
(defn print-previous-moves [] ;test
 (let [data (data/fetch-all-games)
       max-game-id (data/max-game-id data)
       game-data (filter #(= (:game-id %) max-game-id) data)]
   (run! (fn [game]
           (println "Player" (if (:player-1? game) "2" "1") "made a move:")
           (print-board (:board game)))
         game-data)))
```
The toughest part was being able to do print which player made a move and what the state of the board was per move. Initially I used `map` but the sequence did not work as I intended.


Then I learned of `run!`. In case you don’t know `run!` takes a function and a collection as arguments and applies the function to each item in the collection, discarding the return values. The purpose of `run!` is to execute the function for its side effects only, and not to produce a new collection.


This allowed me to print both situations at the same time without changing my vital information.

Well, I hope one day `run!` can be helpful for you too.

Best,

Merl
