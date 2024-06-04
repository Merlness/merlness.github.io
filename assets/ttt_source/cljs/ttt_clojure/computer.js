// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.computer');
goog.require('cljs.core');
goog.require('ttt_clojure.board');
goog.require('ttt_clojure.minimax');
goog.require('ttt_clojure.game');
ttt_clojure.computer.set_depth = (function ttt_clojure$computer$set_depth(board){
var pred__9512 = cljs.core._LT_;
var expr__9513 = cljs.core.count.call(null,ttt_clojure.board.find_available_moves.call(null,board));
if(cljs.core.truth_(pred__9512.call(null,(23),expr__9513))){
return (2);
} else {
if(cljs.core.truth_(pred__9512.call(null,(11),expr__9513))){
return (3);
} else {
if(cljs.core.truth_(pred__9512.call(null,(8),expr__9513))){
return (4);
} else {
return (7);
}
}
}
});
ttt_clojure.computer.find_next_move = (function ttt_clojure$computer$find_next_move(board,evaluate,maximizing_token,minimizing_token){
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,board)){
return (1);
} else {
return cljs.core.second.call(null,evaluate.call(null,board,ttt_clojure.computer.set_depth.call(null,board),maximizing_token,minimizing_token));
}
});
ttt_clojure.computer.checks_end_move = (function ttt_clojure$computer$checks_end_move(board,available_moves,token){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9515_SHARP_){
return ttt_clojure.board.winner_QMARK_.call(null,ttt_clojure.game.place_xo.call(null,board,p1__9515_SHARP_,token),token);
}),available_moves));
});
ttt_clojure.computer.win_or_block = (function ttt_clojure$computer$win_or_block(board,maximizing_token,minimizing_token){
var available_moves = ttt_clojure.board.find_available_moves.call(null,board);
var winning_move = ttt_clojure.computer.checks_end_move.call(null,board,available_moves,maximizing_token);
var blocking_move = ttt_clojure.computer.checks_end_move.call(null,board,available_moves,minimizing_token);
var or__4160__auto__ = winning_move;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return blocking_move;
}
});
ttt_clojure.computer.helper_3d_logic = (function ttt_clojure$computer$helper_3d_logic(board){
var available_moves = ttt_clojure.board.find_available_moves.call(null,board);
var number_available = cljs.core.count.call(null,available_moves);
if((number_available > (25))){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(14),null], null), null),available_moves);
} else {
return null;
}
});
ttt_clojure.computer.next_move = (function ttt_clojure$computer$next_move(board,maximizing_token,minimizing_token){
var or__4160__auto__ = ttt_clojure.computer.helper_3d_logic.call(null,board);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = ttt_clojure.computer.win_or_block.call(null,board,maximizing_token,minimizing_token);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return ttt_clojure.computer.find_next_move.call(null,board,ttt_clojure.minimax.maximize,maximizing_token,minimizing_token);
}
}
});
ttt_clojure.computer.place_easy_move = (function ttt_clojure$computer$place_easy_move(board){
return cljs.core.rand_nth.call(null,ttt_clojure.board.find_available_moves.call(null,board));
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.computer !== 'undefined') && (typeof ttt_clojure.computer.ai_move !== 'undefined')){
} else {
ttt_clojure.computer.ai_move = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.computer","ai-move"),(function (_board,_ai_token,_opponent_token,difficulty){
return difficulty;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.computer.ai_move,new cljs.core.Keyword(null,"easy","easy",315769928),(function (board,_ai_token,_opponent,_difficulty){
return ttt_clojure.computer.place_easy_move.call(null,board);
}));
cljs.core._add_method.call(null,ttt_clojure.computer.ai_move,new cljs.core.Keyword(null,"medium","medium",-1864319384),(function (board,ai_token,opponent_token,_difficulty){
var hard_ai_QMARK_ = (!((cljs.core.rand_int.call(null,(3)) === (0))));
if(hard_ai_QMARK_){
return ttt_clojure.computer.next_move.call(null,board,ai_token,opponent_token);
} else {
return ttt_clojure.computer.place_easy_move.call(null,board);
}
}));
cljs.core._add_method.call(null,ttt_clojure.computer.ai_move,new cljs.core.Keyword(null,"hard","hard",2068420191),(function (board,ai_token,opponent_token,_difficulty){
return ttt_clojure.computer.next_move.call(null,board,ai_token,opponent_token);
}));

//# sourceMappingURL=computer.js.map
