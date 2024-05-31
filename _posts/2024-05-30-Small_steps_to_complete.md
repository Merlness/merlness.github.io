---
title: "Small Steps to Complete"
mathjax: true
layout: post
categories: media
---

That title might be a bit drastic, but it is in reference to my progress.
There is no “complete” in software, there is always more. However, there are complete projects. And although I have
while to go, I have made some important steps in adding TTT to my blog.

# Initial process

First, connected my new UI to my old project TTT. Next I made sure I converted the necessary files from clj to cljc,
because my new project is cljs and cljc can connect to both clj and cljs with some caveats.

For now I wanted to add some logic into my cljs file, and clj will not connect.

I kept getting many errors, but eventually I was able to convert the correct files to cljc and add old logic to my new
cljs files.

# Old logic

Luckily life repeats itself, so I went to my previous Web Server TTT project and found the old logic I used there and
took note of how I could do the same for the CLJS project.
The first is `board/game-over?` This makes sense since it is a huge component of any game really.

```clojurescript
(defn game-over-display [grid]
  (if 
  (board/game-over? grid {:token "X"} {:token "O"})
    [:div.game-result
     [:p (ui/endgame-result grid "X" "O")]]
    nil))


```

The other logic was the message.
This function provides the old logic I have used so far. If the game is over a message will be printed in the static
website.

The other logic is making sure the board can’t update once the game is over

```clojure
(defn can-update? [grid index]
      (and
        (not (board/game-over? grid
                               {:token "X"}
                               {:token "O"}))
        (integer? (get grid index))))
```

This is a bit messy right now but later on I will fix this, once my `r/atom` is universal.

But as for now I have a fully functional human vs human game in a static website.

That is the progress I am happy for.

Best,
Merl
