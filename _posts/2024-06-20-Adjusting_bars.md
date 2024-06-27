---
title: "Adjusting Bars"
mathjax: true
layout: post
categories: media
---

Today, I'm sharing how I tackled another part of my sorting project: adjusting the lengths of the bars representing
members' points. The goal was to scale the bars according to the largest individual total points,
which I call max points. Plus, even if the completed points are zero, a small portion of the bar is still highlighted,
similar to a mercury thermometer.

I needed to adjust the bar lengths based on the largest individual total points and ensure that even zero completed
points still show a small highlight. Here’s how I did it.

### Calculating Max Points

First, I found the maximum total points from the sorted stats.

    (def max-points (apply max (map :total-points sorted-stats)))

This gives us the largest individual total points, which we use to scale the bars.

### Functions for Percentage and Normalization

I wrote some functions to handle percentages and normalization. This way, I avoid repeating code and keep things neat.

```clojure
(defn make-percentage [decimal]
      (str (* 100 decimal) ".00%"))

(def starting-decimal (/ storyc/starting-percentage 100))

(defn calculate-percentages [total-points max-points]
      (let [calculated-decimal (formatc/coerce-float (/ total-points max-points) 2)
            decimal (if (zero? total-points) starting-decimal calculated-decimal)]
           (make-percentage decimal)))
```

- `make-percentage` converts a decimal to a percentage string.
- `calculate-percentages` determines the percentage based on the total points and max points. If total points are zero, it
uses a small starting percentage.

Next, I normalized the width of the bars to ensure even zero completed points have a highlight.

```clojure
(defn normalize-width [percent-complete completed-points total-points max-points]
      (let [starting-percentage? (= (make-percentage starting-decimal) percent-complete)
            normalized-zero-value (* starting-decimal max-points)]
           (if (and starting-percentage? (zero? completed-points))
             (calculate-percentages normalized-zero-value total-points)
             percent-complete)))
```

- `normalize-width` checks if the percentage is the starting percentage and if the completed points are zero. If so, it
normalizes the width to ensure a small highlight.


With these functions, I can accurately adjust the bar lengths based on the largest individual total points and ensure that zero completed points still show a highlight.

Using these helper functions, I was able to adjust bar lengths dynamically and avoid code repetition. This makes the visualization more intuitive and accurate.

That's it for today! Stay tuned for more updates.

Best,

Merl
