---
title:  "Implementing Iterator"
mathjax: true
layout: post
categories: media
---


I have learned a few things writing code for Java.

THe simple part is it is possible to place “if” statements in the return value.

The second possibly more powerful ability is to create an anonymous class. This is done also by placing much information in the return section of a method. I will provide my code at the bottom.

I wanted to create an anonymous class that implemented the `Iterator` interface.
It is simple and is used to iterate over a linked list.

This was done because I wanted to implement my own linked list into my own hashmap.

The error messages kept pointing me to my uncompleted iterator method.

I had to come up with a solution:

Below you can see the code and the methods explained.

The` hasNext()` method checks if there’s a next node in the list. The `next()` method returns the value of the current node and moves the pointer to the next node. The `remove()` method is not supported in this implementation, so it throws an UnsupportedOperationException.

I see that this anonymous class is a concise way to provide custom behavior without having to define a separate named class.

```java
@Override
public Iterator<T> iterator() {
   return new Iterator<>() {
       private LinkedListNode<T> current = head;


       @Override
       public boolean hasNext() {
           return current != null;
       }


       @Override
       public T next() {
           if (!hasNext()) {
               return null;
           }
           T data = current.value;
           current = current.next;
           return data;
       }


       @Override
       public void remove() {
           throw new UnsupportedOperationException();
       }
   };
}
```

It seems this is best used when the logic is not too complicated or complex. This length allowed for a great use of this ability. Short and private enough that no other method would need it, and it can still look readable.

Best,

Merl
