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
var description__7364__auto___11829 = speclj.components.new_description.call(null,"Tic Tac Toe",false,"ttt-clojure.core-spec");
var _STAR_parent_description_STAR__orig_val__11763_11830 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11764_11831 = description__7364__auto___11829;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11764_11831);

try{var seq__11765_11832 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
return ttt_clojure.core_spec.setup_game_state.call(null,ttt_clojure.core_spec.default_game_state);
});})(_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
),speclj.components.new_characteristic.call(null,"displays the options form",((function (_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for board size",((function (_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for player 1",((function (_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for player 2",((function (_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"does not allow grid modifications after game over",((function (_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"updates game state when radio buttons are clicked",((function (_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
reagent.core.flush.call(null);

var size_radio = ttt_clojure.core_spec.invoke_query.call(null,"input[name='size'][value='4x4']");
var player1_radio = ttt_clojure.core_spec.invoke_query.call(null,"input[name='player_1'][value='ai_easy']");
var player2_radio = ttt_clojure.core_spec.invoke_query.call(null,"input[name='player_2'][value='ai_hard']");
var submit_button = ttt_clojure.core_spec.invoke_query.call(null,"input[type='submit']");
var expected__7524__auto___11836 = null;
var actual__7525__auto___11837 = size_radio;
if(cljs.core._EQ_.call(null,expected__7524__auto___11836,actual__7525__auto___11837)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11836;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11837;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7524__auto___11838 = null;
var actual__7525__auto___11839 = player1_radio;
if(cljs.core._EQ_.call(null,expected__7524__auto___11838,actual__7525__auto___11839)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11838;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11839;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7524__auto___11840 = null;
var actual__7525__auto___11841 = player2_radio;
if(cljs.core._EQ_.call(null,expected__7524__auto___11840,actual__7525__auto___11841)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11840;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11841;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

var expected__7524__auto___11842 = null;
var actual__7525__auto___11843 = submit_button;
if(cljs.core._EQ_.call(null,expected__7524__auto___11842,actual__7525__auto___11843)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11842;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11843;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()].join('')));
} else {
}

ttt_clojure.core_spec.should_click_radio.call(null,size_radio,new cljs.core.Keyword(null,"4x4","4x4",121507723),(function (p1__11757_SHARP_){
return cljs.core.get.call(null,p1__11757_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007));
}));

ttt_clojure.core_spec.should_click_radio.call(null,player1_radio,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),(function (p1__11758_SHARP_){
return cljs.core.get.call(null,p1__11758_SHARP_,new cljs.core.Keyword(null,"player-1","player-1",-857374100));
}));

ttt_clojure.core_spec.should_click_radio.call(null,player2_radio,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),(function (p1__11759_SHARP_){
return cljs.core.get.call(null,p1__11759_SHARP_,new cljs.core.Keyword(null,"player-2","player-2",-227455796));
}));

return ttt_clojure.core_spec.should_click_radio.call(null,submit_button,false,(function (p1__11760_SHARP_){
return cljs.core.get.call(null,p1__11760_SHARP_,new cljs.core.Keyword(null,"new-game","new-game",167241648));
}));
});})(_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"does not show AI move button, new game button, turn message, welcome message, and game buttons when :new-game is true",((function (_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),true));

reagent.core.flush.call(null);

var ai_move_btn = ttt_clojure.core_spec.invoke_query.call(null,".ai-move-btn");
var new_game_btn = ttt_clojure.core_spec.invoke_query.call(null,".new-game-btn");
var turn_msg = ttt_clojure.core_spec.invoke_query.call(null,".turn-message");
var welcome_msg = ttt_clojure.core_spec.invoke_query.call(null,"h1");
var game_buttons = ttt_clojure.core_spec.invoke_query_all.call(null,"input[type='button']");
var expected__7500__auto___11844 = null;
var actual__7501__auto___11845 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7500__auto___11844,actual__7501__auto___11845)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11844;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11845;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___11846 = null;
var actual__7501__auto___11847 = new_game_btn;
if(cljs.core._EQ_.call(null,expected__7500__auto___11846,actual__7501__auto___11847)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11846;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11847;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___11848 = null;
var actual__7501__auto___11849 = turn_msg;
if(cljs.core._EQ_.call(null,expected__7500__auto___11848,actual__7501__auto___11849)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11848;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11849;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7524__auto___11850 = "Welcome to Merl's Tic Tac Toe";
var actual__7525__auto___11851 = welcome_msg.textContent;
if(cljs.core._EQ_.call(null,expected__7524__auto___11850,actual__7525__auto___11851)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11850;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11851;
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
});})(_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),(function (){var description__7364__auto____$1 = speclj.components.new_description.call(null,"game state",false,"ttt-clojure.core-spec");
var _STAR_parent_description_STAR__orig_val__11799_11852 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11800_11853 = description__7364__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11800_11853);

try{var seq__11801_11854 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,21,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
return ttt_clojure.core_spec.setup_game_state.call(null,cljs.core.assoc.call(null,ttt_clojure.core_spec.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),false));
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
),speclj.components.new_characteristic.call(null,"has the title",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"produces the correct number of buttons",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"makes buttons with correct initial labels",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"updates button label on click",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
var buttons = cljs.core.map.call(null,(function (p1__11761_SHARP_){
return ttt_clojure.core_spec.invoke_query.call(null,["#-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11761_SHARP_)].join(''));
}),cljs.core.range.call(null,(9)));
var seq__11817_11858 = cljs.core.seq.call(null,buttons);
var chunk__11818_11859 = null;
var count__11819_11860 = (0);
var i__11820_11861 = (0);
while(true){
if((i__11820_11861 < count__11819_11860)){
var button_11862 = cljs.core._nth.call(null,chunk__11818_11859,i__11820_11861);
var expected__7500__auto___11863 = "";
var actual__7501__auto___11864 = button_11862.value;
if(cljs.core._EQ_.call(null,expected__7500__auto___11863,actual__7501__auto___11864)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11863;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11864;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__11865 = seq__11817_11858;
var G__11866 = chunk__11818_11859;
var G__11867 = count__11819_11860;
var G__11868 = (i__11820_11861 + (1));
seq__11817_11858 = G__11865;
chunk__11818_11859 = G__11866;
count__11819_11860 = G__11867;
i__11820_11861 = G__11868;
continue;
} else {
var temp__5804__auto___11869 = cljs.core.seq.call(null,seq__11817_11858);
if(temp__5804__auto___11869){
var seq__11817_11870__$1 = temp__5804__auto___11869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11817_11870__$1)){
var c__4591__auto___11871 = cljs.core.chunk_first.call(null,seq__11817_11870__$1);
var G__11872 = cljs.core.chunk_rest.call(null,seq__11817_11870__$1);
var G__11873 = c__4591__auto___11871;
var G__11874 = cljs.core.count.call(null,c__4591__auto___11871);
var G__11875 = (0);
seq__11817_11858 = G__11872;
chunk__11818_11859 = G__11873;
count__11819_11860 = G__11874;
i__11820_11861 = G__11875;
continue;
} else {
var button_11876 = cljs.core.first.call(null,seq__11817_11870__$1);
var expected__7500__auto___11877 = "";
var actual__7501__auto___11878 = button_11876.value;
if(cljs.core._EQ_.call(null,expected__7500__auto___11877,actual__7501__auto___11878)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11877;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11878;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__11879 = cljs.core.next.call(null,seq__11817_11870__$1);
var G__11880 = null;
var G__11881 = (0);
var G__11882 = (0);
seq__11817_11858 = G__11879;
chunk__11818_11859 = G__11880;
count__11819_11860 = G__11881;
i__11820_11861 = G__11882;
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

var seq__11821 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(4),(5),(6),(7),(8)], null));
var chunk__11822 = null;
var count__11823 = (0);
var i__11824 = (0);
while(true){
if((i__11824 < count__11823)){
var i = cljs.core._nth.call(null,chunk__11822,i__11824);
var expected__7500__auto___11883 = "";
var actual__7501__auto___11884 = cljs.core.nth.call(null,buttons,i).value;
if(cljs.core._EQ_.call(null,expected__7500__auto___11883,actual__7501__auto___11884)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11883;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11884;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__11885 = seq__11821;
var G__11886 = chunk__11822;
var G__11887 = count__11823;
var G__11888 = (i__11824 + (1));
seq__11821 = G__11885;
chunk__11822 = G__11886;
count__11823 = G__11887;
i__11824 = G__11888;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11821);
if(temp__5804__auto__){
var seq__11821__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11821__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__11821__$1);
var G__11889 = cljs.core.chunk_rest.call(null,seq__11821__$1);
var G__11890 = c__4591__auto__;
var G__11891 = cljs.core.count.call(null,c__4591__auto__);
var G__11892 = (0);
seq__11821 = G__11889;
chunk__11822 = G__11890;
count__11823 = G__11891;
i__11824 = G__11892;
continue;
} else {
var i = cljs.core.first.call(null,seq__11821__$1);
var expected__7500__auto___11893 = "";
var actual__7501__auto___11894 = cljs.core.nth.call(null,buttons,i).value;
if(cljs.core._EQ_.call(null,expected__7500__auto___11893,actual__7501__auto___11894)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11893;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11894;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__11895 = cljs.core.next.call(null,seq__11821__$1);
var G__11896 = null;
var G__11897 = (0);
var G__11898 = (0);
seq__11821 = G__11895;
chunk__11822 = G__11896;
count__11823 = G__11897;
i__11824 = G__11898;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"checks if there are line breaks",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"does not show game-over message initially",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"displays X is the winner message when game ends",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var game_over_message = ttt_clojure.core_spec.invoke_query.call(null,".game-result");
var expected__7524__auto___11899 = null;
var actual__7525__auto___11900 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7524__auto___11899,actual__7525__auto___11900)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11899;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11900;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"displays O is the winner message when game ends",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(5),(6),(8)], null)));

reagent.core.flush.call(null);

var game_over_message = ttt_clojure.core_spec.invoke_query.call(null,".game-result");
var expected__7524__auto___11901 = null;
var actual__7525__auto___11902 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7524__auto___11901,actual__7525__auto___11902)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11901;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11902;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"displays draw message when no moves are left",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(4),(5),(8),(7),(3),(6),(9)], null)));

