---
title: "AI is thinking"
mathjax: true
layout: post
categories: media
---

I am proud of the progress I have made, but there is always more to be done.
And ways to get better.

Currently, I have been finding was to make my TTT better. My AI move button was decently
designed. It does show up only when it is an AI player's turn. It also goes away
when the game is over.

However, there are some buggy features.

### First

The random numbers are instantaneous moves, while the hard/minimax moves
take some time to calculate. This is not the most fun user experience.

I have heard ATMs, and other machines/calculators add a delay and noises to their processes
so the consumer has more trust in the machine. Because if it provides a sense of calculation.
Even if the program's worked quickly, people trust the noise and slight delay more.

So I added a `js/setTimeout` for 500 ms. This allows the random guesses by
the Easy AI to take longer, so when the Hard AI makes a move it doesn't seem as long.

### Second

When the AI button was clicked it stayed on until it was "done" making it's move.

So if the Hard AI was taking a long time, then the client had the opportunity to
keep pressing the AI button and produce multiple moves at the same time.

This was a trickier solve.

I decided to add another key to my game map `:ai-thinking false`

This was because I wanted to remove the AI button while it was "thinking".
This key allowed me to change to check the state and respond accordingly.

```clojure
;part of larger function AI-button
(if ai-thinking
  [ai-thinking-message]
  [:div.flex-center
   [:button
    {:class    "ai-move-btn"
     :on-click handle-ai-move-click}
    "AI Move"]])

(defn handle-ai-move-click []
      (swap! game-state assoc :ai-thinking true)
      (js/setTimeout
        (fn []
            (update-grid -1)
            (swap! game-state assoc :ai-thinking false))
        500))

(defn ai-thinking-message []
      [:div.flex-center
       [:p "The AI is thinking..."]])
```

So I changed the logic in my AI button to check the game-state and see if 
AI was thinking. If it was it sent a message out, if it was not then it produced the button. 


Maybe there is a better way than adding more to the game-state. But so far I like this solution. 

Until Next time. 

Best, 

Merl
