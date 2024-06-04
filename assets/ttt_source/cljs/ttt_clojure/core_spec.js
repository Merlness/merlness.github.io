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

var expected__7498__auto__ = letter;
var actual__7499__auto__ = cljs.core.nth.call(null,buttons,index).value;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});
ttt_clojure.core_spec.should_click_radio = (function ttt_clojure$core_spec$should_click_radio(element,expected_state,get_state){
ttt_clojure.core_spec.click_and_flush.call(null,element);

var expected__7498__auto__ = expected_state;
var actual__7499__auto__ = get_state.call(null,cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
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
var description__7362__auto___18145 = speclj.components.new_description.call(null,"Tic Tac Toe",false,"ttt-clojure.core-spec");
var _STAR_parent_description_STAR__orig_val__18079_18146 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__18080_18147 = description__7362__auto___18145;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__18080_18147);

try{var seq__18081_18148 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
(document.body.innerHTML = "<div id=\"root\"></div>");

cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.default_game_state);

var root = cljs.core.js_invoke.call(null,document,"getElementById","root");
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root);
});})(_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
),speclj.components.new_characteristic.call(null,"displays the options form",((function (_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var expected__7498__auto__ = "Choose your Tic Tac Toe Options";
var actual__7499__auto__ = cljs.core.js_invoke.call(null,document,"querySelector","h1").textContent;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for board size",((function (_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var expected__7498__auto__ = (2);
var actual__7499__auto__ = cljs.core.count.call(null,cljs.core.array_seq.call(null,cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='size']")));
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for player 1",((function (_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var expected__7498__auto__ = (4);
var actual__7499__auto__ = cljs.core.count.call(null,cljs.core.array_seq.call(null,cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='player_1']")));
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for player 2",((function (_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var expected__7498__auto__ = (4);
var actual__7499__auto__ = cljs.core.count.call(null,cljs.core.array_seq.call(null,cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='player_2']")));
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"does not allow grid modifications after game over",((function (_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var id_button_6 = cljs.core.js_invoke.call(null,document,"querySelector","#-my-button-6");
ttt_clojure.core_spec.click_and_flush.call(null,id_button_6);

var expected__7498__auto__ = "";
var actual__7499__auto__ = id_button_6.value;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"updates game state when radio buttons are clicked",((function (_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
reagent.core.flush.call(null);

var size_radio = cljs.core.js_invoke.call(null,document,"querySelector","input[name='size'][value='4x4']");
var player1_radio = cljs.core.js_invoke.call(null,document,"querySelector","input[name='player_1'][value='ai_easy']");
var player2_radio = cljs.core.js_invoke.call(null,document,"querySelector","input[name='player_2'][value='ai_hard']");
var submit_button = cljs.core.js_invoke.call(null,document,"querySelector","input[type='submit']");
var expected__7522__auto___18152 = null;
var actual__7523__auto___18153 = size_radio;
if(cljs.core._EQ_.call(null,expected__7522__auto___18152,actual__7523__auto___18153)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18152;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18153;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7522__auto___18154 = null;
var actual__7523__auto___18155 = player1_radio;
if(cljs.core._EQ_.call(null,expected__7522__auto___18154,actual__7523__auto___18155)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18154;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18155;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7522__auto___18156 = null;
var actual__7523__auto___18157 = player2_radio;
if(cljs.core._EQ_.call(null,expected__7522__auto___18156,actual__7523__auto___18157)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18156;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18157;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7522__auto___18158 = null;
var actual__7523__auto___18159 = submit_button;
if(cljs.core._EQ_.call(null,expected__7522__auto___18158,actual__7523__auto___18159)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18158;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18159;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

ttt_clojure.core_spec.should_click_radio.call(null,size_radio,new cljs.core.Keyword(null,"4x4","4x4",121507723),(function (p1__18073_SHARP_){
return cljs.core.get.call(null,p1__18073_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007));
}));

ttt_clojure.core_spec.should_click_radio.call(null,player1_radio,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),(function (p1__18074_SHARP_){
return cljs.core.get.call(null,p1__18074_SHARP_,new cljs.core.Keyword(null,"player-1","player-1",-857374100));
}));

ttt_clojure.core_spec.should_click_radio.call(null,player2_radio,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),(function (p1__18075_SHARP_){
return cljs.core.get.call(null,p1__18075_SHARP_,new cljs.core.Keyword(null,"player-2","player-2",-227455796));
}));

return ttt_clojure.core_spec.should_click_radio.call(null,submit_button,false,(function (p1__18076_SHARP_){
return cljs.core.get.call(null,p1__18076_SHARP_,new cljs.core.Keyword(null,"new-game","new-game",167241648));
}));
});})(_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"does not show AI move button, new game button, turn message, welcome message, and game buttons when :new-game is true",((function (_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),true));

reagent.core.flush.call(null);

var ai_move_btn = cljs.core.js_invoke.call(null,document,"querySelector",".ai-move-btn");
var new_game_btn = cljs.core.js_invoke.call(null,document,"querySelector",".new-game-btn");
var turn_msg = cljs.core.js_invoke.call(null,document,"querySelector",".turn-message");
var welcome_msg = cljs.core.js_invoke.call(null,document,"querySelector","h1");
var game_buttons = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[type='button']");
var expected__7498__auto___18160 = null;
var actual__7499__auto___18161 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7498__auto___18160,actual__7499__auto___18161)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18160;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18161;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18162 = null;
var actual__7499__auto___18163 = new_game_btn;
if(cljs.core._EQ_.call(null,expected__7498__auto___18162,actual__7499__auto___18163)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18162;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18163;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18164 = null;
var actual__7499__auto___18165 = turn_msg;
if(cljs.core._EQ_.call(null,expected__7498__auto___18164,actual__7499__auto___18165)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18164;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18165;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7522__auto___18166 = "Welcome to Merl's Tic Tac Toe";
var actual__7523__auto___18167 = welcome_msg.textContent;
if(cljs.core._EQ_.call(null,expected__7522__auto___18166,actual__7523__auto___18167)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18166;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18167;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7498__auto__ = (0);
var actual__7499__auto__ = game_buttons.length;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),(function (){var description__7362__auto____$1 = speclj.components.new_description.call(null,"game state",false,"ttt-clojure.core-spec");
var _STAR_parent_description_STAR__orig_val__18115_18168 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__18116_18169 = description__7362__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__18116_18169);

try{var seq__18117_18170 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,21,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
(document.body.innerHTML = "<div id=\"root\"></div>");

cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

var root = cljs.core.js_invoke.call(null,document,"getElementById","root");
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root);
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
),speclj.components.new_characteristic.call(null,"has the title",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var expected__7498__auto__ = "Welcome to Merl's Tic Tac Toe";
var actual__7499__auto__ = cljs.core.js_invoke.call(null,document,"querySelector","h1").textContent;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"produces the correct number of buttons",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var buttons = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[type='button']");
var expected__7498__auto__ = (9);
var actual__7499__auto__ = buttons.length;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"makes buttons with correct initial labels",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var buttons = cljs.core.js_invoke.call(null,document,"querySelector","input[type='button']");
var expected__7549__auto__ = "";
var actual__7550__auto__ = buttons.innerHTML;
if((actual__7550__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7549__auto__ === 'string') && (typeof actual__7550__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7550__auto__.indexOf(expected__7549__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7549__auto__)) && (typeof actual__7550__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7549__auto__,actual__7550__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7550__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7550__auto__,expected__7549__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7550__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7548__7551__auto__){
return cljs.core._EQ_.call(null,expected__7549__auto__,p1__7548__7551__auto__);
}),actual__7550__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7477__auto__ = expected__7549__auto__;
var b__7478__auto__ = actual__7550__auto__;
var type_a__7479__auto__ = (((a__7477__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7477__auto__)));
var type_b__7480__auto__ = (((b__7478__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7478__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7479__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7480__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"updates button label on click",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var buttons = cljs.core.map.call(null,(function (p1__18077_SHARP_){
return cljs.core.js_invoke.call(null,document,"querySelector",["#-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18077_SHARP_)].join(''));
}),cljs.core.range.call(null,(9)));
var seq__18133_18174 = cljs.core.seq.call(null,buttons);
var chunk__18134_18175 = null;
var count__18135_18176 = (0);
var i__18136_18177 = (0);
while(true){
if((i__18136_18177 < count__18135_18176)){
var button_18178 = cljs.core._nth.call(null,chunk__18134_18175,i__18136_18177);
var expected__7498__auto___18179 = "";
var actual__7499__auto___18180 = button_18178.value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18179,actual__7499__auto___18180)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18179;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18180;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18181 = seq__18133_18174;
var G__18182 = chunk__18134_18175;
var G__18183 = count__18135_18176;
var G__18184 = (i__18136_18177 + (1));
seq__18133_18174 = G__18181;
chunk__18134_18175 = G__18182;
count__18135_18176 = G__18183;
i__18136_18177 = G__18184;
continue;
} else {
var temp__5804__auto___18185 = cljs.core.seq.call(null,seq__18133_18174);
if(temp__5804__auto___18185){
var seq__18133_18186__$1 = temp__5804__auto___18185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18133_18186__$1)){
var c__4591__auto___18187 = cljs.core.chunk_first.call(null,seq__18133_18186__$1);
var G__18188 = cljs.core.chunk_rest.call(null,seq__18133_18186__$1);
var G__18189 = c__4591__auto___18187;
var G__18190 = cljs.core.count.call(null,c__4591__auto___18187);
var G__18191 = (0);
seq__18133_18174 = G__18188;
chunk__18134_18175 = G__18189;
count__18135_18176 = G__18190;
i__18136_18177 = G__18191;
continue;
} else {
var button_18192 = cljs.core.first.call(null,seq__18133_18186__$1);
var expected__7498__auto___18193 = "";
var actual__7499__auto___18194 = button_18192.value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18193,actual__7499__auto___18194)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18193;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18194;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18195 = cljs.core.next.call(null,seq__18133_18186__$1);
var G__18196 = null;
var G__18197 = (0);
var G__18198 = (0);
seq__18133_18174 = G__18195;
chunk__18134_18175 = G__18196;
count__18135_18176 = G__18197;
i__18136_18177 = G__18198;
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

var seq__18137 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(4),(5),(6),(7),(8)], null));
var chunk__18138 = null;
var count__18139 = (0);
var i__18140 = (0);
while(true){
if((i__18140 < count__18139)){
var i = cljs.core._nth.call(null,chunk__18138,i__18140);
var expected__7498__auto___18199 = "";
var actual__7499__auto___18200 = cljs.core.nth.call(null,buttons,i).value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18199,actual__7499__auto___18200)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18199;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18200;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18201 = seq__18137;
var G__18202 = chunk__18138;
var G__18203 = count__18139;
var G__18204 = (i__18140 + (1));
seq__18137 = G__18201;
chunk__18138 = G__18202;
count__18139 = G__18203;
i__18140 = G__18204;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__18137);
if(temp__5804__auto__){
var seq__18137__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18137__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__18137__$1);
var G__18205 = cljs.core.chunk_rest.call(null,seq__18137__$1);
var G__18206 = c__4591__auto__;
var G__18207 = cljs.core.count.call(null,c__4591__auto__);
var G__18208 = (0);
seq__18137 = G__18205;
chunk__18138 = G__18206;
count__18139 = G__18207;
i__18140 = G__18208;
continue;
} else {
var i = cljs.core.first.call(null,seq__18137__$1);
var expected__7498__auto___18209 = "";
var actual__7499__auto___18210 = cljs.core.nth.call(null,buttons,i).value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18209,actual__7499__auto___18210)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18209;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18210;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18211 = cljs.core.next.call(null,seq__18137__$1);
var G__18212 = null;
var G__18213 = (0);
var G__18214 = (0);
seq__18137 = G__18211;
chunk__18138 = G__18212;
count__18139 = G__18213;
i__18140 = G__18214;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"checks if there are line breaks",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var breaks = cljs.core.js_invoke.call(null,document,"querySelectorAll",".container br");
var expected__7498__auto__ = (3);
var actual__7499__auto__ = cljs.core.count.call(null,cljs.core.seq.call(null,breaks));
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"does not show game-over message initially",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var game_over_message = cljs.core.js_invoke.call(null,document,"querySelector",".game-result");
var expected__7498__auto__ = null;
var actual__7499__auto__ = game_over_message;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"displays X is the winner message when game ends",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var game_over_message = cljs.core.js_invoke.call(null,document,"querySelector",".game-result");
var expected__7522__auto___18215 = null;
var actual__7523__auto___18216 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7522__auto___18215,actual__7523__auto___18216)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18215;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18216;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7549__auto__ = "X is the winner!";
var actual__7550__auto__ = game_over_message.textContent;
if((actual__7550__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7549__auto__ === 'string') && (typeof actual__7550__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7550__auto__.indexOf(expected__7549__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7549__auto__)) && (typeof actual__7550__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7549__auto__,actual__7550__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7550__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7550__auto__,expected__7549__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7550__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7548__7551__auto__){
return cljs.core._EQ_.call(null,expected__7549__auto__,p1__7548__7551__auto__);
}),actual__7550__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7477__auto__ = expected__7549__auto__;
var b__7478__auto__ = actual__7550__auto__;
var type_a__7479__auto__ = (((a__7477__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7477__auto__)));
var type_b__7480__auto__ = (((b__7478__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7478__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7479__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7480__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"displays O is the winner message when game ends",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(5),(6),(8)], null)));

reagent.core.flush.call(null);

var game_over_message = cljs.core.js_invoke.call(null,document,"querySelector",".game-result");
var expected__7522__auto___18217 = null;
var actual__7523__auto___18218 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7522__auto___18217,actual__7523__auto___18218)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18217;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18218;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7549__auto__ = "O is the winner";
var actual__7550__auto__ = game_over_message.textContent;
if((actual__7550__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7549__auto__ === 'string') && (typeof actual__7550__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7550__auto__.indexOf(expected__7549__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7549__auto__)) && (typeof actual__7550__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7549__auto__,actual__7550__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7550__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7550__auto__,expected__7549__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7550__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7548__7551__auto__){
return cljs.core._EQ_.call(null,expected__7549__auto__,p1__7548__7551__auto__);
}),actual__7550__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7477__auto__ = expected__7549__auto__;
var b__7478__auto__ = actual__7550__auto__;
var type_a__7479__auto__ = (((a__7477__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7477__auto__)));
var type_b__7480__auto__ = (((b__7478__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7478__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7479__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7480__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"displays draw message when no moves are left",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(4),(5),(8),(7),(3),(6),(9)], null)));

reagent.core.flush.call(null);

var game_over_message = cljs.core.js_invoke.call(null,document,"querySelector",".game-result");
var expected__7522__auto___18219 = null;
var actual__7523__auto___18220 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7522__auto___18219,actual__7523__auto___18220)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18219;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18220;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7549__auto__ = "Womp, its a tie";
var actual__7550__auto__ = game_over_message.textContent;
if((actual__7550__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__7549__auto__ === 'string') && (typeof actual__7550__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__7550__auto__.indexOf(expected__7549__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__7549__auto__)) && (typeof actual__7550__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__7549__auto__,actual__7550__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__7550__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__7550__auto__,expected__7549__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__7550__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__7548__7551__auto__){
return cljs.core._EQ_.call(null,expected__7549__auto__,p1__7548__7551__auto__);
}),actual__7550__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7549__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5806__auto__ = actual__7550__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var a__7477__auto__ = expected__7549__auto__;
var b__7478__auto__ = actual__7550__auto__;
var type_a__7479__auto__ = (((a__7477__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__7477__auto__)));
var type_b__7480__auto__ = (((b__7478__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__7478__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__7479__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__7480__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"has the correct initial values",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var initial_state = cljs.core.deref.call(null,ttt_clojure.components.game_state);
var expected__7498__auto___18221 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null);
var actual__7499__auto___18222 = new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7498__auto___18221,actual__7499__auto___18222)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18221;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18222;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18223 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null);
var actual__7499__auto___18224 = new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7498__auto___18223,actual__7499__auto___18224)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18223;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18224;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18225 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__7499__auto___18226 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7498__auto___18225,actual__7499__auto___18226)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18225;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto__ = cljs.core.PersistentVector.EMPTY;
var actual__7499__auto__ = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"resets game-state and shows options form on new game button click",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var root_18227 = cljs.core.js_invoke.call(null,document,"getElementById","root");
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root_18227);

var new_game_button = cljs.core.js_invoke.call(null,document,"querySelector",".new-game-btn");
ttt_clojure.core_spec.click_and_flush.call(null,new_game_button);

var expected__7498__auto___18228 = true;
var actual__7499__auto___18229 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7498__auto___18228,actual__7499__auto___18229)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18228;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18229;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto__ = "Choose your Tic Tac Toe Options";
var actual__7499__auto__ = cljs.core.js_invoke.call(null,document,"querySelector","h1").textContent;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"resets the board and shows the options form on new game",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var new_game_button = cljs.core.js_invoke.call(null,document,"querySelector",".new-game-btn");
ttt_clojure.core_spec.click_and_flush.call(null,new_game_button);

var expected__7498__auto___18230 = true;
var actual__7499__auto___18231 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7498__auto___18230,actual__7499__auto___18231)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18230;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18231;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto__ = "Choose your Tic Tac Toe Options";
var actual__7499__auto__ = cljs.core.js_invoke.call(null,document,"querySelector","h1").textContent;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"shows and works the AI move button correctly",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3)], null),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var ai_move_btn = cljs.core.js_invoke.call(null,document,"querySelector",".ai-move-btn");
var expected__7522__auto___18232 = null;
var actual__7523__auto___18233 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7522__auto___18232,actual__7523__auto___18233)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18233;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

