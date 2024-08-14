---
title:  "Tests Again"
mathjax: true
layout: post
categories: media
---

It seems like I have been having back luck recently on tests. 

This time instead of being on the backend it was on the front end. 

I had to allow a way to have multiple dropdowns displayed at the same time. Usually the dropdowns are only open one at a time. 

The fix was actually quite simple. I removed the reagent listener and was able to add the functionality that I wanted. 

However, a test to display the new functionality was almost impossible. 

Since I removed the listener it was hard to stray click and therefore display that a stray click would still leave the dropdowns open. 

After stumbling and bumbling. After a long time. 

I found something that kind of worked. I was not able to make a test to display the functionality, but I was able to make a test to display the removal of the previous functionality. 

I made sure that the listener no longer existed in the test, therefore providing some indirect evidence that it works as intended. 

A very simple code fix followed by a tough test. Oof

Best, 

Merl
