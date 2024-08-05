---
title:  "Tough updates"
mathjax: true
layout: post
categories: media
---

This is really not the best title, but I wasn't sure what to say. 

The story was to help update part of a modal. See this is the part where we can manually change the estimate of a story, or voting in poker could change the value of the story's estimate. 

So you can see there are 2 ways to accomplish the same thing. 

Initially we have the focus on the manual input of estimate. 

```clojure
(let [estimate        (reagent/atom (formatc/f->s (:estimate @current) 2))]
     
    (fn [_ _ _]
   
         (merge
          {:type      "number"
           :value     @estimate
           :on-blur   #(update-estimate! estimate original current new? frozen?)
           :on-change ccc/noop}
          (when-not frozen?
            {:on-change    #(edit-estimate estimate %)
             :on-key-press (partial forms/tab-on-enter-to "#-iteration-dropdown" {})
             :placeholder  "0.00"}))))
```
This is kind of what it looked like. You could edit the estimate from the modal and be ok. 

However, if you wanted to vote in poker and see the update. It was impossible. You would have to close out of the modal and open it again to see the update. 

The fix for this was tough. How could I manually update the estimate value as well as change once the poker value came in?

### Wrong turns

Initially I tried making estimate a track, but since we reset! the atom we wouldn't be able to do this functionality anymore. So estimate must stay an atom. 

Next, I tried not allowing a change unless estimate and the poker estimate were different. But I kept falling into 2 different traps. 

Either, I could manually change the estimate value, and it wouldn't update. Or it would update from poker, but I wouldn't be able to manually change the value in the modal. 


### Stumped

I was stumped!

Then this brilliant idea came!


```clojure
(let [estimate        (reagent/atom (formatc/f->s (:estimate @current) 2))
      real-estimate   (reagent/track #(:estimate @current-estimate))
      update-estimate (reagent/track #(reset! estimate (formatc/f->s @real-estimate 2)))]
    (fn [_ _ _]
        @update-estimate
         ;same as before
        ))
```
Now I can track the estimate from poker. And if it changes from poker, then I reset estimate to the new value!

This was much harder than it looks. 

Best, 

Merl
