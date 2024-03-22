---
title:  "compareTo"
mathjax: true
layout: post
categories: media
---

I wrote sorting algorithms some time ago. They were written specifically to sort for Integers.
I wanted to change this up and to sort through any generic types.

I had to change up my code. Before I could just use their values in an inequality in the if statement, and swap the values if I needed to.

```java
public static void sort(List<T> list) {
   boolean continueSorting = list.size() > 1;
   while (continueSorting) {
       continueSorting = false;
       for (int i = 0; i < list.size() - 1; i++) {
           if (list.get(i) > list.get(i + 1)) {//Operator '>' cannot be applied to 'T', 'T'
               swap(list, i, i + 1);
               continueSorting = true;
           }
       }
   }
}
```
As you can see, an inequality does not work for a generic.

So, I need to move on to `compareTo`, which led me to this:


```java
public static <T extends Comparable<T>> void sort(List<T> list) {
   boolean continueSorting = list.size() > 1;
   while (continueSorting) {
       continueSorting = false;
       for (int i = 0; i < list.size() - 1; i++) {
           if (list.get(i).compareTo(list.get(i + 1)) > 0) {
               swap(list, i, i + 1);
               continueSorting = true;
           }
       }
   }
}
```
As you can see even the method has to be different so I can have the ability to utilize the power of `compareTo`.

The important concept is that `compareTo` gives three main types of answers.

`object1.compareTo(object2)`
Can provide a negative, 0, or positive number.

This will provide a negative number if `object1` is less than `object2`.

This will provide 0 if `object1` is equal to `object2`.
This will provide a positive number if `object1` is greater than `object2`.

This allows us to use the same process for the if statement.


```java

list.get(i) > list.get(i + 1)
list.get(i).compareTo(list.get(i + 1)) > 0



```

These were both the logic in the if statements.

The first is shorter and it works only for Ints and Floats.

The last one will work for any generic. The beautiful thing is the order of the objects stays the same, and the direction of the inequality symbol stays the same as well.

Best,

Merl
