---
title: "Edge Cases"
mathjax: true
layout: post
categories: media
---


Today, I want to share how I dealt with some tricky edge cases in my project where I adjust bar lengths based on completed points.
The goal was to ensure that even members with zero completed points still have a small highlight, similar to a mercury thermometer. However, I ran into an interesting problem.

When the max story points were large, I noticed an issue: someone with zero completed points had a bigger bar than someone with very few (but greater than zero) completed points. This was clearly not what I wanted.

### Solution
To fix this, I adjusted my code. Here's the updated version:

```clojure
(defn calculate-percentages [total-points max-points]
      (-> (formatc/coerce-float (/ total-points max-points) 2)
          (max starting-decimal)
          make-percentage))

(defn normalize-to-min-width [{:keys [percent-complete completed-points total-points]} max-points]
      (let [starting-percentage? (= (make-percentage starting-decimal) percent-complete)
            normalized-zero-value (min total-points (* starting-decimal max-points))]
           (if (and starting-percentage? (zero? completed-points))
             (calculate-percentages normalized-zero-value total-points)
             percent-complete)))
```

- In `calculate-percentages` I use max to ensure the percentage is never below the starting decimal.
- 
- In `normalize-to-min-width` I check for the starting percentage and zero completed points. If both conditions are met, I normalize the width to ensure it’s at least the starting percentage.

By tweaking the code, I ensured that members with very few completed points still get a fair representation. This way, the bars are more accurate and intuitive.

That's all for now! Keep coding and stay tuned for more updates.

Best,
