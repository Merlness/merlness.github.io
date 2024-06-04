// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ttt_clojure.components');
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.core !== 'undefined') && (typeof ttt_clojure.core.state !== 'undefined')){
} else {
ttt_clojure.core.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
ttt_clojure.core.main = (function ttt_clojure$core$main(){
var app = document.getElementById("ttt_merlness_dev");
cljs.core.js_invoke.call(null,console,"log",app);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),app);
});
goog.exportSymbol('ttt_clojure.core.main', ttt_clojure.core.main);

//# sourceMappingURL=core.js.map
