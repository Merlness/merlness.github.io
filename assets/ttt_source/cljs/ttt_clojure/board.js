// Compiled by ClojureScript 1.10.844 {}
goog.provide('ttt_clojure.board');
goog.require('cljs.core');
goog.require('clojure.string');
ttt_clojure.board.find_available_moves = (function ttt_clojure$board$find_available_moves(board){
return cljs.core.filter.call(null,cljs.core.number_QMARK_,board);
});
ttt_clojure.board.find_move_count = (function ttt_clojure$board$find_move_count(board){
return cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.number_QMARK_,board));
});
ttt_clojure.board.player1_QMARK_ = (function ttt_clojure$board$player1_QMARK_(moves){
return cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,moves));
});
ttt_clojure.board.size = (function ttt_clojure$board$size(grid){
return (Math.sqrt(cljs.core.count.call(null,grid)) | (0));
});
ttt_clojure.board.rows = (function ttt_clojure$board$rows(grid){
return cljs.core.partition.call(null,ttt_clojure.board.size.call(null,grid),grid);
});
ttt_clojure.board.column = (function ttt_clojure$board$column(index,rows){
return cljs.core.map.call(null,(function (p1__10894_SHARP_){
return cljs.core.nth.call(null,p1__10894_SHARP_,index);
}),rows);
});
ttt_clojure.board.rows__GT_columns = (function ttt_clojure$board$rows__GT_columns(rows){
var indices = cljs.core.range.call(null,cljs.core.count.call(null,rows));
return cljs.core.map.call(null,(function (p1__10895_SHARP_){
return ttt_clojure.board.column.call(null,p1__10895_SHARP_,rows);
}),indices);
});
ttt_clojure.board.columns = (function ttt_clojure$board$columns(grid){
return ttt_clojure.board.rows__GT_columns.call(null,ttt_clojure.board.rows.call(null,grid));
});
ttt_clojure.board.back_diagonal = (function ttt_clojure$board$back_diagonal(grid){
var size = ttt_clojure.board.size.call(null,grid);
var indices = cljs.core.range.call(null,size);
return cljs.core.map.call(null,(function (p1__10896_SHARP_){
return cljs.core.nth.call(null,grid,(p1__10896_SHARP_ * (size + (1))));
}),indices);
});
ttt_clojure.board.front_diagonal = (function ttt_clojure$board$front_diagonal(grid){
var size = ttt_clojure.board.size.call(null,grid);
var indices = cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,size));
return cljs.core.map.call(null,(function (p1__10897_SHARP_){
return cljs.core.nth.call(null,grid,(p1__10897_SHARP_ * (size - (1))));
}),indices);
});
ttt_clojure.board.diagonals = (function ttt_clojure$board$diagonals(grid){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_clojure.board.back_diagonal.call(null,grid)], null),ttt_clojure.board.front_diagonal.call(null,grid));
});
ttt_clojure.board.size_3d = (function ttt_clojure$board$size_3d(grid){
return (Math.cbrt(cljs.core.count.call(null,grid)) | (0));
});
ttt_clojure.board.helper_3d = (function ttt_clojure$board$helper_3d(grid,index_equation){
var size = ttt_clojure.board.size_3d.call(null,grid);
var indices = cljs.core.range.call(null,size);
var iter__4564__auto__ = (function ttt_clojure$board$helper_3d_$_iter__10898(s__10899){
return (new cljs.core.LazySeq(null,(function (){
var s__10899__$1 = s__10899;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10899__$1);
if(temp__5804__auto__){
var s__10899__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10899__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__10899__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__10901 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__10900 = (0);
while(true){
if((i__10900 < size__4563__auto__)){
var y_index = cljs.core._nth.call(null,c__4562__auto__,i__10900);
cljs.core.chunk_append.call(null,b__10901,(function (){var iter__4564__auto__ = ((function (i__10900,y_index,c__4562__auto__,size__4563__auto__,b__10901,s__10899__$2,temp__5804__auto__,size,indices){
return (function ttt_clojure$board$helper_3d_$_iter__10898_$_iter__10902(s__10903){
return (new cljs.core.LazySeq(null,((function (i__10900,y_index,c__4562__auto__,size__4563__auto__,b__10901,s__10899__$2,temp__5804__auto__,size,indices){
return (function (){
var s__10903__$1 = s__10903;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__10903__$1);
if(temp__5804__auto____$1){
var s__10903__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10903__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first.call(null,s__10903__$2);
var size__4563__auto____$1 = cljs.core.count.call(null,c__4562__auto____$1);
var b__10905 = cljs.core.chunk_buffer.call(null,size__4563__auto____$1);
if((function (){var i__10904 = (0);
while(true){
if((i__10904 < size__4563__auto____$1)){
var x_index = cljs.core._nth.call(null,c__4562__auto____$1,i__10904);
cljs.core.chunk_append.call(null,b__10905,cljs.core.nth.call(null,grid,index_equation.call(null,y_index,x_index,size)));

var G__10910 = (i__10904 + (1));
i__10904 = G__10910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10905),ttt_clojure$board$helper_3d_$_iter__10898_$_iter__10902.call(null,cljs.core.chunk_rest.call(null,s__10903__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10905),null);
}
} else {
var x_index = cljs.core.first.call(null,s__10903__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,grid,index_equation.call(null,y_index,x_index,size)),ttt_clojure$board$helper_3d_$_iter__10898_$_iter__10902.call(null,cljs.core.rest.call(null,s__10903__$2)));
}
} else {
return null;
}
break;
}
});})(i__10900,y_index,c__4562__auto__,size__4563__auto__,b__10901,s__10899__$2,temp__5804__auto__,size,indices))
,null,null));
});})(i__10900,y_index,c__4562__auto__,size__4563__auto__,b__10901,s__10899__$2,temp__5804__auto__,size,indices))
;
return iter__4564__auto__.call(null,indices);
})());

var G__10911 = (i__10900 + (1));
i__10900 = G__10911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10901),ttt_clojure$board$helper_3d_$_iter__10898.call(null,cljs.core.chunk_rest.call(null,s__10899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10901),null);
}
} else {
var y_index = cljs.core.first.call(null,s__10899__$2);
return cljs.core.cons.call(null,(function (){var iter__4564__auto__ = ((function (y_index,s__10899__$2,temp__5804__auto__,size,indices){
return (function ttt_clojure$board$helper_3d_$_iter__10898_$_iter__10906(s__10907){
return (new cljs.core.LazySeq(null,(function (){
var s__10907__$1 = s__10907;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__10907__$1);
if(temp__5804__auto____$1){
var s__10907__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10907__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__10907__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__10909 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__10908 = (0);
while(true){
if((i__10908 < size__4563__auto__)){
var x_index = cljs.core._nth.call(null,c__4562__auto__,i__10908);
cljs.core.chunk_append.call(null,b__10909,cljs.core.nth.call(null,grid,index_equation.call(null,y_index,x_index,size)));

var G__10912 = (i__10908 + (1));
i__10908 = G__10912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10909),ttt_clojure$board$helper_3d_$_iter__10898_$_iter__10906.call(null,cljs.core.chunk_rest.call(null,s__10907__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10909),null);
}
} else {
var x_index = cljs.core.first.call(null,s__10907__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,grid,index_equation.call(null,y_index,x_index,size)),ttt_clojure$board$helper_3d_$_iter__10898_$_iter__10906.call(null,cljs.core.rest.call(null,s__10907__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(y_index,s__10899__$2,temp__5804__auto__,size,indices))
;
return iter__4564__auto__.call(null,indices);
})(),ttt_clojure$board$helper_3d_$_iter__10898.call(null,cljs.core.rest.call(null,s__10899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,indices);
});
ttt_clojure.board.back_diagonal_through_index = (function ttt_clojure$board$back_diagonal_through_index(y_index,x_index,size){
return ((((y_index + (1)) * size) + (-1)) + ((Math.pow(size,(2)) - (1)) * x_index));
});
ttt_clojure.board.back_diagonal_through = (function ttt_clojure$board$back_diagonal_through(grid){
return ttt_clojure.board.helper_3d.call(null,grid,ttt_clojure.board.back_diagonal_through_index);
});
ttt_clojure.board.front_diagonal_through_index = (function ttt_clojure$board$front_diagonal_through_index(y_index,x_index,size){
return ((y_index * size) + (((1) + Math.pow(size,(2))) * x_index));
});
ttt_clojure.board.front_diagonal_through = (function ttt_clojure$board$front_diagonal_through(grid){
return ttt_clojure.board.helper_3d.call(null,grid,ttt_clojure.board.front_diagonal_through_index);
});
ttt_clojure.board.front_diagonal_across_index = (function ttt_clojure$board$front_diagonal_across_index(y_index,x_index,size){
return (y_index + ((size * (size + (1))) * x_index));
});
ttt_clojure.board.front_diagonal_across = (function ttt_clojure$board$front_diagonal_across(grid){
return ttt_clojure.board.helper_3d.call(null,grid,ttt_clojure.board.front_diagonal_across_index);
});
ttt_clojure.board.back_diagonal_across_index = (function ttt_clojure$board$back_diagonal_across_index(y_index,x_index,size){
return (y_index + ((size * (size - (1))) * (x_index + (1))));
});
ttt_clojure.board.back_diagonal_across = (function ttt_clojure$board$back_diagonal_across(grid){
return ttt_clojure.board.helper_3d.call(null,grid,ttt_clojure.board.back_diagonal_across_index);
});
ttt_clojure.board.same_space_all_faces = (function ttt_clojure$board$same_space_all_faces(grid){
var size = ttt_clojure.board.size_3d.call(null,grid);
var indices = cljs.core.range.call(null,Math.pow(size,(2)));
var iter__4564__auto__ = (function ttt_clojure$board$same_space_all_faces_$_iter__10913(s__10914){
return (new cljs.core.LazySeq(null,(function (){
var s__10914__$1 = s__10914;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10914__$1);
if(temp__5804__auto__){
var s__10914__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10914__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__10914__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__10916 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__10915 = (0);
while(true){
if((i__10915 < size__4563__auto__)){
var y_index = cljs.core._nth.call(null,c__4562__auto__,i__10915);
cljs.core.chunk_append.call(null,b__10916,(function (){var iter__4564__auto__ = ((function (i__10915,y_index,c__4562__auto__,size__4563__auto__,b__10916,s__10914__$2,temp__5804__auto__,size,indices){
return (function ttt_clojure$board$same_space_all_faces_$_iter__10913_$_iter__10917(s__10918){
return (new cljs.core.LazySeq(null,((function (i__10915,y_index,c__4562__auto__,size__4563__auto__,b__10916,s__10914__$2,temp__5804__auto__,size,indices){
return (function (){
var s__10918__$1 = s__10918;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__10918__$1);
if(temp__5804__auto____$1){
var s__10918__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10918__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first.call(null,s__10918__$2);
var size__4563__auto____$1 = cljs.core.count.call(null,c__4562__auto____$1);
var b__10920 = cljs.core.chunk_buffer.call(null,size__4563__auto____$1);
if((function (){var i__10919 = (0);
while(true){
if((i__10919 < size__4563__auto____$1)){
var x_index = cljs.core._nth.call(null,c__4562__auto____$1,i__10919);
cljs.core.chunk_append.call(null,b__10920,cljs.core.nth.call(null,grid,(y_index + (x_index * Math.pow(size,(2))))));

var G__10925 = (i__10919 + (1));
i__10919 = G__10925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10920),ttt_clojure$board$same_space_all_faces_$_iter__10913_$_iter__10917.call(null,cljs.core.chunk_rest.call(null,s__10918__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10920),null);
}
} else {
var x_index = cljs.core.first.call(null,s__10918__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,grid,(y_index + (x_index * Math.pow(size,(2))))),ttt_clojure$board$same_space_all_faces_$_iter__10913_$_iter__10917.call(null,cljs.core.rest.call(null,s__10918__$2)));
}
} else {
return null;
}
break;
}
});})(i__10915,y_index,c__4562__auto__,size__4563__auto__,b__10916,s__10914__$2,temp__5804__auto__,size,indices))
,null,null));
});})(i__10915,y_index,c__4562__auto__,size__4563__auto__,b__10916,s__10914__$2,temp__5804__auto__,size,indices))
;
return iter__4564__auto__.call(null,cljs.core.range.call(null,size));
})());

var G__10926 = (i__10915 + (1));
i__10915 = G__10926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10916),ttt_clojure$board$same_space_all_faces_$_iter__10913.call(null,cljs.core.chunk_rest.call(null,s__10914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10916),null);
}
} else {
var y_index = cljs.core.first.call(null,s__10914__$2);
return cljs.core.cons.call(null,(function (){var iter__4564__auto__ = ((function (y_index,s__10914__$2,temp__5804__auto__,size,indices){
return (function ttt_clojure$board$same_space_all_faces_$_iter__10913_$_iter__10921(s__10922){
return (new cljs.core.LazySeq(null,(function (){
var s__10922__$1 = s__10922;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__10922__$1);
if(temp__5804__auto____$1){
var s__10922__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10922__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__10922__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__10924 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__10923 = (0);
while(true){
if((i__10923 < size__4563__auto__)){
var x_index = cljs.core._nth.call(null,c__4562__auto__,i__10923);
cljs.core.chunk_append.call(null,b__10924,cljs.core.nth.call(null,grid,(y_index + (x_index * Math.pow(size,(2))))));

var G__10927 = (i__10923 + (1));
i__10923 = G__10927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10924),ttt_clojure$board$same_space_all_faces_$_iter__10913_$_iter__10921.call(null,cljs.core.chunk_rest.call(null,s__10922__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10924),null);
}
} else {
var x_index = cljs.core.first.call(null,s__10922__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,grid,(y_index + (x_index * Math.pow(size,(2))))),ttt_clojure$board$same_space_all_faces_$_iter__10913_$_iter__10921.call(null,cljs.core.rest.call(null,s__10922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(y_index,s__10914__$2,temp__5804__auto__,size,indices))
;
return iter__4564__auto__.call(null,cljs.core.range.call(null,size));
})(),ttt_clojure$board$same_space_all_faces_$_iter__10913.call(null,cljs.core.rest.call(null,s__10914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,indices);
});
ttt_clojure.board.edge_cases_3d = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(13),(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(13),(18)], null)], null);
ttt_clojure.board.separate = (function ttt_clojure$board$separate(row){
return clojure.string.join.call(null," | ",row);
});
ttt_clojure.board.two_dimensional_QMARK_ = (function ttt_clojure$board$two_dimensional_QMARK_(board){
return ((17) > cljs.core.count.call(null,board));
});
ttt_clojure.board.board_type = (function ttt_clojure$board$board_type(board){
if(ttt_clojure.board.two_dimensional_QMARK_.call(null,board)){
return new cljs.core.Keyword(null,"2d","2d",1747322865);
} else {
return new cljs.core.Keyword(null,"3d","3d",-1024035737);
}
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.board !== 'undefined') && (typeof ttt_clojure.board.display !== 'undefined')){
} else {
ttt_clojure.board.display = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.board","display"),ttt_clojure.board.board_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.board.display,new cljs.core.Keyword(null,"2d","2d",1747322865),(function (board){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,ttt_clojure.board.separate,ttt_clojure.board.rows.call(null,board)));
}));
cljs.core._add_method.call(null,ttt_clojure.board.display,new cljs.core.Keyword(null,"3d","3d",-1024035737),(function (board){
return clojure.string.join.call(null,"\n\n",cljs.core.map.call(null,ttt_clojure.board.display,cljs.core.partition.call(null,(9),board)));
}));
ttt_clojure.board.winning_lines_QMARK_ = (function ttt_clojure$board$winning_lines_QMARK_(letter,lines){
return cljs.core.some.call(null,(function (p1__10928_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([letter]),p1__10928_SHARP_);
}),lines);
});
ttt_clojure.board.winning_combo_QMARK_ = (function ttt_clojure$board$winning_combo_QMARK_(grid,combo,letter){
return cljs.core.every_QMARK_.call(null,(function (p1__10929_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,grid,p1__10929_SHARP_),letter);
}),combo);
});
if((typeof ttt_clojure !== 'undefined') && (typeof ttt_clojure.board !== 'undefined') && (typeof ttt_clojure.board.winner_QMARK_ !== 'undefined')){
} else {
ttt_clojure.board.winner_QMARK_ = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt-clojure.board","winner?"),(function (board,_letter){
return ttt_clojure.board.board_type.call(null,board);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,ttt_clojure.board.winner_QMARK_,new cljs.core.Keyword(null,"2d","2d",1747322865),(function (grid,letter){
var or__4160__auto__ = ttt_clojure.board.winning_lines_QMARK_.call(null,letter,ttt_clojure.board.rows.call(null,grid));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = ttt_clojure.board.winning_lines_QMARK_.call(null,letter,ttt_clojure.board.diagonals.call(null,grid));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return ttt_clojure.board.winning_lines_QMARK_.call(null,letter,ttt_clojure.board.columns.call(null,grid));
}
}
}));
cljs.core._add_method.call(null,ttt_clojure.board.winner_QMARK_,new cljs.core.Keyword(null,"3d","3d",-1024035737),(function (grid,letter){
var faces = cljs.core.partition.call(null,(9),grid);
var or__4160__auto__ = cljs.core.some.call(null,(function (p1__10930_SHARP_){
return ttt_clojure.board.winner_QMARK_.call(null,p1__10930_SHARP_,letter);
}),faces);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = cljs.core.some.call(null,(function (p1__10931_SHARP_){
return ttt_clojure.board.winning_combo_QMARK_.call(null,grid,p1__10931_SHARP_,letter);
}),ttt_clojure.board.edge_cases_3d);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var or__4160__auto____$2 = ttt_clojure.board.winning_lines_QMARK_.call(null,letter,ttt_clojure.board.same_space_all_faces.call(null,grid));
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
var or__4160__auto____$3 = ttt_clojure.board.winning_lines_QMARK_.call(null,letter,ttt_clojure.board.back_diagonal_through.call(null,grid));
if(cljs.core.truth_(or__4160__auto____$3)){
return or__4160__auto____$3;
} else {
var or__4160__auto____$4 = ttt_clojure.board.winning_lines_QMARK_.call(null,letter,ttt_clojure.board.back_diagonal_across.call(null,grid));
if(cljs.core.truth_(or__4160__auto____$4)){
return or__4160__auto____$4;
} else {
var or__4160__auto____$5 = ttt_clojure.board.winning_lines_QMARK_.call(null,letter,ttt_clojure.board.front_diagonal_across.call(null,grid));
if(cljs.core.truth_(or__4160__auto____$5)){
return or__4160__auto____$5;
} else {
return ttt_clojure.board.winning_lines_QMARK_.call(null,letter,ttt_clojure.board.front_diagonal_through.call(null,grid));
}
}
}
}
}
}
}));
ttt_clojure.board.tie = (function ttt_clojure$board$tie(grid){
return cljs.core.not_any_QMARK_.call(null,cljs.core.integer_QMARK_,grid);
});
ttt_clojure.board.token_wins = (function ttt_clojure$board$token_wins(grid,token){
return ttt_clojure.board.winner_QMARK_.call(null,grid,token);
});
ttt_clojure.board.player_token = (function ttt_clojure$board$player_token(player){
return new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$2(player,player);
});
ttt_clojure.board.game_over_QMARK_ = (function ttt_clojure$board$game_over_QMARK_(var_args){
var G__10933 = arguments.length;
switch (G__10933) {
case 2:
return ttt_clojure.board.game_over_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ttt_clojure.board.game_over_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ttt_clojure.board.game_over_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (board,p__10934){
var map__10935 = p__10934;
var map__10935__$1 = cljs.core.__destructure_map.call(null,map__10935);
var player_1 = cljs.core.get.call(null,map__10935__$1,new cljs.core.Keyword(null,"player-1","player-1",-857374100));
var player_2 = cljs.core.get.call(null,map__10935__$1,new cljs.core.Keyword(null,"player-2","player-2",-227455796));
return ttt_clojure.board.game_over_QMARK_.call(null,board,player_1,player_2);
}));

(ttt_clojure.board.game_over_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (grid,player_1,player_2){
var player_1__$1 = ttt_clojure.board.player_token.call(null,player_1);
var player_2__$1 = ttt_clojure.board.player_token.call(null,player_2);
var or__4160__auto__ = ttt_clojure.board.token_wins.call(null,grid,player_1__$1);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = ttt_clojure.board.token_wins.call(null,grid,player_2__$1);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return ttt_clojure.board.tie.call(null,grid);
}
}
}));

(ttt_clojure.board.game_over_QMARK_.cljs$lang$maxFixedArity = 3);

ttt_clojure.board.board_size = (function ttt_clojure$board$board_size(size){
var G__10937 = size;
var G__10937__$1 = (((G__10937 instanceof cljs.core.Keyword))?G__10937.fqn:null);
switch (G__10937__$1) {
case "3x3":
return cljs.core.range.call(null,(1),(10));

break;
case "4x4":
return cljs.core.range.call(null,(1),(17));

break;
case "3x3x3":
return cljs.core.range.call(null,(1),(28));

break;
default:
return "Not Found";

}
});

//# sourceMappingURL=board.js.map