reagent.core.flush.call(null);

var game_over_message = ttt_clojure.core_spec.invoke_query.call(null,".game-result");
var expected__7524__auto___11903 = null;
var actual__7525__auto___11904 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7524__auto___11903,actual__7525__auto___11904)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11903;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11904;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"has the correct initial values",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
var initial_state = cljs.core.deref.call(null,ttt_clojure.components.game_state);
var expected__7500__auto___11905 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null);
var actual__7501__auto___11906 = new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7500__auto___11905,actual__7501__auto___11906)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11905;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11906;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___11907 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null);
var actual__7501__auto___11908 = new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7500__auto___11907,actual__7501__auto___11908)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11907;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11908;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___11909 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__7501__auto___11910 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7500__auto___11909,actual__7501__auto___11910)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11909;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11910;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"resets game-state and shows options form on new game button click",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
var root_11911 = cljs.core.js_invoke.call(null,document,"getElementById","root");
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root_11911);

var new_game_button = ttt_clojure.core_spec.invoke_query.call(null,".new-game-btn");
ttt_clojure.core_spec.click_and_flush.call(null,new_game_button);

var expected__7500__auto___11912 = true;
var actual__7501__auto___11913 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7500__auto___11912,actual__7501__auto___11913)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11912;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11913;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"resets the board and shows the options form on new game",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var new_game_button = ttt_clojure.core_spec.invoke_query.call(null,".new-game-btn");
ttt_clojure.core_spec.click_and_flush.call(null,new_game_button);

