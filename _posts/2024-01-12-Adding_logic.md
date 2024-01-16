---
title:  "Adding Logic"
mathjax: true
layout: post
categories: media
---


If you have been reading along you know that I have been working on Tic Tac Toe.

Recently I tried upscaling my previous game to a 4x4 grid, winning by getting 4 in a row. 
You saw me update my winning conditions. That worked well for player vs player, and it worked well for anything regarding an easy computer, which is all random.

The problem is when it comes to minimax. Which is my logic for the unbeatable AI. I tried running the unbeatable AI to make its first move. I let it run for over a day. It was not able to produce what the best move would be.

I ran tests to see if minimax worked. Then I slowly started taking away moves to see how long it would take.


I eventually came to this test to see how long it would take the X computer to choose 16.


1 2 3 X
O 6  7 X
O 10 11 X
O 14 15 16

It took 125s for it to make the right move. It took 8s for minimax to make the first move on a 3x3 board. I cannot imagine how to make a better algorithm. I have heard of the alpha beta pruning, I feel like I would need more time to be able to implement it.

I came up with a half solution for now.
I will have the hard/unbeatable AI take the corners if possible, these would be locations 1,  4,  13, 16.  Then I would have it place the positions in the middle 6, 7, 10, or 11. I will also add a block function to make sure the user cannot win. Then after about 7 total moves I will allow minimax to begin doing its thing.  

It is not the most sophisticated solution in the world, but I think it will work for now until I can implement alpha beta pruning.

Best,

Merl
