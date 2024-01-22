---
title:  "Winning is hard"
mathjax: true
layout: post
categories: media
---

True statement, but I am also referring to winning conditions. Not just any winning conditions but 3D Tic Tac Toe winning conditions.

There needs to be 49 winning conditions.

Let’s take a look at the board.

``` clojure
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
```

Let’s begin with the easy way, there needs to be rows and columns winning. There are 3 rows and 3 columns per face, there are 3 faces. There are 9 rows and 9 columns, don’t forget this is 3D so there is another row through the cube, which makes it 9 again. That is a total of 27 winning combos.

Don’t forget you can win through the cube, this would be for locations 1,14, 27, as well as 12, 14, 25, again 7, 14, 21 and finally 9, 14, 19. That is 4 more.

Lastly let’s remember the diagonals. 1, 5, 9 as well as 3, 5, 7. This means there are 2 diagonals per face, 3 faces per dimension, and 3 dimensions. This makes it out to 18.

All together this brings it to 49 winning conditions. Wow!

I already have winning conditions for rows and columns on a single face. I want to present my troubles so far. Pay attention `size` it is important because it is the cube of the total number of elements, which in this case is 3.


```clojure

; size= (cuberoot (count grid)) =3




;same space all faces
; 0<=i<=(size^2-1)
;index i + (size^2)*0, i + (size^2)*1, i + (size^2)*2

 ;(comment
;  diagonally through-ordered
;places [1 11 21] index [0 10 20] 0 + 10*0, 0 + 10*1, 0 + 10*2
;index 4x4 ^ [0 17 34 51]
;places [4 14 24] index [3 13 23] 3 + 10*0, 3 + 10*1, 3 + 10*2
;places [7 17 27] index [6 16 26] 6 + 10*0, 6 + 10*1, 6 + 10*2
;
;
;[(size*0 + (size^2+1)*0) (size*0 + (size^2+1)*1) (size*0 + (size^2+1)*2)]
;[(size*1 + (size^2+1)*0) (size*1 + (size^2+1)*1) (size*1 + (size^2+1)*2)]
;[(size*2 + (size^2+1)*0) (size*2 + (size^2+1)*1) (size*2 + (size^2+1)*2)])

```
There are more mathematical ramblings that are commented out but I wanted to focus on the `diagonal through faces`. Based on the example above the places represent the number combination that is presented but the index presents the location.

I was considering hard coding all of this, writing down the winning combinations, but in case I ever want to do a 3d 4x4x4 grid I have this foundation. Also It is best to work on these challenges now to be better.

I sprinkled a 4x4 winning condition to make sure my connection will be suited for both grids.
This helps make sure I keep my solution generalized. Problem is I can’t translate this to code sadly.

This is what I had before for diagonals in a 2d setting:

```clojure
(defn size [grid]
 (int (Math/sqrt (count grid))))

(defn front-diagonal [grid]
 (let [size (size grid)
       indices (map inc (range size))]
   (vec (map
          #(nth grid (* % (- size 1)))
          indices))))
```

Now I have tried to use this idea with my new diagonals but no luck so far.

```clojure

(defn size-3d [grid]
 (int (Math/cbrt (count grid))))


#_(defn front-diagonal-through [grid]
 (let [size (size-3d grid)
       indices (range size)]
   (vec (map
          #(nth grid
                ;indices [0 10 20]
                ;indices [3 13 23]
                ;indices [6 16 26]
  ;[(size*0 + (size^2+1)*0) (size*0 + (size^2+1)*1) (size*0 + (size^2+1)*2)]
  ;[(size*1 + (size^2+1)*0) (size*1 + (size^2+1)*1) (size*1 + (size^2+1)*2)]
  ;[(size*2 + (size^2+1)*0) (size*2 + (size^2+1)*1) (size*2 + (size^2+1)*2)])
                (+ (* % size) (* (+ 1 (Math/pow size 2)) %)))
                   ; (^problem) vertical indices


          indices))))


```

My trouble so far is to differentiate between the horizontal changes from 0-2, and the vertical changes from 0-2. I feel like I am close.

Until next time.

Best,
