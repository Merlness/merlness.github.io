// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.core_spec');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ttt_clojure.components');
goog.require('speclj.core');
ttt_clojure.core_spec.click_and_flush = (function ttt_clojure$core_spec$click_and_flush(button){
button.click();

return reagent.core.flush.call(null);
});
ttt_clojure.core_spec.should_click_letter = (function ttt_clojure$core_spec$should_click_letter(letter,buttons,index){
ttt_clojure.core_spec.click_and_flush.call(null,cljs.core.nth.call(null,buttons,index));

var expected__7500__auto__ = letter;
var actual__7501__auto__ = cljs.core.nth.call(null,buttons,index).value;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});
ttt_clojure.core_spec.should_click_radio = (function ttt_clojure$core_spec$should_click_radio(element,expected_state,get_state){
ttt_clojure.core_spec.click_and_flush.call(null,element);

var expected__7500__auto__ = expected_state;
var actual__7501__auto__ = get_state.call(null,cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});
ttt_clojure.core_spec.default_game_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"game-id","game-id",385578016),(1),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-game","new-game",167241648),true], null);
ttt_clojure.core_spec.simple_game_over = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"game-id","game-id",385578016),(1),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(2),(6),(3)], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false], null);
ttt_clojure.core_spec.update_moves = (function ttt_clojure$core_spec$update_moves(game_state,moves){
return cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"moves","moves",927465255),moves);
});
ttt_clojure.core_spec.update_players = (function ttt_clojure$core_spec$update_players(game_state,player_1,player_2){
return cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"player-1","player-1",-857374100),player_1,new cljs.core.Keyword(null,"player-2","player-2",-227455796),player_2);
});
ttt_clojure.core_spec.invoke_query = (function ttt_clojure$core_spec$invoke_query(element){
return cljs.core.js_invoke.call(null,document,"querySelector",element);
});
ttt_clojure.core_spec.invoke_query_all = (function ttt_clojure$core_spec$invoke_query_all(element){
return cljs.core.js_invoke.call(null,document,"querySelectorAll",element);
});
ttt_clojure.core_spec.setup_game_state = (function ttt_clojure$core_spec$setup_game_state(initial_state){
(document.body.innerHTML = "<div id=\"root\"></div>");

cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,initial_state);

var root = cljs.core.js_invoke.call(null,document,"getElementById","root");
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root);
});
var description__7364__auto___15002 = speclj.components.new_description.call(null,"Tic Tac Toe",false,"ttt-clojure.core-spec");
var _STAR_parent_description_STAR__orig_val__14936_15003 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14937_15004 = description__7364__auto___15002;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14937_15004);

