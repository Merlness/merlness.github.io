(ns ttt-clojure.component_spec
  (:require-macros [speclj.core :refer [describe it should= should-contain before-all before should-not-be-nil should-be-nil context]])
  (:require
    [reagent.core :as reagent]
    [reagent.dom :as rdom]
    [ttt-clojure.components :as sut]
    [speclj.core]))


(describe "Smaller components"


  (it "returns the correct turn message for Player 1's turn"
    (let [game-state {:moves    []
                      :player-1 {:kind :human :token "X"}
                      :player-2 {:kind :ai :difficulty :easy :token "O"}}]
      (should= "Player 1 human's turn" (sut/turn-message game-state))))

  (it "returns the correct turn message for Player 2's turn"
    (let [game-state {:moves    [1]
                      :player-1 {:kind :human :token "X"}
                      :player-2 {:kind :ai :difficulty :easy :token "O"}}]
      (should= "Player 2 easy ai's turn" (sut/turn-message game-state))))

  (it "returns the correct turn message for Player 1 when player types are different"
    (let [game-state {:moves    [1 2]
                      :player-1 {:kind :ai :difficulty :hard :token "X"}
                      :player-2 {:kind :human :token "O"}}]
      (should= "Player 1 hard ai's turn" (sut/turn-message game-state))))

  (it "returns the correct turn message for Player 2 when player types are different"
    (let [game-state {:moves    [1 2 3]
                      :player-1 {:kind :ai :difficulty :hard :token "X"}
                      :player-2 {:kind :human :token "O"}}]
      (should= "Player 2 human's turn" (sut/turn-message game-state))))

  )
