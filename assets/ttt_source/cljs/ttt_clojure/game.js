// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.game');
goog.require('cljs.core');
goog.require('ttt_clojure.board');
ttt_clojure.game.place_xo = (function ttt_clojure$game$place_xo(grid,old_num,xo){
return cljs.core.map.call(null,(function (p1__10941_SHARP_){
if(cljs.core._EQ_.call(null,p1__10941_SHARP_,old_num)){
return xo;
} else {
return p1__10941_SHARP_;
}
}),grid);
});
ttt_clojure.game.place_token = (function ttt_clojure$game$place_token(board,p__10942){
var vec__10943 = p__10942;
var token = cljs.core.nth.call(null,vec__10943,(0),null);
var move = cljs.core.nth.call(null,vec__10943,(1),null);
return ttt_clojure.game.place_xo.call(null,board,move,token);
});
ttt_clojure.game.place_moves_into_board = (function ttt_clojure$game$place_moves_into_board(player_1_token,player_2_token,board_size,moves){
var players = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_1_token,player_2_token], null));
var _coll = cljs.core.map.call(null,cljs.core.vector,players,moves);
return cljs.core.vec.call(null,cljs.core.reduce.call(null,ttt_clojure.game.place_token,board_size,_coll));
});
ttt_clojure.game.convert_moves_to_board = (function ttt_clojure$game$convert_moves_to_board(var_args){
var G__10947 = arguments.length;
switch (G__10947) {
case 1:
return ttt_clojure.game.convert_moves_to_board.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return ttt_clojure.game.convert_moves_to_board.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ttt_clojure.game.convert_moves_to_board.cljs$core$IFn$_invoke$arity$1 = (function (game_map){
return ttt_clojure.game.convert_moves_to_board.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(game_map)),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(game_map)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(game_map),new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(game_map));
}));

(ttt_clojure.game.convert_moves_to_board.cljs$core$IFn$_invoke$arity$4 = (function (player_1_token,player_2_token,size,moves){
return ttt_clojure.game.place_moves_into_board.call(null,player_1_token,player_2_token,ttt_clojure.board.board_size.call(null,size),moves);
}));

(ttt_clojure.game.convert_moves_to_board.cljs$lang$maxFixedArity = 4);

ttt_clojure.game.creates_board_per_move = (function ttt_clojure$game$creates_board_per_move(var_args){
var G__10951 = arguments.length;
switch (G__10951) {
case 1:
return ttt_clojure.game.creates_board_per_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return ttt_clojure.game.creates_board_per_move.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ttt_clojure.game.creates_board_per_move.cljs$core$IFn$_invoke$arity$1 = (function (game_map){
return ttt_clojure.game.creates_board_per_move.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(game_map)),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(game_map)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(game_map),new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(game_map));
}));

(ttt_clojure.game.creates_board_per_move.cljs$core$IFn$_invoke$arity$4 = (function (player_1_token,player_2_token,size,moves){
return cljs.core.map.call(null,(function (p1__10949_SHARP_){
return ttt_clojure.game.convert_moves_to_board.call(null,player_1_token,player_2_token,size,cljs.core.subvec.call(null,moves,(0),p1__10949_SHARP_));
}),cljs.core.range.call(null,(1),(cljs.core.count.call(null,moves) + (1))));
}));

(ttt_clojure.game.creates_board_per_move.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=game.js.map
