// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__6280__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6281__i = 0, G__6281__a = new Array(arguments.length -  0);
while (G__6281__i < G__6281__a.length) {G__6281__a[G__6281__i] = arguments[G__6281__i + 0]; ++G__6281__i;}
  args = new cljs.core.IndexedSeq(G__6281__a,0,null);
} 
return G__6280__delegate.call(this,args);};
G__6280.cljs$lang$maxFixedArity = 0;
G__6280.cljs$lang$applyTo = (function (arglist__6282){
var args = cljs.core.seq(arglist__6282);
return G__6280__delegate(args);
});
G__6280.cljs$core$IFn$_invoke$arity$variadic = G__6280__delegate;
return G__6280;
})()
);

(o.error = (function() { 
var G__6283__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6284__i = 0, G__6284__a = new Array(arguments.length -  0);
while (G__6284__i < G__6284__a.length) {G__6284__a[G__6284__i] = arguments[G__6284__i + 0]; ++G__6284__i;}
  args = new cljs.core.IndexedSeq(G__6284__a,0,null);
} 
return G__6283__delegate.call(this,args);};
G__6283.cljs$lang$maxFixedArity = 0;
G__6283.cljs$lang$applyTo = (function (arglist__6285){
var args = cljs.core.seq(arglist__6285);
return G__6283__delegate(args);
});
G__6283.cljs$core$IFn$_invoke$arity$variadic = G__6283__delegate;
return G__6283;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
