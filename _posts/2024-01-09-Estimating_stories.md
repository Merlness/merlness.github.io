---
title:  "Estimating Stories"
mathjax: true
layout: post
categories: media
---

Since this is an amalgamation of thoughts throughout this process I figured I would talk about stories.

Not the wonderful ones we heard about as kids but the wonderful ones in software. The tasks that must be completed depending on your team environment.

Have weekly stories which are great for me. I get weekly feedback on my work, and am able to pivot on certain things quickly. As someone who is learning, this is a gift.

The part where things can be challenging is estimating how long each story will take. I have the control to say it will take this long with all tasks, even ones I am unfamiliar with. This is another process which is quite useful for both parties. This emulates what businesses and companies do when they negotiate. It is up to the estimator to be correct for both parties' sake.

### Catch-22

It is a catch–22. Obviously you do not want to underestimate the story  because if the story takes more time than you thought then, it creates long nights or disappointed clients. You do not want to overestimate the story because then the client could potentially be taken advantage of or they could feel that way.   It is natural when you have multiple stories to estimate incorrectly in either direction for at least one story.

With all of this being said, I need to estimate better. One part I did not take into consideration was not just basic refactoring my code into smaller more comprehensible parts, but to refactor into a whole nother logic for my code.

My estimations have been on the completion of the code, which could be better as well, but not on make the code change and be better. I have been focusing on comlpetion not improvement.  

### Hammer

For example let me present you with my hammer:

```clojure
(defn ai [difficulty]
 (loop [grid [1 2 3 4 5 6 7 8 9]
        x-turn? (ui/start-first?)]
   (let [move (difficulty grid)
         new-grid (grid-after-comp x-turn? grid move)]
     (ui/print-board new-grid)
     (if (not (ui/endgame-result new-grid))
       (recur new-grid (not x-turn?))
       (ui/print-end-computer new-grid)))))

```

The most important idea to take away from that function is, I like recursion in clojure. Working in python for so long, I like my many loops and this is the equivalent of them.

Since I have been underestimating the stories I have not been able to use a different tool to create the software differently. Don’t get me wrong, the software works well. However it could be cleaner and more efficient.

I just need to give myself more time to change the code to look something more like this:

```clojure
;(let [game {:board [1 2 3 4 5 6 7 8 9]
;            :mode :pvp ; :pvc :cvc
;            :x    :human
;            :o    :hard
;            :turn :x ; :o
;            }])
```
I don’t know how to do this yet but it would be great to spend some time to be able to make my code in Clojure look in a similar form to what is above.

All in all it is great to have such quick feedback, however since I am in control of estimating the stories I need to provide myself a better cushion so I can change the code and not just complete it.

Best,

Merl
