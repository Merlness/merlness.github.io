---
title:  "Unlabeled Stories"
mathjax: true
layout: post
categories: media
---

Today has been my toughest day during Internal Development. 

It is my fault alone, and I will explain later why this is. 

### Goal

Let me do a quick syniposis of the previous problem I faced. 

I was trying to make a new checkbox in the dropdown menu for labels in our Productivity Report. 
This checkbox was `Unlabeled Stories` and it should select the stories that are complete and unlabeled, as well as have the ability to join the other filtering of labels you so well choose. 

Seems easy, and it might be for some. But today was not that day for me. 

### Problems

There were a few problems that reared their ugly head. 

First is design was tough to implement and make the html look nice. 

Second was when you unselected all of the labels the report will produce the unlabeled stories. 
this is strange behavior. Ideally if no labels are selected there should be no data showing up.

Third, throughout the code there are 2 maps that are continuously referenced. And they both contain a lot of
similar information, some even identical information. 

And lastly, my own fault. I was not using TDD which caused me to write some spaghetti code and prevented me from moving forward smoothly. 

### Progress

TDD was the way forward, and boy was it ever. 

I recently got into the bad habit of finding a solution first then commenting out the code and writing tests for it. 

Hopefully my confessions won't come back to hurt me. 

So I got rid of my spaghetti code and began the process. It was slow but I was able to solve the problems I had slowly but surely. It got to the point where finally I had the functionality I wanted. 

### Some Solutions

I solved the third problem that I mentioned above because instead of calling the convoluted maps that were referenced I just created a new reagent-atom and referenced that.  
It might have been better to find a solution using the maps, but I tried and I tried and this was the simplest solution. 

Next, I was able to solve most of problem 2. Now that I had tests that I could trust, I could help cleanup a lot of what I had written. 

And now that I referenced 1 atom instead of finicky maps, this helped me make `Unlabeled stories` flexible. As well as making sure the `Clear` button also clears everything, including this new textbox. 

So I was able to clean up almost everything, and add the new functionality that I wanted. 

The problem is the new functionality changes an if statement into a cond, and now many tests break and I am unsure how to fix them. 
The local host seems to be working perfectly, but some unrelated tests are becoming challenging to fix.

Maybe this will be my next post. Sadly this story is becoming longer than was originally estimated. I need to communicate with my clients in order to let them know one story will be incomplete this week. 


Until Next time ....

Best, 

Merl
