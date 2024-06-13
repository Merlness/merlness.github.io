---
title: "Fixing Randomness"
mathjax: true
layout: post
categories: media
---

Today I had the wonderful task of fixing what I thought was a bug.

Maybe it can still be classified as a bug, but I came to a different understanding. 
The idea is that the time it takes for something to fall is inconsistent. 

There were 2 problems that I potentially noticed. 

One was a potential lag that caused the inconsistency. This could be due to the kind of machine that is present, or how much memory is used up at the time by the machine. 

Next is that different-sized screens cause a different time for the object to fall. This is because the code is built on constants not the screen size.  

I decided to fix the latter, in hopes that it could fix both situations. 

It was mildly challenging to figure out what exactly to change and how, in relation to the height. 
But eventually I did. 

Now the trouble was testing this. 
I realize I should have done this backwards but testing time is tricky. 

I decided to create a function that was recursive until the object fell. Then I would find the difference in time between the start and the end of the fall. 

Then I used different heights and passed them through the new function. I placed these times in a list and then I checked the largest difference.  

Since time is measured in millis, I decided to give a 10 ms cushion but everything still passed. 

One more Story is complete baby. On to the next. 

Best, 

Merl
