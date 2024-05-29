---
title: "New Syntax in ClojureScript"
mathjax: true
layout: post
categories: media
---


I have been learning more and more about ClojureScript, Reagent, and Hiccup. I might go over Hiccup later but I wanted to focus on the new syntax I have been using.

What is great is, I have a baseline of code to work with and I have been trying to translate my HTML to Hiccup and Reagent components.

```clojurescript
(defn group-buttons [grid side index]
  [:<>
   [button (get grid index)
    #(update-grid index)]
   (new-line side index)])


(defn make-grid [grid side]
  [:div
   (for [index (range (count grid))]
     ^{:key index}
     [group-buttons grid side index])])
``` 
Here are some parts I wanted to focus on.
# Anonymous
I choose this first because I am used to this, but it is in a new setting.
#(update-grid index)]
I place this function at the beginning because it will update based on change. If I did not have this, then all of the updates would happen initially. This allows the function to work based on change, like a click or a refresh.
Since we are here, lets move on to
# Fragments
In the group-buttons function, I use the :<>" syntax. The :<>" syntax is a shorthand for React fragments. React fragments let you group a list of children without adding extra nodes to the DOM. This is useful when you want to return multiple elements from a component without wrapping them in an unnecessary div.
Basically, since I call `update-grid` and `new-line` I can place them as siblings instead of making a new div. They call all exist in the previous `[:div ..]` vector.


# Carrot?
	^{:key index}


The ^ syntax is used to attach metadata to a form. In this example, ^{:key index} is attaching a :key metadata to the group-buttons vector.
Keys help identify which items have changed, been added, or removed. This improves performance by allowing Reagent to re-render only the components that have actually changed. By providing a unique key (index) for each group-buttons component, we help Reagent efficiently manage updates.


# Vectors
	[group-buttons grid side index]
As you can see this `group-buttons` is a function and it is being called, but it is a vector instead of in its usual `()`. This is because vectors are a clear and concise way to define components.
So when I, or a computer, see a vector with a function I know it is a Reagent component. This also stays in the Hiccup style.

Hopefully this shows how the new syntax is affecting how I code in clojureScript.


Best,


Merl 
