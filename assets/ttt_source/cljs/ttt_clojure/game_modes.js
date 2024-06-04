// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.game_modes');
goog.require('cljs.core');
goog.require('ttt_clojure.ui');
goog.require('ttt_clojure.data');
goog.require('ttt_clojure.game');
goog.require('ttt_clojure.board');
goog.require('ttt_clojure.computer');
ttt_clojure.game_modes.grid_after_move = (function ttt_clojure$game_modes$grid_after_move(var_args){
var G__9519 = arguments.length;
switch (G__9519) {
case 2:
return ttt_clojure.game_modes.grid_after_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return ttt_clojure.game_modes.grid_after_move.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ttt_clojure.game_modes.grid_after_move.cljs$core$IFn$_invoke$arity$2 = (function (move,p__9520){
var map__9521 = p__9520;
var map__9521__$1 = cljs.core.__destructure_map.call(null,map__9521);
var player_1 = cljs.core.get.call(null,map__9521__$1,new cljs.core.Keyword(null,"player-1","player-1",-857374100));
var player_2 = cljs.core.get.call(null,map__9521__$1,new cljs.core.Keyword(null,"player-2","player-2",-227455796));
var size = cljs.core.get.call(null,map__9521__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var moves = cljs.core.get.call(null,map__9521__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
return ttt_clojure.game_modes.grid_after_move.call(null,move,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(player_1),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(player_2),size,moves);
}));

(ttt_clojure.game_modes.grid_after_move.cljs$core$IFn$_invoke$arity$5 = (function (move,token_1,token_2,size,moves){
var vec__9522 = ((ttt_clojure.board.player1_QMARK_.call(null,moves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_1,(1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_2,(2)], null));
var letter = cljs.core.nth.call(null,vec__9522,(0),null);
var player = cljs.core.nth.call(null,vec__9522,(1),null);
var new_board = ttt_clojure.game.convert_moves_to_board.call(null,token_1,token_2,size,moves);
ttt_clojure.ui.player_statement.call(null,player);

return ttt_clojure.game.place_xo.call(null,new_board,move,letter);
}));

(ttt_clojure.game_modes.grid_after_move.cljs$lang$maxFixedArity = 5);

ttt_clojure.game_modes.token_finder = (function ttt_clojure$game_modes$token_finder(position,unavailable_token){
if(cljs.core._EQ_.call(null,position,(1))){
return ttt_clojure.ui.get_player_1_token.call(null);
} else {
return ttt_clojure.ui.get_player_2_token.call(null,unavailable_token);
}
});
ttt_clojure.game_modes.create_player = (function ttt_clojure$game_modes$create_player(position,unavailable_token){
var kind = ttt_clojure.ui.get_player.call(null,position);
var token = ttt_clojure.game_modes.token_finder.call(null,position,unavailable_token);
var base_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),kind)){
return cljs.core.assoc.call(null,base_data,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),ttt_clojure.ui.get_difficulty.call(null));
} else {
return base_data;
}
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.game_modes !== 'undefined') && (typeof ttt_clojure.game_modes.get_move !== 'undefined')){
} else {
ttt_clojure.game_modes.get_move = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.game-modes","get-move"),(function (player,_opponent,_grid){
return new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(player);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.game_modes.get_move,new cljs.core.Keyword(null,"human","human",-772334390),(function (_player,_opponent,grid){
return ttt_clojure.ui.get_move.call(null,grid);
}));
cljs.core._add_method.call(null,ttt_clojure.game_modes.get_move,new cljs.core.Keyword(null,"ai","ai",760454697),(function (player,opponent,grid){
return ttt_clojure.computer.ai_move.call(null,grid,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(opponent),new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(player));
}));
ttt_clojure.game_modes.play_round = (function ttt_clojure$game_modes$play_round(db_type,p__9526){
var map__9527 = p__9526;
var map__9527__$1 = cljs.core.__destructure_map.call(null,map__9527);
var game = map__9527__$1;
var player_1 = cljs.core.get.call(null,map__9527__$1,new cljs.core.Keyword(null,"player-1","player-1",-857374100));
var player_2 = cljs.core.get.call(null,map__9527__$1,new cljs.core.Keyword(null,"player-2","player-2",-227455796));
var moves = cljs.core.get.call(null,map__9527__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
var vec__9528 = ((ttt_clojure.board.player1_QMARK_.call(null,moves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_1,player_2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_2,player_1], null));
var player = cljs.core.nth.call(null,vec__9528,(0),null);
var opponent = cljs.core.nth.call(null,vec__9528,(1),null);
var new_board = ttt_clojure.game.convert_moves_to_board.call(null,game);
var move = ttt_clojure.game_modes.get_move.call(null,player,opponent,new_board);
var new_grid = ttt_clojure.game_modes.grid_after_move.call(null,move,game);
var game__$1 = cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.conj.call(null,moves,move));
ttt_clojure.data.save.call(null,game__$1,db_type);

ttt_clojure.ui.print_board.call(null,new_grid);

return game__$1;
});

//# sourceMappingURL=game_modes.js.map