var expected__7500__auto___11914 = true;
var actual__7501__auto___11915 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7500__auto___11914,actual__7501__auto___11915)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11914;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11915;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"shows and works the AI move button correctly",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3)], null),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var ai_move_btn = ttt_clojure.core_spec.invoke_query.call(null,".ai-move-btn");
var expected__7524__auto___11916 = null;
var actual__7525__auto___11917 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7524__auto___11916,actual__7525__auto___11917)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7524__auto___11916;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7525__auto___11917;
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

var expected__7500__auto___11918 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3)], null);
var actual__7501__auto___11919 = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7500__auto___11918,actual__7501__auto___11919)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11918;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11919;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"displays the correct player token on the buttons after a move",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
var buttons = cljs.core.map.call(null,(function (p1__11762_SHARP_){
return ttt_clojure.core_spec.invoke_query.call(null,["#-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11762_SHARP_)].join(''));
}),cljs.core.range.call(null,(9)));
var seq__11825_11920 = cljs.core.seq.call(null,buttons);
var chunk__11826_11921 = null;
var count__11827_11922 = (0);
var i__11828_11923 = (0);
while(true){
if((i__11828_11923 < count__11827_11922)){
var button_11924 = cljs.core._nth.call(null,chunk__11826_11921,i__11828_11923);
var expected__7500__auto___11925 = "";
var actual__7501__auto___11926 = button_11924.value;
if(cljs.core._EQ_.call(null,expected__7500__auto___11925,actual__7501__auto___11926)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11925;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11926;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__11927 = seq__11825_11920;
var G__11928 = chunk__11826_11921;
var G__11929 = count__11827_11922;
var G__11930 = (i__11828_11923 + (1));
seq__11825_11920 = G__11927;
chunk__11826_11921 = G__11928;
count__11827_11922 = G__11929;
i__11828_11923 = G__11930;
continue;
} else {
var temp__5804__auto___11931 = cljs.core.seq.call(null,seq__11825_11920);
if(temp__5804__auto___11931){
var seq__11825_11932__$1 = temp__5804__auto___11931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11825_11932__$1)){
var c__4591__auto___11933 = cljs.core.chunk_first.call(null,seq__11825_11932__$1);
var G__11934 = cljs.core.chunk_rest.call(null,seq__11825_11932__$1);
var G__11935 = c__4591__auto___11933;
var G__11936 = cljs.core.count.call(null,c__4591__auto___11933);
var G__11937 = (0);
seq__11825_11920 = G__11934;
chunk__11826_11921 = G__11935;
count__11827_11922 = G__11936;
i__11828_11923 = G__11937;
continue;
} else {
var button_11938 = cljs.core.first.call(null,seq__11825_11932__$1);
var expected__7500__auto___11939 = "";
var actual__7501__auto___11940 = button_11938.value;
if(cljs.core._EQ_.call(null,expected__7500__auto___11939,actual__7501__auto___11940)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11939;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11940;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}


var G__11941 = cljs.core.next.call(null,seq__11825_11932__$1);
var G__11942 = null;
var G__11943 = (0);
var G__11944 = (0);
seq__11825_11920 = G__11941;
chunk__11826_11921 = G__11942;
count__11827_11922 = G__11943;
i__11828_11923 = G__11944;
continue;
}
} else {
}
}
break;
}

ttt_clojure.core_spec.should_click_letter.call(null,"X",buttons,(0));

ttt_clojure.core_spec.should_click_letter.call(null,"O",buttons,(1));

var expected__7500__auto___11945 = "X";
var actual__7501__auto___11946 = cljs.core.nth.call(null,buttons,(0)).value;
if(cljs.core._EQ_.call(null,expected__7500__auto___11945,actual__7501__auto___11946)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11945;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11946;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1's turn",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2's turn",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1 when player types are different",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2 when player types are different",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"does not display AI move button or turn message when the game is over",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var ai_move_btn = ttt_clojure.core_spec.invoke_query.call(null,".ai-move-btn");
var turn_message = ttt_clojure.core_spec.invoke_query.call(null,".turn-message");
var new_button = ttt_clojure.core_spec.invoke_query.call(null,".new-game-btn");
var expected__7500__auto___11947 = null;
var actual__7501__auto___11948 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7500__auto___11947,actual__7501__auto___11948)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11947;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11948;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___11949 = null;
var actual__7501__auto___11950 = turn_message;
if(cljs.core._EQ_.call(null,expected__7500__auto___11949,actual__7501__auto___11950)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11949;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11950;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false),speclj.components.new_characteristic.call(null,"does not show radio buttons when :new-game is false",((function (_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var size_radios = ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='size']");
var player1_radios = ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='player_1']");
var player2_radios = ttt_clojure.core_spec.invoke_query_all.call(null,"input[name='player_2']");
var expected__7500__auto___11951 = (0);
var actual__7501__auto___11952 = size_radios.length;
if(cljs.core._EQ_.call(null,expected__7500__auto___11951,actual__7501__auto___11952)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11951;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11952;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})()," (using =)"].join('')));
}

