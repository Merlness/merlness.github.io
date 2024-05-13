---
title:  "Connecting AI"
mathjax: true
layout: post
categories: media
---

One of the great things about trying to make Tic Tac Toe again is that I have done this many times, and if I am stuck with a problem I can look to what I did before to gain inspiration.

In this case I will look at what I did for my GUI.


```clojure
(defmethod mouse-clicked :play [state mouse]
   (let [{:keys [moves player-1 player-2]} (:game state)
         [player opponent] (if (board/player1? moves)
                             [player-1 player-2]
                             [player-2 player-1])
         size (size (:game state))
         index (get-index size mouse)
         game (:game state)
         board (game/convert-moves-to-board game)
         move (if (= :ai (:kind player))
                (gm/get-move player opponent board)
                (inc index))
         token (get board index)
         new-moves (conj (:moves game) move)]
     (cond
       (board/game-over? board game)
       (assoc state :screen :again)


       (= :ai (:kind player))
       (do
         (data/save! (assoc game :moves new-moves))
         (assoc-in state [:game :moves] new-moves))


       (available-move? token size move)
       (do
         (data/save! (assoc game :moves new-moves))
         (assoc-in state [:game :moves] new-moves))


       :else state)))
```

See currently I have implemented 	a human vs human version on my server, but I need to add in the AI.

I was curious as to how I would do this but I have done it already, look above.

So I went to check out what I have written already for this story.

```clojure
(defn update-moves [params-map]
 (let [move (get params-map "move" "-1");
       moves-str (get params-map "moves" "")
       moves (parse-moves moves-str)]
   (if (wrong-move move)
     moves
     (conj moves (Integer/parseInt move)))))


(defn update-game [body]
 (let [params-map (parse-params body)
       size (get-value params-map "size" :3x3)
       player-1 (get-value params-map "player_1" :human)
       player-2 (get-value params-map "player_2" :human)
       moves (update-moves params-map)
       game-id (+ 1 1)
       game {:game-id  game-id
             :player-1 {:kind player-1 :token "X"}
             :player-2 {:kind player-2 :token "O"}
             :size     size :moves moves}]
   game))

```
Right now since I have focused on human vs human my setup has been focused on this.

So my update moves is based on the button that is clocked to pass in that new information. As in, if button 3 is clicked and it has no X or O in there then add it to my moves and Viola! It is good.

Now I think I need to add in the game map into the `update-moves` function. This would allow me to check if the player is AI or not. Because if it is then I can call down `get-move` from my original Tic Tac Toe game. And that would do all of the work. I probably have to make a new temporary game map also to be able to do this.


I see the path forward. Hopefully once I am able to add that in and use my previous function, it will be smooth sailing after …

Best,

Merl