try{var seq__14938_15005 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
return ttt_clojure.core_spec.setup_game_state.call(null,ttt_clojure.core_spec.default_game_state);
});})(_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
),speclj.components.new_characteristic.call(null,"displays the options form",((function (_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var expected__7500__auto__ = "Choose your Tic Tac Toe Options";
var actual__7501__auto__ = ttt_clojure.core_spec.invoke_query.call(null,"h1").textContent;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for board size",((function (_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var expected__7500__auto__ = (2);
var actual__7501__auto__ = cljs.core.count.call(null,cljs.core.array_seq.call(null,ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='size']")));
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for player 1",((function (_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var expected__7500__auto__ = (4);
var actual__7501__auto__ = cljs.core.count.call(null,cljs.core.array_seq.call(null,ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='player_1']")));
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for player 2",((function (_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var expected__7500__auto__ = (4);
var actual__7501__auto__ = cljs.core.count.call(null,cljs.core.array_seq.call(null,ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='player_2']")));
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"does not allow grid modifications after game over",((function (_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var id_button_6 = ttt_clojure.core_spec.invoke_query.call(null,"#-my-button-6");
ttt_clojure.core_spec.click_and_flush.call(null,id_button_6);

var expected__7500__auto__ = "";
var actual__7501__auto__ = id_button_6.value;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"updates game state when radio buttons are clicked",((function (_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
reagent.core.flush.call(null);

var size_radio = ttt_clojure.core_spec.invoke_query.call(null,"input[name='size'][value='4x4']");
var player1_radio = ttt_clojure.core_spec.invoke_query.call(null,"input[name='player_1'][value='ai_easy']");
var player2_radio = ttt_clojure.core_spec.invoke_query.call(null,"input[name='player_2'][value='ai_hard']");
var submit_button = ttt_clojure.core_spec.invoke_query.call(null,"input[type='submit']");
var expected__7524__auto___15009 = null;
var actual__7525__auto___15010 = size_radio;
if(cljs.core._EQ_.call(null,expected__7524__auto___15009,actual__7525__auto___15010)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15009;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15010;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7524__auto___15011 = null;
var actual__7525__auto___15012 = player1_radio;
if(cljs.core._EQ_.call(null,expected__7524__auto___15011,actual__7525__auto___15012)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15011;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15012;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7524__auto___15013 = null;
var actual__7525__auto___15014 = player2_radio;
if(cljs.core._EQ_.call(null,expected__7524__auto___15013,actual__7525__auto___15014)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15013;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15014;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7524__auto___15015 = null;
var actual__7525__auto___15016 = submit_button;
if(cljs.core._EQ_.call(null,expected__7524__auto___15015,actual__7525__auto___15016)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15015;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15016;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

ttt_clojure.core_spec.should_click_radio.call(null,size_radio,new cljs.core.Keyword(null,"4x4","4x4",121507723),(function (p1__14930_SHARP_){
return cljs.core.get.call(null,p1__14930_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007));
}));

ttt_clojure.core_spec.should_click_radio.call(null,player1_radio,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),(function (p1__14931_SHARP_){
return cljs.core.get.call(null,p1__14931_SHARP_,new cljs.core.Keyword(null,"player-1","player-1",-857374100));
}));

ttt_clojure.core_spec.should_click_radio.call(null,player2_radio,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),(function (p1__14932_SHARP_){
return cljs.core.get.call(null,p1__14932_SHARP_,new cljs.core.Keyword(null,"player-2","player-2",-227455796));
}));

return ttt_clojure.core_spec.should_click_radio.call(null,submit_button,false,(function (p1__14933_SHARP_){
return cljs.core.get.call(null,p1__14933_SHARP_,new cljs.core.Keyword(null,"new-game","new-game",167241648));
}));
});})(_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"does not show AI move button, new game button, turn message, welcome message, and game buttons when :new-game is true",((function (_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),true));

reagent.core.flush.call(null);

var ai_move_btn = ttt_clojure.core_spec.invoke_query.call(null,".ai-move-btn");
var new_game_btn = ttt_clojure.core_spec.invoke_query.call(null,".new-game-btn");
var turn_msg = ttt_clojure.core_spec.invoke_query.call(null,".turn-message");
var welcome_msg = ttt_clojure.core_spec.invoke_query.call(null,"h1");
var game_buttons = ttt_clojure.core_spec.invoke_query_all.call(null,"input[type='button']");
var expected__7500__auto___15017 = null;
var actual__7501__auto___15018 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7500__auto___15017,actual__7501__auto___15018)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15017;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15018;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___15019 = null;
var actual__7501__auto___15020 = new_game_btn;
if(cljs.core._EQ_.call(null,expected__7500__auto___15019,actual__7501__auto___15020)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15019;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15020;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___15021 = null;
var actual__7501__auto___15022 = turn_msg;
if(cljs.core._EQ_.call(null,expected__7500__auto___15021,actual__7501__auto___15022)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15021;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15022;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7524__auto___15023 = "Welcome to Merl's Tic Tac Toe";
var actual__7525__auto___15024 = welcome_msg.textContent;
if(cljs.core._EQ_.call(null,expected__7524__auto___15023,actual__7525__auto___15024)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15023;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15024;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7500__auto__ = (0);
var actual__7501__auto__ = game_buttons.length;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),(function (){var description__7364__auto____$1 = speclj.components.new_description.call(null,"game state",false,"ttt-clojure.core-spec");
var _STAR_parent_description_STAR__orig_val__14972_15025 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14973_15026 = description__7364__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14973_15026);

try{var seq__14974_15027 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,21,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
return ttt_clojure.core_spec.setup_game_state.call(null,cljs.core.assoc.call(null,ttt_clojure.core_spec.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),false));
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
),speclj.components.new_characteristic.call(null,"has the title",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var expected__7500__auto__ = "Welcome to Merl's Tic Tac Toe";
var actual__7501__auto__ = ttt_clojure.core_spec.invoke_query.call(null,"h1").textContent;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"produces the correct number of buttons",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var buttons = ttt_clojure.core_spec.invoke_query_all.call(null,"input[type='button']");
var expected__7500__auto__ = (9);
var actual__7501__auto__ = buttons.length;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"makes buttons with correct initial labels",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var buttons = ttt_clojure.core_spec.invoke_query.call(null,"input[type='button']");
var expected__7551__auto__ = "";
var actual__7552__auto__ = buttons.innerHTML;
if((actual__7552__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7551__auto__ === 'string') && (typeof actual__7552__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7552__auto__.indexOf(expected__7551__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7551__auto__)) && (typeof actual__7552__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7551__auto__,actual__7552__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7552__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7552__auto__,expected__7551__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7552__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7550__7553__auto__){
return cljs.core._EQ_.call(null,expected__7551__auto__,p1__7550__7553__auto__);
}),actual__7552__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7479__auto__ = expected__7551__auto__;
var b__7480__auto__ = actual__7552__auto__;
var type_a__7481__auto__ = (((a__7479__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7479__auto__)));
var type_b__7482__auto__ = (((b__7480__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7480__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7481__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7482__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"updates button label on click",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var buttons = cljs.core.map.call(null,(function (p1__14934_SHARP_){
return ttt_clojure.core_spec.invoke_query.call(null,["#-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14934_SHARP_)].join(''));
}),cljs.core.range.call(null,(9)));
var seq__14990_15031 = cljs.core.seq.call(null,buttons);
var chunk__14991_15032 = null;
var count__14992_15033 = (0);
var i__14993_15034 = (0);
while(true){
if((i__14993_15034 < count__14992_15033)){
var button_15035 = cljs.core._nth.call(null,chunk__14991_15032,i__14993_15034);
var expected__7500__auto___15036 = "";
var actual__7501__auto___15037 = button_15035.value;
if(cljs.core._EQ_.call(null,expected__7500__auto___15036,actual__7501__auto___15037)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15036;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15037;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__15038 = seq__14990_15031;
var G__15039 = chunk__14991_15032;
var G__15040 = count__14992_15033;
var G__15041 = (i__14993_15034 + (1));
seq__14990_15031 = G__15038;
chunk__14991_15032 = G__15039;
count__14992_15033 = G__15040;
i__14993_15034 = G__15041;
continue;
} else {
var temp__5804__auto___15042 = cljs.core.seq.call(null,seq__14990_15031);
if(temp__5804__auto___15042){
var seq__14990_15043__$1 = temp__5804__auto___15042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14990_15043__$1)){
var c__4591__auto___15044 = cljs.core.chunk_first.call(null,seq__14990_15043__$1);
var G__15045 = cljs.core.chunk_rest.call(null,seq__14990_15043__$1);
var G__15046 = c__4591__auto___15044;
var G__15047 = cljs.core.count.call(null,c__4591__auto___15044);
var G__15048 = (0);
seq__14990_15031 = G__15045;
chunk__14991_15032 = G__15046;
count__14992_15033 = G__15047;
i__14993_15034 = G__15048;
continue;
} else {
var button_15049 = cljs.core.first.call(null,seq__14990_15043__$1);
var expected__7500__auto___15050 = "";
var actual__7501__auto___15051 = button_15049.value;
if(cljs.core._EQ_.call(null,expected__7500__auto___15050,actual__7501__auto___15051)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15050;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15051;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__15052 = cljs.core.next.call(null,seq__14990_15043__$1);
var G__15053 = null;
var G__15054 = (0);
var G__15055 = (0);
seq__14990_15031 = G__15052;
chunk__14991_15032 = G__15053;
count__14992_15033 = G__15054;
i__14993_15034 = G__15055;
continue;
}
} else {
}
}
break;
}

ttt_clojure.core_spec.should_click_letter.call(null,"X",buttons,(1));

ttt_clojure.core_spec.should_click_letter.call(null,"O",buttons,(2));

ttt_clojure.core_spec.should_click_letter.call(null,"O",buttons,(2));

var seq__14994 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(4),(5),(6),(7),(8)], null));
var chunk__14995 = null;
var count__14996 = (0);
var i__14997 = (0);
while(true){
if((i__14997 < count__14996)){
var i = cljs.core._nth.call(null,chunk__14995,i__14997);
var expected__7500__auto___15056 = "";
var actual__7501__auto___15057 = cljs.core.nth.call(null,buttons,i).value;
if(cljs.core._EQ_.call(null,expected__7500__auto___15056,actual__7501__auto___15057)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15056;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15057;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__15058 = seq__14994;
var G__15059 = chunk__14995;
var G__15060 = count__14996;
var G__15061 = (i__14997 + (1));
seq__14994 = G__15058;
chunk__14995 = G__15059;
count__14996 = G__15060;
i__14997 = G__15061;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14994);
if(temp__5804__auto__){
var seq__14994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14994__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__14994__$1);
var G__15062 = cljs.core.chunk_rest.call(null,seq__14994__$1);
var G__15063 = c__4591__auto__;
var G__15064 = cljs.core.count.call(null,c__4591__auto__);
var G__15065 = (0);
seq__14994 = G__15062;
chunk__14995 = G__15063;
count__14996 = G__15064;
i__14997 = G__15065;
continue;
} else {
var i = cljs.core.first.call(null,seq__14994__$1);
var expected__7500__auto___15066 = "";
var actual__7501__auto___15067 = cljs.core.nth.call(null,buttons,i).value;
if(cljs.core._EQ_.call(null,expected__7500__auto___15066,actual__7501__auto___15067)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15066;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15067;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__15068 = cljs.core.next.call(null,seq__14994__$1);
var G__15069 = null;
var G__15070 = (0);
var G__15071 = (0);
seq__14994 = G__15068;
chunk__14995 = G__15069;
count__14996 = G__15070;
i__14997 = G__15071;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"checks if there are line breaks",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var breaks = ttt_clojure.core_spec.invoke_query_all.call(null,".container br");
var expected__7500__auto__ = (3);
var actual__7501__auto__ = cljs.core.count.call(null,cljs.core.seq.call(null,breaks));
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"does not show game-over message initially",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var game_over_message = ttt_clojure.core_spec.invoke_query.call(null,".game-result");
var expected__7500__auto__ = null;
var actual__7501__auto__ = game_over_message;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"displays X is the winner message when game ends",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var game_over_message = ttt_clojure.core_spec.invoke_query.call(null,".game-result");
var expected__7524__auto___15072 = null;
var actual__7525__auto___15073 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7524__auto___15072,actual__7525__auto___15073)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15072;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15073;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7551__auto__ = "X is the winner!";
var actual__7552__auto__ = game_over_message.textContent;
if((actual__7552__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7551__auto__ === 'string') && (typeof actual__7552__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7552__auto__.indexOf(expected__7551__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7551__auto__)) && (typeof actual__7552__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7551__auto__,actual__7552__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7552__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7552__auto__,expected__7551__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7552__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7550__7553__auto__){
return cljs.core._EQ_.call(null,expected__7551__auto__,p1__7550__7553__auto__);
}),actual__7552__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7479__auto__ = expected__7551__auto__;
var b__7480__auto__ = actual__7552__auto__;
var type_a__7481__auto__ = (((a__7479__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7479__auto__)));
var type_b__7482__auto__ = (((b__7480__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7480__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7481__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7482__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"displays O is the winner message when game ends",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(5),(6),(8)], null)));

reagent.core.flush.call(null);

var game_over_message = ttt_clojure.core_spec.invoke_query.call(null,".game-result");
var expected__7524__auto___15074 = null;
var actual__7525__auto___15075 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7524__auto___15074,actual__7525__auto___15075)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15074;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15075;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7551__auto__ = "O is the winner";
var actual__7552__auto__ = game_over_message.textContent;
if((actual__7552__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7551__auto__ === 'string') && (typeof actual__7552__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7552__auto__.indexOf(expected__7551__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7551__auto__)) && (typeof actual__7552__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7551__auto__,actual__7552__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7552__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7552__auto__,expected__7551__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7552__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7550__7553__auto__){
return cljs.core._EQ_.call(null,expected__7551__auto__,p1__7550__7553__auto__);
}),actual__7552__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7479__auto__ = expected__7551__auto__;
var b__7480__auto__ = actual__7552__auto__;
var type_a__7481__auto__ = (((a__7479__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7479__auto__)));
var type_b__7482__auto__ = (((b__7480__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7480__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7481__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7482__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"displays draw message when no moves are left",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(4),(5),(8),(7),(3),(6),(9)], null)));

reagent.core.flush.call(null);

var game_over_message = ttt_clojure.core_spec.invoke_query.call(null,".game-result");
var expected__7524__auto___15076 = null;
var actual__7525__auto___15077 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7524__auto___15076,actual__7525__auto___15077)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15076;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15077;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7551__auto__ = "Womp, its a tie";
var actual__7552__auto__ = game_over_message.textContent;
if((actual__7552__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7551__auto__ === 'string') && (typeof actual__7552__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7552__auto__.indexOf(expected__7551__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7551__auto__)) && (typeof actual__7552__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7551__auto__,actual__7552__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7552__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7552__auto__,expected__7551__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7552__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7550__7553__auto__){
return cljs.core._EQ_.call(null,expected__7551__auto__,p1__7550__7553__auto__);
}),actual__7552__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7551__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7552__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7479__auto__ = expected__7551__auto__;
var b__7480__auto__ = actual__7552__auto__;
var type_a__7481__auto__ = (((a__7479__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7479__auto__)));
var type_b__7482__auto__ = (((b__7480__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7480__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7481__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7482__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"has the correct initial values",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var initial_state = cljs.core.deref.call(null,ttt_clojure.components.game_state);
var expected__7500__auto___15078 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null);
var actual__7501__auto___15079 = new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7500__auto___15078,actual__7501__auto___15079)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15078;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15079;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___15080 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null);
var actual__7501__auto___15081 = new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7500__auto___15080,actual__7501__auto___15081)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15080;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15081;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___15082 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__7501__auto___15083 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7500__auto___15082,actual__7501__auto___15083)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15082;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15083;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto__ = cljs.core.PersistentVector.EMPTY;
var actual__7501__auto__ = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"resets game-state and shows options form on new game button click",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var root_15084 = cljs.core.js_invoke.call(null,document,"getElementById","root");
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root_15084);

var new_game_button = ttt_clojure.core_spec.invoke_query.call(null,".new-game-btn");
ttt_clojure.core_spec.click_and_flush.call(null,new_game_button);

var expected__7500__auto___15085 = true;
var actual__7501__auto___15086 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7500__auto___15085,actual__7501__auto___15086)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15085;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15086;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto__ = "Choose your Tic Tac Toe Options";
var actual__7501__auto__ = ttt_clojure.core_spec.invoke_query.call(null,"h1").textContent;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"resets the board and shows the options form on new game",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var new_game_button = ttt_clojure.core_spec.invoke_query.call(null,".new-game-btn");
ttt_clojure.core_spec.click_and_flush.call(null,new_game_button);

var expected__7500__auto___15087 = true;
var actual__7501__auto___15088 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7500__auto___15087,actual__7501__auto___15088)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15087;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15088;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto__ = "Choose your Tic Tac Toe Options";
var actual__7501__auto__ = ttt_clojure.core_spec.invoke_query.call(null,"h1").textContent;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"shows and works the AI move button correctly",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3)], null),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var ai_move_btn = ttt_clojure.core_spec.invoke_query.call(null,".ai-move-btn");
var expected__7524__auto___15089 = null;
var actual__7525__auto___15090 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7524__auto___15089,actual__7525__auto___15090)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___15089;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___15090;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

ttt_clojure.core_spec.click_and_flush.call(null,ai_move_btn);

var expected__7500__auto___15091 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3)], null);
var actual__7501__auto___15092 = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7500__auto___15091,actual__7501__auto___15092)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15091;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15092;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

