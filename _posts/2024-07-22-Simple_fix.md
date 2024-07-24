---
title:  "Simple Fix"
mathjax: true
layout: post
categories: media
---

In todays story I was tasked with limiting information that was present. See the information was duplicating. 

Now this seems easy, but it was slightly challenging. 

We created a new page called weeks that keeps track of how much work you do per week. This is similar to our iterations but this is based on a literal week, rather than an iteration week. 

The distinction is a real week starts on sunday, where as an iteration week can begin on any weekday. 

So this means iterations go between regular weeks. So initially the stories got duplicated. It seemed like someone dis twice the work.

We want to be accurate, so I have to fix that. 

I dug into the code and I noticed that the stories were called based on iteration. 

I used print statements to try and figure out what everything was, and what everything contained. 

### Plan

My plan was to get the stories, which have no date, and find the iteration in each story. Then since each iteraiton has the start and end dates on it, I will only pass in the stories that have iterations 
that end on before the end of this new week display. 

This works because it only focuses on the end, and therefore will only be displayed once. 

My plan was to filter the stories and iteration based on the week. 

### Bad Idea

This was a bad idea because the solution was much simpler. I forgot to look into how the stores were called in the first place.

The stories were called on their dates, but called on the beginning of the iteration and the end of one. 

So now all I had to do was delete the first call on the iteration and only focus on the end of there iteration. 



Now, everything works great!

And to think I was going to add in more complications. not just with code but also with performance. Had I written more code the stories would have
filtered twice which could affect the speed. 

Now I know, look at the code before you try something dummy. 

Best, 

Merl
