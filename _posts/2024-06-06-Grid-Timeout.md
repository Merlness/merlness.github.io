---
title: "Grid Timeout"
mathjax: true
layout: post
categories: media
---

Today I have been focusing more on Internal Dev stuff. I am unsure what I can say and 
not say here. But I did have a little but of time to work on fixing my Tic Tac Toe
game. 

So here are the small changes I was able to make. 

Another small bug that I had, was the board had buttons that responded to a click.
They responded to a click whether the player was AI or human. If it was human it would check
if it could make a move there and update accordingly, for AI clicking just 
allowed the AI to make a move where it wanted. 

Now if you read the previous post, you will know that I had problems with the AI 
button because one could press it multiple times to make the game do multiple moves at once. 

I fixed that problem for the AI button, but my board buttons still had the same flaw. 

So with the little time that I had a made a fix. 


```clojure
(defn human-or-ai [player]
      (let
        [moves (:moves @game-state)
         [current-player _] (get-players @game-state moves)]
        (= (:kind current-player) player)))

(defn human? [] (human-or-ai :human))
(defn ai? [] (human-or-ai :ai))
```

I began noticing I was using this logic multiple times, so I decided to refactor. 


I changed whatever I needed to and added more tests, but the fix was simpler that I expected it to be. 

```clojure
(defn button [value index]
  [:input {:id       (str "-my-button-" index)
           :type     "button"
           :value    (if (number? value) "" value)
           :on-click #(when (human?)
                        (update-grid index))}])

;this below was the previous function
(defn button [value index]
      [:input {:id       (str "-my-button-" index)
               :type     "button"
               :value    (if (number? value) "" value)
               :on-click #(update-grid index)}])
```


Now, with my refactoring I can just add a simple when statement to fix the bugs that I had previous. 


So Now I can confidently say that you canno keep clicking any button and make the game 
make multiple moves!

Best, 

Merl