ttt_clojure.core_spec.click_and_flush.call(null,ai_move_btn);

var expected__7498__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3),(2)], null);
var actual__7499__auto__ = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"displays the correct player token on the buttons after a move",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var buttons = cljs.core.map.call(null,(function (p1__18078_SHARP_){
return cljs.core.js_invoke.call(null,document,"querySelector",["#-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18078_SHARP_)].join(''));
}),cljs.core.range.call(null,(9)));
var seq__18141_18234 = cljs.core.seq.call(null,buttons);
var chunk__18142_18235 = null;
var count__18143_18236 = (0);
var i__18144_18237 = (0);
while(true){
if((i__18144_18237 < count__18143_18236)){
var button_18238 = cljs.core._nth.call(null,chunk__18142_18235,i__18144_18237);
var expected__7498__auto___18239 = "";
var actual__7499__auto___18240 = button_18238.value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18239,actual__7499__auto___18240)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18239;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18240;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18241 = seq__18141_18234;
var G__18242 = chunk__18142_18235;
var G__18243 = count__18143_18236;
var G__18244 = (i__18144_18237 + (1));
seq__18141_18234 = G__18241;
chunk__18142_18235 = G__18242;
count__18143_18236 = G__18243;
i__18144_18237 = G__18244;
continue;
} else {
var temp__5804__auto___18245 = cljs.core.seq.call(null,seq__18141_18234);
if(temp__5804__auto___18245){
var seq__18141_18246__$1 = temp__5804__auto___18245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18141_18246__$1)){
var c__4591__auto___18247 = cljs.core.chunk_first.call(null,seq__18141_18246__$1);
var G__18248 = cljs.core.chunk_rest.call(null,seq__18141_18246__$1);
var G__18249 = c__4591__auto___18247;
var G__18250 = cljs.core.count.call(null,c__4591__auto___18247);
var G__18251 = (0);
seq__18141_18234 = G__18248;
chunk__18142_18235 = G__18249;
count__18143_18236 = G__18250;
i__18144_18237 = G__18251;
continue;
} else {
var button_18252 = cljs.core.first.call(null,seq__18141_18246__$1);
var expected__7498__auto___18253 = "";
var actual__7499__auto___18254 = button_18252.value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18253,actual__7499__auto___18254)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18253;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18254;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18255 = cljs.core.next.call(null,seq__18141_18246__$1);
var G__18256 = null;
var G__18257 = (0);
var G__18258 = (0);
seq__18141_18234 = G__18255;
chunk__18142_18235 = G__18256;
count__18143_18236 = G__18257;
i__18144_18237 = G__18258;
continue;
}
} else {
}
}
break;
}

