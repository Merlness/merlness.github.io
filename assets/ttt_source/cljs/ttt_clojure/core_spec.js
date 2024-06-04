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
var description__7362__auto___18651 = speclj.components.new_description.call(null,"Tic Tac Toe",false,"ttt-clojure.core-spec");
var _STAR_parent_description_STAR__orig_val__18585_18652 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__18586_18653 = description__7362__auto___18651;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__18586_18653);

try{var seq__18587_18654 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
(document.body.innerHTML = "<div id=\"root\"></div>");

cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.default_game_state);

var root = cljs.core.js_invoke.call(null,document,"getElementById","root");
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root);
});})(_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
),speclj.components.new_characteristic.call(null,"displays the options form",((function (_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for board size",((function (_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for player 1",((function (_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"contains radio buttons for player 2",((function (_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"does not allow grid modifications after game over",((function (_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"updates game state when radio buttons are clicked",((function (_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
reagent.core.flush.call(null);

var size_radio = cljs.core.js_invoke.call(null,document,"querySelector","input[name='size'][value='4x4']");
var player1_radio = cljs.core.js_invoke.call(null,document,"querySelector","input[name='player_1'][value='ai_easy']");
var player2_radio = cljs.core.js_invoke.call(null,document,"querySelector","input[name='player_2'][value='ai_hard']");
var submit_button = cljs.core.js_invoke.call(null,document,"querySelector","input[type='submit']");
var expected__7522__auto___18658 = null;
var actual__7523__auto___18659 = size_radio;
if(cljs.core._EQ_.call(null,expected__7522__auto___18658,actual__7523__auto___18659)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18658;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18659;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7522__auto___18660 = null;
var actual__7523__auto___18661 = player1_radio;
if(cljs.core._EQ_.call(null,expected__7522__auto___18660,actual__7523__auto___18661)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18660;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18661;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7522__auto___18662 = null;
var actual__7523__auto___18663 = player2_radio;
if(cljs.core._EQ_.call(null,expected__7522__auto___18662,actual__7523__auto___18663)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18662;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18663;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

var expected__7522__auto___18664 = null;
var actual__7523__auto___18665 = submit_button;
if(cljs.core._EQ_.call(null,expected__7522__auto___18664,actual__7523__auto___18665)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18664;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18665;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()].join('')));
} else {
}

ttt_clojure.core_spec.should_click_radio.call(null,size_radio,new cljs.core.Keyword(null,"4x4","4x4",121507723),(function (p1__18579_SHARP_){
return cljs.core.get.call(null,p1__18579_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007));
}));

ttt_clojure.core_spec.should_click_radio.call(null,player1_radio,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),(function (p1__18580_SHARP_){
return cljs.core.get.call(null,p1__18580_SHARP_,new cljs.core.Keyword(null,"player-1","player-1",-857374100));
}));

ttt_clojure.core_spec.should_click_radio.call(null,player2_radio,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),(function (p1__18581_SHARP_){
return cljs.core.get.call(null,p1__18581_SHARP_,new cljs.core.Keyword(null,"player-2","player-2",-227455796));
}));

return ttt_clojure.core_spec.should_click_radio.call(null,submit_button,false,(function (p1__18582_SHARP_){
return cljs.core.get.call(null,p1__18582_SHARP_,new cljs.core.Keyword(null,"new-game","new-game",167241648));
}));
});})(_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"does not show AI move button, new game button, turn message, welcome message, and game buttons when :new-game is true",((function (_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),true));

reagent.core.flush.call(null);

var ai_move_btn = cljs.core.js_invoke.call(null,document,"querySelector",".ai-move-btn");
var new_game_btn = cljs.core.js_invoke.call(null,document,"querySelector",".new-game-btn");
var turn_msg = cljs.core.js_invoke.call(null,document,"querySelector",".turn-message");
var welcome_msg = cljs.core.js_invoke.call(null,document,"querySelector","h1");
var game_buttons = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[type='button']");
var expected__7498__auto___18666 = null;
var actual__7499__auto___18667 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7498__auto___18666,actual__7499__auto___18667)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18666;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18667;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18668 = null;
var actual__7499__auto___18669 = new_game_btn;
if(cljs.core._EQ_.call(null,expected__7498__auto___18668,actual__7499__auto___18669)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18668;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18669;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18670 = null;
var actual__7499__auto___18671 = turn_msg;
if(cljs.core._EQ_.call(null,expected__7498__auto___18670,actual__7499__auto___18671)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18670;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18671;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7522__auto___18672 = "Welcome to Merl's Tic Tac Toe";
var actual__7523__auto___18673 = welcome_msg.textContent;
if(cljs.core._EQ_.call(null,expected__7522__auto___18672,actual__7523__auto___18673)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18672;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18673;
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
});})(_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),(function (){var description__7362__auto____$1 = speclj.components.new_description.call(null,"game state",false,"ttt-clojure.core-spec");
var _STAR_parent_description_STAR__orig_val__18621_18674 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__18622_18675 = description__7362__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__18622_18675);

try{var seq__18623_18676 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,21,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
(document.body.innerHTML = "<div id=\"root\"></div>");

cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

var root = cljs.core.js_invoke.call(null,document,"getElementById","root");
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root);
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
),speclj.components.new_characteristic.call(null,"has the title",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"produces the correct number of buttons",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"makes buttons with correct initial labels",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"updates button label on click",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
var buttons = cljs.core.map.call(null,(function (p1__18583_SHARP_){
return cljs.core.js_invoke.call(null,document,"querySelector",["#-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18583_SHARP_)].join(''));
}),cljs.core.range.call(null,(9)));
var seq__18639_18680 = cljs.core.seq.call(null,buttons);
var chunk__18640_18681 = null;
var count__18641_18682 = (0);
var i__18642_18683 = (0);
while(true){
if((i__18642_18683 < count__18641_18682)){
var button_18684 = cljs.core._nth.call(null,chunk__18640_18681,i__18642_18683);
var expected__7498__auto___18685 = "";
var actual__7499__auto___18686 = button_18684.value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18685,actual__7499__auto___18686)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18685;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18686;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18687 = seq__18639_18680;
var G__18688 = chunk__18640_18681;
var G__18689 = count__18641_18682;
var G__18690 = (i__18642_18683 + (1));
seq__18639_18680 = G__18687;
chunk__18640_18681 = G__18688;
count__18641_18682 = G__18689;
i__18642_18683 = G__18690;
continue;
} else {
var temp__5804__auto___18691 = cljs.core.seq.call(null,seq__18639_18680);
if(temp__5804__auto___18691){
var seq__18639_18692__$1 = temp__5804__auto___18691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18639_18692__$1)){
var c__4591__auto___18693 = cljs.core.chunk_first.call(null,seq__18639_18692__$1);
var G__18694 = cljs.core.chunk_rest.call(null,seq__18639_18692__$1);
var G__18695 = c__4591__auto___18693;
var G__18696 = cljs.core.count.call(null,c__4591__auto___18693);
var G__18697 = (0);
seq__18639_18680 = G__18694;
chunk__18640_18681 = G__18695;
count__18641_18682 = G__18696;
i__18642_18683 = G__18697;
continue;
} else {
var button_18698 = cljs.core.first.call(null,seq__18639_18692__$1);
var expected__7498__auto___18699 = "";
var actual__7499__auto___18700 = button_18698.value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18699,actual__7499__auto___18700)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18699;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18700;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18701 = cljs.core.next.call(null,seq__18639_18692__$1);
var G__18702 = null;
var G__18703 = (0);
var G__18704 = (0);
seq__18639_18680 = G__18701;
chunk__18640_18681 = G__18702;
count__18641_18682 = G__18703;
i__18642_18683 = G__18704;
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

var seq__18643 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(4),(5),(6),(7),(8)], null));
var chunk__18644 = null;
var count__18645 = (0);
var i__18646 = (0);
while(true){
if((i__18646 < count__18645)){
var i = cljs.core._nth.call(null,chunk__18644,i__18646);
var expected__7498__auto___18705 = "";
var actual__7499__auto___18706 = cljs.core.nth.call(null,buttons,i).value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18705,actual__7499__auto___18706)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18705;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18706;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18707 = seq__18643;
var G__18708 = chunk__18644;
var G__18709 = count__18645;
var G__18710 = (i__18646 + (1));
seq__18643 = G__18707;
chunk__18644 = G__18708;
count__18645 = G__18709;
i__18646 = G__18710;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__18643);
if(temp__5804__auto__){
var seq__18643__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18643__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__18643__$1);
var G__18711 = cljs.core.chunk_rest.call(null,seq__18643__$1);
var G__18712 = c__4591__auto__;
var G__18713 = cljs.core.count.call(null,c__4591__auto__);
var G__18714 = (0);
seq__18643 = G__18711;
chunk__18644 = G__18712;
count__18645 = G__18713;
i__18646 = G__18714;
continue;
} else {
var i = cljs.core.first.call(null,seq__18643__$1);
var expected__7498__auto___18715 = "";
var actual__7499__auto___18716 = cljs.core.nth.call(null,buttons,i).value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18715,actual__7499__auto___18716)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18715;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18716;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18717 = cljs.core.next.call(null,seq__18643__$1);
var G__18718 = null;
var G__18719 = (0);
var G__18720 = (0);
seq__18643 = G__18717;
chunk__18644 = G__18718;
count__18645 = G__18719;
i__18646 = G__18720;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"checks if there are line breaks",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"does not show game-over message initially",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"displays X is the winner message when game ends",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var game_over_message = cljs.core.js_invoke.call(null,document,"querySelector",".game-result");
var expected__7522__auto___18721 = null;
var actual__7523__auto___18722 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7522__auto___18721,actual__7523__auto___18722)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18721;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18722;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"displays O is the winner message when game ends",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(5),(6),(8)], null)));

reagent.core.flush.call(null);

var game_over_message = cljs.core.js_invoke.call(null,document,"querySelector",".game-result");
var expected__7522__auto___18723 = null;
var actual__7523__auto___18724 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7522__auto___18723,actual__7523__auto___18724)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18723;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18724;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"displays draw message when no moves are left",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.core_spec.simple_game_over,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(4),(5),(8),(7),(3),(6),(9)], null)));

