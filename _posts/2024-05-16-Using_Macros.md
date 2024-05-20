---
title:  "Using Macros in testing"
mathjax: true
layout: post
categories: media
---

Testing higher-level implementations can be challenging without worrying about the 
lower-level code. Recently, I explored using macros in Clojure to help my 
testing process. Here's how it worked out.

Macros in Clojure offer powerful capabilities, allowing you to 
write code that writes code. This is particularly useful for creating reusable test 
templates. The symbols # and ~ play crucial roles in macros:

    # is used to generate unique symbols, avoiding naming conflicts.
    ~ is used to unquote expressions, allowing you to evaluate them within the macro.

Why I am choosing this right now instead of just using a function, is if my tests
fail with a macro, then the error will appear exactly where the error happened. 
If I create a function in the same way without the macros, then the error will 
appear on the function itself and where where your test failed. 

```clojure
(defmacro should-be-tictactoe-form [response]
  `(let [response# ~response
         body# (.getBody response#)]
     (should-contain "<title>Tic Tac Toe</title>" body#)
     (should-contain (str "<body>" gh/generate-tictactoe-form "</body>") body#)
     (should= 200 (.getStatusCode response#))))
```

This macro checks that the response contains the correct title, body content,
and status code.

The macro also allowed me to write concise and clear tests for my handler:

```clojure
(with handler (sut/->TheHandler))

(it "creates an empty tic tac toe form on an empty request"
    (let [request (Request. "GET" "/tictactoe")
          response (.handle @handler request)]
      (should-be-tictactoe-form response)))

(it "creates an empty tic tac toe when newGame is specified"
    (let [request (doto (Request. "GET" "/tictactoe")
                    (.setBody "newGame=true"))
          response (.handle @handler request)]
      (should-be-tictactoe-form response)))
```

    (with handler (sut/->TheHandler)): Initializes the handler.
    (should-be-tictactoe-form response): Uses the macro to verify the response.

By using macros, I focused on higher-level behavior without getting bogged 
down by lower-level details. This approach made my tests more readable and
maintainable.

Using macros to test higher-level implementations made my tests more efficient 
and easier to maintain. And it allowed me to not repeat myself in my tests, 
while being able to identify exactly where my tests might fail. If you're new to testing, 
maybe macros could help. 

Best, 

Merl
