---
title:  "Talking to Clients"
mathjax: true
layout: post
categories: media
---

This is always happening, but I mean for IPM which hasn't happened yet. 

What do I mean? Maybe it is the simple developer in be, but sometimes I question what the client wants. 

We added this "implicit owner" to a story, this means they are not an owner/member but can complete a task in a story. 

This is when my mind starts thinking, why not make them an owner if they are part of the story? 

For right now this is what the client wanted but it has it's bugs. 

Because there is an implicit owner, and not a real one that shows up in the maps about a story, there are bugs that are starting to arise.  

For example, the way we display information about an individual is dependent on them being a member of a story. 

This meant that the data was not accurately displaying what a craftsman had done in a story, if they were an implicit member. This happened in both the reports, and the points total dropdown menu. 

This is not good, the data should show what you have done!

I was able to follow the trail of code and limit the filtering system for an individual to include points from tasks of which a person is not a member in the story.

My whole idea is, if the venn diagram of implicit owners and owners is becoming a circle, what is the point?

Regardless of what I think, the client wants what the client wants. 

Best, 

Merl
