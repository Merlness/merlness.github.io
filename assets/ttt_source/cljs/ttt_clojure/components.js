// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ttt_clojure.board');
goog.require('ttt_clojure.game_modes');
goog.require('ttt_clojure.game');
goog.require('ttt_clojure.ui');
ttt_clojure.components.default_game_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"game-id","game-id",385578016),(1),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-game","new-game",167241648),true,new cljs.core.Keyword(null,"ai-thinking","ai-thinking",2113852343),false], null);
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.components !== 'undefined') && (typeof ttt_clojure.components.game_state !== 'undefined')){
} else {
ttt_clojure.components.game_state = reagent.core.atom.call(null,ttt_clojure.components.default_game_state);
}
ttt_clojure.components.handle_submit = (function ttt_clojure$components$handle_submit(event){
event.preventDefault();

return cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"new-game","new-game",167241648),false);
});
ttt_clojure.components.update_player = (function ttt_clojure$components$update_player(player_key,kind,difficulty){
return (function (){
return cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_key], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),difficulty,new cljs.core.Keyword(null,"token","token",-1211463215),((cljs.core._EQ_.call(null,player_key,new cljs.core.Keyword(null,"player-1","player-1",-857374100)))?"X":"O")], null));
});
});
ttt_clojure.components.radio_option = (function ttt_clojure$components$radio_option(id,option_name,value,label,on_change_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),option_name,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_fn], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label], null)], null);
});
ttt_clojure.components.game_options_form = (function ttt_clojure$components$game_options_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Choose your Tic Tac Toe Options"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__13283_SHARP_){
return ttt_clojure.components.handle_submit.call(null,p1__13283_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"centered-text"], null),"Please choose which board you want to play with"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"3x3","size",new cljs.core.Keyword(null,"3x3","3x3",570362544),"3x3",(function (){
return cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"3x3","3x3",570362544));
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"4x4","size",new cljs.core.Keyword(null,"4x4","4x4",121507723),"4x4",(function (){
return cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"4x4","4x4",121507723));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"centered-text"], null),"Please Select Player 1"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"human1","player_1",new cljs.core.Keyword(null,"human","human",-772334390),"human",(function (){
return cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.Keyword(null,"kind","kind",-717265803)], null),new cljs.core.Keyword(null,"human","human",-772334390));
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"ai_easy1","player_1",new cljs.core.Keyword(null,"ai_easy","ai_easy",-1152477110),"easy ai",ttt_clojure.components.update_player.call(null,new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"easy","easy",315769928))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"ai_medium1","player_1",new cljs.core.Keyword(null,"ai_medium","ai_medium",-1304024594),"medium ai",ttt_clojure.components.update_player.call(null,new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"medium","medium",-1864319384))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"ai_hard1","player_1",new cljs.core.Keyword(null,"ai_hard","ai_hard",-1862530175),"hard ai",ttt_clojure.components.update_player.call(null,new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"hard","hard",2068420191))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"centered-text"], null),"Please Select Player 2"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"human2","player_2",new cljs.core.Keyword(null,"human","human",-772334390),"human",(function (){
return cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.Keyword(null,"kind","kind",-717265803)], null),new cljs.core.Keyword(null,"human","human",-772334390));
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"ai_easy2","player_2",new cljs.core.Keyword(null,"ai_easy","ai_easy",-1152477110),"easy ai",ttt_clojure.components.update_player.call(null,new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"easy","easy",315769928))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"ai_medium2","player_2",new cljs.core.Keyword(null,"ai_medium","ai_medium",-1304024594),"medium ai",ttt_clojure.components.update_player.call(null,new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"medium","medium",-1864319384))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.radio_option,"ai_hard2","player_2",new cljs.core.Keyword(null,"ai_hard","ai_hard",-1862530175),"hard ai",ttt_clojure.components.update_player.call(null,new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"hard","hard",2068420191))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Submit"], null)], null)], null)], null);
});
ttt_clojure.components.new_game_button = (function ttt_clojure$components$new_game_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.components.default_game_state);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"new-game-btn",new cljs.core.Keyword(null,"name","name",1843675177),"newGame",new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"New Game"], null)], null);
});
ttt_clojure.components.can_update_QMARK_ = (function ttt_clojure$components$can_update_QMARK_(grid,index){
if(cljs.core.not.call(null,ttt_clojure.board.game_over_QMARK_.call(null,grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null)))){
var and__4149__auto__ = cljs.core.some.call(null,(function (p1__13284_SHARP_){
return cljs.core._EQ_.call(null,index,p1__13284_SHARP_);
}),grid);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.integer_QMARK_.call(null,cljs.core.get.call(null,grid,(index - (1))));
} else {
return and__4149__auto__;
}
} else {
return false;
}
});
ttt_clojure.components.get_players = (function ttt_clojure$components$get_players(game,moves){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,moves))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(game)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(game)], null);
}
});
ttt_clojure.components.calculate_move = (function ttt_clojure$components$calculate_move(state,index){
var moves = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(state);
var vec__13285 = ttt_clojure.components.get_players.call(null,state,moves);
var current_player = cljs.core.nth.call(null,vec__13285,(0),null);
var opponent = cljs.core.nth.call(null,vec__13285,(1),null);
var grid = ttt_clojure.game.convert_moves_to_board.call(null,state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(current_player))){
return ttt_clojure.game_modes.get_move.call(null,current_player,opponent,grid);
} else {
return (index + (1));
}
});
ttt_clojure.components.update_grid = (function ttt_clojure$components$update_grid(index){
return cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,(function (state){
var move = ttt_clojure.components.calculate_move.call(null,state,index);
var grid = ttt_clojure.game.convert_moves_to_board.call(null,state);
if(cljs.core.truth_(ttt_clojure.components.can_update_QMARK_.call(null,grid,move))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.conj,move);
} else {
return state;
}
}));
});
ttt_clojure.components.button = (function ttt_clojure$components$button(value,index,on_click){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),["-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),((typeof value === 'number')?"":value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)], null);
});
ttt_clojure.components.new_line = (function ttt_clojure$components$new_line(side,index){
if(cljs.core._EQ_.call(null,(side - (1)),cljs.core.mod.call(null,index,side))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
} else {
return null;
}
});
ttt_clojure.components.group_buttons = (function ttt_clojure$components$group_buttons(grid,side,index){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.button,cljs.core.get.call(null,grid,index),index,(function (){
return ttt_clojure.components.update_grid.call(null,index);
})], null),ttt_clojure.components.new_line.call(null,side,index)], null);
});
ttt_clojure.components.make_grid = (function ttt_clojure$components$make_grid(grid,side){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4564__auto__ = (function ttt_clojure$components$make_grid_$_iter__13288(s__13289){
return (new cljs.core.LazySeq(null,(function (){
var s__13289__$1 = s__13289;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__13289__$1);
if(temp__5804__auto__){
var s__13289__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13289__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__13289__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__13291 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__13290 = (0);
while(true){
if((i__13290 < size__4563__auto__)){
var index = cljs.core._nth.call(null,c__4562__auto__,i__13290);
cljs.core.chunk_append.call(null,b__13291,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.group_buttons,grid,side,index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)));

var G__13292 = (i__13290 + (1));
i__13290 = G__13292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13291),ttt_clojure$components$make_grid_$_iter__13288.call(null,cljs.core.chunk_rest.call(null,s__13289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13291),null);
}
} else {
var index = cljs.core.first.call(null,s__13289__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.group_buttons,grid,side,index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)),ttt_clojure$components$make_grid_$_iter__13288.call(null,cljs.core.rest.call(null,s__13289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,grid)));
})()], null);
});
ttt_clojure.components.game_over_display = (function ttt_clojure$components$game_over_display(grid){
if(cljs.core.truth_(ttt_clojure.board.game_over_QMARK_.call(null,grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-result","div.game-result",-1250237605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"centered-text"], null),ttt_clojure.ui.endgame_result.call(null,grid,"X","O")], null)], null);
} else {
return null;
}
});
ttt_clojure.components.player_name = (function ttt_clojure$components$player_name(current_player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(current_player),new cljs.core.Keyword(null,"human","human",-772334390))){
return "human";
} else {
return [cljs.core.name.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(current_player))," ai"].join('');
}
});
ttt_clojure.components.turn_message = (function ttt_clojure$components$turn_message(game){
var moves = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(game);
var player_1 = new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(game);
var player_2 = new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(game);
var vec__13293 = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,moves)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_2,"2"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_1,"1"], null));
var current_player = cljs.core.nth.call(null,vec__13293,(0),null);
var player_number = cljs.core.nth.call(null,vec__13293,(1),null);
var player_name = ttt_clojure.components.player_name.call(null,current_player);
return ["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_number)," ",player_name,"'s turn"].join('');
});
ttt_clojure.components.ai_thinking_message = (function ttt_clojure$components$ai_thinking_message(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-center","div.flex-center",-2019004675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The AI is thinking..."], null)], null);
});
ttt_clojure.components.handle_ai_move_click = (function ttt_clojure$components$handle_ai_move_click(){
cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"ai-thinking","ai-thinking",2113852343),true);

