---
title:  "Hidden Mouse"
mathjax: true
layout: post
categories: media
---

I want to talk about a hidden mouse I found!

Of course this is in the best way possible.

I wanted to mention somehting that could help others in the future. Specifically those of you who are working in Clojure and using Quil for your GUI purposes.

With out further adieu. Here is the usual `defsketch` that is presented while using quil.

```clojure
(q/defsketch Merl's Blog
             :title "Example"
             :size [1000 1000]
             :setup setup
             :update update-state
             :mouse-pressed mouse-pressed ;not used by default, but important later
             :draw draw-state
             :features [:keep-on-top]
             :middleware [m/fun-mode])
```

Have you been in the situation where you are creating a GUI in Quil and you wish to use mouse clicking for an input.

Initially I was using

```clojure
(defn update-state [state]
 (if (and (q/mouse-pressed?) (q/mouse-x 100) (q/mouse-y 100))
  :do_this
  :else_this))

 ```

 There was more code of course but I was using this set up to update my state based on the location of the mouse and if it was pressed. This is not the worst implementation, however it is dependent on the refresh rate that is set up rather than just the clicking.

 If for some reason you refreshed your system every second, it would take a long time to sense the clicks and perform an action.

 However I found something to both limit the complicated code presented and to not depend on the refresh rate.

I was able to find a much easier solution to this dilemna.

 ```clojure
 (defn mouse-pressed [state hidden_mouse]
  (let [x (:x hidden_mouse)
        y (:y hidden_mouse)]
   (if (and (= 100 x y))
    :do_this
    :else_this)))

;hidden_mouse => {:x 0 :y 0 :button :left}
```

This is great because mouse pressed is already built into the function. On top of that it contains the location of where the button was pressed as well as which button was pressed.

Instead of making my own implementation, I can use the built in secret features from quil.


Best,

Merl
