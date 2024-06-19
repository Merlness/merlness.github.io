---
title: "Confetti Cannon"
mathjax: true
layout: post
categories: media
---

Today is the day I hopefully finish the Confetti stories. It was fun initially learning about dropping the confetti, and it has been fun beginning to implement the kinematic equations as well. 

Now it has been time to combine those. As was just mentioned initially, there was code to just drop the confetti, and it would flip and sway back and forth like it was in the wind. 

I just made it so the ball of confetti made a parabolic motion. Now was the time to find a way to simulate a cannon. 

## Randomness in Velocities

To begin, all the confetti started in the same place and had the same path. 

What I did was add a little bit of randomness. Meaning I had a velocity in the x and y in mind, so I allowed variance around that number that I had in mind. 

Since each confetto is created separately, each one can have it's separate and specific velocities. Since each x and y velocity 
are different per confetto, this means each one will have a separate launch angle. 

## Randomness in Acceleration

Next I did the same thing for acceleration. After changing the velocities, they still all had the same curve after launch, 
So I had a range in mind for the acceleration to be, and each confetto would have it's similar but distinct acceleration. 

Now every confetto will have a different launch angle and trajectory. 

## Simulate Air resistance. 

This was hard in thought to accomplish but easy once imagined. 

Like I mentioned before I had a swaying drop for each confetto. So I decided to use that!

Randomness is our friend. 

Each confetto has a map, and so I added a boolean `:drop false` in there. Then I added functionality, if the confetto is dropping then it will stay dropping. 

### What does dropping mean? 

This is where I got clever. If it is flying(not dropping) then it follows the trajectory, if `:drop true` then it will behave like it did before I made any changes. 

It will "sway in the wind" in a sinusoidal manner. 
I did however add a small bit of the initial x-velocity, 
so it would keep moving slightly in the original x direction that it was before and not just stop horizontally. 


### When to drop?

This was the part that was also interesting. 

```clojure
(defn should-drop? [drop y-vel]
  (let [threshold (rand-between -5 12)
        drop-chance 0.997]
    (or drop (> (rand 1) drop-chance) (< y-vel threshold))))
```

I decided I should show some code. 

- `drop` If it is dropping, it stays dropping
- `(> (rand 1) drop-chance)` You know how in confetti cannons some confetti just stop soon after launching? Since the refresh rate is so high, I made the chance of that happening low, so most confetti continue on. 
- `(< y-vel threshold)` Again each confetto has its own threshold between -5 through 12. When the y-vel is less than the threshold value it will automatically drop. 

## Summary 
Of course there are major tweakings to be done. As well as I had to normalize many of the parameters to the height and width of the screen size, so every screen has a similar experience.

Along with that there were a few constants that I had to change here and there to get what I think is a good confetti cannon simulation. 

Best, 

Merl
