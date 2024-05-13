---
title:  "Making A Better Map"
mathjax: true
layout: post
categories: media
---
One interesting thing I have noticed working on Java for the past maybe 2 months, is that coming back to Clojure has been interesting.

It was a little rough getting my handle on working quickly.

That was the mildly interesting part , what I wanted to focus on was updating my map.

```clojure
{:game-id  1
           :player-1 {:kind :human :token "X"}
           :player-2 {:kind :human :token "O"}
           :size     :3x3 :moves [1 2 3 4 5 6 7]}


{:game-id  1
           :player-1 {:kind :ai :difficulty :easy :token "X"}
           :player-2 {:kind :ai :difficulty :hard :token "O"}
           :size     :3x3 :moves [1 2 3 4 5 6 7]}

```
The first map is what I can do since I just focused on humans. The second part is what I need to change my map to If I want to connect.


I will focus on  making my correct map in this new Web Tic Tac Toe.
Part of my problem is I have been checking the request and updating my map based on the information. I need to create at least another function to do this well for getting the size of the board and also to help describe the player that I have.



```clojure
(defn get-value [params-map key default]
 (let [value (get params-map key)]
   (or (case value
         "3x3" :3x3
         "4x4" :4x4
         "ai_hard" :hard
         "ai_medium" :medium
         "ai_easy" :easy
         "hard" :hard
         "medium" :medium
         "easy" :easy
         nil)
       default)))

```

My default is usually human so this works for that specific use case. But now I am in the process of adding in the AI functionality.

I think my solution will be to add a `get-player` function and change it so if it says one of those values my player will contain `{:kind :ai :difficulty :easy}` rather that my current implementation which would be `{:kind :easy}` which does nothing when I try to connect to my previous system.

The other part I need to change how i send the information through the game.

```clojure
(defn hidden-map [game]
 (prn "(:kind (:player-1 game)):" (:kind (:player-1 game)))
 (prn "(:kind (:player-2 game)):" (:kind (:player-2 game)))
 (str "<input type='hidden' name='game-id' value='" (:game-id game) "'>"
      "<input type='hidden' name='player_1' value='" (name (:kind (:player-1 game))) "'>" ;
      "<input type='hidden' name='player_2' value='" (name (:kind (:player-2 game))) "'>"
      "<input type='hidden' name='size' value='" (name (:size game)) "'>"
      "<input type='hidden' name='moves' value='" (clojure.string/join "," (:moves game)) "'>"))
```

I send the kind, so right now all I know is if I am playing against an AI or a human.
Now I need to change that to if it says AI or difficulty I need to pass that through and add it to my map again when I pass the information under.

I do this of course because my server is stateless. So I must pass this information constantly to play

These are the fixes I will work on. Hopefully this will help me to connect AI effectively.

Best,

Merl