ttt_clojure.core_spec.should_click_letter.call(null,"X",buttons,(0));

ttt_clojure.core_spec.should_click_letter.call(null,"O",buttons,(1));

var expected__7498__auto___18259 = "X";
var actual__7499__auto___18260 = cljs.core.nth.call(null,buttons,(0)).value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18259,actual__7499__auto___18260)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18259;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18260;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto__ = "O";
var actual__7499__auto__ = cljs.core.nth.call(null,buttons,(1)).value;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1's turn",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var game_state = ttt_clojure.core_spec.update_moves.call(null,ttt_clojure.core_spec.simple_game_over,cljs.core.PersistentVector.EMPTY);
var expected__7498__auto__ = "Player 1 human's turn";
var actual__7499__auto__ = ttt_clojure.components.turn_message.call(null,game_state);
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2's turn",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var game_state = ttt_clojure.core_spec.update_players.call(null,ttt_clojure.core_spec.update_moves.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null));
var expected__7498__auto__ = "Player 2 medium ai's turn";
var actual__7499__auto__ = ttt_clojure.components.turn_message.call(null,game_state);
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1 when player types are different",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var game_state = ttt_clojure.core_spec.update_players.call(null,ttt_clojure.core_spec.update_moves.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null));
var expected__7498__auto__ = "Player 1 hard ai's turn";
var actual__7499__auto__ = ttt_clojure.components.turn_message.call(null,game_state);
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2 when player types are different",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
var game_state = ttt_clojure.core_spec.update_players.call(null,ttt_clojure.core_spec.update_moves.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null));
var expected__7498__auto__ = "Player 2 easy ai's turn";
var actual__7499__auto__ = ttt_clojure.components.turn_message.call(null,game_state);
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"does not display AI move button or turn message when the game is over",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var ai_move_btn = cljs.core.js_invoke.call(null,document,"querySelector",".ai-move-btn");
var turn_message = cljs.core.js_invoke.call(null,document,"querySelector",".turn-message");
var new_button = cljs.core.js_invoke.call(null,document,"querySelector",".new-game-btn");
var expected__7498__auto___18261 = null;
var actual__7499__auto___18262 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7498__auto___18261,actual__7499__auto___18262)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18261;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18262;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18263 = null;
var actual__7499__auto___18264 = turn_message;
if(cljs.core._EQ_.call(null,expected__7498__auto___18263,actual__7499__auto___18264)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18263;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18264;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7522__auto__ = null;
var actual__7523__auto__ = new_button;
if(cljs.core._EQ_.call(null,expected__7522__auto__,actual__7523__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false),speclj.components.new_characteristic.call(null,"does not show radio buttons when :new-game is false",((function (_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var size_radios = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='size']");
var player1_radios = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='player_1']");
var player2_radios = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='player_2']");
var expected__7498__auto___18265 = (0);
var actual__7499__auto___18266 = size_radios.length;
if(cljs.core._EQ_.call(null,expected__7498__auto___18265,actual__7499__auto___18266)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18265;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18266;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18267 = (0);
var actual__7499__auto___18268 = player1_radios.length;
if(cljs.core._EQ_.call(null,expected__7498__auto___18267,actual__7499__auto___18268)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18267;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18268;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto__ = (0);
var actual__7499__auto__ = player2_radios.length;
if(cljs.core._EQ_.call(null,expected__7498__auto__,actual__7499__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__18115_18168,_STAR_parent_description_STAR__temp_val__18116_18169,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18079_18146,_STAR_parent_description_STAR__temp_val__18080_18147,description__7362__auto___18145))
,false)],null)));
var chunk__18118_18171 = null;
var count__18119_18172 = (0);
var i__18120_18173 = (0);
while(true){
if((i__18120_18173 < count__18119_18172)){
var component__7363__auto___18269 = cljs.core._nth.call(null,chunk__18118_18171,i__18120_18173);
speclj.components.install.call(null,component__7363__auto___18269,description__7362__auto____$1);


var G__18270 = seq__18117_18170;
var G__18271 = chunk__18118_18171;
var G__18272 = count__18119_18172;
var G__18273 = (i__18120_18173 + (1));
seq__18117_18170 = G__18270;
chunk__18118_18171 = G__18271;
count__18119_18172 = G__18272;
i__18120_18173 = G__18273;
continue;
} else {
var temp__5804__auto___18274 = cljs.core.seq.call(null,seq__18117_18170);
if(temp__5804__auto___18274){
var seq__18117_18275__$1 = temp__5804__auto___18274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18117_18275__$1)){
var c__4591__auto___18276 = cljs.core.chunk_first.call(null,seq__18117_18275__$1);
var G__18277 = cljs.core.chunk_rest.call(null,seq__18117_18275__$1);
var G__18278 = c__4591__auto___18276;
var G__18279 = cljs.core.count.call(null,c__4591__auto___18276);
var G__18280 = (0);
seq__18117_18170 = G__18277;
chunk__18118_18171 = G__18278;
count__18119_18172 = G__18279;
i__18120_18173 = G__18280;
continue;
} else {
var component__7363__auto___18281 = cljs.core.first.call(null,seq__18117_18275__$1);
speclj.components.install.call(null,component__7363__auto___18281,description__7362__auto____$1);


var G__18282 = cljs.core.next.call(null,seq__18117_18275__$1);
var G__18283 = null;
var G__18284 = (0);
var G__18285 = (0);
seq__18117_18170 = G__18282;
chunk__18118_18171 = G__18283;
count__18119_18172 = G__18284;
i__18120_18173 = G__18285;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__18115_18168);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7362__auto____$1);
}

