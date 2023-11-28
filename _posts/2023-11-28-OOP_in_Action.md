---
title:  "OOP in Action"
mathjax: true
layout: post
categories: media
---

Benefits to classes refactoring Tic Tac Toe.

I will provide a file with many functions/methods and show you why it can be beneficial to use Object Oriented Programming.

Primarily it eliminates repetitive arguments, making it more readable and maintainable, as well as flexible and modular.

I will post a previous collection of functions that I used before refactoring.
The whole code does not need to be analyzed, however you can look at the arguments that each function takes.  


```python
import copy

def initialize_board(board=None, is_X_turn=True):
    if board:
        return board
    else:
        return [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

def update_board(board, position, is_X_turn):
    num = int(position)

    for row in board:
        if num in row:
            row[row.index(num)] = change_XO(is_X_turn)

    return board

def change_XO(is_X_turn):
    if is_X_turn:
        return 'X'
    else:
        return 'O'

def make_copy(board, is_X_turn):
    return initialize_board(copy.deepcopy(board), is_X_turn)

def row_win(board):
    for row in board:
        letter = row[0]
        game_over = all(element == letter for element in row)

        if game_over:
            return letter
    return None

def column_win(board):
    for index in range(3):
        letter = board[0][index]

        if board[0][index] == board[1][index] == board[2][index]:
            return letter
    return None

def diagonal_win(board):
    letter = board[1][1]

    if board[0][0] == board[1][1] == board[2][2] or board[0][2  == board[1][1] == board[2][0]:
        return letter
    return None

def is_tie(board):
    return not actions(board)

def actions(board):
    possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    actions_list = []

    for row in board:
        actions_list += [num for num in possibilities if num in row]

    return actions_list

def is_game_over(board):
    return find_winning_letter(board) is not False or is_tie(board)

def find_winning_letter(board):
    row_winner = row_win(board)
    if row_winner:
        return row_winner

    column_winner = column_win(board)
    if column_winner:
        return column_winner

    diagonal_winner = diagonal_win(board)
    if diagonal_winner:
        return diagonal_winner

    return False

```

Every function takes at least one argument, and they are often repetitive. As you can see `board ` is the argument in many of those functions.


```python
class GameBoard:
   def __init__(self, board = None, is_X_turn = True):
       self.is_X_turn = is_X_turn


       if board:
           self.board = board
       else:
           self.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


   def update_board(self, position):
       num = int(position)


       for row in self.board:
           if num in row:
               row[row.index(num)] = self.change_XO()

       return self.board


   def change_XO(self):
       if self.is_X_turn:
           return 'X'
       else:
           return 'O'


   def make_copy(self):
       return GameBoard(copy.deepcopy(self.board), self.is_X_turn)


   def row_win(self):
       for row in self.board:
           letter = row[0]
           game_over = all(element == letter for element in row)

           if game_over:
               return letter
       return None


   def column_win(self):
       board = self.board
       for index in range(3):
           letter = board[0][index]


           if board[0][index] == board[1][index] == board[2][index]:
               return letter
       return None


   def diagonal_win(self):
       board = self.board
       letter = board[1][1]


       if board[0][0] == board[1][1] == board[2][2] or board[0][2] == board[1][1] == board[2][0]:
           return letter
       return None


   def is_tie(self):
       return not self.actions()

   def actions(self):
       possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
       actions = []


       for row in self.board:
           actions += [num for num in possibilities if num in row]

       return actions

   def is_game_over(self):
       return self.find_winning_letter() != False or self.is_tie()


   def find_winning_letter(self):  
       row_winner = self.row_win()
       if row_winner:
           return row_winner


       column_winner = self.column_win()
       if column_winner:
           return column_winner


       diagonal_winner = self.diagonal_win()
       if diagonal_winner:
           return diagonal_winner


       return False

```

One could of course analyze all day long, but the main thing is only one method takes an argument now. The Class variables can be called by each method without putting it in an argument.


Another benefit is we can have multiple boards. Instead of having only one that gets manipulated by the functions,  we can have multiple independent boards that will do whatever we need them to. This can possibly be explored later.

Encapsulation is another reason why OOP can be preferred. When calling the methods on the instance, it can look very clean.  Here is an example below.

```python
# instance
game_board = gb.GameBoard()


# use of instance
for action in game_board.actions():
   new_game_board = game_board.make_copy()
   new_game_board.update_board(action)

```

No arguments need to be placed in the methods, you just call them and they do their job!

Very nice!

Those are my beneficial reasons for OOP, until next time.

Merl
