---
title:  "Connecting AI Move"
mathjax: true
layout: post
categories: media
---

I was close to what I wanted to complete but there were a few obstacles.

These obstacles were all made by me of course and I had to fix them.

First was how I made player 1 and player 2 in my map.

```clojure
{:game-id  game-id
             :player-1 {:kind player-1 :token "X"}
             :player-2 {:kind player-2 :token "O"}
             :size     size :moves []}

```

This only worked because `:kind :human` worked, however for my computer I need kind to be AI and also to have a difficulty rating. So I had to change this first part to be able to connect to anything useful.

```clojure
initial-game {:game-id  game-id
             :player-1 (assoc player-1-info :token "X")
             :player-2 (assoc player-2-info :token "O")
             :size     size :moves []}

```
I also had to change how I sent information through the Request, but that is similar and related to this change.

What I want to focus on is how i get move.

```clojure
;Before
move (get params-map "move" "-1");


;After
move (get-move params-map game moves)

```
Now I had to create a get-move function and add my logic there:

```clojure
(defn get-move [params-map game moves]
 (let [current-player (if (even? (count moves)) (:player-1 game) (:player-2 game))
       opponent (if (= current-player (:player-1 game)) (:player-2 game) (:player-1 game))
       game (assoc game :moves moves)
       board (game/convert-moves-to-board game)]
   (if (= :ai (:kind current-player))
     (gm/get-move current-player opponent board)
     (get params-map "move" "-1"))))

```
Right now it’s a little bit of a mess but I need to find who’s turn it is and the opponent for my original get move function.

But as you can see the default or human move is the same, and now the AI move has all of the necessary information it needs to provide its response.

A little bit of refactoring left. But this is working quite well.

Best,

Merl
