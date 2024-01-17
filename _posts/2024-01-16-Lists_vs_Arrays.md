---
title:  "Arrays vs Linked List"
mathjax: true
layout: post
categories: media
---
Arrays vs Linked List

I recently had the wonderful opportunity to learn how to create linked lists and array lists in Java.

This was quite the challenge for me, as I am still in my crawling phase with Java. Remembering to specify the types, and even just starting the whole process, took a while for me to learn.

Once a few tests were written and the patterns began to emerge, I started to walk like a one-year-old baby before hitting my head on my next challenge: Linked Lists!

Now, I will not go over the difficulty of creating linked lists, and how straightforward creating arrays was. Relatively speaking, of course!

I will say I was fortunate that I created Lists and Arrays that only take Integers. This made my life much easier.

I had to create these simple methods as an interface that implements into`ArrayList` and `LinkedList`:

```
void add(int i)
void add(int i, int index)
int size()
void remove(int index)
int get(int index)
```

After creating these methods that allow easy implementation for both linked lists and arrays, why use linked lists then?

Bold question with little information, I know. However, if both have the same methods like the ones created above, why linked lists? I would assume there is more functionality to linked lists, the same with creating doubly linked lists that could be useful for web searches and such. Ok, I take it back.

I can see why you can make a case for linked lists, but I wanted to share the times it takes to add data to both lists and arrays.


```java
for (int i = 0; i < 10000; i++) {
   back.add(i);
   front.add(i, 0);
   middle.add(i, middle.size()/2);
}
```
I created this loop to test the time it takes for Java to add 10,000 integers to both linked lists and arrays.


Of course, the list back appends the integers to the end of the array/list, front appends to the front of the array/list, and middle does what you think it does.


The tests ran and provided these results at 10,000 appendations: lists take ~300ms, while arrays take ~50ms. If I reduce the appending to 1,000; the time is negligible with both taking about ~13 ms.

In conclusion, with all things being equal, use arrays. It can save you some time.

Best,

Merl
