---
title:  "All About the Primes"
mathjax: true
layout: post
categories: media
---


I know I have written about primes before but I have 2 new updates.

Initially when I was trying to solve for primes themselves I wrote an inefficient way to do this.

I had the number itself being divided by a range starting from 2 to itself. I don’t even want to write it up here, it was so slow. Thankfully it worked, however it got my answer in about 40 seconds.

Next I got a little bit of help and instead of dividing my possible prime number by every number between 2 and one less of the possible prime number I just divided it by the primes I had collected up to that point.

This was brilliant, of course this makes sense! That’s why prime factorization works because no matter what you will always get primes at the bottom. So you just need to check if it is divisible by primes only! This cut my solution by x10 and it was about 4 seconds!

```clojure
(defn prime? [num primes]
 (not-any? #(divisible? num %) primes)
 )
```

I thought this was the end of it, thanks to Billy Mays there’s more! It is still built off of the primes logic, but we do not need to divide by every prime in the list.

We only have to divide by up to the square root of the possible prime itself. Why?
Our possible prime is divisible by 2, then 2 is a prime that is smaller than the square root of our possible prime! Therefore the largest prime that is a quotient of our possible prime is the square root of our possible prime! Using this logic we cut down our runtime to 0.8 seconds!

```clojure
(defn prime? [num primes]
 (let [primes<sqrt (filter #(<= % (Math/sqrt num)) primes)]
   (not-any? #(divisible? num %) primes<sqrt)))


```

From 40 seconds to 0.8 seconds is a major reduction in time, about 98% reduction time.
This is another lesson learned in writing not just code that works, but code that works smarter.

Who knows what you could be saving in that 98% reduction time.

Merl
