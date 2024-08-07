---
title:  "Search bar"
mathjax: true
layout: post
categories: media
---

One of the cool things I have been tasked with is adding a search bar. 

I have seen this before to an extent. I would say this a little more challenging because there is more to be done also. 

I would say once you know the pieces it is not to bad to install a new search bar. 

First I would add in a new Input component where you want the search bar to be, and you need to create a `Ratom` to keep track of what you are searching for

In the input you can place something like this to check for a change in the search bar
```clojure
:on-change   #(reset! search-query (wjs/e-text %))}
```
Then be have a reagent tracker that compares the projects we have with the projects we want. 

```clojure
(defn some-fn []
      (let [search-query (reagent/atom "")
            filtered-projects (reagent/track #(sfilter-by-name @search-query projects))]
           
           [:Input
            {:value       @search-query
             :on-change   #(reset! search-query (wjs/e-text %))}]

           (for-all [project (if (str/blank? @search-query) projects @filtered-projects)]
                    [:li#-projects])))
```
Hew you can see that changing the search query will also filter the projects. 

And if the search query is not empty. Then it will display the projects that have been filtered. 

Before going into this, it seemed challenging. But now, it's not too bad. 

Best, 

Merl