reagent.core.flush.call(null);

var game_over_message = cljs.core.js_invoke.call(null,document,"querySelector",".game-result");
var expected__7522__auto___18725 = null;
var actual__7523__auto___18726 = game_over_message;
if(cljs.core._EQ_.call(null,expected__7522__auto___18725,actual__7523__auto___18726)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18725;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18726;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"has the correct initial values",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
var initial_state = cljs.core.deref.call(null,ttt_clojure.components.game_state);
var expected__7498__auto___18727 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null);
var actual__7499__auto___18728 = new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7498__auto___18727,actual__7499__auto___18728)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18727;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18728;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18729 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null);
var actual__7499__auto___18730 = new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7498__auto___18729,actual__7499__auto___18730)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18729;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18730;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18731 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__7499__auto___18732 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(initial_state);
if(cljs.core._EQ_.call(null,expected__7498__auto___18731,actual__7499__auto___18732)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18731;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18732;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"resets game-state and shows options form on new game button click",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
var root_18733 = cljs.core.js_invoke.call(null,document,"getElementById","root");
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.components.tic_tac_toe], null),root_18733);

var new_game_button = cljs.core.js_invoke.call(null,document,"querySelector",".new-game-btn");
ttt_clojure.core_spec.click_and_flush.call(null,new_game_button);

