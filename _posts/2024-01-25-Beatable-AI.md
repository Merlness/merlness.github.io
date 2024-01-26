---
title:  "Beatable AI"
mathjax: true
layout: post
categories: media
---

Bold statement incoming.

I don’t think you can make an unbeatable AI for a 3x3x3 game. Whoever goes first, must win if the player is playing semi optimally. There are too many winning conditions.

```clojure
(
; 1 | 2 | 3     10 | 11 | 12    19 | 20 | 21
; 4 | 5 | 6     13 | 14 | 15    22 | 23 | 24
; 7 | 8 | 9     16 | 17 | 18    25 | 26 | 27)
```

Let’s say player 1 goes to spot 14, after playing 3D Tic Tac Toe in my head I think this is the optimal starting position. You can win in every direction from here.  

```clojure
(
; 1 | 2 | 3     10 | 11 | 12    19 | 20 | 21
; 4 | 5 | 6     13 | X | 15    22 | 23 | 24
; 7 | 8 | 9     16 | 17 | 18    25 | 26 | 27)
```

Now player 2 has options, what would you choose? I think a corner would be best, of course you could choose a side square but a corner makes the most sense. So O chooses 1.

```clojure
(
; O | 2 | 3     10 | 11 | 12    19 | 20 | 21
; 4 | 5 | 6     13 | X | 15    22 | 23 | 24
; 7 | 8 | 9     16 | 17 | 18    25 | 26 | 27)
```

If I am X I want to try and win now, but not allow O to have a winning possibility right now. So I make O go away from where it is located now. I choose 11.

```clojure
(
; O | 2 | 3     10 | X | 12    19 | 20 | 21
; 4 | 5 | 6     13 | X | 15    22 | 23 | 24
; 7 | 8 | 9     16 | 17 | 18    25 | 26 | 27)
```
Of course O has to choose 17.

```clojure
(
; O | 2 | 3     10 | X | 12    19 | 20 | 21
; 4 | 5 | 6     13 | X | 15    22 | 23 | 24
; 7 | 8 | 9     16 | O | 18    25 | 26 | 27)
```
Now X can choose 2. Now X has 2 winning conditions20 or 26, O can block one but it cannot block both.


```clojure
(
; O | X | 3     10 | X | 12    19 | O | 21
; 4 | 5 | 6     13 | X | 15    22 | 23 | 24
; 7 | 8 | 9     16 | O | 18    25 | X | 27)
```

Game X!

Merl
