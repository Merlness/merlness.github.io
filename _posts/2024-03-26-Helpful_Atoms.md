---
title:  "Helpful Atoms"
mathjax: true
layout: post
categories: media
---


I’m sure we are thankful for the atoms that make up our body but of course I am referring to the atoms in Clojure.


Atoms are a data type that can help you “ manage shared, synchronous, independent state”. This can be wonderful when you want to access a piece of information without passing it through many functions. You can just create it and reference it.

Let me provide you with an example.

```clojure
(def input-id (atom nil))
```
This is in my GUI file and I want to reference this `input-id` in certain situations. But I want to create this reference in my argos. How can I do this?

```clojure
(defn -main [& args]
 (let [[game-id DB] args
       game-id (when game-id (read-string game-id))
       db-type (main/select-db (last args))
       _load-db (data/load-db db-type)
       _input-id (when (and game-id (integer? game-id))
                   (reset! gui/input-id game-id)))

```
Now you can see when I pass in an `args` to `-main` it can be a database or a game ID. This allows me to ask 2 questions,  do I have a game id, and if I do is it an integer? If both of these are yes, then I can set that `input-id` to the value that was placed into `args`.

It is great having the ability to update the atom from anywhere. Now I can call it in my necessary functions.

```clojure


(defn continue? []
 (let [input-id (some-> @input-id int)
       requested-game-map (when input-id (data/get-game-by-id input-id))])

```  

I provided the necessary parts of this function, which is `input-id` in the let statement that checks to see if the `@input-id` atom is nil or not. This helps prevent me from having the nil pointer except that I kept seeing when I would not pass in a `game-id` in my `args`.

This allows me to potentially get the requested game if the game-id is correct.

Another time this has been helpful is when I have used this for the database and saving.

```clojure
(def db-atom (atom nil))
(def log (atom {}))



(defn load-db [db-type]
 (reset! db-atom db-type)
 (reset! log (fetch-the-games db-type)))


```


I have this save multimethod that is dependent on the type of database. I have been passing along the database where it has no business being. This has been a headache and bad practice.

But now, I have my `db-atom` and it can keep which database I am using and I don’t need to pass in the `db` as an argument anymore. I can just create a new function called `save!` and only use that when I need to.

```clojure
(defn save! [game] (save game @db-atom))
```
The `log` is another atom that has been helpful to limit the number of parameters my functions need. Now I can use the `log` of the specific database I am using by only calling it once.



```clojure



(defn get-game-by-id [game-id] (get @log game-id))
(defn last-game-id [] (max-game-id-edn @log))
(defn get-next-game-id [] (inc (last-game-id)))
(defn get-last-game [] (get @log (last-game-id)))
```

These are the ways atoms have been good to me. Until next time.

Best,

Merl
