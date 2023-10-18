---
title:  "More is better?"
mathjax: true
layout: post
categories: media
---

When it comes to lines of code the idea is less is best. For this blog post I will follow that principle `#meta`.

## Less is best, however sometimes more is better.

I am referring to the specific example that happened to me today. I have been focusing on limiting the lines of code in order to make the code simpler. Too much so. See I was playing around with RegEx `I pronounce it like "rejects"` in order to solve an Advent of Code problem.

I can do what I assume to be the very simple aspects of RegEx, however I was attempting something more complex. The easy examples are:  `re.search() re.match() re.split() re.findall()`, I tried adding multiple conditions to re.findall() and thought I came across a solution. I knew I could have easily used more *if* statements to perfectly complete the task, however I was obsessed with limiting the lines of code.

My mistake was instead of choosing 8 lines of code that I knew would work, I chose 2 lines of code that I thought and hoped would work. Big no no!
I assumed my program work and was dismayed and disheartened when Advent of Code let me know I was wrong. I spent too much time trying to figure out what was wrong, until I finally did.

I proceeded to write the 8 lines of code that worked, then I cleaned it up by turning those 8 lines into 3 lines. `Mission Accomplished`

```python

#Lessons learned today:

#1. Write the code that works, then clean it up!

#2. Regex is a powerful tool that is incredibly complicated. Proceed with Caution
```