var expected__7498__auto___18734 = true;
var actual__7499__auto___18735 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7498__auto___18734,actual__7499__auto___18735)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18734;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18735;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"resets the board and shows the options form on new game",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var new_game_button = cljs.core.js_invoke.call(null,document,"querySelector",".new-game-btn");
ttt_clojure.core_spec.click_and_flush.call(null,new_game_button);

var expected__7498__auto___18736 = true;
var actual__7499__auto___18737 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt_clojure.components.game_state));
if(cljs.core._EQ_.call(null,expected__7498__auto___18736,actual__7499__auto___18737)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18736;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18737;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"shows and works the AI move button correctly",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3)], null),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null),new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var ai_move_btn = cljs.core.js_invoke.call(null,document,"querySelector",".ai-move-btn");
var expected__7522__auto___18738 = null;
var actual__7523__auto___18739 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7522__auto___18738,actual__7523__auto___18739)){
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7522__auto___18738;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"not to =: ",(function (){var temp__5806__auto__ = actual__7523__auto___18739;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"displays the correct player token on the buttons after a move",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
var buttons = cljs.core.map.call(null,(function (p1__18584_SHARP_){
return cljs.core.js_invoke.call(null,document,"querySelector",["#-my-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18584_SHARP_)].join(''));
}),cljs.core.range.call(null,(9)));
var seq__18647_18740 = cljs.core.seq.call(null,buttons);
var chunk__18648_18741 = null;
var count__18649_18742 = (0);
var i__18650_18743 = (0);
while(true){
if((i__18650_18743 < count__18649_18742)){
var button_18744 = cljs.core._nth.call(null,chunk__18648_18741,i__18650_18743);
var expected__7498__auto___18745 = "";
var actual__7499__auto___18746 = button_18744.value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18745,actual__7499__auto___18746)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18745;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18746;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18747 = seq__18647_18740;
var G__18748 = chunk__18648_18741;
var G__18749 = count__18649_18742;
var G__18750 = (i__18650_18743 + (1));
seq__18647_18740 = G__18747;
chunk__18648_18741 = G__18748;
count__18649_18742 = G__18749;
i__18650_18743 = G__18750;
continue;
} else {
var temp__5804__auto___18751 = cljs.core.seq.call(null,seq__18647_18740);
if(temp__5804__auto___18751){
var seq__18647_18752__$1 = temp__5804__auto___18751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18647_18752__$1)){
var c__4591__auto___18753 = cljs.core.chunk_first.call(null,seq__18647_18752__$1);
var G__18754 = cljs.core.chunk_rest.call(null,seq__18647_18752__$1);
var G__18755 = c__4591__auto___18753;
var G__18756 = cljs.core.count.call(null,c__4591__auto___18753);
var G__18757 = (0);
seq__18647_18740 = G__18754;
chunk__18648_18741 = G__18755;
count__18649_18742 = G__18756;
i__18650_18743 = G__18757;
continue;
} else {
var button_18758 = cljs.core.first.call(null,seq__18647_18752__$1);
var expected__7498__auto___18759 = "";
var actual__7499__auto___18760 = button_18758.value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18759,actual__7499__auto___18760)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18759;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18760;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}


var G__18761 = cljs.core.next.call(null,seq__18647_18752__$1);
var G__18762 = null;
var G__18763 = (0);
var G__18764 = (0);
seq__18647_18740 = G__18761;
chunk__18648_18741 = G__18762;
count__18649_18742 = G__18763;
i__18650_18743 = G__18764;
continue;
}
} else {
}
}
break;
}