var expected__7500__auto___11953 = (0);
var actual__7501__auto___11954 = player1_radios.length;
if(cljs.core._EQ_.call(null,expected__7500__auto___11953,actual__7501__auto___11954)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7500__auto___11953;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7468__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7468__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7501__auto___11954;
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
});})(_STAR_parent_description_STAR__orig_val__11799_11852,_STAR_parent_description_STAR__temp_val__11800_11853,description__7364__auto____$1,_STAR_parent_description_STAR__orig_val__11763_11830,_STAR_parent_description_STAR__temp_val__11764_11831,description__7364__auto___11829))
,false)],null)));
var chunk__11802_11855 = null;
var count__11803_11856 = (0);
var i__11804_11857 = (0);
while(true){
if((i__11804_11857 < count__11803_11856)){
var component__7365__auto___11955 = cljs.core._nth.call(null,chunk__11802_11855,i__11804_11857);
speclj.components.install.call(null,component__7365__auto___11955,description__7364__auto____$1);


var G__11956 = seq__11801_11854;
var G__11957 = chunk__11802_11855;
var G__11958 = count__11803_11856;
var G__11959 = (i__11804_11857 + (1));
seq__11801_11854 = G__11956;
chunk__11802_11855 = G__11957;
count__11803_11856 = G__11958;
i__11804_11857 = G__11959;
continue;
} else {
var temp__5804__auto___11960 = cljs.core.seq.call(null,seq__11801_11854);
if(temp__5804__auto___11960){
var seq__11801_11961__$1 = temp__5804__auto___11960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11801_11961__$1)){
var c__4591__auto___11962 = cljs.core.chunk_first.call(null,seq__11801_11961__$1);
var G__11963 = cljs.core.chunk_rest.call(null,seq__11801_11961__$1);
var G__11964 = c__4591__auto___11962;
var G__11965 = cljs.core.count.call(null,c__4591__auto___11962);
var G__11966 = (0);
seq__11801_11854 = G__11963;
chunk__11802_11855 = G__11964;
count__11803_11856 = G__11965;
i__11804_11857 = G__11966;
continue;
} else {
var component__7365__auto___11967 = cljs.core.first.call(null,seq__11801_11961__$1);
speclj.components.install.call(null,component__7365__auto___11967,description__7364__auto____$1);


var G__11968 = cljs.core.next.call(null,seq__11801_11961__$1);
var G__11969 = null;
var G__11970 = (0);
var G__11971 = (0);
seq__11801_11854 = G__11968;
chunk__11802_11855 = G__11969;
count__11803_11856 = G__11970;
i__11804_11857 = G__11971;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11799_11852);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7364__auto____$1);
}

