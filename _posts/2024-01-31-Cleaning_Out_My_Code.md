---
title:  "Cleaning Out My Code"
mathjax: true
layout: post
categories: media
---

As you may have noticed I have been in the process of replacing my previous code.


## No, no, yes?

I may have done a no no and built my new code alongside my old one, before getting rid of my old code. The faux pas is that instead of slowly incrementally changing my previous code and tests at the same time. I just built a new system like the vines growing around the trees.

This caused my code to bulk up, as well as litter the white space with many comments and commented out code.

Through this tomfoolery I was successful in creating a new game within my previous code. This new code is almost fully functional, there are a couple of bugs but it is solid.

As you saw in my previous posts I used multimethods and a single game loops to play the game in any type of mode you could think of.


## Next Step

Now is where the “Winter Cleaning” takes place. I went through my new code marked what functions were being used throughout the system and began the process.

One of the many things I have learned is `in order to be able to delete a function it needs to be grayed out`. In order to get a grayed out function one needs to get rid of the locations it is being called.

I began in my main file and commented out the beginning of my original code. Since this is the head of the snake, only a few tests are calling the main function and related functions so I commented out those specific tests and deleted them. That grayed out the original main game functions so I deleted them.

Then I went to the 3 game loops I had used for the multiple types of games and began the same process. I used a snake before to mention this process but this is more like pruning a tree from it’s useless branches.

## Bug Found

This allowed me to find one of the major bugs that was bothering me. In my new system Minimax was not functioning perfectly. There were 2 situations that were disturbing me.

The first is, I played a game on my 3D grid and the game had a chance to beat or block me and it chose neither. This is odd because it should at least block if not win.

```clojure
(defn value [game-board depth ]
 (cond
   (board/x-wins game-board ) depth
   (board/o-wins game-board ) (- depth)
   :else 0))


(defn value-2 [game-board depth maximizing-token minimizing-token]
 (cond
   (board/token-wins game-board maximizing-token) depth
   (board/token-wins game-board minimizing-token) (- depth)
   :else 0))

(defn min-or-max-2 [board depth maximizing? maximizing-token minimizing-token]
 (let [actions (filter number? board)]
   (if (board/game-over? board maximizing-token minimizing-token)
     [(value board depth)]
     (extremity actions maximizing? board depth maximizing-token minimizing-token))))
```
Remember when I told you I built my new robust and simple program along my previous one.

Well I changed minimax according to what I thought was a new and improved way of fixing my previous problem. Which was Minimax being aware of “X” and “O”, and the tight coupling that produced. So I provided the token into every new function and copy, pasted, and edited my previous code.

By the way I hope you can see the clever naming scheme for my new and improved functions-2.

One of my mistakes was forgetting to change the `value` in my `min-or-max` function to `value-2`, and as you can see value is tightly coupled to where X or O wins.

This is what caused my previous problem. I created more tests after deleting my previous code and checking the new scenarios.

It fixed the problem I had, but I have one more. Maybe I’ll go over that tomorrow.

Best,

Merl
