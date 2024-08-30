---
title:  "Clicking on links"
mathjax: true
layout: post
categories: media
---

The story I have been working on is clicking on links that have been signed off on an iteration. 

The problem was when we sign off on an iteration, we disable the text. Since it is disabled you can't do anything with it. This is a problem because we want to click on any link. 


This initially seemed like an easy fix, like always amirite? 

The initial solution was to just not disable the text there! Genius!

Ok, that did allow us to click the link and take us to where we needed to go, but it also allowed us to write in text. 

Thankfully the text didn't save to the database but that is still no bueno. 

So what did I do, what was my brilliant solution?


If the string is empty disable it, else don't.

This is why they pay be the big bucks!

Best, 

Merl