return setTimeout((function (){
return ttt_clojure.core_spec.click_and_flush.call(null,ai_move_btn).call(null,(function (){var expected__7500__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3),(2)], null);
var actual__7501__auto__ = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
})());
}));
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"displays the correct player token on the buttons after a move",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var buttons = cljs.core.map.call(null,(function (p1__14935_SHARP_){
return ttt_clojure.core_spec.invoke_query.call(null,["#-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14935_SHARP_)].join(''));
}),cljs.core.range.call(null,(9)));
var seq__14998_15093 = cljs.core.seq.call(null,buttons);
var chunk__14999_15094 = null;
var count__15000_15095 = (0);
var i__15001_15096 = (0);
while(true){
if((i__15001_15096 < count__15000_15095)){
var button_15097 = cljs.core._nth.call(null,chunk__14999_15094,i__15001_15096);
var expected__7500__auto___15098 = "";
var actual__7501__auto___15099 = button_15097.value;
if(cljs.core._EQ_.call(null,expected__7500__auto___15098,actual__7501__auto___15099)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15098;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15099;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__15100 = seq__14998_15093;
var G__15101 = chunk__14999_15094;
var G__15102 = count__15000_15095;
var G__15103 = (i__15001_15096 + (1));
seq__14998_15093 = G__15100;
chunk__14999_15094 = G__15101;
count__15000_15095 = G__15102;
i__15001_15096 = G__15103;
continue;
} else {
var temp__5804__auto___15104 = cljs.core.seq.call(null,seq__14998_15093);
if(temp__5804__auto___15104){
var seq__14998_15105__$1 = temp__5804__auto___15104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14998_15105__$1)){
var c__4591__auto___15106 = cljs.core.chunk_first.call(null,seq__14998_15105__$1);
var G__15107 = cljs.core.chunk_rest.call(null,seq__14998_15105__$1);
var G__15108 = c__4591__auto___15106;
var G__15109 = cljs.core.count.call(null,c__4591__auto___15106);
var G__15110 = (0);
seq__14998_15093 = G__15107;
chunk__14999_15094 = G__15108;
count__15000_15095 = G__15109;
i__15001_15096 = G__15110;
continue;
} else {
var button_15111 = cljs.core.first.call(null,seq__14998_15105__$1);
var expected__7500__auto___15112 = "";
var actual__7501__auto___15113 = button_15111.value;
if(cljs.core._EQ_.call(null,expected__7500__auto___15112,actual__7501__auto___15113)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15112;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15113;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__15114 = cljs.core.next.call(null,seq__14998_15105__$1);
var G__15115 = null;
var G__15116 = (0);
var G__15117 = (0);
seq__14998_15093 = G__15114;
chunk__14999_15094 = G__15115;
count__15000_15095 = G__15116;
i__15001_15096 = G__15117;
continue;
}
} else {
}
}
break;
}

ttt_clojure.core_spec.should_click_letter.call(null,"X",buttons,(0));

ttt_clojure.core_spec.should_click_letter.call(null,"O",buttons,(1));

var expected__7500__auto___15118 = "X";
var actual__7501__auto___15119 = cljs.core.nth.call(null,buttons,(0)).value;
if(cljs.core._EQ_.call(null,expected__7500__auto___15118,actual__7501__auto___15119)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15118;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15119;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto__ = "O";
var actual__7501__auto__ = cljs.core.nth.call(null,buttons,(1)).value;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1's turn",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var game_state = ttt_clojure.core_spec.update_moves.call(null,ttt_clojure.core_spec.simple_game_over,cljs.core.PersistentVector.EMPTY);
var expected__7500__auto__ = "Player 1 human's turn";
var actual__7501__auto__ = ttt_clojure.components.turn_message.call(null,game_state);
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2's turn",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var game_state = ttt_clojure.core_spec.update_players.call(null,ttt_clojure.core_spec.update_moves.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null));
var expected__7500__auto__ = "Player 2 medium ai's turn";
var actual__7501__auto__ = ttt_clojure.components.turn_message.call(null,game_state);
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1 when player types are different",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var game_state = ttt_clojure.core_spec.update_players.call(null,ttt_clojure.core_spec.update_moves.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null));
var expected__7500__auto__ = "Player 1 hard ai's turn";
var actual__7501__auto__ = ttt_clojure.components.turn_message.call(null,game_state);
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2 when player types are different",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
var game_state = ttt_clojure.core_spec.update_players.call(null,ttt_clojure.core_spec.update_moves.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null));
var expected__7500__auto__ = "Player 2 easy ai's turn";
var actual__7501__auto__ = ttt_clojure.components.turn_message.call(null,game_state);
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"does not display AI move button or turn message when the game is over",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var ai_move_btn = ttt_clojure.core_spec.invoke_query.call(null,".ai-move-btn");
var turn_message = ttt_clojure.core_spec.invoke_query.call(null,".turn-message");
var new_button = ttt_clojure.core_spec.invoke_query.call(null,".new-game-btn");
var expected__7500__auto___15120 = null;
var actual__7501__auto___15121 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7500__auto___15120,actual__7501__auto___15121)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15120;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15121;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___15122 = null;
var actual__7501__auto___15123 = turn_message;
if(cljs.core._EQ_.call(null,expected__7500__auto___15122,actual__7501__auto___15123)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15122;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15123;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7524__auto__ = null;
var actual__7525__auto__ = new_button;
if(cljs.core._EQ_.call(null,expected__7524__auto__,actual__7525__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false),speclj.components.new_characteristic.call(null,"does not show radio buttons when :new-game is false",((function (_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var size_radios = ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='size']");
var player1_radios = ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='player_1']");
var player2_radios = ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='player_2']");
var expected__7500__auto___15124 = (0);
var actual__7501__auto___15125 = size_radios.length;
if(cljs.core._EQ_.call(null,expected__7500__auto___15124,actual__7501__auto___15125)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15124;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15125;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___15126 = (0);
var actual__7501__auto___15127 = player1_radios.length;
if(cljs.core._EQ_.call(null,expected__7500__auto___15126,actual__7501__auto___15127)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___15126;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___15127;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto__ = (0);
var actual__7501__auto__ = player2_radios.length;
if(cljs.core._EQ_.call(null,expected__7500__auto__,actual__7501__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14972_15025,_STAR_parent_description_STAR__temp_val__14973_15026,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__14936_15003,_STAR_parent_description_STAR__temp_val__14937_15004,description__7364__auto___15002))
,false)],null)));
var chunk__14975_15028 = null;
var count__14976_15029 = (0);
var i__14977_15030 = (0);
while(true){
if((i__14977_15030 < count__14976_15029)){
var component__7365__auto___15128 = cljs.core._nth.call(null,chunk__14975_15028,i__14977_15030);
speclj.components.install.call(null,component__7365__auto___15128,description__7364__auto____$1);


var G__15129 = seq__14974_15027;
var G__15130 = chunk__14975_15028;
var G__15131 = count__14976_15029;
var G__15132 = (i__14977_15030 + (1));
seq__14974_15027 = G__15129;
chunk__14975_15028 = G__15130;
count__14976_15029 = G__15131;
i__14977_15030 = G__15132;
continue;
} else {
var temp__5804__auto___15133 = cljs.core.seq.call(null,seq__14974_15027);
if(temp__5804__auto___15133){
var seq__14974_15134__$1 = temp__5804__auto___15133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14974_15134__$1)){
var c__4591__auto___15135 = cljs.core.chunk_first.call(null,seq__14974_15134__$1);
var G__15136 = cljs.core.chunk_rest.call(null,seq__14974_15134__$1);
var G__15137 = c__4591__auto___15135;
var G__15138 = cljs.core.count.call(null,c__4591__auto___15135);
var G__15139 = (0);
seq__14974_15027 = G__15136;
chunk__14975_15028 = G__15137;
count__14976_15029 = G__15138;
i__14977_15030 = G__15139;
continue;
} else {
var component__7365__auto___15140 = cljs.core.first.call(null,seq__14974_15134__$1);
speclj.components.install.call(null,component__7365__auto___15140,description__7364__auto____$1);


var G__15141 = cljs.core.next.call(null,seq__14974_15134__$1);
var G__15142 = null;
var G__15143 = (0);
var G__15144 = (0);
seq__14974_15027 = G__15141;
chunk__14975_15028 = G__15142;
count__14976_15029 = G__15143;
i__14977_15030 = G__15144;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14972_15025);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7364__auto____$1);
}