ttt_clojure.core_spec.should_click_letter.call(null,"X",buttons,(0));

ttt_clojure.core_spec.should_click_letter.call(null,"O",buttons,(1));

var expected__7498__auto___18765 = "X";
var actual__7499__auto___18766 = cljs.core.nth.call(null,buttons,(0)).value;
if(cljs.core._EQ_.call(null,expected__7498__auto___18765,actual__7499__auto___18766)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18765;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18766;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1's turn",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2's turn",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1 when player types are different",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2 when player types are different",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"does not display AI move button or turn message when the game is over",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,ttt_clojure.core_spec.simple_game_over);

reagent.core.flush.call(null);

var ai_move_btn = cljs.core.js_invoke.call(null,document,"querySelector",".ai-move-btn");
var turn_message = cljs.core.js_invoke.call(null,document,"querySelector",".turn-message");
var new_button = cljs.core.js_invoke.call(null,document,"querySelector",".new-game-btn");
var expected__7498__auto___18767 = null;
var actual__7499__auto___18768 = ai_move_btn;
if(cljs.core._EQ_.call(null,expected__7498__auto___18767,actual__7499__auto___18768)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18767;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18768;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18769 = null;
var actual__7499__auto___18770 = turn_message;
if(cljs.core._EQ_.call(null,expected__7498__auto___18769,actual__7499__auto___18770)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18769;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18770;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false),speclj.components.new_characteristic.call(null,"does not show radio buttons when :new-game is false",((function (_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651){
return (function (){
cljs.core.reset_BANG_.call(null,ttt_clojure.components.game_state,cljs.core.assoc.call(null,ttt_clojure.components.default_game_state,new cljs.core.Keyword(null,"new-game","new-game",167241648),false));

reagent.core.flush.call(null);

var size_radios = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='size']");
var player1_radios = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='player_1']");
var player2_radios = cljs.core.js_invoke.call(null,document,"querySelectorAll","input[name='player_2']");
var expected__7498__auto___18771 = (0);
var actual__7499__auto___18772 = size_radios.length;
if(cljs.core._EQ_.call(null,expected__7498__auto___18771,actual__7499__auto___18772)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18771;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18772;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})()," (using =)"].join('')));
}

var expected__7498__auto___18773 = (0);
var actual__7499__auto___18774 = player1_radios.length;
if(cljs.core._EQ_.call(null,expected__7498__auto___18773,actual__7499__auto___18774)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__7498__auto___18773;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__7466__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__7466__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__7499__auto___18774;
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
});})(_STAR_parent_description_STAR__orig_val__18621_18674,_STAR_parent_description_STAR__temp_val__18622_18675,description__7362__auto____$1,_STAR_parent_description_STAR__orig_val__18585_18652,_STAR_parent_description_STAR__temp_val__18586_18653,description__7362__auto___18651))
,false)],null)));
var chunk__18624_18677 = null;
var count__18625_18678 = (0);
var i__18626_18679 = (0);
while(true){
if((i__18626_18679 < count__18625_18678)){
var component__7363__auto___18775 = cljs.core._nth.call(null,chunk__18624_18677,i__18626_18679);
speclj.components.install.call(null,component__7363__auto___18775,description__7362__auto____$1);


var G__18776 = seq__18623_18676;
var G__18777 = chunk__18624_18677;
var G__18778 = count__18625_18678;
var G__18779 = (i__18626_18679 + (1));
seq__18623_18676 = G__18776;
chunk__18624_18677 = G__18777;
count__18625_18678 = G__18778;
i__18626_18679 = G__18779;
continue;
} else {
var temp__5804__auto___18780 = cljs.core.seq.call(null,seq__18623_18676);
if(temp__5804__auto___18780){
var seq__18623_18781__$1 = temp__5804__auto___18780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18623_18781__$1)){
var c__4591__auto___18782 = cljs.core.chunk_first.call(null,seq__18623_18781__$1);
var G__18783 = cljs.core.chunk_rest.call(null,seq__18623_18781__$1);
var G__18784 = c__4591__auto___18782;
var G__18785 = cljs.core.count.call(null,c__4591__auto___18782);
var G__18786 = (0);
seq__18623_18676 = G__18783;
chunk__18624_18677 = G__18784;
count__18625_18678 = G__18785;
i__18626_18679 = G__18786;
continue;
} else {
var component__7363__auto___18787 = cljs.core.first.call(null,seq__18623_18781__$1);
speclj.components.install.call(null,component__7363__auto___18787,description__7362__auto____$1);


var G__18788 = cljs.core.next.call(null,seq__18623_18781__$1);
var G__18789 = null;
var G__18790 = (0);
var G__18791 = (0);
seq__18623_18676 = G__18788;
chunk__18624_18677 = G__18789;
count__18625_18678 = G__18790;
i__18626_18679 = G__18791;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__18621_18674);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7362__auto____$1);
}

