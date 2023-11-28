---
title:  "Misunderstanding Classes"
mathjax: true
layout: post
categories: media
---


A misunderstanding can be quite the dilemma, although it is great for sitcoms.

The confusion came from not knowing how to use classes very well. I have written about them before, absolutely. Writing about something and doing something are very different things.

If you remember I wrote about the usefulness of classes in containing certain data that are similar. I believe the example that I used are the cars I have owned over the years. They both have a name, age, make and model. This way I can keep track of both of their characteristics.

Simple!

The difficulty comes from implementing classes where you need them. As in I wanted to rewrite Tic Tac Toe, but using classes instead of the functions I had written before. My mistake was not necessarily changing the functions to classes. That was simple.

```python
# function
def calculate_rectangle_area(length, width):
    return length * width

# class

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def calculate_area(self):
        return self.length * self.width


```

The difficulty I faced was in how to use and implement the class. What do I mean by that?

Converting the functions to classes was fine, it was refactoring the previous code that had called the functions to now call the classes.  

I tried using and calling the classes like I did with the functions before.


```python
# correct way of calling function
area = calculate_rectangle_area(5, 10)
print(f"Area of the rectangle: {area}")

#  my wrong way of calling the class

area = rectangle.calculate_area(5, 10)
print(f"Area of the rectangle: {area}")

```

Of course, errors would arise and my program would not run.  Like was previously stated I tried using the class like a function.

We live, and we learn. It needs to be an instance first before we can call the methods in the class! Also, we can place the important information in the constructor. This way when we call the methods it is nice and clean, and we don’t have to worry about the variables at all.

```python


# Using the class correctly
rectangle = Rectangle(5, 10)
area = rectangle.calculate_area()
print(f"Area of the rectangle: {area}")


```

Once it finally clicked I was able to maneuver my code and refactor relatively quickly.

Here’s to learning more.

Merl
