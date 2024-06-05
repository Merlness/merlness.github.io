// Compiled by ClojureScript 1.10.844 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__8120_SHARP_){
return p1__8120_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_8121 = (function (reporter,message){
var x__4463__auto__ = (((reporter == null))?null:reporter);
var m__4464__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,reporter,message);
} else {
var m__4461__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_8121.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_8122 = (function (this$,description){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,description);
} else {
var m__4461__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_8122.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_8123 = (function (this$,result){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,result);
} else {
var m__4461__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_8123.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_8124 = (function (this$,result){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,result);
} else {
var m__4461__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_8124.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_8125 = (function (this$,result){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,result);
} else {
var m__4461__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_8125.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_8126 = (function (this$,results){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,results);
} else {
var m__4461__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_8126.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_8127 = (function (this$,exception){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,exception);
} else {
var m__4461__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_8127.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__8128 = cljs.core.seq.call(null,reporters);
var chunk__8129 = null;
var count__8130 = (0);
var i__8131 = (0);
while(true){
if((i__8131 < count__8130)){
var reporter = cljs.core._nth.call(null,chunk__8129,i__8131);
speclj.reporting.report_pass.call(null,reporter,result);


var G__8132 = seq__8128;
var G__8133 = chunk__8129;
var G__8134 = count__8130;
var G__8135 = (i__8131 + (1));
seq__8128 = G__8132;
chunk__8129 = G__8133;
count__8130 = G__8134;
i__8131 = G__8135;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8128);
if(temp__5804__auto__){
var seq__8128__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8128__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8128__$1);
var G__8136 = cljs.core.chunk_rest.call(null,seq__8128__$1);
var G__8137 = c__4591__auto__;
var G__8138 = cljs.core.count.call(null,c__4591__auto__);
var G__8139 = (0);
seq__8128 = G__8136;
chunk__8129 = G__8137;
count__8130 = G__8138;
i__8131 = G__8139;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__8128__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__8140 = cljs.core.next.call(null,seq__8128__$1);
var G__8141 = null;
var G__8142 = (0);
var G__8143 = (0);
seq__8128 = G__8140;
chunk__8129 = G__8141;
count__8130 = G__8142;
i__8131 = G__8143;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__8144 = cljs.core.seq.call(null,reporters);
var chunk__8145 = null;
var count__8146 = (0);
var i__8147 = (0);
while(true){
if((i__8147 < count__8146)){
var reporter = cljs.core._nth.call(null,chunk__8145,i__8147);
speclj.reporting.report_fail.call(null,reporter,result);


var G__8148 = seq__8144;
var G__8149 = chunk__8145;
var G__8150 = count__8146;
var G__8151 = (i__8147 + (1));
seq__8144 = G__8148;
chunk__8145 = G__8149;
count__8146 = G__8150;
i__8147 = G__8151;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8144);
if(temp__5804__auto__){
var seq__8144__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8144__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8144__$1);
var G__8152 = cljs.core.chunk_rest.call(null,seq__8144__$1);
var G__8153 = c__4591__auto__;
var G__8154 = cljs.core.count.call(null,c__4591__auto__);
var G__8155 = (0);
seq__8144 = G__8152;
chunk__8145 = G__8153;
count__8146 = G__8154;
i__8147 = G__8155;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__8144__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__8156 = cljs.core.next.call(null,seq__8144__$1);
var G__8157 = null;
var G__8158 = (0);
var G__8159 = (0);
seq__8144 = G__8156;
chunk__8145 = G__8157;
count__8146 = G__8158;
i__8147 = G__8159;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__8160 = cljs.core.seq.call(null,reporters);
var chunk__8161 = null;
var count__8162 = (0);
var i__8163 = (0);
while(true){
if((i__8163 < count__8162)){
var reporter = cljs.core._nth.call(null,chunk__8161,i__8163);
speclj.reporting.report_pending.call(null,reporter,result);


var G__8164 = seq__8160;
var G__8165 = chunk__8161;
var G__8166 = count__8162;
var G__8167 = (i__8163 + (1));
seq__8160 = G__8164;
chunk__8161 = G__8165;
count__8162 = G__8166;
i__8163 = G__8167;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8160);
if(temp__5804__auto__){
var seq__8160__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8160__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8160__$1);
var G__8168 = cljs.core.chunk_rest.call(null,seq__8160__$1);
var G__8169 = c__4591__auto__;
var G__8170 = cljs.core.count.call(null,c__4591__auto__);
var G__8171 = (0);
seq__8160 = G__8168;
chunk__8161 = G__8169;
count__8162 = G__8170;
i__8163 = G__8171;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__8160__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__8172 = cljs.core.next.call(null,seq__8160__$1);
var G__8173 = null;
var G__8174 = (0);
var G__8175 = (0);
seq__8160 = G__8172;
chunk__8161 = G__8173;
count__8162 = G__8174;
i__8163 = G__8175;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__8176 = cljs.core.seq.call(null,reporters);
var chunk__8177 = null;
var count__8178 = (0);
var i__8179 = (0);
while(true){
if((i__8179 < count__8178)){
var reporter = cljs.core._nth.call(null,chunk__8177,i__8179);
speclj.reporting.report_error.call(null,reporter,result);


var G__8180 = seq__8176;
var G__8181 = chunk__8177;
var G__8182 = count__8178;
var G__8183 = (i__8179 + (1));
seq__8176 = G__8180;
chunk__8177 = G__8181;
count__8178 = G__8182;
i__8179 = G__8183;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8176);
if(temp__5804__auto__){
var seq__8176__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8176__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8176__$1);
var G__8184 = cljs.core.chunk_rest.call(null,seq__8176__$1);
var G__8185 = c__4591__auto__;
var G__8186 = cljs.core.count.call(null,c__4591__auto__);
var G__8187 = (0);
seq__8176 = G__8184;
chunk__8177 = G__8185;
count__8178 = G__8186;
i__8179 = G__8187;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__8176__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__8188 = cljs.core.next.call(null,seq__8176__$1);
var G__8189 = null;
var G__8190 = (0);
var G__8191 = (0);
seq__8176 = G__8188;
chunk__8177 = G__8189;
count__8178 = G__8190;
i__8179 = G__8191;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_8192 = speclj.platform.stack_trace.call(null,exception);
var elides_8193 = (0);
while(true){
if(cljs.core.seq.call(null,levels_8192)){
var level_8194 = cljs.core.first.call(null,levels_8192);
if(speclj.platform.elide_level_QMARK_.call(null,level_8194)){
var G__8195 = cljs.core.rest.call(null,levels_8192);
var G__8196 = (elides_8193 + (1));
levels_8192 = G__8195;
elides_8193 = G__8196;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_8193);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_8194));

var G__8197 = cljs.core.rest.call(null,levels_8192);
var G__8198 = (0);
levels_8192 = G__8197;
elides_8193 = G__8198;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_8193);
}
break;
}

var temp__5802__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5802__auto__)){
var cause = temp__5802__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8199_8203 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8200_8204 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8201_8205 = true;
var _STAR_print_fn_STAR__temp_val__8202_8206 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8201_8205);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8202_8206);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8200_8204);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8199_8203);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4777__auto__ = [];
var len__4771__auto___8210 = arguments.length;
var i__4772__auto___8211 = (0);
while(true){
if((i__4772__auto___8211 < len__4771__auto___8210)){
args__4777__auto__.push((arguments[i__4772__auto___8211]));

var G__8212 = (i__4772__auto___8211 + (1));
i__4772__auto___8211 = G__8212;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__8207_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8207_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq8208){
var G__8209 = cljs.core.first.call(null,seq8208);
var seq8208__$1 = cljs.core.next.call(null,seq8208);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8209,seq8208__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4777__auto__ = [];
var len__4771__auto___8215 = arguments.length;
var i__4772__auto___8216 = (0);
while(true){
if((i__4772__auto___8216 < len__4771__auto___8215)){
args__4777__auto__.push((arguments[i__4772__auto___8216]));

var G__8217 = (i__4772__auto___8216 + (1));
i__4772__auto___8216 = G__8217;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq8213){
var G__8214 = cljs.core.first.call(null,seq8213);
var seq8213__$1 = cljs.core.next.call(null,seq8213);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8214,seq8213__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__8218 = cljs.core.seq.call(null,reporters);
var chunk__8219 = null;
var count__8220 = (0);
var i__8221 = (0);
while(true){
if((i__8221 < count__8220)){
var reporter = cljs.core._nth.call(null,chunk__8219,i__8221);
speclj.reporting.report_description.call(null,reporter,description);


var G__8222 = seq__8218;
var G__8223 = chunk__8219;
var G__8224 = count__8220;
var G__8225 = (i__8221 + (1));
seq__8218 = G__8222;
chunk__8219 = G__8223;
count__8220 = G__8224;
i__8221 = G__8225;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8218);
if(temp__5804__auto__){
var seq__8218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8218__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8218__$1);
var G__8226 = cljs.core.chunk_rest.call(null,seq__8218__$1);
var G__8227 = c__4591__auto__;
var G__8228 = cljs.core.count.call(null,c__4591__auto__);
var G__8229 = (0);
seq__8218 = G__8226;
chunk__8219 = G__8227;
count__8220 = G__8228;
i__8221 = G__8229;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__8218__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__8230 = cljs.core.next.call(null,seq__8218__$1);
var G__8231 = null;
var G__8232 = (0);
var G__8233 = (0);
seq__8218 = G__8230;
chunk__8219 = G__8231;
count__8220 = G__8232;
i__8221 = G__8233;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__8234 = cljs.core.seq.call(null,reporters);
var chunk__8235 = null;
var count__8236 = (0);
var i__8237 = (0);
while(true){
if((i__8237 < count__8236)){
var reporter = cljs.core._nth.call(null,chunk__8235,i__8237);
speclj.reporting.report_runs.call(null,reporter,results);


var G__8238 = seq__8234;
var G__8239 = chunk__8235;
var G__8240 = count__8236;
var G__8241 = (i__8237 + (1));
seq__8234 = G__8238;
chunk__8235 = G__8239;
count__8236 = G__8240;
i__8237 = G__8241;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8234);
if(temp__5804__auto__){
var seq__8234__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8234__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8234__$1);
var G__8242 = cljs.core.chunk_rest.call(null,seq__8234__$1);
var G__8243 = c__4591__auto__;
var G__8244 = cljs.core.count.call(null,c__4591__auto__);
var G__8245 = (0);
seq__8234 = G__8242;
chunk__8235 = G__8243;
count__8236 = G__8244;
i__8237 = G__8245;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__8234__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__8246 = cljs.core.next.call(null,seq__8234__$1);
var G__8247 = null;
var G__8248 = (0);
var G__8249 = (0);
seq__8234 = G__8246;
chunk__8235 = G__8247;
count__8236 = G__8248;
i__8237 = G__8249;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__8250 = cljs.core.seq.call(null,reporters);
var chunk__8251 = null;
var count__8252 = (0);
var i__8253 = (0);
while(true){
if((i__8253 < count__8252)){
var reporter = cljs.core._nth.call(null,chunk__8251,i__8253);
speclj.reporting.report_message.call(null,reporter,message);


var G__8254 = seq__8250;
var G__8255 = chunk__8251;
var G__8256 = count__8252;
var G__8257 = (i__8253 + (1));
seq__8250 = G__8254;
chunk__8251 = G__8255;
count__8252 = G__8256;
i__8253 = G__8257;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8250);
if(temp__5804__auto__){
var seq__8250__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8250__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8250__$1);
var G__8258 = cljs.core.chunk_rest.call(null,seq__8250__$1);
var G__8259 = c__4591__auto__;
var G__8260 = cljs.core.count.call(null,c__4591__auto__);
var G__8261 = (0);
seq__8250 = G__8258;
chunk__8251 = G__8259;
count__8252 = G__8260;
i__8253 = G__8261;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__8250__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__8262 = cljs.core.next.call(null,seq__8250__$1);
var G__8263 = null;
var G__8264 = (0);
var G__8265 = (0);
seq__8250 = G__8262;
chunk__8251 = G__8263;
count__8252 = G__8264;
i__8253 = G__8265;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__8266 = cljs.core.seq.call(null,reporters);
var chunk__8267 = null;
var count__8268 = (0);
var i__8269 = (0);
while(true){
if((i__8269 < count__8268)){
var reporter = cljs.core._nth.call(null,chunk__8267,i__8269);
speclj.reporting.report_error.call(null,reporter,exception);


var G__8270 = seq__8266;
var G__8271 = chunk__8267;
var G__8272 = count__8268;
var G__8273 = (i__8269 + (1));
seq__8266 = G__8270;
chunk__8267 = G__8271;
count__8268 = G__8272;
i__8269 = G__8273;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8266);
if(temp__5804__auto__){
var seq__8266__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8266__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8266__$1);
var G__8274 = cljs.core.chunk_rest.call(null,seq__8266__$1);
var G__8275 = c__4591__auto__;
var G__8276 = cljs.core.count.call(null,c__4591__auto__);
var G__8277 = (0);
seq__8266 = G__8274;
chunk__8267 = G__8275;
count__8268 = G__8276;
i__8269 = G__8277;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__8266__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__8278 = cljs.core.next.call(null,seq__8266__$1);
var G__8279 = null;
var G__8280 = (0);
var G__8281 = (0);
seq__8266 = G__8278;
chunk__8267 = G__8279;
count__8268 = G__8280;
i__8269 = G__8281;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
