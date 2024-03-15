---
title:  "Changing Pages"
mathjax: true
layout: post
categories: media
---

Today I will talk about changing pages in a GUI.

Now, before I get in to how to change the page, I need to get into this function.


```clojure

(defn area-clicked [x-mouse y-mouse x y width height]
  (and (>= x-mouse (- x (/ width 2)))
       (<= x-mouse (+ x width))
       (>= y-mouse y)
       (<= y-mouse (+ y height))))
```

This function allows me to create an area which paired with `mouse-pressed` will allows us to know when a button has been pressed.

```clojure
(def state {:screen :size
            :game   {:game-id  1
                     :player-1 {:kind :human :token "X"}
                     :player-2 {:kind :human :token "O"}
                     :size     :4x4
                     :moves    []}})


```
Let's focus on `state` for the moment. Inside you can see the game map, but more importantly you can see the `:screen` and what is highlighted. Currently it is `:size` so we will focus on the size portion.

Size has 2 clickable buttons, one that is 3X3 and one that is 4X4. This allows us to change the `:size` inside of the game map.

Simply if one can click on the either button it should update the game map and take us to the next page. This is how I implemented that.


```clojure                   
(defmethod mouse-clicked :size [state mouse]
  (let [x (:x mouse)
        y (:y mouse)
        w (q/width)
        h (q/height)]
    (cond
      (area-clicked x y (/ w 2) (* h 0.33) (/ w 10) (/ h 10)) (-> state
                                                                  (assoc :screen :player-1)
                                                                  (assoc-in [:game :size] :3x3))
      (area-clicked x y (/ w 2) (* h 0.5) (/ w 10) (/ h 10))  (-> state
                                                                  (assoc :screen :player-1)
                                                                  (assoc-in [:game :size] :4x4))
      :else state)))
```

Now you can see why I decided to show you `area-clicked`, this is the same location as the boxes are located. So if you click where the 3X3 box is located it will do 2 things. First it will change the screen to show the coice for Player 1. Second it will update the size of the game in the game map.

I can use this technique for the rest of my screens.

Now I have the ability to create my buttons, click them, change the page, and update the game map. I am getting much closer to connecting this to the game logic.

Best,

Merl
