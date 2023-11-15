---
title:  "Inheritance and Polymorphism"
mathjax: true
layout: post
categories: media
---



Recently I was tasked with completing Advent of code problems with Object oriented programming. Since I am learning Python and Python is an OOP language this makes sense. I need to be well rounded so let’s do it. If we have any 90s RnB fans I would like to say I am down with OOP!

## Why

I have been leaning functional programming which is incredibly useful but it is time to add a new toolset.  Here are some general statements about when to use either functional or object oriented programming

```python
# Object oriented programs are good when you have a FIXED SET OF OPERATIONS on things.
#
# Functional languages are good when you have a FIXED SET OF THINGS, and as your code evolves you primarily add new operations on those existing things.

```

## Benefits to OOP

1. Modularity for easier troubleshooting
2. Reuse of code through inheritance
3. Flexibility through polymorphism
4. Effective problem solving( similar to TDD, breaking it down into solvable chunks)

For steps 1 and 4 they remind me a lot of Test Driven Development. I may be wrong in providing the comparison however, they both aim to make troubleshooting easier and providing smaller chunks. This is what TDD is all about. Modularity is a staple of TDD.

Now onto what was completely new to me was inheritance and polymorphism.

## Inheritance

Of course with OOP we work with classes. These classes that are connected are very well named. We have parent classes and child classes. Child classes are classes that refer to the parent class.

Today I won’t be going into the gritty details however here is a representation:
```python
Class Parent:
    {Body}
Class Child(Parent):
    {Body}

```

The child class `inherits` the methods and attributes from the parent class. This allows the code to be reusable, require less maintenance and provides strong model structure.
Like families the child will carry some of the previous traits from the parents, but it can have it’s own unique traits as well.

## Polymorphism

The first time I heard of this it brought me again to the 90s. There were these books called Animorphs, on the cover these books would have a kid transform into some kind of animal. I have 90s on the mind.

But really what is the world, the name makes it seem complicated, which it can be. There will be a brief description, don;t you worry.

Polymorphism means many forms.

Since we are talking about classes, I will provide 2 situations.

One is if you have multiple classes, don’t have inheritance, like Cars, Planes, and Boats. You can have classes to describe each one of those mechanical objects, and you can have a method called `self.move` in all of them. However they all move differently. Cars drive, planes fly, and boats sail.

Second example is with inheritance. Let’s say you have 2 classes: Cats and Lions. Well the parent class is Cats, and the child class is Lions. If you have a method in Cats called `soundtheymake` it would be “Meow”, the Lion class would inherit this. Obviously Lions don’t meow, therefore you could override this method and replace it with “I can’t wait to be King!”

Polymorphism means different things in different situations, of course.

Until next time,

Merl
