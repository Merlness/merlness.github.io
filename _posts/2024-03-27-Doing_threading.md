---
title:  "Doing Threads"
mathjax: true
layout: post
categories: media
---


One of the problems that I had when I was completing my GUI was changing certain details in my state.

```clojure
{:screen :play
          :game   {:size     :3x3
                   :player-1 {:kind :human :token "X"}
                   :player-2 {:kind ::ai :difficulty :easy :token "O"}
                   :moves    [1 2 3 4 5 6 7]}}


```
This is what my state looks like.

My program can get the type of player, and the moves made and present them on the board and keep playing.

One of the problems I had was how to end the game. Do I allow people to continue or just exit out?

```clojure
(defmethod mouse-clicked :again [state mouse]
 (let [x (:x mouse)
       y (:y mouse)
       [w h] (dimensions)
       game-id (:game-id (:game state))]
   (cond
     (area-clicked x y (/ w 2) (* h 0.33) (/ w 5) (/ h 10)) ;again button
     (-> state
         (assoc-in [:game :game-id] (inc game-id))
         (update-state :size :moves []))


     (area-clicked x y (/ w 2) (* h 0.5) (/ w 5) (/ h 10));done playing button
     (q/exit)


     :else state))) clicking anywhere else
```
This is the `mouse-clicked` section on my last page.

Let’s focus on the `done playing button` . I was unsure how to potentially end this GUI. One thing I have noticed in Clojure is that there is no `break` like there is in Python or Java. So I was assuming it would be a great challenge to end the GUI.

Lo and behold it is as easy as `q/exit`. Also the `area-clicked` section just senses if i clicked in the area where my button is placed.

Next, is if I click or do anything else outside of the buttons I will return the same state and nothing will change. I will remain on the same page until I click one of the two buttons.

Lastly is where I learned something valuable. Initially I kept using `do` to help update my game.
Those of you who know Clojure well can already send my problem. `do` only returns the last function in the commands made in the section. This can be helpful when I have different kinds of functions doing different things like a print statement.

However If I want to change multiple parts of my state, this is not the best way to do that.
See `assoc-in` and my own functions `update-state` change how the state is. In the `do` function this means that it will only return the last operation made on `state`. So every time I kept changing the order of my functions I would get a different state than I was expecting. And While I was using `do` I was never able to get the state that I wanted.

Then I turned to an old friend, threading. This allowed me to place the state in both of the functions `assoc-in` and my own functions `update-state` without having to write the do statement.

This finally allowed me to change the state to a fresh new board with zero moves made, and return to the screen `size` to begin all over again.

Hopefully this helped you realize like it did to me, to use `do` and threading carefully.

Best,

Merl
