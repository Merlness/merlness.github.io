---
title:  "Wonderful Condition(al)s"
mathjax: true
layout: post
categories: media
---

Wonderful condition(al)s

Today I worked on finishing up Tic Tac Toe in Clojure. This included writing the main, computer, but most importantly the minimax file. They are all tied together, and the biggest piece like I mentioned was minimax. 

Instead of getting into all of the details I wanted to highlight today’s favorite functionality of Clojure!

Drum roll please ……. That is the power of the `let []` statement. Primarily the ability to have conditionals in the statement.

`Let` me demonstrate:

```clojure
(let [[compare evaluate token] (if maximizing?
                                [> minimize "X"]
                                [< maximize "O"])
     new-game-board (ui/place-xo game-board action token)]

```

This snippet is part of a larger function, let me focus on my favorite parts.

First, the ability to place a conditional in this statement allows for many possibilities. Primarily it localizes the logic for all to see.  I used this new skill while creating my main and computer files. I was stuck on a few problems and was able to fix them with this new tool. It also provides different pathways to represent what is happening with that boolean maximizing.

Secondly, is the vector that can be used depending on the boolean. Previously my code had multiple variations depending on whether we were maximizing or minimizing. The variables `compare`, `evaluate`, and `token` are assigned values in a single statement, improving clarity and readability
This allows the code to be readable, avoids duplication, and is just concise.  

Slowly I am learning and becoming more comfortable with Clojure.

Best,

Merl
