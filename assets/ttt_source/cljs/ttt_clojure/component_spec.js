// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.component_spec');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ttt_clojure.components');
goog.require('speclj.core');
var description__7362__auto___7847 = speclj.components.new_description.call(null,"Smaller components",false,"ttt-clojure.component_spec");
var _STAR_parent_description_STAR__orig_val__7841_7848 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__7842_7849 = description__7362__auto___7847;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__7842_7849);

try{var seq__7843_7850 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1's turn",((function (_STAR_parent_description_STAR__orig_val__7841_7848,_STAR_parent_description_STAR__temp_val__7842_7849,description__7362__auto___7847){
return (function (){
var game_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null)], null);
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
});})(_STAR_parent_description_STAR__orig_val__7841_7848,_STAR_parent_description_STAR__temp_val__7842_7849,description__7362__auto___7847))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2's turn",((function (_STAR_parent_description_STAR__orig_val__7841_7848,_STAR_parent_description_STAR__temp_val__7842_7849,description__7362__auto___7847){
return (function (){
var game_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null)], null);
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
});})(_STAR_parent_description_STAR__orig_val__7841_7848,_STAR_parent_description_STAR__temp_val__7842_7849,description__7362__auto___7847))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 1 when player types are different",((function (_STAR_parent_description_STAR__orig_val__7841_7848,_STAR_parent_description_STAR__temp_val__7842_7849,description__7362__auto___7847){
return (function (){
var game_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null)], null);
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
});})(_STAR_parent_description_STAR__orig_val__7841_7848,_STAR_parent_description_STAR__temp_val__7842_7849,description__7362__auto___7847))
,false),speclj.components.new_characteristic.call(null,"returns the correct turn message for Player 2 when player types are different",((function (_STAR_parent_description_STAR__orig_val__7841_7848,_STAR_parent_description_STAR__temp_val__7842_7849,description__7362__auto___7847){
return (function (){
var game_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"player-1","player-1",-857374100),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"token","token",-1211463215),"X"], null),new cljs.core.Keyword(null,"player-2","player-2",-227455796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"token","token",-1211463215),"O"], null)], null);
var expected__7498__auto__ = "Player 2 human's turn";
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
});})(_STAR_parent_description_STAR__orig_val__7841_7848,_STAR_parent_description_STAR__temp_val__7842_7849,description__7362__auto___7847))
,false)],null)));
var chunk__7844_7851 = null;
var count__7845_7852 = (0);
var i__7846_7853 = (0);
while(true){
if((i__7846_7853 < count__7845_7852)){
var component__7363__auto___7854 = cljs.core._nth.call(null,chunk__7844_7851,i__7846_7853);
speclj.components.install.call(null,component__7363__auto___7854,description__7362__auto___7847);


var G__7855 = seq__7843_7850;
var G__7856 = chunk__7844_7851;
var G__7857 = count__7845_7852;
var G__7858 = (i__7846_7853 + (1));
seq__7843_7850 = G__7855;
chunk__7844_7851 = G__7856;
count__7845_7852 = G__7857;
i__7846_7853 = G__7858;
continue;
} else {
var temp__5804__auto___7859 = cljs.core.seq.call(null,seq__7843_7850);
if(temp__5804__auto___7859){
var seq__7843_7860__$1 = temp__5804__auto___7859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7843_7860__$1)){
var c__4591__auto___7861 = cljs.core.chunk_first.call(null,seq__7843_7860__$1);
var G__7862 = cljs.core.chunk_rest.call(null,seq__7843_7860__$1);
var G__7863 = c__4591__auto___7861;
var G__7864 = cljs.core.count.call(null,c__4591__auto___7861);
var G__7865 = (0);
seq__7843_7850 = G__7862;
chunk__7844_7851 = G__7863;
count__7845_7852 = G__7864;
i__7846_7853 = G__7865;
continue;
} else {
var component__7363__auto___7866 = cljs.core.first.call(null,seq__7843_7860__$1);
speclj.components.install.call(null,component__7363__auto___7866,description__7362__auto___7847);


var G__7867 = cljs.core.next.call(null,seq__7843_7860__$1);
var G__7868 = null;
var G__7869 = (0);
var G__7870 = (0);
seq__7843_7850 = G__7867;
chunk__7844_7851 = G__7868;
count__7845_7852 = G__7869;
i__7846_7853 = G__7870;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__7841_7848);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7362__auto___7847);
}


//# sourceMappingURL=component_spec.js.map
