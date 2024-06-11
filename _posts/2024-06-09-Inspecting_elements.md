---
title: "Inspecting Elements"
mathjax: true
layout: post
categories: media
---

I have finally moved on to Internal Develeopment, working on actual production code instead of my own Tic Tac Toe.

It is an exciting but nervous feeling, because with great power comes great responsibility. I don't want to make an
error that will send the system crashing down.

The great thing, is the use of TDD. I can just run the cljs tests and the specs, and make sure everything passes.
This provides the comfort of safety.

The new trick that I learned today was to help find what I am working on in the website.
If I know specifically what I am working on then,

I could go to the website and find what I am changing
Right click it, and "Inspect Element"
Then I can find out the information that is behind the scenes
As I am scrolling through the code it will highlight the parts that are being affected by the code
Keep scrolling, expanding, and eventually you can find exactly what you want. 
Then you can find the class that is associated with what you want
Go to the source code, command+shift+f to find that class everywhere in the code

Viola, you have now found where you can work to help fix the bug or change whatever you need to. 

Best, 

Merl
