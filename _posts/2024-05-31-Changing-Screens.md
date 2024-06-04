---
title: "Changing Screens"
mathjax: true
layout: post
categories: media
---


In our ClojureScript Tic Tac Toe game, we have a simple yet crucial function called handle-submit. 
This function is pivotal in managing our game's state, particularly when transitioning from the game 
setup phase to the actual gameplay. Let's dive into what this function does and why it's important.



Here's the function we're talking about:

    (defn handle-submit [e]
        (.preventDefault e)
        (swap! game-state assoc :new-game false))

At first glance, it might seem like a small piece of code, but it performs two important tasks. 
Let's break it down step-by-step.

### Preventing Default Behavior
The first line of the function is:


    (.preventDefault e)
In web development, many HTML elements come with default behaviors. For instance, when you 
submit a form, the default behavior is to reload the page. This is where preventDefault comes into play. 
Calling preventDefault on an event prevents this default action from occurring.

In our context, when the form is submitted, we don't want the page to reload. Instead, 
we want to handle the form submission ourselves within our ClojureScript code. By using preventDefault, 
we stop the form from triggering a page reload, allowing us to manage what happens next seamlessly.

Updating the Game State
The second line of the function is:


    (swap! game-state assoc :new-game false)

This line updates our application's state, specifically the game-state atom. Here's what it does in detail:

`swap!` This function is used to update the value of an atom in a thread-safe manner. 
It applies a function to the current value of the atom and updates it with the result.
game-state: This is our atom that holds the current state of the game.
assoc :new-game false: The assoc function is used to associate a new value with a key in a map. 
In this case, we set the :new-game key to false.
In simpler terms, this line of code tells our application that a new game is no longer being set up, 
and it's time to transition to the gameplay phase.

### Why Is This Important?
The handle-submit function is essential for managing the flow of our game. Here’s why:

Control Over Form Submission: By preventing the default form submission behavior, we ensure that our application's state management logic takes precedence. This allows for a smoother user experience without unnecessary page reloads.

State Transition: Updating the :new-game state is crucial for transitioning from the setup phase (where players choose their options) to the actual game. This update triggers the necessary changes in the UI, enabling the game board to be displayed and the gameplay to begin.

### Putting It All Together
In our Tic Tac Toe game, the handle-submit function plays a crucial role in controlling the game's state and ensuring a smooth transition from setup to gameplay. By preventing the default form submission behavior and updating the game-state atom, this function helps maintain a seamless user experience.

Next time you see a form in a web application, remember the preventDefault method and how it can be used to gain control over form submissions. And in the context of our game, appreciate how a small function like handle-submit can make a significant impact on the overall flow and user experience.

Best, 

Mer
