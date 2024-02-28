---
title:  "Saving Better"
mathjax: true
layout: post
categories: media
---
If I haven’t said it before, refactoring is tough! But It is well worth it.

Let me show you from where i started to where i am now!

```clojure
; initially here


; [{:game-id 1, :grid (1 2 3 4 5 6 "X" 8 9), :player-1 {:kind :ai, :token "X", :difficulty :easy}, :player-2 {:kind :ai, :token "O", :difficulty :easy}}
; {:game-id 1, :grid (1 2 3 4 5 6 "X" 8 "O"), :player-1 {:kind :ai, :token "X", :difficulty :easy}, :player-2 {:kind :ai, :token "O", :difficulty :easy}}
; {:game-id 1, :grid (1 2 3 4 "X" 6 "X" 8 "O"), :player-1 {:kind :ai, :token "X", :difficulty :easy}, :player-2 {:kind :ai, :token "O", :difficulty :easy}}
; {:game-id 1, :grid (1 2 3 4 "X" "O" "X" 8 "O"), :player-1 {:kind :ai, :token "X", :difficulty :easy}, :player-2 {:kind :ai, :token "O", :difficulty :easy}}
; {:game-id 1, :grid (1 2 3 4 "X" "O" "X" "X" "O"), :player-1 {:kind :ai, :token "X", :difficulty :easy}, :player-2 {:kind :ai, :token "O", :difficulty :easy}}
; {:game-id 1, :grid (1 2 "O" 4 "X" "O" "X" "X" "O"), :player-1 {:kind :ai, :token "X", :difficulty :easy}, :player-2 {:kind :ai, :token "O", :difficulty :easy}}]


;now in this format
;{1 { :size :3x3  :player-1 {:kind :ai, :token "X", :difficulty :easy}, :player-2 {:kind :ai, :token "O", :difficulty :easy}
; :moves [7 9 5 6 8 3] }}
```

Before I was saving my game maps into a vector. Not only that I was making a new map every time a new move was made. You can see this gets big quick. So I had to refactor slowly to get away from that monstrosity.

```clojure
(def example-map {;add size and moves first, then player-uno? and board, finally game-id
                 ; Remove
                 :game-id  1
                 :uno      true
                 :grid     [1 2 3 4 5 6 7 8 9]


                 ; Keep
                 :player-1 {:kind :human, :token "X"}
                 :player-2 {:kind :human, :token "O"}


                 ; Add
                 :size     :3x3
                 :moves    [4 2 9 8]})
```

I went by this design. First I changed the vector into a map.

Then I decided to not touch what I already needed, genius!

Then I began by adding what was necessary like `:size` and `:moves`. I had to change a few tests. It is very surprising how quickly you realize your tests are coupled to your code. This makes it very hard to refactor.

After that was done it went down to removing `:grid`. Boy oh boy was that one tough problem. Grid was all over my files.  I had to slowly change every individual test and then create a function that can take the size provided and the moves present and to change that into a functional board.

```clojure
(defn place-moves-into-board [player-1-token player-2-token board-size moves]
 (let [players (cycle [player-1-token player-2-token])
       _coll (map vector players moves)]
   (vec (reduce place-token board-size _coll))))


(defn convert-moves-to-board
 ([game-map]
  (convert-moves-to-board (:token (:player-1 game-map)) (:token (:player-2 game-map))
                          (:size game-map) (:moves game-map)))
 ([player-1-token player-2-token size moves]
  (if moves
    (place-moves-into-board player-1-token player-2-token (board-size size) moves)
    size)))
```
That would be possible by these lovely functions. As you can see, now I can recreate any previous game with just 2 pieces of information.

What a wonderful sight!

Lessons learned would be, always make sure you estimate refactoring into the story. And find creative ways to provide the same information with less data.

Best,

Merl
