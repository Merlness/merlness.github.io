---
title:  "Confetti Bomb"
mathjax: true
layout: post
categories: media
---

FBI please do not place me on a watchlist, at least not any more. 

This is to add to the confetti drop and confetti cannon "celebrations". It seems like I will be a part of making a 
confetti library. 

### Set Up

The idea was to make confetti accumulate at the center of the screen in the shape of a ball. This ball 
grows to a point where it explodes and rains down virtual confetti. 

### How
That is the most interesting part. How to do this?

The good thing about writing good code previously is that you can easily add to it. 
`Open-Closed Principle!`

### Turns
There was brainstorming how to begin. Initially the thought was to find the center of the screen, which is the correct thought.

Next is to create a circle of confetti in the middle.  

This is where the turns came in. I thought creating a radius and then adding a random x value from `-r to r`, and a random y value from `-y to y`.
Genius!

But wait, this would make a square not the circle desired. 
There were other twists and turns but finally I came to the ...

### Solution
Now came the flood of previous math classes. Namely the unit circle.

Using the center point, bring in theta and radius. 
Find a random angle from `0 to 2 * pi`. And find a random number between `0 to r`. 
Then you can find the x & y components and add it to the center point.  


### Code

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
Since I already had the previous implemation, and also transform functionality. It was easy to add in what I wanted. 

Once I realised what I wanted of course. 

Best, 

Merl
