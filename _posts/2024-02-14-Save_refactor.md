---
title:  "Refactor Save"
mathjax: true
layout: post
categories: media
---

I am incredibly happy because I have accomplished what I wanted to do for many weeks, that is save the game!

I can save the a game mid game, cancel, and resume normally by putting in the id or by the computer asking me. I can resume any previous game that is incomplete as well, Human vs human, human vs AI, AI vs AI it doesn’t matter.

That is the wonderful thing. The interesting thing is I need to refactor how I save. It takes too much space and can be done better.

```clojure
[{:game-id 94,
:player-1? false,
:board ("X" 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27), 
:player-1 {:kind :human, :token "X"},
:player-2 {:kind :ai, :token "O", :difficulty :hard}}


{:game-id 94,
:player-1? true,
:board ("X" 2 3 4 5 6 7 8 9 10 11 12 13 "O" 15 16 17 18 19 20 21 22 23 24 25 26 27),
:player-1 {:kind :human, :token "X"}, :player-2 {:kind :ai, :token "O", :difficulty :hard}}]
```

There are two things I need to fix.

First these maps are saved in a vector, and they both contain the game id. These should be saved into a map instead of a vector and their key should be their game-id.

Second, I need to save my board with less data, so I should specify what kind of board it is and contain a list of which moves we played in what other. I will provide an example to demonstrate.

```clojure
{94
{ :player-1? false
:player-1 {:kind :human, :token "X"},
:player-2 {:kind :ai, :token "O", :difficulty :hard}
:board :3x3x3
:moves [1 14] }
}
```

As you can see These are the same 2 moves but one is more succinct and takes up was less space!

I will look to implement this new change in the future.

Best,

Merl
