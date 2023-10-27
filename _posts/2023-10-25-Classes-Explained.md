---
title:  "Classes Explained"
mathjax: true
layout: post
categories: media
---


Since I first laid my eyes upon a Class I have felt intimidated. In the few occurrences that I did come across a Class in Python it has always looked complex and convoluted.

Here is a clear example of what is usually presented:


```python

Class Student:

  school_name = 'ABC School'

  def __init__ (self, name, age): +
    self.name = name
    self.age = age

  def change school (cls, name):
    print (Student. school_name)
    Student. school_name = name

jessa = Student (' Jessa', 14)
Student. change_school (' XYZ School')
```

To a newbie like myself, this is too much. Even when the vocabulary is explained, it is not intuitive.

Personally I would say 2 things make Classes extra difficult to understand: `__init__` above, and `(self) or self.example`.


### No me gusta!

Let's start from scratch, forget that bogus example above. Let me talk about the 2 cars that I have owned. Now, people tell me I have a taste for the high life as they say. My first car was named "Pegasus", it was a white 2003 Toyota Camry. A chariot fit for a king. My second car is called "Jazzy", a white 2011 Honda Jazz(Fit in USA). She is a smooth operator if I do say so myself.

Now each car has specific details that belong to it. Let's call these cars `Objects`. In Python an object can be described as a collection of properties which can be expressed as variables or functions.

```python
        car1      car2
name:   Pegasus   Jazzy
color:  White     White
year:   2003      2011
model:  Camry     Jazz
make:   Toyota    Honda

```

Notice how each car(object) has the same exact type of attributes but different values. The blueprint in which you can make these objects is called a `Class`. When you want to make an object you want to know what kind of attributes, properties, and functions it will have. A Class can be used to specify all of that.

I could begin writing the objects like so ...

```python
Class Car:
  def introduce_self(self):
    print("I am " + self.name)

car1 = Car()
car1.name =  'Pegasus'
car1.color = 'White'
car1.year = 2003
car1.model = 'Camry'
car1.make = 'Toyota'

#This will produce
#"I am Pegasus"


```

Now writing `car1.detail = something or car2.detail = something else` can get tiresum. What if there was a way to create that object with all of that information at once? You can use a constructor `__init__` to put the information as an argument into that Class. Let me provide you with an example.


```python
Class Car:

    def __init__(self, putName, putColor, putYear, putModel, putMake):
      self.name = putName     # most people don't place the "put" in their classes
      self.color = putColor   # I just placed "put" there to highlight that is where you place
      self.year = putYear     # your information, it usually looks like:
      self.model = putModel   # def __init__(self, ...., make)
      self.make = putMake     # self.make = make


  def introduce_self(self):
    print("I am " + self.name)

#this code no longer works
# car1 = Car()
# car1.name =  'Pegasus'
# car1.color = 'White'
# car1.year = 2003
# car1.model = 'Camry'
# car1.make = 'Toyota'

#Now we have to use This
car1 = Car("Pegasus", "White", 2003, "Camry", "Toyota")
car2 = Car("Jazzy", "White", 2011, "Jazz", "Honda")

#and you can use something like
car2.introduce_self()

#to print
#"I am Jazzy"

```

The Class is useful to create and store the information of objects. The reason "self" shows up everywhere is because Python does not use special syntax to refer to object attributes.

The other parts that can cause confusion is in a Class:

 variables --> properties

 functions --> methods

 and an object is more or less an instance.

 Hopefully this clarifies Classes for you. I know it did for me.

 Adios,
 Merl
