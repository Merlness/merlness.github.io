---
title:  "Let Me Live"
mathjax: true
layout: post
categories: media
---

Dramatic, I know. This is praise to those that allowed `let` to exist.

Since I know Python better, I still favor it but the small things like `let` in Clojure are turning me around.

In case you don’t know what `let` is in Clojure it is a temporary binding.It allows you to introduce temporary variables that are only valid within the body of `let`. This allows you to manage values or computation without affecting the surrounding code

For example:

```clojure
(let [x 1]
  x)
;1
```
Here we say let x equal to 1, then we call x and out comes 1. If we were to call x outside of the let body, it would not work correctly.

Why do I enjoy this so much?

Because it is another useful tool for our projects. More tools allow the flexibility to get the job done well.

Here is an example I did today. It took me longer than I would like to admit to find this missing key to solve my problem. I wanted to find the sum of some numbers, and square them after I found the sum, here is my answer:

```clojure
(defn sum-to-square [n]
  (let [sum (apply + (range (inc n)))]
    (square sum)))
```

As you can see `sum` was the addition of all of the numbers including `n`. Then we just squared it to find the solution we needed. I tried other ways to organize the operations, eventually this turned out to be the best.

Not identical but similar in having temporary bindings that exist in its body are loops. I won’t go into the weeds for loops just yet. However, having the ability to loop using temporary bindings is incredible.

I have used loops or lets for every Euler Project problem I have done. Both excellent tools that I am happy I learned how to use.

Best,

Merl