return description__7362__auto____$1;
})()],null)));
var chunk__18082_18149 = null;
var count__18083_18150 = (0);
var i__18084_18151 = (0);
while(true){
if((i__18084_18151 < count__18083_18150)){
var component__7363__auto___18286 = cljs.core._nth.call(null,chunk__18082_18149,i__18084_18151);
speclj.components.install.call(null,component__7363__auto___18286,description__7362__auto___18145);


var G__18287 = seq__18081_18148;
var G__18288 = chunk__18082_18149;
var G__18289 = count__18083_18150;
var G__18290 = (i__18084_18151 + (1));
seq__18081_18148 = G__18287;
chunk__18082_18149 = G__18288;
count__18083_18150 = G__18289;
i__18084_18151 = G__18290;
continue;
} else {
var temp__5804__auto___18291 = cljs.core.seq.call(null,seq__18081_18148);
if(temp__5804__auto___18291){
var seq__18081_18292__$1 = temp__5804__auto___18291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18081_18292__$1)){
var c__4591__auto___18293 = cljs.core.chunk_first.call(null,seq__18081_18292__$1);
var G__18294 = cljs.core.chunk_rest.call(null,seq__18081_18292__$1);
var G__18295 = c__4591__auto___18293;
var G__18296 = cljs.core.count.call(null,c__4591__auto___18293);
var G__18297 = (0);
seq__18081_18148 = G__18294;
chunk__18082_18149 = G__18295;
count__18083_18150 = G__18296;
i__18084_18151 = G__18297;
continue;
} else {
var component__7363__auto___18298 = cljs.core.first.call(null,seq__18081_18292__$1);
speclj.components.install.call(null,component__7363__auto___18298,description__7362__auto___18145);


var G__18299 = cljs.core.next.call(null,seq__18081_18292__$1);
var G__18300 = null;
var G__18301 = (0);
var G__18302 = (0);
seq__18081_18148 = G__18299;
chunk__18082_18149 = G__18300;
count__18083_18150 = G__18301;
i__18084_18151 = G__18302;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__18079_18146);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7362__auto___18145);
}


//# sourceMappingURL=core_spec.js.map