return description__7364__auto____$1;
})()],null)));
var chunk__14939_15006 = null;
var count__14940_15007 = (0);
var i__14941_15008 = (0);
while(true){
if((i__14941_15008 < count__14940_15007)){
var component__7365__auto___15145 = cljs.core._nth.call(null,chunk__14939_15006,i__14941_15008);
speclj.components.install.call(null,component__7365__auto___15145,description__7364__auto___15002);


var G__15146 = seq__14938_15005;
var G__15147 = chunk__14939_15006;
var G__15148 = count__14940_15007;
var G__15149 = (i__14941_15008 + (1));
seq__14938_15005 = G__15146;
chunk__14939_15006 = G__15147;
count__14940_15007 = G__15148;
i__14941_15008 = G__15149;
continue;
} else {
var temp__5804__auto___15150 = cljs.core.seq.call(null,seq__14938_15005);
if(temp__5804__auto___15150){
var seq__14938_15151__$1 = temp__5804__auto___15150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14938_15151__$1)){
var c__4591__auto___15152 = cljs.core.chunk_first.call(null,seq__14938_15151__$1);
var G__15153 = cljs.core.chunk_rest.call(null,seq__14938_15151__$1);
var G__15154 = c__4591__auto___15152;
var G__15155 = cljs.core.count.call(null,c__4591__auto___15152);
var G__15156 = (0);
seq__14938_15005 = G__15153;
chunk__14939_15006 = G__15154;
count__14940_15007 = G__15155;
i__14941_15008 = G__15156;
continue;
} else {
var component__7365__auto___15157 = cljs.core.first.call(null,seq__14938_15151__$1);
speclj.components.install.call(null,component__7365__auto___15157,description__7364__auto___15002);


var G__15158 = cljs.core.next.call(null,seq__14938_15151__$1);
var G__15159 = null;
var G__15160 = (0);
var G__15161 = (0);
seq__14938_15005 = G__15158;
chunk__14939_15006 = G__15159;
count__14940_15007 = G__15160;
i__14941_15008 = G__15161;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14936_15003);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7364__auto___15002);
}


//# sourceMappingURL=core_spec.js.map
