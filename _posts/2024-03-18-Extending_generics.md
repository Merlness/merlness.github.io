---
title:  "Extending Generics"
mathjax: true
layout: post
categories: media
---

I have been in the process of changing my Sorting Algorithms to take in Generic types instead of only taking Integers.

To accomplish this I initially began changing `<Integer>` to `<T>` however that was not enough.


```java

public class QuickSort<T extends Comparable<T>> implements Sorter<T> {
   // ...
}
```
Here, `T extends Comparable<T>` means that the type T must implement the Comparable interface. This is crucial for sorting, as the Comparable interface provides the compareTo method, which is used to compare objects.
It is necessary to incorporate because in our QuickSort implementation, we use `compareTo` in the partition method:

```java

if (list.get(j).compareTo(pivot) <= 0) {
   i++;
   swap(list, i, j);
}
```
Since the method `partition` is being used by `quickSort` it needs to extend Comparable as well. Since `sort` is using `quickSort` which uses `partition` that means that it too needs to extend Comparable as well.

The method `swap on the other hand isn’t dependent on `compareTo` so it only needs to accept a generic type in order to use a list.

```java
public class QuickSort<T extends Comparable<T>> implements Sorter<T> {

    public static <T extends Comparable<T>> void sort(List<T> list) {
        quickSort(list, 0, list.size() - 1);
    }

    private static <T extends Comparable<T>> void quickSort(List<T> list, int low, int high) {
        if (low < high) {
            int pi = partition(list, low, high);
            quickSort(list, low, pi - 1);
            quickSort(list, pi + 1, high);
        }
    }

    private static <T extends Comparable<T>> int partition(List<T> list, int low, int high) {
        T pivot = list.get(high);
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (list.get(j).compareTo(pivot) <= 0) {
                i++;
                swap(list, i, j);
            }
        }
        swap(list, i + 1, high);
        return (i + 1);
    }

    private static <T> void swap(List<T> list, int i, int j) {
        if (i != j) {
            T temp = list.get(i);
            list.set(i, list.get(j));
            list.set(j, temp);

        }
    }

    @Override
    public void sortList(List<T> list) {
        sort(list);
    }
}
```
In conclusion, it is interesting what a method may need in order to function based on the functionality it calls.

Best,

Merl
