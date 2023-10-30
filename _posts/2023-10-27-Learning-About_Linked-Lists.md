---
title:  "Learning about Linked Lists"
mathjax: true
layout: post
categories: media
---


Learning about linked lists and arrays. I would have mentioned arrays above, but the title is almost an alliteration which makes me happy. This is another blog going over the fundamentals of coding.

While doing the Advent of code problems, lists have probably been my favorite tool to use so far. In fact I have used lists when I should not have been using them, that’s how much I like them. It is important to know how lists work as well as arrays. Without further adieu.

## Arrays

What arrays and linked lists have in common is they both are data structures for storing a collection of items.

I like to think of arrays like a specially made spice rack that is labeled and fits all of the spices you have. Because it is so special you have it organized how you want and you know where every spice is located. When you are cooking and you need some cumin you just turn to it and grab what you need, super fast and easily. What if for your birthday someone gifts you a fancy new spice, like saffron. Your previous spice rack is no good now! You are going to have to get a new spice rack to fit your new collection. This demonstrates the good and bad of using arrays.   

Arrays are a chunk of memory in which items are stored. Like the spice rack, the items should be all the same type. Ketchup has no business with the spices. Since everything is in the same place and labeled well it takes a very short time to be able to find what you are looking for. However, since it is a fixed space, adding or changing anything will be a cumbersome experience.

Arrays summed up:
Stored in contiguous location
Fixed in size
Uses less space compared to linked lists
Faster, elements can be accessed easily
Changing the elements takes time


## Linked lists

I wanted to be original in this analogy but it’s hard to go away from a classic, the train.
In a train, each carriage is linked to the one in front of it. Similarly, in a linked list, each element (or node) is connected to the next element through a reference or a "link." Each carriage in the train can be different, just like the nodes in a linked list can hold different types of data.
Trains have to go through inspections however, and the inspector has to go through every carriage until they find what they are looking for.

Like the train linked lists are similar. You need the head and tail of a train. Also, you can add or remove carriages relatively easily, you add a new tail if you want or remove a boxcar from the middle. As long as you link them again it will still function. However, if you want to find your element, you will have to start at the locomotive and look into each carriage until you find what you are looking for.

Linked lists:
Not stored in contiguous location
Dynamic in size
Uses more memory, because it stores the data and address of the next node.
Slower, accessing the element could take going over the whole list
Adding or deleting elements is easier

## Conclusion

They both serve their respective purposes.If what you are doing requires frequent insertions and deletions, and the size of the data structure is unpredictable, linked lists are it. On the other hand, if your application demands fast and constant-time access to elements, arrays are the way to go.

Linked lists and arrays are fundamental data structures with distinct characteristics. Understanding their differences and the scenarios where they shine is essential for effective programming. Until next time.

Merl
