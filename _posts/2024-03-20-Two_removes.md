---
title:  "Two Removes"
mathjax: true
layout: post
categories: media
---

In order to allow MyHashmaps to run on my own versions of Hashmaps I had to create my own Iterators and remove methods in MyArrayList and MyLinkedList.

Let us focus on MyArrayList for now.

I prefer MyArrayList because most of it seems straight forward. I had already created an Iterator for this class so I had to create a remove method, but i wanted to incorporate new methods with it.

```clojure
@Override
public T remove(int index) {
   if (index < 0 || index >= count) {
       throw new IndexOutOfBoundsException(index);
   }
   T element = array[index];
   for (int j = index; j < count - 1; j++) {
       array[j] = array[j + 1];
   }
   count--;
   return element;
}
```
This is the first remove. Nothing fancy, just removing an item based on its index. This was very straightforward. What I had to do was to remove and item from my array based not off its index but off the element itself.

I began the process of doing so, however I noticed I had another method that might be helpful.

```clojure
@Override
public int indexOf(Object o) {
   for (int currentIndex = 0; currentIndex < count; currentIndex++) {
       if (o == null) {
           if (array[currentIndex] == null) {
               return currentIndex;
           }
       } else if (o.equals(array[currentIndex])) {
           return currentIndex;
       }
   }
   return -1;
}
```
Index of! If I could get this method to work it should not be that bad. For `indexOf` I had to find the index of any object that is in the list.

I tried a while loop, but this is one of those cases where a for loop is preferred. Mainly because there is an index out of bounds exception that can be called if the object you are searching for may not exist in the array.

The other interesting thing that I learned is that in those instances where the object doesn’t exist in your array, the method needs to return something. I tried null but `indexOf` returns an int every time. So it must return -1 to fit that criteria but also signify that something is wrong.

Finally I could get to my remove the object method.

```clojure
@Override
public boolean remove(Object o) {
   int currentIndex = indexOf(o);
   System.out.println(currentIndex);


   if (currentIndex != -1) {
       remove(currentIndex);
       return true;
   }
   return false;
}
```
Nice, simple and straight forward.

It is always nice tro write a short and simple method/function. There is an elegance to it.

Best,

Merl
