// Compiled by ClojureScript 1.10.844 {}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return false;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__4160__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var temp__5804__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__8691 = parent;
component = G__8691;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__4160__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5804__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__8692 = parent;
component = G__8692;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__8693 = cljs.core.seq.call(null,descriptions);
var chunk__8694 = null;
var count__8695 = (0);
var i__8696 = (0);
while(true){
if((i__8696 < count__8695)){
var component = cljs.core._nth.call(null,chunk__8694,i__8696);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__8697 = seq__8693;
var G__8698 = chunk__8694;
var G__8699 = count__8695;
var G__8700 = (i__8696 + (1));
seq__8693 = G__8697;
chunk__8694 = G__8698;
count__8695 = G__8699;
i__8696 = G__8700;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8693);
if(temp__5804__auto__){
var seq__8693__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8693__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8693__$1);
var G__8701 = cljs.core.chunk_rest.call(null,seq__8693__$1);
var G__8702 = c__4591__auto__;
var G__8703 = cljs.core.count.call(null,c__4591__auto__);
var G__8704 = (0);
seq__8693 = G__8701;
chunk__8694 = G__8702;
count__8695 = G__8703;
i__8696 = G__8704;
continue;
} else {
var component = cljs.core.first.call(null,seq__8693__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__8705 = cljs.core.next.call(null,seq__8693__$1);
var G__8706 = null;
var G__8707 = (0);
var G__8708 = (0);
seq__8693 = G__8705;
chunk__8694 = G__8706;
count__8695 = G__8707;
i__8696 = G__8708;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__8709 = cljs.core.seq.call(null,characteristics);
var chunk__8711 = null;
var count__8712 = (0);
var i__8713 = (0);
while(true){
if((i__8713 < count__8712)){
var characteristic = cljs.core._nth.call(null,chunk__8711,i__8713);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__8715 = seq__8709;
var G__8716 = chunk__8711;
var G__8717 = count__8712;
var G__8718 = (i__8713 + (1));
seq__8709 = G__8715;
chunk__8711 = G__8716;
count__8712 = G__8717;
i__8713 = G__8718;
continue;
} else {
var G__8719 = seq__8709;
var G__8720 = chunk__8711;
var G__8721 = count__8712;
var G__8722 = (i__8713 + (1));
seq__8709 = G__8719;
chunk__8711 = G__8720;
count__8712 = G__8721;
i__8713 = G__8722;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8709);
if(temp__5804__auto__){
var seq__8709__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8709__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8709__$1);
var G__8723 = cljs.core.chunk_rest.call(null,seq__8709__$1);
var G__8724 = c__4591__auto__;
var G__8725 = cljs.core.count.call(null,c__4591__auto__);
var G__8726 = (0);
seq__8709 = G__8723;
chunk__8711 = G__8724;
count__8712 = G__8725;
i__8713 = G__8726;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__8709__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__8727 = cljs.core.next.call(null,seq__8709__$1);
var G__8728 = null;
var G__8729 = (0);
var G__8730 = (0);
seq__8709 = G__8727;
chunk__8711 = G__8728;
count__8712 = G__8729;
i__8713 = G__8730;
continue;
} else {
var G__8731 = cljs.core.next.call(null,seq__8709__$1);
var G__8732 = null;
var G__8733 = (0);
var G__8734 = (0);
seq__8709 = G__8731;
chunk__8711 = G__8732;
count__8712 = G__8733;
i__8713 = G__8734;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__8735_8739 = cljs.core.seq.call(null,descriptions);
var chunk__8736_8740 = null;
var count__8737_8741 = (0);
var i__8738_8742 = (0);
while(true){
if((i__8738_8742 < count__8737_8741)){
var description_8743 = cljs.core._nth.call(null,chunk__8736_8740,i__8738_8742);
speclj.running.scan_for_focus_BANG_.call(null,description_8743);


var G__8744 = seq__8735_8739;
var G__8745 = chunk__8736_8740;
var G__8746 = count__8737_8741;
var G__8747 = (i__8738_8742 + (1));
seq__8735_8739 = G__8744;
chunk__8736_8740 = G__8745;
count__8737_8741 = G__8746;
i__8738_8742 = G__8747;
continue;
} else {
var temp__5804__auto___8748 = cljs.core.seq.call(null,seq__8735_8739);
if(temp__5804__auto___8748){
var seq__8735_8749__$1 = temp__5804__auto___8748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8735_8749__$1)){
var c__4591__auto___8750 = cljs.core.chunk_first.call(null,seq__8735_8749__$1);
var G__8751 = cljs.core.chunk_rest.call(null,seq__8735_8749__$1);
var G__8752 = c__4591__auto___8750;
var G__8753 = cljs.core.count.call(null,c__4591__auto___8750);
var G__8754 = (0);
seq__8735_8739 = G__8751;
chunk__8736_8740 = G__8752;
count__8737_8741 = G__8753;
i__8738_8742 = G__8754;
continue;
} else {
var description_8755 = cljs.core.first.call(null,seq__8735_8749__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_8755);


var G__8756 = cljs.core.next.call(null,seq__8735_8749__$1);
var G__8757 = null;
var G__8758 = (0);
var G__8759 = (0);
seq__8735_8739 = G__8756;
chunk__8736_8740 = G__8757;
count__8737_8741 = G__8758;
i__8738_8742 = G__8759;
continue;
}
} else {
}
}
break;
}

var or__4160__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__8760 = cljs.core.seq.call(null,components);
var chunk__8761 = null;
var count__8762 = (0);
var i__8763 = (0);
while(true){
if((i__8763 < count__8762)){
var component = cljs.core._nth.call(null,chunk__8761,i__8763);
component.body.call(null);


var G__8764 = seq__8760;
var G__8765 = chunk__8761;
var G__8766 = count__8762;
var G__8767 = (i__8763 + (1));
seq__8760 = G__8764;
chunk__8761 = G__8765;
count__8762 = G__8766;
i__8763 = G__8767;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8760);
if(temp__5804__auto__){
var seq__8760__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8760__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8760__$1);
var G__8768 = cljs.core.chunk_rest.call(null,seq__8760__$1);
var G__8769 = c__4591__auto__;
var G__8770 = cljs.core.count.call(null,c__4591__auto__);
var G__8771 = (0);
seq__8760 = G__8768;
chunk__8761 = G__8769;
count__8762 = G__8770;
i__8763 = G__8771;
continue;
} else {
var component = cljs.core.first.call(null,seq__8760__$1);
component.body.call(null);


var G__8772 = cljs.core.next.call(null,seq__8760__$1);
var G__8773 = null;
var G__8774 = (0);
var G__8775 = (0);
seq__8760 = G__8772;
chunk__8761 = G__8773;
count__8762 = G__8774;
i__8763 = G__8775;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__8776 = cljs.core.seq.call(null,withs);
var chunk__8777 = null;
var count__8778 = (0);
var i__8779 = (0);
while(true){
if((i__8779 < count__8778)){
var with$ = cljs.core._nth.call(null,chunk__8777,i__8779);
speclj.components.reset_with.call(null,with$);


var G__8780 = seq__8776;
var G__8781 = chunk__8777;
var G__8782 = count__8778;
var G__8783 = (i__8779 + (1));
seq__8776 = G__8780;
chunk__8777 = G__8781;
count__8778 = G__8782;
i__8779 = G__8783;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__8776);
if(temp__5804__auto__){
var seq__8776__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8776__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__8776__$1);
var G__8784 = cljs.core.chunk_rest.call(null,seq__8776__$1);
var G__8785 = c__4591__auto__;
var G__8786 = cljs.core.count.call(null,c__4591__auto__);
var G__8787 = (0);
seq__8776 = G__8784;
chunk__8777 = G__8785;
count__8778 = G__8786;
i__8779 = G__8787;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__8776__$1);
speclj.components.reset_with.call(null,with$);


var G__8788 = cljs.core.next.call(null,seq__8776__$1);
var G__8789 = null;
var G__8790 = (0);
var G__8791 = (0);
seq__8776 = G__8788;
chunk__8777 = G__8789;
count__8778 = G__8790;
i__8779 = G__8791;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__8792 = cljs.core.deref.call(null,description__$1.parent);
var G__8793 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__8792;
components = G__8793;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__8794_SHARP_){
return cljs.core.deref.call(null,p1__8794_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__8795_SHARP_){
return cljs.core.deref.call(null,p1__8795_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__8796_SHARP_){
return cljs.core.deref.call(null,p1__8796_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__8797_SHARP_){
return p1__8797_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__8798_SHARP_){
return cljs.core.deref.call(null,p1__8798_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e8799){var e = e8799;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4564__auto__ = (function speclj$running$do_characteristics_$_iter__8800(s__8801){
return (new cljs.core.LazySeq(null,(function (){
var s__8801__$1 = s__8801;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__8801__$1);
if(temp__5804__auto__){
var s__8801__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8801__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__8801__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__8803 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__8802 = (0);
while(true){
if((i__8802 < size__4563__auto__)){
var characteristic = cljs.core._nth.call(null,c__4562__auto__,i__8802);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__8803,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__8804 = (i__8802 + (1));
i__8802 = G__8804;
continue;
} else {
var G__8805 = (i__8802 + (1));
i__8802 = G__8805;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8803),speclj$running$do_characteristics_$_iter__8800.call(null,cljs.core.chunk_rest.call(null,s__8801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8803),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__8801__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__8800.call(null,cljs.core.rest.call(null,s__8801__$2)));
} else {
var G__8806 = cljs.core.rest.call(null,s__8801__$2);
s__8801__$1 = G__8806;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__8807 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__8808 = cljs.core.rest.call(null,children);
results__$1 = G__8807;
children = G__8808;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__8811_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__8811_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__8812_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__8812_SHARP_.unique_name)].join('');
}),withs);
var seq__8813_8845 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__8814_8846 = null;
var count__8815_8847 = (0);
var i__8816_8848 = (0);
while(true){
if((i__8816_8848 < count__8815_8847)){
var vec__8823_8849 = cljs.core._nth.call(null,chunk__8814_8846,i__8816_8848);
var n_8850 = cljs.core.nth.call(null,vec__8823_8849,(0),null);
var un_8851 = cljs.core.nth.call(null,vec__8823_8849,(1),null);
var code_8852 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_8850)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_8851),";"].join('');
eval(code_8852);


var G__8853 = seq__8813_8845;
var G__8854 = chunk__8814_8846;
var G__8855 = count__8815_8847;
var G__8856 = (i__8816_8848 + (1));
seq__8813_8845 = G__8853;
chunk__8814_8846 = G__8854;
count__8815_8847 = G__8855;
i__8816_8848 = G__8856;
continue;
} else {
var temp__5804__auto___8857 = cljs.core.seq.call(null,seq__8813_8845);
if(temp__5804__auto___8857){
var seq__8813_8858__$1 = temp__5804__auto___8857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8813_8858__$1)){
var c__4591__auto___8859 = cljs.core.chunk_first.call(null,seq__8813_8858__$1);
var G__8860 = cljs.core.chunk_rest.call(null,seq__8813_8858__$1);
var G__8861 = c__4591__auto___8859;
var G__8862 = cljs.core.count.call(null,c__4591__auto___8859);
var G__8863 = (0);
seq__8813_8845 = G__8860;
chunk__8814_8846 = G__8861;
count__8815_8847 = G__8862;
i__8816_8848 = G__8863;
continue;
} else {
var vec__8826_8864 = cljs.core.first.call(null,seq__8813_8858__$1);
var n_8865 = cljs.core.nth.call(null,vec__8826_8864,(0),null);
var un_8866 = cljs.core.nth.call(null,vec__8826_8864,(1),null);
var code_8867 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_8865)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_8866),";"].join('');
eval(code_8867);


var G__8868 = cljs.core.next.call(null,seq__8813_8858__$1);
var G__8869 = null;
var G__8870 = (0);
var G__8871 = (0);
seq__8813_8845 = G__8868;
chunk__8814_8846 = G__8869;
count__8815_8847 = G__8870;
i__8816_8848 = G__8871;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__8829_8872 = cljs.core.seq.call(null,var_names);
var chunk__8830_8873 = null;
var count__8831_8874 = (0);
var i__8832_8875 = (0);
while(true){
if((i__8832_8875 < count__8831_8874)){
var vec__8839_8876 = cljs.core._nth.call(null,chunk__8830_8873,i__8832_8875);
var n_8877 = cljs.core.nth.call(null,vec__8839_8876,(0),null);
var code_8878 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_8877)," = null;"].join('');
eval(code_8878);


var G__8879 = seq__8829_8872;
var G__8880 = chunk__8830_8873;
var G__8881 = count__8831_8874;
var G__8882 = (i__8832_8875 + (1));
seq__8829_8872 = G__8879;
chunk__8830_8873 = G__8880;
count__8831_8874 = G__8881;
i__8832_8875 = G__8882;
continue;
} else {
var temp__5804__auto___8883 = cljs.core.seq.call(null,seq__8829_8872);
if(temp__5804__auto___8883){
var seq__8829_8884__$1 = temp__5804__auto___8883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8829_8884__$1)){
var c__4591__auto___8885 = cljs.core.chunk_first.call(null,seq__8829_8884__$1);
var G__8886 = cljs.core.chunk_rest.call(null,seq__8829_8884__$1);
var G__8887 = c__4591__auto___8885;
var G__8888 = cljs.core.count.call(null,c__4591__auto___8885);
var G__8889 = (0);
seq__8829_8872 = G__8886;
chunk__8830_8873 = G__8887;
count__8831_8874 = G__8888;
i__8832_8875 = G__8889;
continue;
} else {
var vec__8842_8890 = cljs.core.first.call(null,seq__8829_8884__$1);
var n_8891 = cljs.core.nth.call(null,vec__8842_8890,(0),null);
var code_8892 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_8891)," = null;"].join('');
eval(code_8892);


var G__8893 = cljs.core.next.call(null,seq__8829_8884__$1);
var G__8894 = null;
var G__8895 = (0);
var G__8896 = (0);
seq__8829_8872 = G__8893;
chunk__8830_8873 = G__8894;
count__8831_8874 = G__8895;
i__8832_8875 = G__8896;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__8897_SHARP_){
return p1__8897_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_8898 = (function (this$,directories,reporters){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.running.run_directories[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,directories,reporters);
} else {
var m__4461__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_8898.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_8899 = (function (this$,description){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.running.submit_description[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,description);
} else {
var m__4461__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_8899.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_8900 = (function (this$,description,reporters){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.running.run_description[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,description,reporters);
} else {
var m__4461__auto__ = (speclj.running.run_description["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_8900.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_8901 = (function (this$,reporters){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,reporters);
} else {
var m__4461__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_8901.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
