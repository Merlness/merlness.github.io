---
title:  "Recreating The Past"
mathjax: true
layout: post
categories: media
---

As you saw I have been finding ways to use my database and limit the information inside. The downside to limiting the information inside is being able to extract all of the data you need.

Before I saved every move of every game by saving the board after every move. You saw hits before, every move would have the same map saved with this inside `:board [1 “X” 3 4 5 6 7 8 9]` and then a new move would be made and a new map with the same information would be saved along with this  `:board [1 “X” 3 4 5 6 7 8 “O”]` clearly inefficient.

Now I only save one map per game instead of 5 to maximum 27 maps per game. It was done so by saving the size of the game and the moves played so the above situation would be saved as `:size :3x3 :moves [2 9]` This is way cleaner.

The problem is how can I provide the move by move replay if I don’t have the previous boards and print them out like I did before.

I believe I can print it well, I just need to create a collection of vectors representing my boards.

```clojure
(defn place-moves-into-board [player-1-token player-2-token board-size moves]
 (let [players (cycle [player-1-token player-2-token])
       _coll (map vector players moves)]
   (vec (reduce place-token board-size _coll))))


(defn convert-moves-to-board
 ([game-map]
  (convert-moves-to-board (:token (:player-1 game-map))
                          (:token (:player-2 game-map))
                          (:size game-map) (:moves game-map)))
 ([player-1-token player-2-token size moves]
  (if moves
    (place-moves-into-board player-1-token player-2-token (board-size size) moves)
    size)))




(defn creates-board-per-move
 ([game-map]
  (creates-board-per-move (:token (:player-1 game-map))
                          (:token (:player-2 game-map))
                          (:size game-map) (:moves game-map)))
 ([player-1-token player-2-token size moves]
  (map
    #(convert-moves-to-board player-1-token player-2-token size (subvec moves 0 %))
    (range 1 (inc (count moves))))))
```

This looks pretty wild but it is not so bad. The last two functions take in a map with the appropriate keys and have 3 lines of actual code inside.

The first function cycles through player 1 and player 2 tokens while there are moves to be made. Of course the first move is made by player 1, and the next is by player 2, so on and so forth. So this converts the number in moves to a board with the moves placed inside.



Next convert-moves-to-board does just that. If there are any moves it sends it to the previous function in order to create the board. However if moves is empty then it just makes a board with no tokens in it.

The last function is what took me the most time. The plan was to find a way to connect a board made from moves and size, and returning a vector of vectors that contains all of the boards from the beginning to the end.
I was able to do this by placing `convert-moves-to-board` within itself, however I was struggling to make it elegant. I had used map before and I was trying to find a way to make smaller vectors of moves.

After some intensive googling I was able to find subvec. This was the game changer, now I could break up my moves from the first move to the last move, then convert each vector into a new board? This is exactly what I was looking for.

Clojure has some great built in functionality , it is awesome getting to know it better.

Best,

Merl
