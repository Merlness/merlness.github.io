---
title:  "Different Routes"
mathjax: true
layout: post
categories: media
---

One of the ways to learn when creating something is to create something you will not use.

I have been having this problem where I want to compile and run my program from the command line rather than from the IDE.

With this ability, I want to also be able to go into any directory and make it my root directory while the program is running.

I was able to make this happen, but not in the way that I wanted.

See originally my root directory is `.` which is also `MyHTTPServer/`.

Now I want to be able to go into other files from the terminal and explore.

This means run my program from `./src/` to be able to begin there.


The problem is I made my program take that link being clicked and add it to the URL and send a request finding the new location.

This means that the File or folder I am clicking on is doubled in the request.

Let me break this down. If I start at my original root directory, I can click normal and everything is fine.

Request Path: /Files/giphy.gif
Root Directory : .

My program concatinates this into `./Files/giphy.gif`

Now if I change my directory from `.` to `./Files/`

  Request Path: /Files/giphy.gif
  Root Directory: ./Files

My program now makes this into

`./Files/Files/giphy.gif`

So it is hard to distinguish.

My solution was not the most robust but it was to eliminate the overlap if there was one turn this
`./Files/Files/giphy.gif` into this `./Files/giphy.gif`.


It has worked the problem is however when change my root directory to my new one like`./Files/` and click on giphy.gif. I should see in the URL `/giphy.gif`, but I see `Files/giphy.gif`.

It functions but I should not see where I am.

I am back to the drawing board on this one.

Until next time,

Merl
