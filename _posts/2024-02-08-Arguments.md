---
title:  "Arguments"
mathjax: true
layout: post
categories: media
---

Growing up as a Latino with older sisters I am quite accustomed to arguments. The ones I will talk about are new to me however.

As you know I have been working on saving and retrieving my previous Tic Tac Toe games.

Today I have been working on resuming the play from before. Now previously I have provided a message asking if the user wanted to resume the previous play, but I wanted to provide an arguments into main that would allow you to just resume the previous game without the terminal prompting you.

This was new, I have never done this in Clojure before. Thankfully it was not too tough.

```clojure
(defn -main [& args]
 (let [game-id (first args)
       last-game (data/get-last-game)
       [game id] (continue-last-game? last-game game-id)]
   (ui/print-id-and-empty-board id (:board game))
   (loop [game game]
     (let [game (gm/play-round game)]
       (if (board/game-over? game)
         (gm/complete-game game)
         (recur game))))))
```
Apparently I can just add `& argos` and it works! I did have to change my `continue-last-game` function in order to return both the game id and the game map containing all of the data.

Here is what I turned that into

```clojure
(defn continue-last-game [last-game]
 (ui/print-previous-moves)
 (ui/print-resume-game last-game)
 last-game)


(defn continue-last-game? [ last-game input-id]
 (let [possible? (and last-game (not (board/game-over? last-game)))
       last-id (data/last-game-id)
       equal-ids (= input-id (str last-id))
       continue? (or equal-ids (ui/continue-last-game?))
       new-game-id (data/get-next-game-id)]
   (if (and possible? continue?)
     [(continue-last-game last-game) last-id]
     [(start-new-game)  new-game-id]
     )))
```
Now they are similarly named but I want to begin with the `?`.
I wanted to begin with, is it `possible?` to even continue. Meaning is there even a last game, and if so is it over? I get the `last-ID` if it exists. I check to see if my argos is equal to the last ID, with `equal-ids`.

Then this is where the power of Clojure pays off, I use an `or` statement to see if the ID’s are equal, if they are then thats all we need, if they are not then prompt the user if they want to resume with ` ui/continue-last-game?`

Now comes the `if` statement, if it’s possible to continue and if the user wants to continue then we continue the last game with the previous ID. If not then we start  a new game with a new ID.

As you can see, `continue-last-game` prints out the previous moves and the statements to go along with it.

Another day another new thing learned.

Until tomorrow,

Merl
