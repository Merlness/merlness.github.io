---
title: "Searching"
mathjax: true
layout: post
categories: media
---


Today I worked on adding new functionality.
I wanted to enhance the search functionality so that pressing CMD + F
or CTRL + F would take users directly to our search bar,
instead of the browser's default search.
Pressing it again would switch back to the browser search.

I learned a lot, specifically that if you have good coders before you certain things become easy,
like knowing if it was Mac-OS or not

```clojure
(defn key-mod? [e]
      (if (private-library/mac-os?)
        (private-library/o-get e "metaKey")
        (private-library/o-get e "ctrlKey")))
```

That is how I differentiated between the machines.

Next was to check which F it was, and to make sure even if someone was in caps lock, it would not affect this
fucntionality.

```clojure
(defn f-key? [e]
      (#{"F" "f"} (private-library/o-get e "key")))
  ```

Then I checked if we were in the search bar or not

```clojure
(defn inactive-element? [id]
  (not= id (private-library/node-id (private-library/active-element))))
```

Now is the combo of all of them 


```clojure
(defn should-focus? [e id]
  (and (key-mod? e)
       (f-key? e)
       (inactive-element? id)))
```
And Finally the Activation! 

```clojure
(defn activate-search-bar [e]
  (let [id "-search-bar-input"]
    (when (should-focus? e id)
      (private-library/nod e)
      (private-library/focus! id))))
```

This was a fun story. I learned to to receive key presses, and more
importantly how to override the web browser default functionality. 

I supposed that it was easy to identity if the machine is PC or not too. 

Best, 

Merl
