---
title:  "Raising up Flags"
mathjax: true
layout: post
categories: media
---

There comes a time in life when you need to raise up some flags. Maybe it's the smart time to surrender, maybe there is trouble ahead, or maybe you need your data to load in correctly. 

This is about the latter. 

I was working on a pesky bug, when entering a page from a specific route the functionality was slightly off. I wanted a graph to display everyone, however sometimes it would only display 
the user, which would be me in this case. 

After digging around, I was able to discover the reason as to why that was the case. 

It was displaying all the users! It just so happens that sometimes the first load includes only me as the complete user list. Wait a minute that's not right. 

It is great that JS is able to multitask, however asynchronous events can cause unexpected behavior. So what is the solution?


## Flags

Currently, my solution is to put up a flag.
    
 ```clojure
(def data-fetched? (reagent/atom false))
;lots of code here
(defn enter []
      (ws-call (stuff) (load data)))   
  ```

Apparently adding the flag under it doesn't work. 

```clojure
(defn enter []
      (other-functions)
      (ws-call (stuff) (load data))
      (reset data-fetched? true))
```
Because of the asynchronous ability this still doesn't work. 


You need to isolate both events together for consistency.

```clojure
(defn fetch-data [data]
      (ws-call (stuff) (load data))
      (reset data-fetched? true))

(defn enter []
      (other-functions)
      (fetch-data data))
```

Now that you raise the flag at the exact same time you load in the data. You can have your components wait for the flag to be raised up before they start displaying their data. 

```clojure
(defn component [graph-data]
      (when @data-fetched?
            (display-graph graph-data)))

```

Thanks for coming to my TED blog, good bye. 

Best, 

Merl
