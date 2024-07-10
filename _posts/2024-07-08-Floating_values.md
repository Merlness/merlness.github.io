---
title:  "Float Values"
mathjax: true
layout: post
categories: media
---


Have you ever had any bugs because of floats before?

I just had my first one and I hope I don't get many of them. 

## Setup

Originally and proudly I help make a feature to sort and display points. The bars which displayed the points
also had to be relative in size to each other. 

I will not show everything but I will show where the problem was. 


## Problem

I tested the expected behavior and the edge cases but I did not check for float errors. 

If you want to know why floats can be inaccurate [Here is a link!](https://www.red-gate.com/hub/product-learning/sql-prompt/the-dangers-of-using-float-or-real-datatypes#:~:text=Floating%20point%20datatypes%20accommodate%20very,can%20introduce%20big%20rounding%20errors.)

My mistake was forgetting there could be errors there and also adding an unecessary `".00"` before the percent sign. 

Both of these caused certain particular values to become `"41.9999999135.00%"` instead of `"42.00%"`
```clojure
(defn make-percentage [decimal]
  (str (* 100 decimal)".00%"))

(defn calculate-percentages [total-points max-points]
      (let [ratio (coerce-float (/ total-points max-points) 2)]
           (make-percentage (max default-decimal ratio))))
```

Now I know what you are thinking. Why did you add this value `".00"`? Well, it was because certain parts relied on 
representing values that way. So I decided to make sure that was no longer the case. 


### Solution

Now I had to make sure again that the flot values would be rounded off correctly, and that I did not add the `".00"` value manually. 

```clojure
(defn make-percentage [decimal]
  (str (float->string (* 100 decimal) 2) "%"))
```


Now I can lay my head to rest knowing, there are no more bugs in my code. 

I hope.

Best, 

Merl
