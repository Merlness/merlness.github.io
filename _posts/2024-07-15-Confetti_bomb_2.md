---
title:  "Confetti Bomb 2"
mathjax: true
layout: post
categories: media
---

Part 2 of confetti madness. I suppose that isn't true since I have worked on confetti a lot. 
But this series is about the confetti bomb. 

### Problem

The bomb has to appear in the center and grow. The great part is, a ball is in the center, now to make it seem like it grows. 

The problem is that the all the confetti is rendered at the same time so there is now way to be able to 
create them separately. 

Hmmm...

### Trouble

My golden hammer has been randomization. This has worked very well especially in this project. 

Will it be my answer again?

Well, I tried it, and it did not work very well.
Like I said it was supposed to appear then grow. With the randomness it was difficult to control the timing of the appearance, as well 
as the location the confetti would appear. 

### Steps

I am sure there was a possible way to finish the task with randomness but it would not have been elegant. 

What the solution was to render the confetti at the same time, but have them be invisible and appear slowly. giving the affect of growing. 

Of course it was mention the confetti bomb has to grow, but it should not grow indefinitely. There are limited confetti.
So it should take roughly a second for the bomb to go from appearing to exploding.

Therefore the key and value `:invisible? true` was added to the bomb confetto map. 

### Solution 

As you know, the bomb of many confetti looks like a circle with many confetto with in it. 
the idea was to change the map to `:invisible? false` and displaying the individual confetto. 

The way it was done was to find the ration of the `elapsed-time / time-limit ` (again the time limit was ~ 1 second), and compare that ratio
to the ratio of the `random-radius-length / maximum-possible-radius` of a particular confetto.

Then if the `time-ratio` is greater than or equal to the `radius-ratio` then it will become visible. 

Essentially normalizing the ratios and displaying them. 

### Code 

```clojure
(defmethod -update-confetto :bomb [{:keys [invisible? ball-radius max-ball-radius 
                                           start-time last-time] :as confetto}]
  (when-not (sparkle-has-landed? sparkle)
    (let [now          (performance-now)
          time-ratio   (/ (- now start-time) (time/seconds 1))
          radius-ratio (/ ball-radius max-ball-radius)
          visible?     (or (not invisible?) (>= time-ratio radius-ratio))]
      (merge sparkle
             {:last-time  now
              :invisible? (not visible?)}))))
```
Now you didn't see them, now you do. 

Best, 

Merl
