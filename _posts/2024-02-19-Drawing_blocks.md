---
title:  "Drawing blocks"
mathjax: true
layout: post
categories: media
---


Currently my new task is to create the Game of Life. Of course I am referring to the coding game of life.

This is still interesting because I am working on a brand new GUI that I have never worked with before.

I kept playing around with the Gui and I was able to come up with a great solution to cover my GUI with a grid!

```clojure
(let [step 15]
  (doseq [x (range 0 (q/width) step)
          y (range 0 (q/height) step)]
    (q/line x 0 x (q/height))
    (q/line 0 y (q/width) y)))
```

I was able to create all of of the lines I needed.

Of course I had to look at the 5 thousand line library to find `line`
I'm not too inefficient I searched for line and eventually found the one I was looking for.

This is great because it provides the visual structure that I want!

However, of course the game of life is dependent on cells that are alive and cells that are dead. Their visual representations as well. I was playing around with `fill` to see if it could do that to my grid. But alas it was not meant to be.

I did more searching and found a few tools to help me complete my task. The logic of the Game of Life will be another blog post.

Like I said I found the tools and I am in the process of coming up with a solution.

I will list the tools to help me.
`q/rect` this draws rectangles. I can use this and `doseq` to draw my rectangles all over the GUI.

I see that rectangles can have background colors and fill colors. This will allow me to choose which colors are alive and which ones are dead.

I will now focus on implementing this, along with the logic behind
.
.
.
The GAME of LIFE!

Best,

Merl
