---
title:  "Hashmaps in Clojure 2"
mathjax: true
layout: post
categories: media
---

Today I have learned something very powerful that I wanted to share with you!

Did you know you could pass a map into a function and get the key values?

This is brand new information! for me, let me give you this example:

```clojure
(defn print-person [person]
  (println (:name person) "is" (:age person) "years old."))
```
In this function, `person` is a hashmap that contains information about a person. The function `print-person` takes this hashmap as an argument and uses the keys `:name` and `:age` to retrieve the relevant information.


### Refactoring for Efficiency

Refactoring has been the story of my life for the past few weeks.

Take a look at this old code:
```clojure
(defn game-over? [grid token-1 token-2]
(or
       (token-wins grid token-1)
       (token-wins grid token-2)
       (tie grid))

```

It was very simple, however I had to pass in the board and the tokens.

Now I only have to pass in a map called `game` and the new functions will do the rest.

```clojure
(defn player-token [player] (:token player player))

(defn game-over?
  ([{:keys [board player-1 player-2]}] (game-over? board player-1 player-2))
  ([grid player-1 player-2]
   (let [player-1 (player-token player-1)
         player-2 (player-token player-2)]
     (or
       (token-wins grid player-1)
       (token-wins grid player-2)
       (tie grid)))))
```

This allows me to get the values that are important easily.
This also allows my game loop to be efficient and readable.


As I continue to refactor and improve my code, I've stumbled upon new challenges and learned new things. That’s the beauty of programming - there’s always something new to learn and a better way to do things.

Best,

Merl
