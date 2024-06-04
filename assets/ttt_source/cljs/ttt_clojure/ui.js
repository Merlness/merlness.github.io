// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.ui');
goog.require('cljs.core');
goog.require('ttt_clojure.board');
goog.require('ttt_clojure.game');
ttt_clojure.ui.cui_or_other = cljs.core.atom.call(null,new cljs.core.Keyword(null,"cui","cui",-1048528138));
ttt_clojure.ui.invalid_move_QMARK_ = (function ttt_clojure$ui$invalid_move_QMARK_(num,grid){
return cljs.core.not_any_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([num]),grid);
});
ttt_clojure.ui.valid_input_QMARK_ = (function ttt_clojure$ui$valid_input_QMARK_(input,grid){
var move = (function (){try{return input;
}catch (e10955){if((e10955 instanceof ttt_clojure.ui.NumberFormatException)){
var _ = e10955;
return null;
} else {
throw e10955;

}
}})();
var size = cljs.core.count.call(null,grid);
var and__4149__auto__ = move;
if(cljs.core.truth_(and__4149__auto__)){
return ((((1) <= move)) && ((move <= size)));
} else {
return and__4149__auto__;
}
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.ui !== 'undefined') && (typeof ttt_clojure.ui.get_move !== 'undefined')){
} else {
ttt_clojure.ui.get_move = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.ui","get-move"),(function (_grid){
return cljs.core.deref.call(null,ttt_clojure.ui.cui_or_other);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.ui.get_move,new cljs.core.Keyword(null,"cui","cui",-1048528138),(function (grid){
cljs.core.println.call(null,"Choose your position");

while(true){
var user_input = Integer.parseInt(ttt_clojure.ui.read_line.call(null));
if(cljs.core.truth_((((!(ttt_clojure.ui.invalid_move_QMARK_.call(null,user_input,grid))))?ttt_clojure.ui.valid_input_QMARK_.call(null,user_input,grid):false))){
return user_input;
} else {
cljs.core.println.call(null,"Invalid input. Please place a number that is available.");

continue;
}
break;
}
}));
ttt_clojure.ui.endgame_result = (function ttt_clojure$ui$endgame_result(grid,token_1,token_2){
if(cljs.core.truth_(ttt_clojure.board.token_wins.call(null,grid,token_1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_1)," is the winner!"].join('');
} else {
if(cljs.core.truth_(ttt_clojure.board.token_wins.call(null,grid,token_2))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_2)," is the winner!"].join('');
} else {
if(ttt_clojure.board.tie.call(null,grid)){
return "Womp, its a tie";
} else {
return null;
}
}
}
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.ui !== 'undefined') && (typeof ttt_clojure.ui.print_board !== 'undefined')){
} else {
ttt_clojure.ui.print_board = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.ui","print-board"),(function (_grid){
return cljs.core.deref.call(null,ttt_clojure.ui.cui_or_other);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.ui.print_board,new cljs.core.Keyword(null,"cui","cui",-1048528138),(function (grid){
return cljs.core.println.call(null,ttt_clojure.board.display.call(null,grid));
}));
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.ui !== 'undefined') && (typeof ttt_clojure.ui.print_end !== 'undefined')){
} else {
ttt_clojure.ui.print_end = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.ui","print-end"),(function (_game){
return cljs.core.deref.call(null,ttt_clojure.ui.cui_or_other);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.ui.print_end,new cljs.core.Keyword(null,"cui","cui",-1048528138),(function (game){
var player_1 = ttt_clojure.board.player_token.call(null,new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(game));
var player_2 = ttt_clojure.board.player_token.call(null,new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(game));
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(game);
var moves = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(game);
var board = ttt_clojure.game.convert_moves_to_board.call(null,player_1,player_2,size,moves);
return cljs.core.println.call(null,ttt_clojure.ui.endgame_result.call(null,board,player_1,player_2));
}));
ttt_clojure.ui.player_statement = (function ttt_clojure$ui$player_statement(num){
return cljs.core.println.call(null,["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"'s turn"].join(''));
});
ttt_clojure.ui.get_game_board = (function ttt_clojure$ui$get_game_board(){
while(true){
cljs.core.println.call(null,"Welcome to Merl's Tic Tac Toe\n  Please press 3 if you would like to play on a 3x3 board,\n    4 if you would like to play on a 4x4 board,\n    or 9 if you would like to play 3D Tic Tac Toe");

var G__10956 = ttt_clojure.ui.read_line.call(null);
switch (G__10956) {
case "3":
return new cljs.core.Keyword(null,"3x3","3x3",570362544);

break;
case "4":
return new cljs.core.Keyword(null,"4x4","4x4",121507723);

break;
case "9":
return new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);

break;
default:
continue;

}
break;
}
});
ttt_clojure.ui.get_difficulty = (function ttt_clojure$ui$get_difficulty(){
while(true){
cljs.core.println.call(null,"Please press 1 for an easy AI\n             2 for a medium AI\n             3 for a hard AI");

var G__10958 = ttt_clojure.ui.read_line.call(null);
switch (G__10958) {
case "1":
return new cljs.core.Keyword(null,"easy","easy",315769928);

break;
case "2":
return new cljs.core.Keyword(null,"medium","medium",-1864319384);

break;
case "3":
return new cljs.core.Keyword(null,"hard","hard",2068420191);

break;
default:
continue;

}
break;
}
});
ttt_clojure.ui.get_player = (function ttt_clojure$ui$get_player(player_number){
while(true){
cljs.core.println.call(null,["If you would like Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_number)," to be human press 1, or press 2 for AI?"].join(''));

var G__10960 = ttt_clojure.ui.read_line.call(null);
switch (G__10960) {
case "1":
return new cljs.core.Keyword(null,"human","human",-772334390);

break;
case "2":
return new cljs.core.Keyword(null,"ai","ai",760454697);

break;
default:
var G__10962 = player_number;
player_number = G__10962;
continue;

}
break;
}
});
ttt_clojure.ui.get_player_1_token = (function ttt_clojure$ui$get_player_1_token(){
cljs.core.println.call(null,"Please press 1 if you want Player 1 to be X and Player 2 to be O,\nor anything else for Player 1 to be O and Player 2 to be X");

if(cljs.core._EQ_.call(null,"1",ttt_clojure.ui.read_line.call(null))){
return "X";
} else {
return "O";
}
});
ttt_clojure.ui.get_player_2_token = (function ttt_clojure$ui$get_player_2_token(player_1_token){
if(cljs.core._EQ_.call(null,player_1_token,"X")){
return "O";
} else {
return "X";
}
});
ttt_clojure.ui.continue_last_game_QMARK_ = (function ttt_clojure$ui$continue_last_game_QMARK_(){
cljs.core.println.call(null,"Would you like to finish your previous game?\n  1 for Yes, anything else for No");

return cljs.core._EQ_.call(null,"1",ttt_clojure.ui.read_line.call(null));
});
ttt_clojure.ui.difficulty_to_string = (function ttt_clojure$ui$difficulty_to_string(difficulty){
var G__10963 = difficulty;
var G__10963__$1 = (((G__10963 instanceof cljs.core.Keyword))?G__10963.fqn:null);
switch (G__10963__$1) {
case "easy":
return "Easy AI";

break;
case "medium":
return "Medium AI";

break;
case "hard":
return "Hard AI";

break;
default:
return "Unknown";

}
});
ttt_clojure.ui.print_player_kind = (function ttt_clojure$ui$print_player_kind(player_number,player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(player))){
return cljs.core.println.call(null,["Player-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_number),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ttt_clojure.ui.difficulty_to_string.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(player)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(player))].join(''));
} else {
return cljs.core.println.call(null,["Player-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_number),": Human ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(player))].join(''));
}
});
ttt_clojure.ui.print_player_kinds = (function ttt_clojure$ui$print_player_kinds(game){
ttt_clojure.ui.print_player_kind.call(null,"1",new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(game));

return ttt_clojure.ui.print_player_kind.call(null,"2",new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(game));
});
ttt_clojure.ui.print_resume_game = (function ttt_clojure$ui$print_resume_game(game){
cljs.core.println.call(null,"\nResuming game:");

return ttt_clojure.ui.print_player_kinds.call(null,game);
});
ttt_clojure.ui.print_id = (function ttt_clojure$ui$print_id(id){
return cljs.core.println.call(null,["Game-ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.ui !== 'undefined') && (typeof ttt_clojure.ui.print_id_and_board !== 'undefined')){
} else {
ttt_clojure.ui.print_id_and_board = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.ui","print-id-and-board"),(function (game_id,game){
return cljs.core.deref.call(null,ttt_clojure.ui.cui_or_other);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.ui.print_id_and_board,new cljs.core.Keyword(null,"cui","cui",-1048528138),(function (game_id,game){
var board = ttt_clojure.game.convert_moves_to_board.call(null,game);
ttt_clojure.ui.print_id.call(null,game_id);

return ttt_clojure.ui.print_board.call(null,board);
}));
ttt_clojure.ui.print_previous_player_kinds = (function ttt_clojure$ui$print_previous_player_kinds(game){
cljs.core.println.call(null,"\nPrevious game:");

return ttt_clojure.ui.print_player_kinds.call(null,game);
});
ttt_clojure.ui.print_previous_moves = (function ttt_clojure$ui$print_previous_moves(game_data){
return cljs.core.run_BANG_.call(null,(function (game){
cljs.core.println.call(null,"Player",((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.string_QMARK_,game))))?"2":"1"),"made a move:");

return ttt_clojure.ui.print_board.call(null,game);
}),game_data);
});
ttt_clojure.ui.play_again_message = (function ttt_clojure$ui$play_again_message(){
cljs.core.println.call(null,"Would you like to play a new game?\n  Please press 1 for a new game or anything else to exit.");

return cljs.core._EQ_.call(null,"1",ttt_clojure.ui.read_line.call(null));
});

//# sourceMappingURL=ui.js.map
