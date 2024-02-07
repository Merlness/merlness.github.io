---
title:  "Saving Games"
mathjax: true
layout: post
categories: media
---

I want to share with you something I’ve been working on recently. I’ve been learning about how to save the state of a game for my Tic Tac Toe game in Clojure, and I’ve found it to be quite interesting.

Let’s start with the basics. I just learned that we can define a hashmap to hold our current  game state. Here’s an example:

```clojure
(def save-data {:game-id nil :player-1? nil :player-1 nil :player-2 nil :board nil})
```

In this hashmap, we have keys for the game ID, whether it’s player 1’s turn, the names of player 1 and player 2, and the current state of the game board.

Now, let’s say we want to save using that hashmap. I can do this:

```clojure
(defn save-round [game-id player-1? player-1 player-2 grid]
  (let [log-edn (slurp "log.edn")
        log (if (empty? log-edn) [] (edn/read-string log-edn))
        game-state (assoc save-data :game-id game-id :player-1? player-1?  :player-1 player-1 :player-2 player-2 :board grid)
        new-log (conj log game-state)
        new-log-edn (pr-str new-log)
        ]
    (spit "log.edn" new-log-edn)))
```

This function takes in the game ID, whether it’s player 1’s turn, the names of player 1 and player 2, and the current state of the game board. It then reads the current log from a file, adds the new game state to the log, and writes the updated log back to the file.

This is a simple but powerful way to keep track of the state of a game. It allows us to save the state of a game at any point, and then load it back up later if we need to.

I just need to get to the point where I can recall the saved game.

That might be a post for the future. Until then, hope you’re doing alright.

Best,

Merl
