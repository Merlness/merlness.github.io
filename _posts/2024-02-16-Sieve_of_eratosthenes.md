---
title:  "Sieve of Eratosthenes"
mathjax: true
layout: post
categories: media
---

I hope I do this justice, but also keep it succint.

I was trying to do an Euler problem and needed a quick way to find primes up to a certain number.

Let me present to you my first response which gave me the correct solution but was took too long.

```clojure
(defn euler-problem [n]
  (loop [num 3
         primes [2]]
    (cond
      (prime? num primes) (recur (inc num) (conj primes num))
      :else (recur (inc num) primes))))
```

I erased a condition that told the solution and only focused on the primes section.

As you can see, it is a simple function that provides what I need. You might also be able to see is I have to iterate over ever number until `n` to reach my solution. Which means the larger `n` gets the longer this time increases dramatically.

Then I was able to move to this idea which was the `Sieve of Eratosthenes`.

```clojure

(defn sieve-of-Eratosthenes [n]
  (loop [primes (vec (range 2 n))
         num 2
         limit (Math/sqrt n)]
    (if (<= num limit)
      (let [non-primes (set (range (* 2 num) n num))]
        (recur  (vec (remove non-primes primes)) (inc num) limit))
      (reduce + primes))))
```

This was much better I think I decreased the time to a third or even less.

This limited the search up to the square root of n, and removed all of the multiples of our incrementing number from our possible primes list.


This again was much faster but still too long.

I took some time to try and figure out how to optimize my functions. I looked at pseudo code and made it my own, this was instead of non primes equalling a range of the multiples on `num`
 `[non-primes (set (range (* 2 num) n num))]`
 Non primes would be set to the square of num and add num until we reach n. Like so `i2, i2+i, i2+2i, i2+3i,`

 I made the correct changes but it actually took longer.

 That is when I finally realized instead of incrementing by 1 until we get to `n`. I should increment the index by the remaining primes.

 If I remove 2 and all of it's multiples, then that cuts out much of the time for us to increment through every number. If I get rid of all the multiples of 2, then I don't need to check any even number after this. Huge time saver.

 So I coded this which ended up being 5 times faster than my previous code.



```clojure
(defn products-list-from [num n]
  (set (range (* 2 num) n num)))

(defn remove-non-primes [num n primes]
  (let [non-primes (products-list-from num n)]
    (vec (remove non-primes primes))))

(defn sieve-of-Eratosthenes [n]
  (loop [primes (range 2 n)
         index 0]
    (let [num (nth primes index)]
      (if (<= num (Math/sqrt n))
        (recur (remove-non-primes num n primes) (inc index))
        primes))))
```


Thanks for joining me on this wild ride.


Best,

Merl
