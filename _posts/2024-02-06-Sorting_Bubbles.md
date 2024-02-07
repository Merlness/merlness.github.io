---
title:  "Sorting Bubbles"
mathjax: true
layout: post
categories: media
---

I’m excited to share with you something I’ve been exploring recently - sorting algorithms, specifically the Bubble Sort algorithm.

Sorting algorithms are fundamental to computer science and programming. They help us organize and order data, which is crucial for tasks like searching and merging datasets.

As a fan of bubbles and simple things I have enjoyed this algorithm the best.

Initially when I wrote the bubble sort I used 2 `for` loops to be able to implement it.
It worked well, but I have since learned that while loops are better, and simpler.

After using TDD and building slowly I have come to this conclusion.

```clojure
public class BubbleSort {

    public static void sort(IList list) {
        boolean continueSorting = list.size() > 1;
        while (continueSorting) {
            continueSorting = false;
            for (int i = 0; i < list.size() - 1; i++) {
                if (list.get(i) > list.get(i + 1)) {
                    swap(list, i, i + 1);
                    continueSorting = true;
                }
            }
        }
    }

    private static void swap(IList arr, int left, int right) {
        int temp = arr.get(left);
        arr.remove(left);
        arr.add(temp, right);
    }
}
```

Let’s begin with `swap`. It does exactly what you think it does. Nice, simple, and private.

Now `sort` is where the real magic happens. It takes a list as an argument. It continues to sort the list until no more swaps are needed.


The bubble sort algorithm works by repeatedly swapping adjacent elements if they are in the wrong order. This process continues until the entire list is sorted.

In case you weren’t privy to why, here is why it is called “Bubble Sort”. The reason it’s called “Bubble Sort” is because with each iteration, the largest unsorted element “bubbles up” to its correct position.

Bubble sort might be one of the slowest fundamental algorithms, but it is fundamental and useful. It is a great starting point.

Best,

Merl