return setTimeout((function (){
ttt_clojure.components.update_grid.call(null,(-1));

return cljs.core.swap_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"ai-thinking","ai-thinking",2113852343),false);
}),(500));
});
ttt_clojure.components.ai_move_button = (function ttt_clojure$components$ai_move_button(){
var ai_thinking = new cljs.core.Keyword(null,"ai-thinking","ai-thinking",2113852343).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core.truth_(ai_thinking)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.ai_thinking_message], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-center","div.flex-center",-2019004675),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ai-move-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),ttt_clojure.components.handle_ai_move_click], null),"AI Move"], null)], null);
}
});
ttt_clojure.components.in_progress_display = (function ttt_clojure$components$in_progress_display(grid){
if(cljs.core.not.call(null,ttt_clojure.board.game_over_QMARK_.call(null,grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.turn_message,cljs.core.deref.call(null,ttt_clojure.components.game_state)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.ai_move_button], null)], null);
} else {
return null;
}
});
ttt_clojure.components.game_screen = (function ttt_clojure$components$game_screen(grid,side){
var moves = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
var vec__13296 = ttt_clojure.components.get_players.call(null,cljs.core.deref.call(null,ttt_clojure.components.game_state),moves);
var current_player = cljs.core.nth.call(null,vec__13296,(0),null);
var _ = cljs.core.nth.call(null,vec__13296,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to Merl's Tic Tac Toe"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.new_game_button], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.make_grid,grid,side], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.in_progress_display,grid,current_player], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.game_over_display,grid], null)], null);
});
ttt_clojure.components.tic_tac_toe = (function ttt_clojure$components$tic_tac_toe(){
var map__13299 = cljs.core.deref.call(null,ttt_clojure.components.game_state);
var map__13299__$1 = cljs.core.__destructure_map.call(null,map__13299);
var new_game = cljs.core.get.call(null,map__13299__$1,new cljs.core.Keyword(null,"new-game","new-game",167241648));
var size = cljs.core.get.call(null,map__13299__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var side = ((cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"3x3","3x3",570362544)))?(3):(4));
var grid = ttt_clojure.game.convert_moves_to_board.call(null,cljs.core.deref.call(null,ttt_clojure.components.game_state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),(cljs.core.truth_(new_game)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.game_options_form], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.game_screen,grid,side], null))], null);
});

//# sourceMappingURL=components.js.map
