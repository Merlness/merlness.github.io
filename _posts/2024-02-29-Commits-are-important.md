---
title:  "Commits are Important"
mathjax: true
layout: post
categories: media
---


I know this is obvious but this has happened a few times and I wanted to stress the importance of committing. I’m sure many significant others would agree with that, it is also important for our code.

See I had made a functionality before where I could print out all of my previous moves and it was no problem. 

Since I have been refactoring my code as well as my database I had to get creative with how I was going to do what I did previously.

I had deleted my previous function because it was no longer necessary. However I needed to do something similar and I no longer had it.  I knew there were useful bits of information that would help me accomplish this task.

Then I went to my previous commits and found exactly what I needed.

```clojure
(defn print-previous-moves [input-id]
(let [game-data (data/game-history-by-id input-id)]
(run! (fn [game]
(println "Player" (if (board/player1? (:moves game)) "2" "1") "made a move:")
(print-board (:board game)))
game-data)))

```
Here I can use run! For the purpose of side effects. So I wanted to use it again in my new function that would behave similarly. This time I would have to use a vector of vectors in order to print out my previous moves.

```clojure
(defn print-previous-moves [game-data]
 (run! (fn [game]
         (println "Player"
                  (if
                    (even? (count (filter string? game)))
                    "2" "1") "made a move:")
         (print-board game))
       game-data))
```


As you can see it is quite similar, and I was able to save some time by looking at my previous solutions that had to be tweaked rather than coming up with a brand new approach. I suppose there could be a negative to this as well, however currently I am focusing on the positive.

So committing can help you find previous solutions or bring you back to a state in which your code was actually working.

Best,

Merl
