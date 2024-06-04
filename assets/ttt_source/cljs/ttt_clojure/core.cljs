(ns ttt-clojure.core
  (:require [reagent.core :as reagent]
            [reagent.dom :as rdom]
            [ttt-clojure.components :as components]))

(defonce state (reagent/atom {}))

(defn ^:export main []
  (let [app (js/document.getElementById "ttt_merlness_dev")]
    (js-invoke js/console "log" app)
    (rdom/render [components/tic-tac-toe] app)))
