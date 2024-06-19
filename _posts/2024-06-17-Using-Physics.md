---
title: "Using Physics"
mathjax: true
layout: post
categories: media
---

Now my time has come. I will finally use my Master's in Physics for a private company. 

Never mind that this is to simulate a virtual cannon that shoots confetti when someone accomplishes their weekly goals. 

This is what I have trained for!

    Displacement (yf-yi) - how far the confetti travels.
    Velocity (vf, vi) - the speed and direction of the confetti.
    Acceleration (a) - the change in velocity (in our case, due to gravity).
    Time (t) - the duration of the confetti’s flight.

These are the components we need to understand the kinematic equations. 

    𝑣𝑓=𝑣i+𝑎𝑡
    y𝑓=yi+𝑣i𝑡+1/2*𝑎*𝑡^2

Playing around with my makeshift cannon these are the equations I will need to use in order to create parabolic motion. 

I will say this was somewhat easy with a bump in the road. 

The equations themselves were relatively easy to implement themselves, however when I began placing the formulas something happened. 

First off, it was tough to get the signs and the constants right. In a screen the 0 is the top of the screen and the bottom is the height of the screen. 
Not the biggest deal but without writing anything down this caused a little obstacle. 


The second part, was making sure the constants were right. Since I was able to get the time between frames, I used that as my initial time, however it was measured in `ms`
so it was quite large and pushed my confetti off the screen quickly. I used an arbitrary number to make the intervals of time smaller. Along with there were a few other parameters to manipulate in order to have something visible on the screen. 


The third and embarrassing part it that it was not following a nice parabolic curve like I thought it would. This is embarrassing because I should have known better. 
When I used the displacement formula everything was correct, however I left the initial velocity the same after every displacement.
I forgot to change the velocity along with the displacement, that's why it had an almost linear curve. 

Once I changed my y-velocity after every time interval I finally got that big beautiful curve that I desired. 

Now it looks like a ball of confetti that just follows a parabola. Tomorrow I will try to finish the rest of the simulation. 

Best, 

Merl
