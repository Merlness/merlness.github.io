---
title:  "Signed-Off?"
mathjax: true
layout: post
categories: media
---

Recently I had to make a story to differentiate when a story was signed off or not. 

We , when I say we I mean another apprentice, helped create a new weekly page. This helps see what an individual, or 
multiple individuals are doing on a week to wee basis. This is across different projects. 

Now stories are in progress, some are complete, and some are complete and have signed off iterations.

Currently there is only a visible difference in this page for completed stories and in progress ones.

It was up to me to help create the difference between completed stories and signed-off ones. 

The great thing about a large system like we have is there are often solutions lying around we just need to grab them. 

### Solution

In this case I think I found one. We already have classes that help change the texture of an item `frozen`.

This is what we do to iterations when they are complete. However this only shows up on the Projects page, and `frozen` is given to the 
top layer and passed down everywhere else. Again this is in the projects page, so it doesn't carry over to the Weekly page. 

Now I just have to make sure a story card will be frozen when the iteration it is a part of is signed-off on. 

```clojure
:class (str class
            (when (= :frozen state) " frozen"))

```
Of course I had to find the location to do this, and of course I had to find a way to get the state in general. 

This was basically the simple solution that I was able to come up with. 

Another one bites the dust. 

Best, 

Merl
