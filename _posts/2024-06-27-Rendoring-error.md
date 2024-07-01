---
title: "Rendering Error"
mathjax: true
layout: post
categories: media
---


I was tasked with fixing a bug that happened when duplicating a story. 
While duplicating itself work ed fine, and even canceling the duplicate panel functioned as expected,
a strange render error appeared when clicking away from the duplicate panel. 

After some debugging, I realized the problem stemmed from how we handled estimates in our stories. 
These estimates needed to be numbers, but for input purposes, we treated them as strings. 
This constant swapping between strings and numbers was causing the render error.

Whenever the duplicate panel came up and was clicked away from,
the mismatched data types would cause the rendering to fail.

To resolve this, I needed to limit the conversion between strings 
and numbers to a very specific part of the code.
By doing this, I ensured that the estimates retained their 
intended functionality without causing render errors.

By centralizing the conversion logic, 
I kept the data consistent and avoided the render errors that were previously occurring.

Ok it was really others and myself, but this is my blog so I take all the credit. 

Best, 

Merl
