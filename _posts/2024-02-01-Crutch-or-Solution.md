---
title:  "Crutch or Solution?"
mathjax: true
layout: post
categories: media
---

As you read last time I have been going through my old code and finding bugs.

As of right now, fingers crossed, I have found my last major one.

### The Bug

The bug? When Minimax, my unbeatable AI, is in a lose lose situation it just “gives up” and chooses 6.

Example:
```clojure
(it "selects blocking move"
 (should= 7 (sut/next-move [
                               "X" "O" "X"
                               "O" "X" 6
                               7 8 9


                               10 11 12
                               13 14 15
                               16 17 18


                               19 20 21
                               22 23 24
                               25 26 27] "O" "X")))
```
In order to make the time realistic in 3d Chess, I limited the number of moves my program could do. Unless something exciting happened this is what the program resorted to just alternating turns on the next available position. That is not a bug that is a consequence of efficiency.

Both X and O are optimal players, but now it is O’s turn.

The bug happens when eventually we get to a situation like this. If player X is an optimal player, O loses. Ideally, a reasonable person would block 7 or 9 and hope for the best or be proud they put up a fight. However, my lowly program gives up and places 6. Since the algorithm is optimal,  it plays optimally for the other player as well.  Since there are multiple losing conditions, this leads to the “giving up” we see.

Don’t get me wrong, if X had only one way to win O would block. However, since we are in this position it does not.

I wasn’t sure how to fix it in the algorithm so I tried to help out

### Crutch?

I used previous logic. This was used when I created a crutch for my 4x4 game.

At that time my algorithm went through every possible combination before making a move. I ran this program for the weekend and still wasn’t able to get the first move. Clearly something had to be done. Now, instead of going through every possible position like before, I limit it’s depth of moves by how large the board is.

The first time I tried to resolve this however I had the computer take up the corner or middle positions, and win or block if it had the chance. It worked but it was not pretty, and I had to get rid of it when I began building my 3D game.

I have been learning a lot, but one of the things I am grateful for is that I have been making commits. Because of that I was able to look at my old commit and retrieve the previous logic.

### Solution?

Now we are here.

```clojure


(defn checks-end-move [board available-moves token]
 (first (filter #(board/winner?
                   (ui/place-xo board % token) token)
                available-moves)))


(defn win-or-block [board maximizing-token minimizing-token]
 (let [available-moves (filter number? board)
       winning-move (checks-end-move board available-moves maximizing-token)
       blocking-move (checks-end-move board available-moves minimizing-token)]
   (or winning-move blocking-move)))


(defn helper-3d [board]
 (let [available-moves (filter number? board)
       number-available (count available-moves)]
   (when (> number-available 25) (some #{14} available-moves))))


(defn next-move [board maximizing-token minimizing-token]
 (or
   (helper-3d board)
   (win-or-block board maximizing-token minimizing-token)
   (find-next-move board maximize maximizing-token minimizing-token)))
```
I took 2 of the previous functions and used them again. However this time I added the `maximizing-token` and `minimizing-token` as arguments to have more control and less coupling.

This is great, it will win or block if possible and in that order!

I wanted to briefly mention `helper-3d`. If you ever find yourself in the position of playing 3D Tic Tac Toe, the ideal position is 14 wherever you go first or second. Even if you go second (@14) and both players play optimally, whoever controls that position wins. This is so because you can win in every direction. Any move you put next even to block is a move to give you a winning possibility. So I created this to have the limited depth minimax be more optimal.

I showed the last function to show you how these 3 new functions are combined with my minimax called `find-next-move`.

I hope you enjoyed this. Until Next time

Merl
