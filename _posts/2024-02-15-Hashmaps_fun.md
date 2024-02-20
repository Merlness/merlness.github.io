---
title:  "Fun with Hash maps"
mathjax: true
layout: post
categories: media
---

Hash maps, what is all the rave? Well let me tell you.

First of they are very fast, they are constant time. Also you are able to clearly store what you need with the key value pairs.

Let me know provide fun examples to demonstrate.

Have you ever noticed how it can be challenging to remember all of your passwords? There can be so many that need to be stored, what if you stored your passwords secretly in a hash map. Please don't look at my git hub. 

Example one, listen I'm not sure how many of you were young and had simple passwords, I will admit this may have been my password for a possible website or two.

```clojure
(def password-map {:easy "password"})
```

Don't judge, we all start somewhere.

Next we were more refined and added extra layers for protection


```clojure
(assoc password-map :medium "Password123")
```

See now we're cooking.

Ok I understand, this maybe too simple still.

Let me provide you with the ultimate protection.

```clojure
(assoc password-map :impossible "P@$$w0rd!")
```

See, now you can sleep nice and easy knowing you can safely store your important information in a Hash map. Not only will it be stored you can quickly find it, and find it based on your key word.

Best,

Merl
