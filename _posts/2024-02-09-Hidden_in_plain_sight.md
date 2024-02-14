---
title:  "Hidden in Plain Sight"
mathjax: true
layout: post
categories: media
---



Have you ever been in the situation where you are looking for your keys/glasses/phone for some time. Only to find it in your hand? 

I will admit, this is me sometimes. Now this is the first time I have felt this way in terms of coding.

I had previously had this form for printing the previous moves:

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

Think of this as the glasses in my hand.

The problem I was facing is I had provided ways to be able to save and continue games but only for the last game. I had to find a way to be able to continue any previous game that had not finished given the correct key was placed in the argument.

So Now I had to find a way to get any game from its id and to check if the last board was completed.

I was able to find it after I began refactoring. Which goes to show how important it is to refactor after one has completed something because you never know what you may find.

I refactored the previous function to this:

```clojure
(defn print-previous-moves [input-id]
 (let [game-data (data/game-history-by-id input-id)]
   (run! (fn [game]
           (println "Player" (if (:player-1? game) "2" "1") "made a move:")
           (print-board (:board game)))
         game-data)))

(defn game-history-by-id [game-id]
   (filter #(= (:game-id %) game-id) (all-games)))
```

Now I have the ability to find all of the boards for the `game-id` provided.

I need to find a way to see if the last game ended in a tie, or a win for either player.

```clojure
(defn game-by-id [id]
 (->> id
      data/game-history-by-id
      last))

(defn possible-to-continue? [game] (and game (not (board/game-over? game))))
```
The `game-by-id` returns the last board and then is passed into `possible-to-continue?`.
`possible-to-continue?’ checks whether the game exists and if the game was not over.
Then it returns the boolean `true` if both criteria are met.

This is not the end but it is a great path forward.

The lesson is to refactor! Often when I do I can delete unnecessary things. In this case, I found something incredibly valuable.

Best,

Merl
