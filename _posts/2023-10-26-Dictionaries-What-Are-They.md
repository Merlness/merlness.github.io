---
title:  "Dictionaries (HashMaps), what are they?"
mathjax: true
layout: post
categories: media
---

Ok, no seriously what are they? Today I am not as confident on the whole concept but I will provide what I know now, and my questions at the end. Other languages call dictionaries Hashmaps, however since I am using python I will say dictionaries.

Yesterday I explained classes, and now I will show how dictionaries can be used. Maybe someday I’ll describe their similarities, pros and cons. But until then …


Let us use a familiar example we have seen before. My cool cat cars.

```python
        car1      car2
name:   Pegasus   Jazzy
color:  White     White
year:   2003      2011
model:  Camry     Jazz
make:   Toyota    Honda

```

We used classes to hold this information, let us use dictionaries now. You see, my first car has the name Pegasus. This in dictionaries is called a key-value pair.

Think of a dictionary like a storage facility, with many storage units inside. The key that was mentioned above could be considered like an actual key that unlocks a storage unit. Whatever is inside would be the value in this analogy. A storage unit  would not be very good if a key could open multiple units, so each key should be unique and unchangeable.

```python
car1 = {'name': 'Pegaus', 'color': 'White', 'year': 2003,
  'model': 'Camry', 'make': 'Toyota'}

car2 = {'name': 'Jazzy', 'color': 'White', 'year': 2011,
  'model': 'Jazz', 'make': 'Honda'}

```

I have 2 dictionaries named car1 and car2. In each dictionary there are unique keys, and they correspond to the stored values. The 2 dictionaries have the same keys, but that is ok since they are different storage facilities.

You can use a specific key from car2 and get its value. You could even print all the keys, and all the values. Because you can use a key to call for a value, this allows the computer to move very quickly. This is beneficial when you have a very large database and want your program to work quickly.

Dictionaries are not limited to cars; they're incredibly versatile. You can use them to store data for a wide range of applications, from managing configuration settings to analyzing data.

```python
print(car2['year'])
#2011

print(car1.keys())
#dict_keys(['name', 'color', 'year', 'model',   'make'])

print(car2.values())
#dict_keys(['Jazzy', 'White', '2011', 'Jazz', 'Honda'])
```
Python dictionaries, initially mystifying to beginners (myself), are in fact simple and intuitive once you understand their real-world counterparts. We just need to think of them as answers to everyday questions, like my car history, and you'll unlock their potential.

Best,

Merl

P.S.
Can’t forget the stuff I’m still working through.What I provided is how to use the basics of the dictionary. I am in the process of understanding the underlying structure. Let’s go back to calling the dictionaries hash maps.

Apparently hash maps are not the only hash things, there is a whole cinematic universe of them. There are hash functions, hash values, hash tables, and collisions.

While I do have some understanding of these topics I don’t want to mention them just yet …
