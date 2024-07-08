---
title:  "Returning Accurately"
mathjax: true
layout: post
categories: media
---

For most of these problems I feel once the solution is found it becomes so clear in hindsight. I guess you could say that about 
basically most things in life, but especially here. 

Before I mention the problem let me tell you the situation. 

I have a Modal 1 that leads to other modals, let me only focus on Modal 2. Modal 1 is the first one of this page 
and it can lead to other places or just cancel and return to the regular screen. This all works perfectly. 
Next, when in Modal 2 this again has particular functionality and has the button Cancel as well. 

The problem is the Cancel button in Modal 2 returns to the regular screen instead of Modal 1.

Ok how to fix this? 

Initially I tried various functions that seemed like they would work. Something `Install-Previous`, and other
similar functions but nothing worked. 

It was until I deeply looked into how Modal 1 was called. I had to find a way to replicate it while
using different functions because I was in a different location. 

After learning this, I wrote my tests. And then I made sure to implement what I needed to. 

The funny part was my parameters were slightly off so I was having interesting behaviour. 
It took me a while to figure out how to correctly place my parameters so it would work How I wanted it to. 

Now it is all good. 

Best, 

Merl
