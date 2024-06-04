---
title: "Meaningful Buttons"
mathjax: true
layout: post
categories: media
---

When I was working on my Tic Tac Toe game using ClojureScript, I realized that having buttons that do nothing more than
look pretty just wouldn't cut it. I needed these buttons to actually do something meaningful. That's where the
radio-option function came into play. Let me show you how this little function transformed my game.

### The radio-option Function
First off, here's the radio-option function:

```clojure
(defn radio-option [id option-name value label on-change-fn]
      [:div
       [:input
        {:type      "radio"
         :id        id
         :name      option-name
         :value     value
         :on-change on-change-fn}]
       [:label {:for id} label]])
```

This function is a handy way to create reusable radio buttons with:

id: A unique identifier for each radio button.

option-name: Groups radio buttons together.

value: The value that the button represents.

label: The text that appears next to the button.

on-change-fn: What happens when the button's value changes.

### Making My Buttons Interactive
The radio-option function allowed me to make the buttons interactive and meaningful. Here's how I used it in my form:

```clojure
[:form {:on-submit #(handle-submit %)}
 [:p "Please choose which board you want to play with"]
 [radio-option "3x3" "size" :3x3 "3x3" #(swap! game-state assoc :size :3x3)]
 [radio-option "4x4" "size" :4x4 "4x4" #(swap! game-state assoc :size :4x4)]]

```

This form lets users pick the board size for their game. Each radio-option updates the game state with the chosen size.

Managing Game State
I manage my game's state using an atom:

```clojure
(def default-game-state
  {:game-id  1
   :player-1 {:kind :human :token "X"}
   :player-2 {:kind :human :token "O"}
   :size     :3x3
   :moves    []
   :new-game true})

(defonce game-state (r/atom default-game-state))
```

This state keeps track of everything: the players, board size, moves, and whether we're setting up a new game.

### Connecting It All

When someone picks a board size, the corresponding radio button’s on-change function gets triggered. This function
updates the game-state atom:

```clojure
[radio-option "3x3" "size" :3x3 "3x3" #(swap! game-state assoc :size :3x3)]
[radio-option "4x4" "size" :4x4 "4x4" #(swap! game-state assoc :size :4x4)]

```

These buttons dynamically change the :size in my game-state, making the user’s choice actually matter.

### Submitting the Form

To top it off, the form's on-submit handler, handle-submit, stops the page from reloading and updates the game state to
show that setup is done:

```clojure
(defn handle-submit [e]
      (.preventDefault e)
      (swap! game-state assoc :new-game false))
   ```
The radio-option function might look simple, but it really helped me clean things up and connect everything smoothly. 
It made my buttons super interactive and meaningful. Every time a player picks an option, it updates the game’s state.

These radio buttons let players set up their game just the way they want. It’s a small addition, 
but it makes a big difference in making the game more user-friendly and engaging.

Best, 

Merl
