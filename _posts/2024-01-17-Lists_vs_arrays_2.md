---
title:  "Arrays vs Linked List part deux"
mathjax: true
layout: post
categories: media
---

I know I just covered this topic however, there is something interesting I wanted to cover.

It is this chart right here:

```java
for (int i = 0; i < 10000; i++) {
   back.add(i);
   front.add(i, 0);
   middle.add(i, middle.size() / 2);
}

// Linked List
// total ~309 ms
//  back ~ 123 ms
// front ~4 ms
// middle ~67ms


// Array List
// total ~40 ms
//  back ~ 3  ms
// front ~30 ms
// middle ~ 28 ms
```
To check the speed of the linked list and array list, I checked 3 different types of list additions and their totals as well.

Ideally they should all be self explanatory in nature but just in case. `back` is where we add integers to the back of the linked list and also the array list. `middle` is where we add integers to the middle of the array list and linked list. Finally, `front` is where we add integers to the front of the linked list or array.

As you can see there are expected values and unexpected values.  

## Expected
One thing everyone would have guessed is the array list is faster. For 10,000 items to all of the lists at the same time it takes ~ 40ms. The linked list for the same situations takes 309 ms. It is almost 10x faster to use an array list for adding 10,000.

I tried it again using 100k and these are my results.

```java
//linked list 100k ~29 s
//array list 100k ~1.7 s
```
Again you can see it is about 200x faster to use an array list rather than a linked list with large numbers.

## Unexpected

Let’s present this information again:

```java
// Linked List
// total ~309 ms
//  back ~ 123 ms
// front ~4 ms
// middle ~67ms


// Array List
// total ~40 ms
//  back ~ 3  ms
// front ~30 ms
// middle ~ 28 ms
```

I found a few interesting parts for the components of these 2 different types of lists. It is interesting that the array lists components sum up to more than the array list itself. They sum up to about 60 ms but in total they are 40 ms.

It is also interesting that the sum of the parts of the linked list are about 200 ms compared to the 300 ms it takes for all of them to run. I need to look further into why that is, I just find it interesting that it is so.

Next, for the array list `front` and `middle` are much slower than `back`. That is because back just adds the integer to the end of the array no problem. However the `front` and `middle` have to make a copy of the array and then add in the new integer.

Second to last, the `front` of the linked list is insanely fast. Almost as fast as adding to the `back` of an array list.  `front` of a linked list is almost 10x faster than `front` of an array list. Again the array list needs to make a copy of the previous array then add the new integer, but the linked list just changes who the head of the linked list is. This can be very useful if you are using a stack. The fastest way to use a stack would be using a linked list because the ‘head’ of the linked lit would be incredibly fast to change compared to an array list.

Lastly, I changed the values from 10,000 -> 1,000. Here are the results:

```java
//linked list 1000
// total ~12 ms
// back ~12 ms
// front ~3 ms
// middle ~5ms


//aray list 1000
// total ~13 ms
// back ~2 ms
// front ~14 ms
// middle ~11 ms
```

Many of the previous themes arise again but one thing that sticks out is the linked list at small sizes is identical if not marginally faster than an array. Again I believe this to be because of the copying of the array taking some time.

I hope you found this as interesting as I have. Have a wonderful day.

Best,

Merl
