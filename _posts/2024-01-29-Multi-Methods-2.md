---
title:  "Multi-Methods-2"
mathjax: true
layout: post
categories: media
---

Multi-methods-2

It has been an interesting one. I am in the process of refactoring my previous code and I wanted to provide another short example of multimethods that could provide this ability.

```clojure
(defmulti ai-move (fn [_board _ai-token _opponent-token difficulty] difficulty))

(defmethod ai-move :easy [board _ai-token _opponent _difficulty] (ec/place-easy-move board))

(defmethod ai-move :medium [board ai-token opponent-token _difficulty]
 (let [move-count (count (remove number? board))
       hard-ai? (or (< move-count 5) (zero? (rand-int 2)))]
   (if hard-ai?
     (mm/next-move-real board ai-token opponent-token)
     (ec/place-easy-move board))))

(defmethod ai-move :hard [board ai-token opponent-token _difficulty]
 (mm/next-move-real board ai-token opponent-token))
```

Previously, I did have multiple `ai-move` functions but this was nice to simplify the code.
This process also allows me to decouple my code from the previous hard coded letters X and O. As well as my minimax function was dependent on what letter the computer was.

If the AI was X I would have to call `maximize`, and if the AI was O I would have to call `minimize`. This is not a good software foundation. I had to fix that.

Now you see I pass through the ai token and the opponent token, and I only have to call `next-move-real`. I know the name is funny but while I am rebuilding my program i am creating new but similar names to keep up to continuity.

Here is part of my previous code below:

```clojure
(defn next-hard-move [token]
 (if (= token "X") mm/next-move-2 mm/next-move))

(defn hard-ai-x-o [difficulty user-token]
 (if (and (= mm/next-move difficulty)
          (= "X" user-token))
   mm/next-move-2
   difficulty))

(defn medium-difficulty [next-move grid]
 (let [move-count (count (remove number? grid))
       hard-ai? (or (< move-count 5) (zero? (rand-int 2)))]
   (if hard-ai?
     (next-move grid)
     (ec/place-easy-move grid))))
```

Best,

Merl
