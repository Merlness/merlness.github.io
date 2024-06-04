// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.data');
goog.require('cljs.core');
goog.require('clojure.edn');
ttt_clojure.data.db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dbtype","dbtype",593488262),"postgres",new cljs.core.Keyword(null,"dbname","dbname",-974440753),"tic_tac_toe"], null);
ttt_clojure.data.ds = j.get_datasource(ttt_clojure.data.db);
ttt_clojure.data.string_to_keyword = new cljs.core.PersistentArrayMap(null, 8, ["ai",new cljs.core.Keyword(null,"ai","ai",760454697),"human",new cljs.core.Keyword(null,"human","human",-772334390),"easy",new cljs.core.Keyword(null,"easy","easy",315769928),"medium",new cljs.core.Keyword(null,"medium","medium",-1864319384),"hard",new cljs.core.Keyword(null,"hard","hard",2068420191),"3x3",new cljs.core.Keyword(null,"3x3","3x3",570362544),"4x4",new cljs.core.Keyword(null,"4x4","4x4",121507723),"3x3x3",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)], null);
ttt_clojure.data.keywordize_value = (function ttt_clojure$data$keywordize_value(value){
if(typeof value === 'string'){
var or__4160__auto__ = ttt_clojure.data.string_to_keyword.call(null,value);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return value;
}
} else {
return value;
}
});
ttt_clojure.data.keywordize = (function ttt_clojure$data$keywordize(game){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8304){
var vec__8305 = p__8304;
var key = cljs.core.nth.call(null,vec__8305,(0),null);
var value = cljs.core.nth.call(null,vec__8305,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((typeof key === 'string')?cljs.core.keyword.call(null,key):key),((typeof value === 'string')?ttt_clojure.data.keywordize_value.call(null,value):((cljs.core.map_QMARK_.call(null,value))?ttt_clojure.data.keywordize.call(null,value):value
))], null);
})),game);
});
ttt_clojure.data.str_keys_to_int = (function ttt_clojure$data$str_keys_to_int(map){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4564__auto__ = (function ttt_clojure$data$str_keys_to_int_$_iter__8308(s__8309){
return (new cljs.core.LazySeq(null,(function (){
var s__8309__$1 = s__8309;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__8309__$1);
if(temp__5804__auto__){
var s__8309__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8309__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__8309__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__8311 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__8310 = (0);
while(true){
if((i__8310 < size__4563__auto__)){
var vec__8312 = cljs.core._nth.call(null,c__4562__auto__,i__8310);
var key = cljs.core.nth.call(null,vec__8312,(0),null);
var value = cljs.core.nth.call(null,vec__8312,(1),null);
cljs.core.chunk_append.call(null,b__8311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Integer.parseInt(key),value], null));

var G__8318 = (i__8310 + (1));
i__8310 = G__8318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8311),ttt_clojure$data$str_keys_to_int_$_iter__8308.call(null,cljs.core.chunk_rest.call(null,s__8309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8311),null);
}
} else {
var vec__8315 = cljs.core.first.call(null,s__8309__$2);
var key = cljs.core.nth.call(null,vec__8315,(0),null);
var value = cljs.core.nth.call(null,vec__8315,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Integer.parseInt(key),value], null),ttt_clojure$data$str_keys_to_int_$_iter__8308.call(null,cljs.core.rest.call(null,s__8309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,map);
})());
});
ttt_clojure.data.psql_to_map = (function ttt_clojure$data$psql_to_map(data){
var game = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,data);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"game-id","game-id",385578016),new cljs.core.Keyword("game_map","game_id","game_map/game_id",-1443606601).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player-1","player-1",-857374100),ttt_clojure.data.read_string.call(null,new cljs.core.Keyword("game_map","player_1","game_map/player_1",2066681501).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"player-2","player-2",-227455796),ttt_clojure.data.read_string.call(null,new cljs.core.Keyword("game_map","player_2","game_map/player_2",1499676155).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"size","size",1098693007),ttt_clojure.data.read_string.call(null,new cljs.core.Keyword("game_map","board_size","game_map/board_size",1482012929).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"moves","moves",927465255),ttt_clojure.data.read_string.call(null,new cljs.core.Keyword("game_map","moves","game_map/moves",-1512450408).cljs$core$IFn$_invoke$arity$1(game))], null);
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.data !== 'undefined') && (typeof ttt_clojure.data.fetch_the_games !== 'undefined')){
} else {
ttt_clojure.data.fetch_the_games = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.data","fetch-the-games"),(function (db_type){
return db_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.data.fetch_the_games,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (_db_type){
return null;
}));
cljs.core._add_method.call(null,ttt_clojure.data.fetch_the_games,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_db_type){
var log_edn = ttt_clojure.data.slurp.call(null,"log.edn");
if(cljs.core.empty_QMARK_.call(null,log_edn)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return clojure.edn.read_string.call(null,log_edn);
}
}));
cljs.core._add_method.call(null,ttt_clojure.data.fetch_the_games,new cljs.core.Keyword(null,"json","json",1279968570),(function (_db_type){
var log_json = ttt_clojure.data.slurp.call(null,"log.json");
if(cljs.core.empty_QMARK_.call(null,log_json)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return ttt_clojure.data.str_keys_to_int.call(null,ttt_clojure.data.update_keys.call(null,ttt_clojure.data.keywordize.call(null,json.read_str(log_json,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.keyword)),cljs.core.name));
}
}));
cljs.core._add_method.call(null,ttt_clojure.data.fetch_the_games,new cljs.core.Keyword(null,"psql","psql",-591812834),(function (_db_type){
var games_from_db = j.execute_BANG_(ttt_clojure.data.ds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select * from game_map"], null));
var games = cljs.core.map.call(null,ttt_clojure.data.psql_to_map,games_from_db);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (game){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(game),game], null);
}),games));
}));
ttt_clojure.data.db_atom = cljs.core.atom.call(null,null);
ttt_clojure.data.log = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ttt_clojure.data.load_db = (function ttt_clojure$data$load_db(db_type){
cljs.core.reset_BANG_.call(null,ttt_clojure.data.db_atom,db_type);

return cljs.core.reset_BANG_.call(null,ttt_clojure.data.log,ttt_clojure.data.fetch_the_games.call(null,db_type));
});
ttt_clojure.data.max_game_id_edn = (function ttt_clojure$data$max_game_id_edn(games){
return cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.keys.call(null,games));
});
ttt_clojure.data.get_game_by_id = (function ttt_clojure$data$get_game_by_id(game_id){
return cljs.core.get.call(null,cljs.core.deref.call(null,ttt_clojure.data.log),game_id);
});
ttt_clojure.data.last_game_id = (function ttt_clojure$data$last_game_id(){
return ttt_clojure.data.max_game_id_edn.call(null,cljs.core.deref.call(null,ttt_clojure.data.log));
});
ttt_clojure.data.get_next_game_id = (function ttt_clojure$data$get_next_game_id(){
return (ttt_clojure.data.last_game_id.call(null) + (1));
});
ttt_clojure.data.get_last_game = (function ttt_clojure$data$get_last_game(){
return cljs.core.get.call(null,cljs.core.deref.call(null,ttt_clojure.data.log),ttt_clojure.data.last_game_id.call(null));
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.data !== 'undefined') && (typeof ttt_clojure.data.save !== 'undefined')){
} else {
ttt_clojure.data.save = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.data","save"),(function (_game,db_type){
return db_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.data.save,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (_game,_db_type){
return null;
}));
cljs.core._add_method.call(null,ttt_clojure.data.save,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (game,_db_type){
return ttt_clojure.data.spit.call(null,"log.edn",cljs.core.pr_str.call(null,cljs.core.swap_BANG_.call(null,ttt_clojure.data.log,cljs.core.assoc,new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(game),game)));
}));
cljs.core._add_method.call(null,ttt_clojure.data.save,new cljs.core.Keyword(null,"json","json",1279968570),(function (game,_db_type){
return ttt_clojure.data.spit.call(null,"log.json",json.write_str(cljs.core.swap_BANG_.call(null,ttt_clojure.data.log,cljs.core.assoc,new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(game),game)));
}));
cljs.core._add_method.call(null,ttt_clojure.data.save,new cljs.core.Keyword(null,"psql","psql",-591812834),(function (game,_db_type){
var game_id = new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(game);
var board_size = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(game));
var moves = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(game));
var player_1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-1","player-1",-857374100).cljs$core$IFn$_invoke$arity$1(game));
var player_2 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player-2","player-2",-227455796).cljs$core$IFn$_invoke$arity$1(game));
var query = ["INSERT INTO game_map (game_id, board_size, moves, player_1, player_2) VALUES (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_id),", '",board_size,"', '",moves,"', '",player_1,"', '",player_2,"')"].join('');
return j.execute_BANG_(ttt_clojure.data.ds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query], null));
}));
ttt_clojure.data.save_BANG_ = (function ttt_clojure$data$save_BANG_(game){
return ttt_clojure.data.save.call(null,game,cljs.core.deref.call(null,ttt_clojure.data.db_atom));
});

//# sourceMappingURL=data.js.map
