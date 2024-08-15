---
title:  "Similar Functionality"
mathjax: true
layout: post
categories: media
---

I had a task I had to complete today. Of course there were wonderful tests involved, this time they were very straight forward. 

The challenge was how to incorporate the previous code into my new feature. See the great thing about not duplicating code is that many places can use the same functionality, the challenge 
is when you want to have some sort of specifications. 

In this case I want to display the project name of a story in a particular page. But only in this page, nowhere else. 

My first thought was to pass in a boolean, or some flag from our intended location all the way through to the code that is called upon many times. 

I knew from the beginning I did not like this solution. First, I would have to pass in an extra parameter to about 4 different functions, and now I would have to add a falsy to many more places these functions are called. 

Again this was a solution, and it would work, but there has to be a better way. 

It took me some time but I found that this page I wanted to display in was already doing something similar. This new page was basically "read-only" so some of the previous functionality was not present. 

Primarily the drag and drop for each story!

This meant that similar information had been passed through, and now I needed to collect it where I wanted it and display the functionality that I intended. 

Now I know, look for similar behaviour in the page I want to add functionality and take from there, instead of adding in a barely useful boolean. 

Best, 

Merl