return description__7364__auto____$1;
})()],null)));
var chunk__11766_11833 = null;
var count__11767_11834 = (0);
var i__11768_11835 = (0);
while(true){
if((i__11768_11835 < count__11767_11834)){
var component__7365__auto___11972 = cljs.core._nth.call(null,chunk__11766_11833,i__11768_11835);
speclj.components.install.call(null,component__7365__auto___11972,description__7364__auto___11829);


var G__11973 = seq__11765_11832;
var G__11974 = chunk__11766_11833;
var G__11975 = count__11767_11834;
var G__11976 = (i__11768_11835 + (1));
seq__11765_11832 = G__11973;
chunk__11766_11833 = G__11974;
count__11767_11834 = G__11975;
i__11768_11835 = G__11976;
continue;
} else {
var temp__5804__auto___11977 = cljs.core.seq.call(null,seq__11765_11832);
if(temp__5804__auto___11977){
var seq__11765_11978__$1 = temp__5804__auto___11977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11765_11978__$1)){
var c__4591__auto___11979 = cljs.core.chunk_first.call(null,seq__11765_11978__$1);
var G__11980 = cljs.core.chunk_rest.call(null,seq__11765_11978__$1);
var G__11981 = c__4591__auto___11979;
var G__11982 = cljs.core.count.call(null,c__4591__auto___11979);
var G__11983 = (0);
seq__11765_11832 = G__11980;
chunk__11766_11833 = G__11981;
count__11767_11834 = G__11982;
i__11768_11835 = G__11983;
continue;
} else {
var component__7365__auto___11984 = cljs.core.first.call(null,seq__11765_11978__$1);
speclj.components.install.call(null,component__7365__auto___11984,description__7364__auto___11829);


var G__11985 = cljs.core.next.call(null,seq__11765_11978__$1);
var G__11986 = null;
var G__11987 = (0);
var G__11988 = (0);
seq__11765_11832 = G__11985;
chunk__11766_11833 = G__11986;
count__11767_11834 = G__11987;
i__11768_11835 = G__11988;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11763_11830);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7364__auto___11829);
}


//# sourceMappingURL=core_spec.js.map
