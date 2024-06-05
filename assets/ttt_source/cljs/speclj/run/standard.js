// Compiled by ClojureScript 1.10.844 {}
goog.provide('speclj.run.standard');
goog.require('cljs.core');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.report.progress');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.tags');
speclj.run.standard.counter = cljs.core.atom.call(null,(0));

/**
* @constructor
 * @implements {speclj.running.Runner}
*/
speclj.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
});
(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_directories$arity$3 = (function (this$,directories,reporters){
var self__ = this;
var this$__$1 = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$submit_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,cljs.core.conj,description);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_description$arity$3 = (function (this$,description,reporters){
var self__ = this;
var this$__$1 = this;
var run_results = speclj.running.do_description.call(null,description,reporters);
return cljs.core.swap_BANG_.call(null,self__.results,cljs.core.into,run_results);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_and_report$arity$2 = (function (this$,reporters){
var self__ = this;
var this$__$1 = this;
var seq__8937_8941 = cljs.core.seq.call(null,speclj.running.filter_focused.call(null,cljs.core.deref.call(null,self__.descriptions)));
var chunk__8938_8942 = null;
var count__8939_8943 = (0);
var i__8940_8944 = (0);
while(true){
if((i__8940_8944 < count__8939_8943)){
var description_8945 = cljs.core._nth.call(null,chunk__8938_8942,i__8940_8944);
speclj.running.run_description.call(null,this$__$1,description_8945,reporters);


var G__8946 = seq__8937_8941;
var G__8947 = chunk__8938_8942;
var G__8948 = count__8939_8943;
var G__8949 = (i__8940_8944 + (1));
seq__8937_8941 = G__8946;
chunk__8938_8942 = G__8947;
count__8939_8943 = G__8948;
i__8940_8944 = G__8949;
continue;
} else {
var temp__5804__auto___8950 = cljs.core.seq.call(null,seq__8937_8941);
if(temp__5804__auto___8950){
var seq__8937_8951__$1 = temp__5804__auto___8950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8937_8951__$1)){
var c__4591__auto___8952 = cljs.core.chunk_first.call(null,seq__8937_8951__$1);
var G__8953 = cljs.core.chunk_rest.call(null,seq__8937_8951__$1);
var G__8954 = c__4591__auto___8952;
var G__8955 = cljs.core.count.call(null,c__4591__auto___8952);
var G__8956 = (0);
seq__8937_8941 = G__8953;
chunk__8938_8942 = G__8954;
count__8939_8943 = G__8955;
i__8940_8944 = G__8956;
continue;
} else {
var description_8957 = cljs.core.first.call(null,seq__8937_8951__$1);
speclj.running.run_description.call(null,this$__$1,description_8957,reporters);


var G__8958 = cljs.core.next.call(null,seq__8937_8951__$1);
var G__8959 = null;
var G__8960 = (0);
var G__8961 = (0);
seq__8937_8941 = G__8958;
chunk__8938_8942 = G__8959;
count__8939_8943 = G__8960;
i__8940_8944 = G__8961;
continue;
}
} else {
}
}
break;
}

return speclj.reporting.report_runs_STAR_.call(null,reporters,cljs.core.deref.call(null,self__.results));
}));

(speclj.run.standard.StandardRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"descriptions","descriptions",817338403,null),new cljs.core.Symbol(null,"results","results",506361414,null)], null);
}));

(speclj.run.standard.StandardRunner.cljs$lang$type = true);

(speclj.run.standard.StandardRunner.cljs$lang$ctorStr = "speclj.run.standard/StandardRunner");

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"speclj.run.standard/StandardRunner");
}));

/**
 * Positional factory function for speclj.run.standard/StandardRunner.
 */
speclj.run.standard.__GT_StandardRunner = (function speclj$run$standard$__GT_StandardRunner(num,descriptions,results){
return (new speclj.run.standard.StandardRunner(num,descriptions,results));
});

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
cljs.core._write.call(null,writer,["#<speclj.run.standard.StandardRunner(num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.num),", descriptions: "].join(''));

cljs.core._pr_writer.call(null,cljs.core.deref.call(null,x__$1.descriptions),writer,opts);

return cljs.core._write.call(null,writer,")>");
}));

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
return cljs.core._write.call(null,writer,["#<speclj.component.Description(name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.name),")>"].join(''));
}));
speclj.run.standard.new_standard_runner = (function speclj$run$standard$new_standard_runner(){
return (new speclj.run.standard.StandardRunner(cljs.core.swap_BANG_.call(null,speclj.run.standard.counter,cljs.core.inc),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
cljs.core.reset_BANG_.call(null,speclj.config.default_runner_fn,speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,speclj.config.default_runner,speclj.run.standard.new_standard_runner.call(null));
speclj.run.standard.armed = false;
speclj.run.standard.run_specs = (function speclj$run$standard$run_specs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___8963 = arguments.length;
var i__4772__auto___8964 = (0);
while(true){
if((i__4772__auto___8964 < len__4771__auto___8963)){
args__4777__auto__.push((arguments[i__4772__auto___8964]));

var G__8965 = (i__4772__auto___8964 + (1));
i__4772__auto___8964 = G__8965;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
return speclj.config.with_config.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,speclj.config.default_config,new cljs.core.Keyword(null,"runner","runner",1945441304)),cljs.core.apply.call(null,cljs.core.hash_map,configurations)),(function (){
var temp__5802__auto___8966 = speclj.tags.describe_filter.call(null);
if(cljs.core.truth_(temp__5802__auto___8966)){
var filter_msg_8967 = temp__5802__auto___8966;
speclj.reporting.report_message_STAR_.call(null,speclj.config.active_reporters.call(null),filter_msg_8967);
} else {
}

speclj.running.run_and_report.call(null,speclj.config.active_runner.call(null),speclj.config.active_reporters.call(null));

return speclj.results.fail_count.call(null,cljs.core.deref.call(null,speclj.config.active_runner.call(null).results));
}));
} else {
return null;
}
}));

(speclj.run.standard.run_specs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq8962){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8962));
}));


//# sourceMappingURL=standard.js.map
