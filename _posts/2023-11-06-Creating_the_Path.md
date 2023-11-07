---
title:  "Creating the Path"
mathjax: true
layout: post
categories: media
---



Continuing Tic Tac Toe with TDD.

I am like the tortoise, slow and steady.

I have been making small steps but with those steps I have decided to plan ahead.
Focusing on something new may make things clearer, is my hope.

Below I wrote the plan to create the project of Tic Tac Toe,

```python

Make a board
Take user input
User input connects to board
User input for 2 players
Find the winning conditions
Create draw
The make X (first) computer
Then make O (second) computer

```
This is the plan to move forward but it does not push the code itself. It does help me thnk of the steps needed to complete this project. Make a board, take in user input, but afterwards create a 2 player game. After that 2 player game, create a computer that goes first then one that can go either first or second.

Now that I have this plan in place let us make a pseudo code that will match each of the 3 games mentioned above.

```python
2 player

While true
	Get user X input
	Change board
	check if game over
	change to O
	get user 2 input
	check if game over
	change to X
	repeat


1 player comp starts first

While true
	computer move
	change board
	check if game over

	change to O
	get user input
	change board
	check if game over
	change to X
	repeat


1 player x=X or O

While true
	get X or O

	if X
		get user input
		Change board
		check if game over
		change to O

		computer move
		change board
		check if game over
		change to X

		repeat
	else:
		computer move
		change board
		check if game over

		change to O
		get user input
		change board
		check if game over
		change to X
		repeat


```

Is everything perfect? No, I will have to add more steps and make multiple helper functions. But at least the path ahead is clearer, and I can move forward.

Merl
