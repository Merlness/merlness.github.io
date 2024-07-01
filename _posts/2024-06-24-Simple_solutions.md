---
title: "Simple Solutions"
mathjax: true
layout: post
categories: media
---

All though there were multiple problems I solved today. 
I would like to say my initial problem was much simpler thant I expected. 

Being new to this system but also web development in general has made
me cautious with my estimations. 

As well I should be cautious, my name and my team are relying on me fulfilling my word.
And I need to add in how long it takes to learn this new part of the code I haven't seen before. 

It just so happens this story was to remove a button from a location. I was unsure where this was, or what functionality this was connected to. 

When I finally found it it was a quick and simple fix. 

Of course I had to change the tests a little bit but I literally just had to remove the button. 

The once thing is I did want to leave a little extra padding to the end so I did

```clojure
 [:li.margin-left-0.padding-right-plus-5
                (new-story-bar-button plan-view?)]
```

```clojure
 [:li.margin-left-0.padding-right-plus-2]
```
Ta da! 

Long story short, write good code so people later can make changes easily!

Best, 

Merl
