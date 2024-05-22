---
title:  "TTT Online"
mathjax: true
layout: post
categories: media
---
I have this new story I need to complete and I wanted to provide a brief overview of what I needed to do. As I go through this I am sure it will change and I will miss pivotal details but this is mainly to help me map out what I want to do.

I feel like in the back of my mind I knew I had to place my tic tac toe game online.

Now I begin this process.

## Conversion

The first step is to make our Clojure code compatible with ClojureScript by converting .clj files to .cljc files. This allows the same file to be used by both Clojure and ClojureScript,  working with the code that is shared between the backend and the frontend.

One thing I have noticed is that my first step is usually my most challenging. I faced this problem changing from Leiningen to deps.edn. The other part was connecting Clojure to Java. As well as learning how to connect my tic tac toe to a GUI. I think you are starting to get the picture. The start has almost always been my biggest challenge.

From what I have seen it seems like certain cases might be as simple as changing the literal nale file from `example.clj` to `example.cljs`. However I have seen that there might be cases where I might need to rewrite my code to work in Clojure and in ClojureScript.
This makes me unsure how much I need to refactor.

### Why?

Why would I need to convert to ClojureScript? It is because ClojureScript compiles to JavaScript, and “JavaScript helps the users to build modern web applications to interact directly without reloading the page every time.”



## React and Reagent.

React is a library for building user interfaces. In the world of ClojureScript, we use a nifty library called Reagent, which makes it super easy to create React components with ClojureScript.

From what I have seen React provides a way to break down theUI into small, reusable pieces called components. Each component handles its own state and logic, making our code easier to manage and understand. React also uses something called the virtual DOM to keep track of changes. Instead of updating the whole web page, React only updates the parts that need to change, which makes it faster and smoother.

This is what I can gather from just reading about it. It will be interesting to work with this as well.

Creating the components I can combine them back into the static webpage. Of course these will be combined into HTML where I can run it in my browser eventually.

I know I simplified this too much, and there will be some glaring hole I missed but this is what I have found so far.

Clojure code→ ClojureSCript→ React through Reagent→ HTML. That sounds easy enough. Now it’s time to begin converting.

Best,

Merl
