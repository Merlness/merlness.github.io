---
title:  "Confetti Bomb 3"
mathjax: true
layout: post
categories: media
---


The last and final piece of the confetti bomb was for it to actually explode. 

Like I've said before once you have good code it becomes easy to continue building. 

This was the perfect case for that statement. Maybe you remember my previous code?

```clojure
(defmethod -create-confetto :bomb [_ center-x center-y] 
    (let [max-radius 50
          radius     (rand-between 0 max-radius)
          angle      (rand-between 0 (* 2 Math/PI))
          delta-x    (* radius (Math/cos angle))
          delta-y    (* radius (Math/sin angle))
          now        (performance-now)]
       (merge-confetto {:last-time       now
                        :start-time      now
                        :kind            :bomb
                        :transform       {:position     {:x (+ center-x delta-x) :y (+ center-y delta-y)}
                                          :velocity     {:x 0 :y 0}
                                          :acceleration {:x 0 :y 0.1}}
                        :max-ball-radius max-radius
                        :ball-radius     radius})))
```

Since the positions `x` and `y` are relative to the center, their velocities should be as well!


```clojure
:transform {:position     {:x (+ center-x delta-x) :y (+ center-y delta-y)}
            :velocity     {:x (/ delta-x 2.5)      :y (/ delta-y 2.5)}
            :acceleration {:x 0                    :y 0.1}}
```
 Now the initial velocities in the `x` and `y` direction are just a factor of their position in relation to the center. 

To further describe this lets call the center (0, 0). Now let's imagine 4 points `{:a (r, 0) :b (0, r) :c (-r, 0) :d (0, -r)}`.

These velocities will be displayed below. 

-   `:a -> :velocity  {:x   (/ r 2.5)   :y 0        }` 
-   `:b -> :velocity  {:x   0           :y (/ r 2.5)} `
-   `:c -> :velocity  {:x   (/ r -2.5)   :y 0} `
-   `:d -> :velocity  {:x   0    :y (/ r -2.5)} `

This is how they change over time

```clojure
{:transform {:position     {:x (+ x-pos x-vel) :y (+ y-pos y-vel)}
             :velocity     {:x x-vel   :y (+ y-vel y-accel)}
             :acceleration {:x x-accel :y y-accel}}}
```
So of course since the top is considered 0, and the bottom is considered h, they fall due to our gravity. 

These formulas almost give this bomb a 3D effect. What gives this effect is the confetti that goes almost straight up and falls down after the rest has faded away. 


This was a fun project to do. I hope for many more confetti projects. 

Best, 

Merl
