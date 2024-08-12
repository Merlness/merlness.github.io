---
title:  "Alphabetize"
mathjax: true
layout: post
categories: media
---

One of the last tasks was to alphabetize the projects and the users. 

This was initially simple, but it became slightly complicated and even buggy.

I know 'why' would I ever write buggy code?

Well I didn't obviously, the bugs came from the system before me. 

### First solution

This was straight forward, just sort by their names. Duh!

So I did
```clojure
;this is what I had initially
(defn some-component []
      (let [projects (get-projects user)
            users    (user-by-projects projects)]))

;so I did what I had to
(defn some-component []
      (let [projects (sort-by :name (get-projects user))
            users    (sort-by :name (user-by-projects projects))]))
```
Ok, problem solved! Blog post over ...

But it is not. 

### First error

Well, maybe you knew this, but I didn't. This sorts upper and lower case letters differently. 

This means to a casual person, this is not really sorted since it is case-sensitive. This is no bueno. 

### Second Fix!

Ok, now I knew this and found a way to make sure this was not case sensitive. 
 

```clojure
(defn some-component []
      (let [projects (sort-by (comp string/lower-case :name) (get-projects user))
            users    (sort-by (comp string/lower-case :name) (user-by-projects projects))]
       
       )
      )
```

This works because `string/lower-case` Converts string to all lower-case.

### Error 2

Remember when I said I didn't write buggy code? Well, after pushing I noticed this page would crash ...

Why?

Well after experimenting and looking at the error messages, I noticed that `string/lower-case` was causing the error, for some reason a nil value was being passed into projects and users. 

I have no idea where they sare coming from, but they are passing through. So the last and final fix ..

### Finally

If nil is being passed through, remove it!


```clojure
(defn nil-name? [entity]
      (nil? (:name entity)))

(defn some-component []
      (let [projects (sort-by (comp str/lower-case :name) (remove nil-name? (get-projects user)))
            users    (sort-by (comp str/lower-case :name) (remove nil-name? (user-by-projects projects)))]))
```

No more errors, thank goodness. 

Best, 

Merl
