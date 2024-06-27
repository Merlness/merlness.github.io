---
title: "Sorting Members"
mathjax: true
layout: post
categories: media
---

Today, I had an interesting task: sorting members by their completed points,
and then by their total points if needed.
It was a fun little challenge that involved filtering,
mapping, and sorting data using Clojure. Let's jump into it!

### The Task

I needed to sort members based on two things:

- Most completed points.
- Most total points (if there's a tie).

Here's how I tackled this with some Clojure magic.

### The Functions

First up, I needed a function to gather the completion stats for each item.

```clojure
(defn completion-stats [associated? entity-kind stories item]
      (let [stories (filter (partial associated? item) stories)
            completed-stories (filter storyc/complete? stories)
            owner (storyc/get-owner (first stories))
            completed-points (completed-points entity-kind owner item completed-stories)
            stats (storyc/completion-stats stories completed-points item)]
           (assoc stats :item item)))
```
This function grabs the completion stats for a given item, filters stories associated with the item, calculates completed points, and puts together the stats.

Next, I made a function to filter and sort these stats.

```clojure
(defn filtrate-stats [associated? entity-kind focus filtrate stories]
      (let [items (or (seq (filter (partial kindc/kind= entity-kind) @focus)) filtrate)]
           (->> (map #(completion-stats associated? entity-kind stories %) items)
                (ccc/rsort-by (juxt :completed-points :total-points)))))

```
This one filters items based on their kind, maps each item to its completion stats, and then sorts them by completed points and total points.


### What do `map` and `juxt` do?
Two key players here are map and juxt. Let's break down what they do.

`map`
The map function in Clojure takes a function and a collection,
applies the function to each item in the collection, 
and returns a new collection of the results. Here, 
I used map to apply completion-stats to each item, 
transforming a list of items into a list of stats.

    (map #(completion-stats associated? entity-kind stories %) items)

This line takes each item from the items collection, applies completion-stats to it, and gathers the results.

`juxt`
The juxt function takes multiple functions and returns a new function that, 
when called, applies each of the original functions to its arguments and returns a vector of the results. 
In this case, juxt is used to create a sorting key based on two criteria: :completed-points and :total-points.

    (juxt :completed-points :total-points)

This line creates a function that, when given a map, returns a vector with the values of :completed-points and :total-points. This vector is then used by ccc/rsort-by to sort the stats.


Using map and juxt, I was able to filter, transform, and sort the data based on multiple criteria easily. These Clojure functions are super handy and made the task straightforward and neat.

That's all for now! Stay tuned for more coding adventures.

Best,

Merl
