(ns ttt-clojure.game
  (:require [ttt-clojure.board :as board]))


(defn place-xo [grid old-num xo]
  (map
    #(if (= % old-num)
       xo
       %)
    grid))

(defn place-token [board [token move]] (place-xo board move token))

(defn place-moves-into-board [player-1-token player-2-token board-size moves]
  (let [players (cycle [player-1-token player-2-token])
        _coll (map vector players moves)]
    (vec (reduce place-token board-size _coll))))

(defn convert-moves-to-board ;used in web ttt
  ([game-map]
   (convert-moves-to-board (:token (:player-1 game-map))
                           (:token (:player-2 game-map))
                           (:size game-map) (:moves game-map)))
  ([player-1-token player-2-token size moves]
   (place-moves-into-board player-1-token player-2-token (board/board-size size) moves)))

(defn creates-board-per-move
  ([game-map]
   (creates-board-per-move (:token (:player-1 game-map))
                           (:token (:player-2 game-map))
                           (:size game-map) (:moves game-map)))
  ([player-1-token player-2-token size moves]
   (map
     #(convert-moves-to-board player-1-token player-2-token size (subvec moves 0 %))
     (range 1 (inc (count moves))))))
