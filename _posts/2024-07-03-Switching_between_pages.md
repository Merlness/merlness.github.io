---
title:  "Switching Between Pages"
mathjax: true
layout: post
categories: media
---

Today was one of those good days when I learned something new, and it was kind of straightforward. 

## The Problem

The task was to fix a bug between a productivity page and the project. Both are connected to each other and have buttons 
that can send you from one page to another. 

Let's say we begin on the project page, I can click the specific button, and it can send me to the productivity page. 
Now, if I am on the productivity page and I click the respective button I can go back to the project page. 

This is where it gets spicy. Going from the productivity page back causes problems. So I had to dig around. 

## Digging 

Honestly the rest wasn't too bad. 

The project page maintained the url of the productivity page which is what cause the problems. 

## Solution

Now I had to find a way add a href, so I can set the url to the project url. 

After searching where to place it and which functions can help me do this, I added this to the code:


```clojure
{:href     (url project) ; it was this
 :on-click #(install-page :project)}
```

I am the greatest coder in history!

That was sarcasm btw, in case it doesn't translate through the screen. 

Some stories are just nice and easy. 

Best, 

Merl
