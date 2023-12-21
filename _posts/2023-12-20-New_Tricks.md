---
title:  "New Tricks in Clojure"
mathjax: true
layout: post
categories: media
---

I am getting more comfortable with Clojure. For some reason I prefer functions, so writing in a functional language is nice.

I am learning new tricks that clojure can do which is quite impressive. Following the practices of TDD, it is necessary to test everything. Before in Python when I wanted to test an input from the user, or even what a printing would produce I would give up because I couldn’t find a nice and easy way to do this.

Now in Clojure you can test anything.  Even inputs and printed information.

Here I have a test for the function `update-board` that takes the board initially with a boolean, and returns a new board with an X or O in its place. Now the point of update board is that you get a user input to replace a number and place your X or O into the board. How do you test user input?

In Clojure `read-line` is the built-in function that asks for the input. `with-redefs` is the function that can allow us to test whether the input works or not. `with-redefs` lets you temporarily change the definitions of functions within a specific block of code, then automatically switches them back to their original forms when you're done.


```clojure

(it "updates board for X"
 (with-redefs [read-line (fn [] "1")]
   (should= ["X" 2 3 4 5 6 7 8 9]
            (sut/update-board [1 2 3 4 5 6 7 8 9] true))))

```

This allows us to test the code that uses an input successfully. That is pretty incredible.


Were also able to test the input twice using a new function `with-in-str`. In this test pressing 1 for player X then 2 for player O, allows us to test if the function would change the board in the correct manner. `with-in-str` is also nifty because it  lets you temporarily redirect a function's input to come from a specific string, instead of the usual keyboard input.

```clojure
(it "updates board after two moves"
 (with-in-str "1\n2\n"
   (should= ["X" "O" 3 4 5 6 7 8 9]
            (-> (sut/update-board [1 2 3 4 5 6 7 8 9] true)
                (sut/update-board false)))))

```

Clojure is a pretty powerful language. I’m excited to continue to learn more and more.

Best,

Merl
