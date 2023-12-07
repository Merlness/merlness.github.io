---
title:  "Clojure Exposure"
mathjax: true
layout: post
categories: media
---

Clojure exposure

Welcome, I have been in the process of learning Clojure and man is it something.

I would say Python does have its quicks, but it felt easier to learn than Clojure. Maybe my current knowledge is biasing my opinion here, that’s just a feeling. To learn this new language I have been going through the Clojure Koans.


I can write about the Clojure Koans later, and possibly the Bowling Game in Clojure.


## What I Like

But for now I want to focus on something I do like in Clojure
That is this `-> ` and `->>`!

I know what you might be thinking “What!?”

Let me explain:

When you have nested functions they can get messy.
-> and ->> can help make the code more readable.

## Example
Let's say you wanted to use 5, increase it by 1, then multiply it by 2, and then print “result” and the final value 12.

You could use both functions.

```clojure
(def x 5)

(def result-messy
  (str " result: " (* 2 (inc x))))

(def result-cleaner
  (-> x
      (inc)
      (* 2)
      (str " result: ")))

(println result) ; Outputs: " result: 12"

```

Now let’s say you want to start with the sequence (1 2 3 4 5).
You want to filter out the even numbers, then you want them to increase by one, and add the remaining up. You can write either

```clojure
(def x '(1 2 3 4 5))

(def result-messy
  (reduce + (map inc (filter even? x))))

(def result-cleaner
  (->> x
       (filter even?)
       (map inc)
       (reduce +)))

(println result) ; Outputs: 8
```

Although learning is tough. I can say my first favorite change is this.

Best,

Merl
