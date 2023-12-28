---
title:  "Hashmaps in Clojure"
mathjax: true
layout: post
categories: media
---


I have chosen the Coin Changer kata to perform in Java. It is fairly straightforward, however before I completed it in Java I decided to do it in Clojure. Maybe a wise decision, maybe not.

I wanted to complete it in Clojure to have a good idea as to how to solve it, but also to get better at Clojure.

I have found there is much to learn. Understatement of the year folks. I did work on something I have rarely done before. I think maybe for Advent of Code problems I have used Hashmaps, besides that no.

It was time to begin, I completed the problem initially using loops and returning a vector that meant nothing to others, just me. Don’t get me wrong, it made perfect sense after 1 sentence however I realize the code must read well regardless. There were also repetitions which of course should be avoided.

Hence we are back at hashmaps. 

```clojure
(def coins {
          `:quarter 25
           :dime    10
           :nickel  5
           :penny   1})


(defn remaining? [coin n]
 (>= n (get coins coin)))


```
Boom, that already looks very nice.

Here we have the map, and also we have a function that helps us get a coin if it is equal to or larger than one of our coins.

The problem is, if I have 25 cents, will it provide a quarter, or some other possible combination of coins. Pennies cannot be used for every transaction.


```clojure
(defn largest-coin [remaining]
 (first (first (filter #(remaining? (first %) remaining) coins))))


```
Now this was a doozy. This helped to call the key that was largest to fit in the remaining change. If there were 24 cents left, it would provide a dime. This was the most challenging function for me.

Now to provide the number of coins associated with the particular coins themselves I created another map with the coins starting at 0.

```clojure
(defn default-change []
 (into (sorted-map) (map #(vector % 0) (keys coins)))
 )
```

Now that we have all of this here is the main function. This function uses what we have provided above to subtract the value of our coins from the changed due, and add the number of coins to the map of 0s we provided above.

```clojure

(defn coin-changer [n]
 (loop [remaining n
        change (default-change)]
   (let [coin (largest-coin remaining)
         cents (get coins coin)]
     (if (zero? remaining)
       change
       (recur (- remaining cents)
              (update change coin inc))))))
```

So if you needed 93 cents it would provide `{:quarter 3 :penny 3 :nickel 1 :dime 1}.

Hope you like this coin changer, until next time.

Best,

Merl
