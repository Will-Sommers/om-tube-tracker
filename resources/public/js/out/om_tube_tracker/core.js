// Compiled by ClojureScript 0.0-2173
goog.provide('om_tube_tracker.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_tube_tracker.core.js_data = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
om_tube_tracker.core.data = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4160__auto__ = (function iter__14816(s__14817){return (new cljs.core.LazySeq(null,(function (){var s__14817__$1 = s__14817;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14817__$1);if(temp__4092__auto__)
{var s__14817__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14817__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14817__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14819 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14818 = 0;while(true){
if((i__14818 < size__4159__auto__))
{var vec__14822 = cljs.core._nth.call(null,c__4158__auto__,i__14818);var k = cljs.core.nth.call(null,vec__14822,0,null);var v = cljs.core.nth.call(null,vec__14822,1,null);cljs.core.chunk_append.call(null,b__14819,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),v,new cljs.core.Keyword(null,"nick","nick",1017285333),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"stations","stations",2332236081),cljs.core.map.call(null,((function (i__14818,vec__14822,k,v,c__4158__auto__,size__4159__auto__,b__14819,s__14817__$2,temp__4092__auto__){
return (function (p1__14815_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"nick","nick",1017285333),new cljs.core.Keyword(null,"name","name",1017277949)],[p1__14815_SHARP_,cljs.core.keyword.call(null,p1__14815_SHARP_).call(null,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data))]);
});})(i__14818,vec__14822,k,v,c__4158__auto__,size__4159__auto__,b__14819,s__14817__$2,temp__4092__auto__))
,k.call(null,new cljs.core.Keyword(null,"stationsOnLines","stationsOnLines",1056531731).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data)))], null));
{
var G__14824 = (i__14818 + 1);
i__14818 = G__14824;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14819),iter__14816.call(null,cljs.core.chunk_rest.call(null,s__14817__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14819),null);
}
} else
{var vec__14823 = cljs.core.first.call(null,s__14817__$2);var k = cljs.core.nth.call(null,vec__14823,0,null);var v = cljs.core.nth.call(null,vec__14823,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),v,new cljs.core.Keyword(null,"nick","nick",1017285333),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"stations","stations",2332236081),cljs.core.map.call(null,((function (vec__14823,k,v,s__14817__$2,temp__4092__auto__){
return (function (p1__14815_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"nick","nick",1017285333),new cljs.core.Keyword(null,"name","name",1017277949)],[p1__14815_SHARP_,cljs.core.keyword.call(null,p1__14815_SHARP_).call(null,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data))]);
});})(vec__14823,k,v,s__14817__$2,temp__4092__auto__))
,k.call(null,new cljs.core.Keyword(null,"stationsOnLines","stationsOnLines",1056531731).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data)))], null),iter__14816.call(null,cljs.core.rest.call(null,s__14817__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data));
})());
om_tube_tracker.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tube-data","tube-data",3565156549),om_tube_tracker.core.data,new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Testing"], null)], null));
om_tube_tracker.core.station_view = (function station_view(station,owner){if(typeof om_tube_tracker.core.t14828 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t14828 = (function (owner,station,station_view,meta14829){
this.owner = owner;
this.station = station;
this.station_view = station_view;
this.meta14829 = meta14829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t14828.cljs$lang$type = true;
om_tube_tracker.core.t14828.cljs$lang$ctorStr = "om-tube-tracker.core/t14828";
om_tube_tracker.core.t14828.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t14828");
});
om_tube_tracker.core.t14828.prototype.om$core$IRender$ = true;
om_tube_tracker.core.t14828.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.dom.option.call(null,{"data-test": new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.station), "value": new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.station)},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.station));
});
om_tube_tracker.core.t14828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14830){var self__ = this;
var _14830__$1 = this;return self__.meta14829;
});
om_tube_tracker.core.t14828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14830,meta14829__$1){var self__ = this;
var _14830__$1 = this;return (new om_tube_tracker.core.t14828(self__.owner,self__.station,self__.station_view,meta14829__$1));
});
om_tube_tracker.core.__GT_t14828 = (function __GT_t14828(owner__$1,station__$1,station_view__$1,meta14829){return (new om_tube_tracker.core.t14828(owner__$1,station__$1,station_view__$1,meta14829));
});
}
return (new om_tube_tracker.core.t14828(owner,station,station_view,null));
});
om_tube_tracker.core.change_current_station = (function change_current_station(event,owner,nick,c_current_station){cljs.core.async.put_BANG_.call(null,c_current_station,document.getElementById(nick).value);
return event.preventDefault();
});
om_tube_tracker.core.network_view = (function network_view(line,owner){if(typeof om_tube_tracker.core.t14837 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t14837 = (function (owner,line,network_view,meta14838){
this.owner = owner;
this.line = line;
this.network_view = network_view;
this.meta14838 = meta14838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t14837.cljs$lang$type = true;
om_tube_tracker.core.t14837.cljs$lang$ctorStr = "om-tube-tracker.core/t14837";
om_tube_tracker.core.t14837.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t14837");
});
om_tube_tracker.core.t14837.prototype.om$core$IRenderState$ = true;
om_tube_tracker.core.t14837.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14840){var self__ = this;
var map__14841 = p__14840;var map__14841__$1 = ((cljs.core.seq_QMARK_.call(null,map__14841))?cljs.core.apply.call(null,cljs.core.hash_map,map__14841):map__14841);var current_station = cljs.core.get.call(null,map__14841__$1,new cljs.core.Keyword(null,"current-station","current-station",2422672466));var ___$1 = this;return React.DOM.div(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.line),React.DOM.form({"onSubmit": (function (p1__14831_SHARP_){return om_tube_tracker.core.change_current_station.call(null,p1__14831_SHARP_,self__.owner,new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.line)),current_station);
})},React.DOM.legend(null,new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(self__.line)),cljs.core.apply.call(null,om.dom.select,{"id": new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(self__.line)},om.core.build_all.call(null,om_tube_tracker.core.station_view,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(self__.line))),React.DOM.button({"style": {"color": "red"}, "type": "submit"},"Go")));
});
om_tube_tracker.core.t14837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14839){var self__ = this;
var _14839__$1 = this;return self__.meta14838;
});
om_tube_tracker.core.t14837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14839,meta14838__$1){var self__ = this;
var _14839__$1 = this;return (new om_tube_tracker.core.t14837(self__.owner,self__.line,self__.network_view,meta14838__$1));
});
om_tube_tracker.core.__GT_t14837 = (function __GT_t14837(owner__$1,line__$1,network_view__$1,meta14838){return (new om_tube_tracker.core.t14837(owner__$1,line__$1,network_view__$1,meta14838));
});
}
return (new om_tube_tracker.core.t14837(owner,line,network_view,null));
});
om_tube_tracker.core.predictions_view = (function predictions_view(prediction,owner){if(typeof om_tube_tracker.core.t14845 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t14845 = (function (owner,prediction,predictions_view,meta14846){
this.owner = owner;
this.prediction = prediction;
this.predictions_view = predictions_view;
this.meta14846 = meta14846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t14845.cljs$lang$type = true;
om_tube_tracker.core.t14845.cljs$lang$ctorStr = "om-tube-tracker.core/t14845";
om_tube_tracker.core.t14845.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t14845");
});
om_tube_tracker.core.t14845.prototype.om$core$IRender$ = true;
om_tube_tracker.core.t14845.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "predictions"},React.DOM.ul(null,cljs.core.first.call(null,self__.prediction)));
});
om_tube_tracker.core.t14845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14847){var self__ = this;
var _14847__$1 = this;return self__.meta14846;
});
om_tube_tracker.core.t14845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14847,meta14846__$1){var self__ = this;
var _14847__$1 = this;return (new om_tube_tracker.core.t14845(self__.owner,self__.prediction,self__.predictions_view,meta14846__$1));
});
om_tube_tracker.core.__GT_t14845 = (function __GT_t14845(owner__$1,prediction__$1,predictions_view__$1,meta14846){return (new om_tube_tracker.core.t14845(owner__$1,prediction__$1,predictions_view__$1,meta14846));
});
}
return (new om_tube_tracker.core.t14845(owner,prediction,predictions_view,null));
});
om_tube_tracker.core.app_view = (function app_view(app,owner){if(typeof om_tube_tracker.core.t14881 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t14881 = (function (owner,app,app_view,meta14882){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta14882 = meta14882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t14881.cljs$lang$type = true;
om_tube_tracker.core.t14881.cljs$lang$ctorStr = "om-tube-tracker.core/t14881";
om_tube_tracker.core.t14881.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t14881");
});
om_tube_tracker.core.t14881.prototype.om$core$IRenderState$ = true;
om_tube_tracker.core.t14881.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14884){var self__ = this;
var map__14885 = p__14884;var map__14885__$1 = ((cljs.core.seq_QMARK_.call(null,map__14885))?cljs.core.apply.call(null,cljs.core.hash_map,map__14885):map__14885);var chans = cljs.core.get.call(null,map__14885__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var message = cljs.core.get.call(null,map__14885__$1,new cljs.core.Keyword(null,"message","message",1968829305));var ___$1 = this;cljs.core.println.call(null,message);
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,{"className": "network"},om.core.build_all.call(null,om_tube_tracker.core.network_view,new cljs.core.Keyword(null,"tube-data","tube-data",3565156549).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null))),om.core.build.call(null,om_tube_tracker.core.predictions_view,new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347).cljs$core$IFn$_invoke$arity$1(self__.app)),(cljs.core.truth_(message)?React.DOM.div(null,message):null));
});
om_tube_tracker.core.t14881.prototype.om$core$IWillMount$ = true;
om_tube_tracker.core.t14881.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var current_station = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"current-station","current-station",2422672466)], null));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_14898){var state_val_14899 = (state_14898[1]);if((state_val_14899 === 7))
{var inst_14889 = (state_14898[2]);var inst_14890 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"message","message",1968829305),inst_14889);var state_14898__$1 = (function (){var statearr_14900 = state_14898;(statearr_14900[7] = inst_14890);
return statearr_14900;
})();var statearr_14901_14914 = state_14898__$1;(statearr_14901_14914[2] = null);
(statearr_14901_14914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14899 === 6))
{var inst_14894 = (state_14898[2]);var state_14898__$1 = state_14898;var statearr_14902_14915 = state_14898__$1;(statearr_14902_14915[2] = inst_14894);
(statearr_14902_14915[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14899 === 5))
{var state_14898__$1 = state_14898;var statearr_14903_14916 = state_14898__$1;(statearr_14903_14916[2] = null);
(statearr_14903_14916[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14899 === 4))
{var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14898__$1,7,current_station);
} else
{if((state_val_14899 === 3))
{var inst_14896 = (state_14898[2]);var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14898__$1,inst_14896);
} else
{if((state_val_14899 === 2))
{var state_14898__$1 = state_14898;if(true)
{var statearr_14904_14917 = state_14898__$1;(statearr_14904_14917[1] = 4);
} else
{var statearr_14905_14918 = state_14898__$1;(statearr_14905_14918[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14899 === 1))
{var state_14898__$1 = state_14898;var statearr_14906_14919 = state_14898__$1;(statearr_14906_14919[2] = null);
(statearr_14906_14919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_14910 = [null,null,null,null,null,null,null,null];(statearr_14910[0] = state_machine__6178__auto__);
(statearr_14910[1] = 1);
return statearr_14910;
});
var state_machine__6178__auto____1 = (function (state_14898){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_14898);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e14911){if((e14911 instanceof Object))
{var ex__6181__auto__ = e14911;var statearr_14912_14920 = state_14898;(statearr_14912_14920[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14921 = state_14898;
state_14898 = G__14921;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_14898){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_14898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_14913 = f__6193__auto__.call(null);(statearr_14913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_14913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
om_tube_tracker.core.t14881.prototype.om$core$IInitState$ = true;
om_tube_tracker.core.t14881.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-station","current-station",2422672466),cljs.core.async.chan.call(null)], null)], null);
});
om_tube_tracker.core.t14881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14883){var self__ = this;
var _14883__$1 = this;return self__.meta14882;
});
om_tube_tracker.core.t14881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14883,meta14882__$1){var self__ = this;
var _14883__$1 = this;return (new om_tube_tracker.core.t14881(self__.owner,self__.app,self__.app_view,meta14882__$1));
});
om_tube_tracker.core.__GT_t14881 = (function __GT_t14881(owner__$1,app__$1,app_view__$1,meta14882){return (new om_tube_tracker.core.t14881(owner__$1,app__$1,app_view__$1,meta14882));
});
}
return (new om_tube_tracker.core.t14881(owner,app,app_view,null));
});
om.core.root.call(null,om_tube_tracker.core.app_view,om_tube_tracker.core.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map