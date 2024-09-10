---
title:  "Readability"
mathjax: true
layout: post
categories: media
---

There are many reasons to refactor. Often times it is to follow best practices, and sometimes it is because we want our code to be understandable. 

I will say I took some time to understand this code the first time I saw it. 

```clojure
(let [unfocused? (and (seq @focus) 
                      (not ((set @focus) item))
                      (contains? (set (map :kind @focus)) (:kind item)))]
  ;; rest of the code
)
```

Let's go over what each part does shall we?

    (seq @focus)
This is a clever way to see if `@focus` list is empty or not. If it is empty it will return nil, 
which means unfocused is false. 

    (not ((set @focus) item))

This one was not nearly as clear for me. I see that the list `@focus` is turned into a set, but I had no idea
a set could be a function in clojure. Sets can be used to check for membership. So if `item` is in the set then it will return the item, and if it is 
not in the set it will be nil. `not` reverse the outcome

All in all, if the `item` is in `@focus` then `unfocused?` is false. 

Finally
   
     (contains? (set (map :kind @focus)) (:kind item))

Whatever object is in focus will have a `:kind`. We can get all the kinds of objects are in focus and place it in a set. 

Now we just see if the `item` in question has the same `:kind` as the `:kind` of objects in `@focus`.

All of these tell us if the item is in `@focus` or not. 

Now this is the refactoring to try and make this clearer to future readers. 

```clojure
(defn unfocused? [focus item]
  (and (seq @focus)
       (not-any? #{item} @focus)
       (some #{(:kind item)} (map :kind @focus))))
```

Every part does the same thing but now I think it is more readable. 

Until next time. 

Best, 

Merl
