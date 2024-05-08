---
title:  "Tests are Great"
mathjax: true
layout: post
categories: media
---

That is it really, tests are great. In the past, especially when learning TDD I have yelled out an cursed the proccess, however I am maturing and turning a new leaf.

Why you may ask?

Well one thing I do really appreciate about this apprenticeship is nothing is really wasted. Meaning the stories I complete are beneficial, and specifically relate to the conceptual things I have learned before.

Let's take the analogy of basketball. I may have the knowledge that there is dribbling and shooting in basketball. However, just because I know that does not make me a great player.

In order to be a great player I need to practice and put myself in a position to play and learn from my mistakes. Watching the NBA alone will not make me better.

How does this apply?

Well, I have had the understanding that testing is good. However, when I have good tests this gives me freedom. This provides freedom where I know, I can change my code and as long as my tests pass, I can rest easy.

This week, I have been in the process of refactoring my old Tic Tac Toe code, as well as my Server code. My server code was not tested well. So when it came to having to refactor my code, I had to change many tests as well. This was quite tedious as one can imagine.

Now I moved to my tic tac toe code. I followed TDD pretty well, and when it came to make changes my tests still passed which allowed me to make many changes easily.

Here is an example I am referencing.

```Clojure
(it "tests print a tie in a 3x3 "
  (should= "Womp, its a tie\n"
           (with-out-str
             (sut/print-end {:player-1 "X" :player-2 "O" :size :3x3 :moves [1 2 3 5 4 7 8 9 6]}))))

(it "tests print the end of x winning 4x4"
  (should= "O is the winner!\n"
           (with-out-str
             (sut/print-end {:player-1 "O" :player-2 "X" :size :4x4 :moves [1 3 5 4 9 6 13]}))))
```

These test are focused on printing the end.
I have a suspicion I may have to change a few parts in my UI to I decided to change my original funciton into a multimethod so my Web Tic Tac Toe game might possibly use this function/multimethod without printing to the command line.

```clojure
(def ui-type (atom :cui))

(defmulti print-end (fn [_game] @ui-type))
(defmethod print-end :cui [game]
  (let [player-1 (board/player-token (:player-1 game))
        player-2 (board/player-token (:player-2 game))
        size (:size game)
        moves (:moves game)
        board (game/convert-moves-to-board player-1 player-2 size moves)]
    (println (endgame-result board player-1 player-2))))
```

I very easily changed my previous funciton to this. Once I ran the tests, I say they still passed and I moved forward. Now I have the ability to create my own multimethod in my Web Tic Tac Toe, and implement it in my own specific need without the original Tic Tac Toe library knowing about it.

Again, this was something I knew however I found it interesting that I am now benefitting from the practice of TDD.

Best, 

Merl
