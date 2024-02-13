---
title:  "Save Everything"
mathjax: true
layout: post
categories: media
---

Finishing this was incredibly satisfying.

Have you ever heard of a false summit? In case you haven’t let me paint a picture. You are on a journey in nature. You want to reach the top of this mountain to get a great view. You see the top, you think when I get there I will sit under a tree and enjoy the view. Then you get to that spot and you realize that is not the top. There is a path that goes higher to the real top of the mountain. Rinse and repeat.

I believe I am past my false summits and have finally been able to save all of my games, as well as retrieve any uncompleted games in history if the command line argument matches those games. I kept thinking I was close to finishing this story but just like Al Pacino said, “just when I thought I was out, they pulled me back in”.


```clojure
(defn continue-previous-game [game input-id]
(ui/print-previous-moves-game game input-id)
 [game input-id])

(defn possible-to-continue? [game] (and game (not (board/game-over? game))))


(defn continue-last-game? [last-game] (and (possible-to-continue? last-game) (ui/continue-last-game?)))


(defn game-by-id [id]
 (->> id
      data/game-history-by-id
      last))


(defn continue-game? [input-id]
 (let [requested-game (game-by-id input-id)
       last-game (data/get-last-game)
       new-game-id (data/get-next-game-id)
       last-id (data/last-game-id)]
   (cond
     (possible-to-continue? requested-game)
     (continue-previous-game requested-game input-id)


     (continue-last-game? last-game)
     (continue-previous-game last-game last-id)


     :else
     (start-new-game new-game-id))))
 ```

Sure, here’s a description of what these functions do:

`continue-previous-game`: Prints the previous moves of a game and resumes the game. It returns the game and input ID.

`possible-to-continue?`: Checks if a game is ongoing (i.e., not over) and returns a boolean value.

`continue-last-game?`: Checks if it’s possible to continue the last game and returns a boolean value.

`game-by-id`: Retrieves the last game from the game history using the provided ID.

`continue-game?`: Decides whether to continue a requested game, the last game, or start a new game based on the game status. It uses the input ID to fetch the requested game. If the requested game can be continued, it resumes the game; if not, it checks if the last game can be continued. If neither can be continued, it starts a new game.

The toughest part was isolating the games based on their ID, Once I was able to do that the rest fell into place, kind of. I had written previous functions to retrieve the last ID and the last game. As well as return the last board of the last game.

When I wrote my new function to retrieve all of the data, I was confused as to the collections of maps I retrieved compared to the individual one I received for my `last-game`. This made combining the 2 quite challenging.

All in all, I will sleep well tonight.

Best,

Merl