return description__7362__auto____$1;
})()],null)));
var chunk__18588_18655 = null;
var count__18589_18656 = (0);
var i__18590_18657 = (0);
while(true){
if((i__18590_18657 < count__18589_18656)){
var component__7363__auto___18792 = cljs.core._nth.call(null,chunk__18588_18655,i__18590_18657);
speclj.components.install.call(null,component__7363__auto___18792,description__7362__auto___18651);


var G__18793 = seq__18587_18654;
var G__18794 = chunk__18588_18655;
var G__18795 = count__18589_18656;
var G__18796 = (i__18590_18657 + (1));
seq__18587_18654 = G__18793;
chunk__18588_18655 = G__18794;
count__18589_18656 = G__18795;
i__18590_18657 = G__18796;
continue;
} else {
var temp__5804__auto___18797 = cljs.core.seq.call(null,seq__18587_18654);
if(temp__5804__auto___18797){
var seq__18587_18798__$1 = temp__5804__auto___18797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18587_18798__$1)){
var c__4591__auto___18799 = cljs.core.chunk_first.call(null,seq__18587_18798__$1);
var G__18800 = cljs.core.chunk_rest.call(null,seq__18587_18798__$1);
var G__18801 = c__4591__auto___18799;
var G__18802 = cljs.core.count.call(null,c__4591__auto___18799);
var G__18803 = (0);
seq__18587_18654 = G__18800;
chunk__18588_18655 = G__18801;
count__18589_18656 = G__18802;
i__18590_18657 = G__18803;
continue;
} else {
var component__7363__auto___18804 = cljs.core.first.call(null,seq__18587_18798__$1);
speclj.components.install.call(null,component__7363__auto___18804,description__7362__auto___18651);


var G__18805 = cljs.core.next.call(null,seq__18587_18798__$1);
var G__18806 = null;
var G__18807 = (0);
var G__18808 = (0);
seq__18587_18654 = G__18805;
chunk__18588_18655 = G__18806;
count__18589_18656 = G__18807;
i__18590_18657 = G__18808;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__18585_18652);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7362__auto___18651);
}


//# sourceMappingURL=core_spec.js.map
