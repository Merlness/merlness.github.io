---
title:  "Coding Mad Libs"
mathjax: true
layout: post
categories: media
---

Today felt like a coding MadLibs.

I was working on connecting to the PostgreSQL to my code. That was challenging however once this was done I was able to play around with the database.

I was able to create my table

```clojure

(def db {:dbtype "postgres" :dbname "tic_tac_toe"})
(def ds (j/get-datasource db))

(j/execute! ds ["
CREATE TABLE games
(game_id int, board_size VARCHAR(9), moves VARCHAR(100),
player_1 VARCHAR(50), player_2 VARCHAR(50))"])
```
Success!

Now I wanted to find a way to add into this table a specific game I had.

```clojure
{:game-id  1, :player-1 {:kind :human, :token "X"},
             :player-2 {:kind :ai, :difficulty :hard, :token "O"}, :size :4x4, :moves [10 7]}

(j/execute! ds ["
INSERT INTO games (game_id, board_size, moves, player_1, player_2)
VALUES (1, ':4x4', '[10 7]',
'{:kind :human, :token \"X\"}',
'{:kind :ai, :token \"O\", :difficulty :hard}'
)"])

```

This allows us to have a database that looks something  like this
 game_id | board_size |             moves             |                   player_1                   |          player_2          
---------+------------+-------------------------------+----------------------------------------------+----------------------------
      1    | :4x4       | [10 7]               | {:kind :human, :token "X"}  | {:kind :ai, :token "O", :difficulty :hard}

Now I have to create the Mad Libs function I was talking about to save any game into the PostgreSQL database.
```clojure
(defmethod save :psql [game _db-type]
 (let [game-id (:game-id game)
       board-size (str (:size game))
       moves (str (:moves game))
       player-1 (str (:player-1 game))
       player-2 (str (:player-2 game))
       query (str "INSERT INTO game_map (game_id, board_size, moves, player_1, player_2) VALUES ("
                  game-id ", '"
                  board-size "', '"
                  moves "', '"
                  player-1 "', '"
                  player-2 "')")]
   (j/execute! ds [query])))
 ```

Since I am here I will show my `fetch-the-games` Mad Libs as well.

```clojure
(defn psql-to-map [data]
 (let [game (into {} data)]
   {:game-id  (:games/game_id game)
    :player-1 (read-string (:games/player_1 game))
    :player-2 (read-string (:games/player_2 game))
    :size     (read-string (:games/board_size game))
    :moves    (read-string (:games/moves game))}))



(defmethod fetch-the-games :psql [_db-type]
 (let [games-from-db (j/execute! ds ["select * from games"])
       games (map psql-to-map games-from-db)]
   (into {} (map (fn [game] [(:game-id game) game]) games))))
```

The `psql-to-map` changes my output from `select * from` to the correct structure.

```clojure
;from this
[ {:game_map/game_id 1, :game_map/board_size ":4x4", :game_map/moves "[10 7]", :game_map/player_1 "{:kind :human, :token \"X\"}", :game_map/player_2 "{:kind :ai, :token \"O\", :difficulty :hard}"} ]

;to
{:game-id 1 :size :4x4 :moves [10 7] :player-1 {:kind :human :token X} :player-2 {:kind :ai, :token "O” :difficulty :hard}}

;and fetch games changes that to
{1 {:game-id 1 :size :4x4 :moves [10 7] :player-1 {:kind :human :token X} :player-2 {:kind :ai, :token "O” :difficulty :hard}}}

Now that the rest of my code is refactore life is easy. Since I have placed this database into the correct format, I can just plug it in and the rest of my game works great!

Best,

Merl
