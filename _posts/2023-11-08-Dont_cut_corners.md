---
title:  "Don't Cut Corners"
mathjax: true
layout: post
categories: media
---


Reasons for clean code from personal experience.
Today was all about minimax. I can write about that later but I wanted to mention a misstep I took today.

I have been training on Clean Code principles and TDD.

```python
Here are a few bullet points regarding Clean code:

# Readable and Understandable:
#
# Consistent Formatting:
#
# Descriptive Naming:
#
# Modular and Small Functions:
#
# Avoid Code Duplication:
#
# Refactor as Needed:
#
# Keep It Simple:

```

I missed the last bullet point. In my infinite wisdom I knew an outcome of the function would be a string. There were 3 possible strings the function would return and a `None` as well. These strings were long.

The strings were similar but had small differences. As I was making it a thought occurred which was to make another function in order to make things simpler. I continued.

When it came to test the function,I copied the 3 long whole strings as the answer. When it came to combining all of the functions into an `Unbeatable AI` there were 2 errors.

## Errors

The first which was not mentioned was a python specific problem.
I copied a list of lists(matrix) using `copy()` however that is only a shallow copy, this caused problems while using minimax. I had to `use deepcopy()` in order to make minmax work. This was a learning opportunity and not really a mistake. Here is a brief description below.


“A shallow copy constructs a new compound object and then (to the extent possible) inserts references into it to the objects found in the original. A deep copy constructs a new compound object and then, recursively, inserts copies into it of the objects found in the original.”

The second error was my fault because I did not keep things simple and add more functions when they should have been. Minimax was looking for the ending of the game to be signaled by this string, and I copy and pasted this string.

```python
#first equation signaling either X or O wrong
def check_if_game_over(board):   
    row_winner = row_win(board)         #row_win(board) return X or O
    if row_winner:
        return f"Congrats {row_win(board)} wins!"


#below is what was used in minimax to check if O won, Notice the difference?
def O_wins(gamestate):
    if cg.check_if_game_over(gamestate) == "Congrats O wins":
        return True
    return False


#it's the exclamation mark.
```
I can’t believe an exclamation mark would cause so much trouble. In the sensitive world of programming, that can make all the difference.

Now I realize I need to check if `row_win(board) == 'O'` This would make it much simpler to check if O wins or not. Rather than the long string which increases the changes to make a mistake.  

So although I have been mostly adhering to the Clean Coders principles, I need to make sure I stay disciplined all of the time. It’s when you cut corners when you make mistakes.

Merl
