---
title:  "Winning Conditions"
mathjax: true
layout: post
categories: media
---

First, let me begin that I am proud to have hopefully estimated my story well and have given myself enough time to not just hard code a problem but to put a more elegant solution as well as learn more about clojure.

### Winning conditions

On to the real blog post, winning conditions for a 3D Tic Tac Toe  grid. As I stated there are 49 winning conditions, I had come up with pseudo code let's say and not the real thing yet.

Until now. It has been a roller coaster ride because I learned more about mapping and list comprehensions in Clojure.  

Initially my mind was mapping the problem out. I had used ` map` to solve this previous problem.

```clojure
(defn front-diagonal [grid]
 (let [size (size grid)
       indices (map inc (range size))]
   (vec (map
          #(nth grid (* % (- size 1)))
          indices))))
```

In the normal 3x3 TTT this would produce `[3 5 7]`.  Size is 3 ,indices would then be `[1 2 3]`, multiply that by 2 and you get the trio above. This was done because it works for a 4x4 as well.

## Map Monster

I wanted to use `map` again for my new scenarios.

```clojure
#_(
 1 | 2 | 3   
 4 | 5 | 6
 7 | 8 | 9


10 | 11 | 12    
13 | 14 | 15    
16 | 17 | 18    


19 | 20 | 21
22 | 23 | 24
25 | 26 | 27
)


(defn size-3d [grid]
 (int (Math/cbrt (count grid))))




(defn all-rows-3d [grid]
 (let [size (size-3d grid)
       indices (range size)]
   (vec
     (map
       (fn [z-index]
         (map
           (fn [y-index]
             (map
               #(nth grid
                     (+ (* size size z-index) (* size y-index) %))
               indices))
           indices))
       indices))))
```
This is my largest and craziest monster. Don’t worry I deleted this and refactored my other functions. This was used to find all of the rows in the TTT cube. The `%`(x dimension ) would increase first, then the `y-index`, and then the `z-index`. This would provide the initial `[1 2 3]`. Afterwards `y-index` would increase and go to the next section `[4 5 6]`. After both go through their indices then `z-index` would turn and start the whole process again.

Clearly this works but is not very elegant. What is interesting is that I was flip flopping between `map` and list comprehensions. I was struggling with using maps, so I turned to comprehensions. I didn’t like how comprehensions  looked  so I went back to `map`. Then I make this monster and decided `map` was not the way to go for this situation. I returned to list comprehension and didn’t look back.

## Comprehensions fix

```clojure
(defn helper-3d [grid index-equation]
 (let [size (size-3d grid)
       indices (range size)]
   (for [y-index indices]
     (for [x-index indices]
       (nth grid (index-equation y-index x-index size))))))


(defn z-face-diagonal-index [z-index x-index size]
 (+
    (* (inc z-index) size)
     -1
    (* (- (Math/pow size 2) 1) x-index)))


(defn z-face-diagonal [grid]
 (helper-3d grid back-diagonal-through-index))


;places [3 11 19] index [2 10 18] 2 + 8*0, 2 + 8*1, 2 + 8*2
;places [6 14 22] index [5 13 21] 5 + 8*0, 5 + 8*1, 5 + 8*2
;places [9 17 25] index [8 16 24] 8 + 8*0, 8 + 8*1, 8 + 8*2
;[(size*1-1 + (size^2-1)*0) ((size*1)-1 + (size^2-1)*1) ((size*1)-1 + (size^2-1)*2)]
;[(size*2-1 + (size^2-1)*0) ((size*2)-1 + (size^2-1)*1) ((size*2)-1 + (size^2-1)*2)]
;[(size*3-1 + (size^2-1)*0) ((size*3)-1 + (size^2-1)*1) ((size*3)-1 + (size^2-1)*2)])


```

I was able to use this helper function for the rest of my new found winning conditions. The comprehensions are cleaner and help remove lines of code.

Since the comprehensions all began to look almost identical I removed the comprehensions, and indexing, while specifying the underlying logic for each set of combinations I was looking for.


 The commented out section was how I was able to create the `z-face-diagonal-index` logic.  

## Edge cases and fix

This worked beautifully until I reached some edge cases.

```clojure
(def edge-cases-3d
 [[0 13 26]
  [2 13 24]
  [6 13 20]
  [8 13 18]])

(defn winning-combo? [grid combo letter]
 (every? #(= (nth grid %) letter) combo))


(defn winner?-3d [grid letter]
 (let [faces (partition 9 grid)]
   (or
     (some #(winner? % letter) faces)
     (some #(winning-combo? grid % letter) edge-cases-3d)
     (winning-lines? letter (same-space-all-faces grid))
     (winning-lines? letter (back-diagonal-through grid))
     (winning-lines? letter (back-diagonal-across grid))
     (winning-lines? letter (front-diagonal-across grid))
     (winning-lines? letter (front-diagonal-through grid)))))

```

I was not able to create a beautiful function to cover all of the edge cases, after much deliberation I had no choice but to hard code them.

Oh, and remember that monster we had before? It was fixed with this line: `(some #(winner? % letter) faces)`

## Conclusion

In conclusion, I learned a lot about maps and list comprehensions.

Best,

Merl
