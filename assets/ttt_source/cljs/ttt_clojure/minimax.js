// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.minimax');
goog.require('cljs.core');
goog.require('ttt_clojure.game');
goog.require('ttt_clojure.board');
ttt_clojure.minimax.value_max = (-100000);
ttt_clojure.minimax.value_min = (100000);
ttt_clojure.minimax.value = (function ttt_clojure$minimax$value(game_board,depth,maximizing_token,minimizing_token){
if(cljs.core.truth_(ttt_clojure.board.token_wins.call(null,game_board,maximizing_token))){
return depth;
} else {
if(cljs.core.truth_(ttt_clojure.board.token_wins.call(null,game_board,minimizing_token))){
return (- depth);
} else {
return (0);

}
}
});
ttt_clojure.minimax.moves_exhausted_QMARK_ = (function ttt_clojure$minimax$moves_exhausted_QMARK_(board,depth,maximizing_token,minimizing_token){
var or__4160__auto__ = (depth === (0));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return ttt_clojure.board.game_over_QMARK_.call(null,board,maximizing_token,minimizing_token);
}
});
ttt_clojure.minimax.find_value = (function ttt_clojure$minimax$find_value(board,evaluate,depth,maximizing_token,minimizing_token){
if(cljs.core.truth_(ttt_clojure.minimax.moves_exhausted_QMARK_.call(null,board,depth,maximizing_token,minimizing_token))){
return ttt_clojure.minimax.value.call(null,board,depth,maximizing_token,minimizing_token);
} else {
return cljs.core.first.call(null,evaluate.call(null,board,(depth - (1)),maximizing_token,minimizing_token));
}
});
ttt_clojure.minimax.best_move = (function ttt_clojure$minimax$best_move(maximizing_QMARK_,game_board,depth,p__6112,action,maximizing_token,minimizing_token){
var vec__6113 = p__6112;
var best_value = cljs.core.nth.call(null,vec__6113,(0),null);
var best_action = cljs.core.nth.call(null,vec__6113,(1),null);
var vec__6116 = (cljs.core.truth_(maximizing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT_,ttt_clojure.minimax.minimize,maximizing_token], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._LT_,ttt_clojure.minimax.maximize,minimizing_token], null));
var compare = cljs.core.nth.call(null,vec__6116,(0),null);
var evaluate = cljs.core.nth.call(null,vec__6116,(1),null);
var token = cljs.core.nth.call(null,vec__6116,(2),null);
var new_game_board = ttt_clojure.game.place_xo.call(null,game_board,action,token);
var value = ttt_clojure.minimax.find_value.call(null,new_game_board,evaluate,depth,maximizing_token,minimizing_token);
if(cljs.core.truth_(compare.call(null,value,best_value))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,action], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_value,best_action], null);
}
});
ttt_clojure.minimax.extremity = (function ttt_clojure$minimax$extremity(actions,maximizing_QMARK_,game_board,depth,maximizing_token,minimizing_token){
var default_value = (cljs.core.truth_(maximizing_QMARK_)?ttt_clojure.minimax.value_max:ttt_clojure.minimax.value_min);
return cljs.core.reduce.call(null,(function (p1__6119_SHARP_,p2__6120_SHARP_){
return ttt_clojure.minimax.best_move.call(null,maximizing_QMARK_,game_board,depth,p1__6119_SHARP_,p2__6120_SHARP_,maximizing_token,minimizing_token);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_value,null], null),actions);
});
ttt_clojure.minimax.min_or_max = (function ttt_clojure$minimax$min_or_max(board,depth,maximizing_QMARK_,maximizing_token,minimizing_token){
var available_actions = ttt_clojure.board.find_available_moves.call(null,board);
if(cljs.core.truth_(ttt_clojure.board.game_over_QMARK_.call(null,board,maximizing_token,minimizing_token))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.minimax.value.call(null,board,depth,maximizing_token,minimizing_token)], null);
} else {
return ttt_clojure.minimax.extremity.call(null,available_actions,maximizing_QMARK_,board,depth,maximizing_token,minimizing_token);
}
});
ttt_clojure.minimax.maximize = (function ttt_clojure$minimax$maximize(board,depth,maximizing_token,minimizing_token){
return ttt_clojure.minimax.min_or_max.call(null,board,depth,true,maximizing_token,minimizing_token);
});
ttt_clojure.minimax.minimize = (function ttt_clojure$minimax$minimize(board,depth,maximizing_token,minimizing_token){
return ttt_clojure.minimax.min_or_max.call(null,board,depth,false,maximizing_token,minimizing_token);
});

//# sourceMappingURL=minimax.js.map
