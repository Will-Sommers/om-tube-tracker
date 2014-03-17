// Compiled by ClojureScript 0.0-2173
goog.provide('om_tube_tracker.core');
goog.require('cljs.core');
goog.require('om_tube_tracker.utils');
goog.require('cljs.core.async');
goog.require('om_tube_tracker.utils');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.dom.xml');
goog.require('goog.dom.xml');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_tube_tracker.core.js_data = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
om_tube_tracker.utils.resp_text.call(null);
om_tube_tracker.core.data = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4160__auto__ = (function iter__10982(s__10983){return (new cljs.core.LazySeq(null,(function (){var s__10983__$1 = s__10983;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10983__$1);if(temp__4092__auto__)
{var s__10983__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10983__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10983__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10985 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10984 = 0;while(true){
if((i__10984 < size__4159__auto__))
{var vec__10988 = cljs.core._nth.call(null,c__4158__auto__,i__10984);var k = cljs.core.nth.call(null,vec__10988,0,null);var v = cljs.core.nth.call(null,vec__10988,1,null);cljs.core.chunk_append.call(null,b__10985,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),v,new cljs.core.Keyword(null,"nick","nick",1017285333),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"stations","stations",2332236081),cljs.core.map.call(null,((function (i__10984,vec__10988,k,v,c__4158__auto__,size__4159__auto__,b__10985,s__10983__$2,temp__4092__auto__){
return (function (p1__10981_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"nick","nick",1017285333),new cljs.core.Keyword(null,"name","name",1017277949)],[p1__10981_SHARP_,cljs.core.keyword.call(null,p1__10981_SHARP_).call(null,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data))]);
});})(i__10984,vec__10988,k,v,c__4158__auto__,size__4159__auto__,b__10985,s__10983__$2,temp__4092__auto__))
,k.call(null,new cljs.core.Keyword(null,"stationsOnLines","stationsOnLines",1056531731).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data)))], null));
{
var G__10990 = (i__10984 + 1);
i__10984 = G__10990;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10985),iter__10982.call(null,cljs.core.chunk_rest.call(null,s__10983__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10985),null);
}
} else
{var vec__10989 = cljs.core.first.call(null,s__10983__$2);var k = cljs.core.nth.call(null,vec__10989,0,null);var v = cljs.core.nth.call(null,vec__10989,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),v,new cljs.core.Keyword(null,"nick","nick",1017285333),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"stations","stations",2332236081),cljs.core.map.call(null,((function (vec__10989,k,v,s__10983__$2,temp__4092__auto__){
return (function (p1__10981_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"nick","nick",1017285333),new cljs.core.Keyword(null,"name","name",1017277949)],[p1__10981_SHARP_,cljs.core.keyword.call(null,p1__10981_SHARP_).call(null,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data))]);
});})(vec__10989,k,v,s__10983__$2,temp__4092__auto__))
,k.call(null,new cljs.core.Keyword(null,"stationsOnLines","stationsOnLines",1056531731).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data)))], null),iter__10982.call(null,cljs.core.rest.call(null,s__10983__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data));
})());
console.log(goog.dom.xml.loadXml(om_tube_tracker.utils.resp_text.call(null)));
om_tube_tracker.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tube-data","tube-data",3565156549),om_tube_tracker.core.data,new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Test"], null)], null));
om_tube_tracker.core.station_view = (function station_view(station,owner){if(typeof om_tube_tracker.core.t10994 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t10994 = (function (owner,station,station_view,meta10995){
this.owner = owner;
this.station = station;
this.station_view = station_view;
this.meta10995 = meta10995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t10994.cljs$lang$type = true;
om_tube_tracker.core.t10994.cljs$lang$ctorStr = "om-tube-tracker.core/t10994";
om_tube_tracker.core.t10994.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t10994");
});
om_tube_tracker.core.t10994.prototype.om$core$IRender$ = true;
om_tube_tracker.core.t10994.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.dom.option.call(null,{"data-test": new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.station), "value": new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.station)},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.station));
});
om_tube_tracker.core.t10994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10996){var self__ = this;
var _10996__$1 = this;return self__.meta10995;
});
om_tube_tracker.core.t10994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10996,meta10995__$1){var self__ = this;
var _10996__$1 = this;return (new om_tube_tracker.core.t10994(self__.owner,self__.station,self__.station_view,meta10995__$1));
});
om_tube_tracker.core.__GT_t10994 = (function __GT_t10994(owner__$1,station__$1,station_view__$1,meta10995){return (new om_tube_tracker.core.t10994(owner__$1,station__$1,station_view__$1,meta10995));
});
}
return (new om_tube_tracker.core.t10994(owner,station,station_view,null));
});
om_tube_tracker.core.change_current_station = (function change_current_station(event,owner,nick,c_current_station){cljs.core.async.put_BANG_.call(null,c_current_station,document.getElementById(nick).value);
return event.preventDefault();
});
om_tube_tracker.core.network_view = (function network_view(line,owner){if(typeof om_tube_tracker.core.t11003 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t11003 = (function (owner,line,network_view,meta11004){
this.owner = owner;
this.line = line;
this.network_view = network_view;
this.meta11004 = meta11004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t11003.cljs$lang$type = true;
om_tube_tracker.core.t11003.cljs$lang$ctorStr = "om-tube-tracker.core/t11003";
om_tube_tracker.core.t11003.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t11003");
});
om_tube_tracker.core.t11003.prototype.om$core$IRenderState$ = true;
om_tube_tracker.core.t11003.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11006){var self__ = this;
var map__11007 = p__11006;var map__11007__$1 = ((cljs.core.seq_QMARK_.call(null,map__11007))?cljs.core.apply.call(null,cljs.core.hash_map,map__11007):map__11007);var current_station = cljs.core.get.call(null,map__11007__$1,new cljs.core.Keyword(null,"current-station","current-station",2422672466));var ___$1 = this;return React.DOM.div(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.line),React.DOM.form({"onSubmit": (function (p1__10997_SHARP_){return om_tube_tracker.core.change_current_station.call(null,p1__10997_SHARP_,self__.owner,new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.line)),current_station);
})},React.DOM.legend(null,new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(self__.line)),cljs.core.apply.call(null,om.dom.select,{"id": new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(self__.line)},om.core.build_all.call(null,om_tube_tracker.core.station_view,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(self__.line))),React.DOM.button({"style": {"color": "red"}, "type": "submit"},"Go")));
});
om_tube_tracker.core.t11003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11005){var self__ = this;
var _11005__$1 = this;return self__.meta11004;
});
om_tube_tracker.core.t11003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11005,meta11004__$1){var self__ = this;
var _11005__$1 = this;return (new om_tube_tracker.core.t11003(self__.owner,self__.line,self__.network_view,meta11004__$1));
});
om_tube_tracker.core.__GT_t11003 = (function __GT_t11003(owner__$1,line__$1,network_view__$1,meta11004){return (new om_tube_tracker.core.t11003(owner__$1,line__$1,network_view__$1,meta11004));
});
}
return (new om_tube_tracker.core.t11003(owner,line,network_view,null));
});
om_tube_tracker.core.predictions_view = (function predictions_view(prediction,owner){if(typeof om_tube_tracker.core.t11011 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t11011 = (function (owner,prediction,predictions_view,meta11012){
this.owner = owner;
this.prediction = prediction;
this.predictions_view = predictions_view;
this.meta11012 = meta11012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t11011.cljs$lang$type = true;
om_tube_tracker.core.t11011.cljs$lang$ctorStr = "om-tube-tracker.core/t11011";
om_tube_tracker.core.t11011.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t11011");
});
om_tube_tracker.core.t11011.prototype.om$core$IRender$ = true;
om_tube_tracker.core.t11011.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "predictions"},React.DOM.ul(null,cljs.core.last.call(null,self__.prediction)));
});
om_tube_tracker.core.t11011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11013){var self__ = this;
var _11013__$1 = this;return self__.meta11012;
});
om_tube_tracker.core.t11011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11013,meta11012__$1){var self__ = this;
var _11013__$1 = this;return (new om_tube_tracker.core.t11011(self__.owner,self__.prediction,self__.predictions_view,meta11012__$1));
});
om_tube_tracker.core.__GT_t11011 = (function __GT_t11011(owner__$1,prediction__$1,predictions_view__$1,meta11012){return (new om_tube_tracker.core.t11011(owner__$1,prediction__$1,predictions_view__$1,meta11012));
});
}
return (new om_tube_tracker.core.t11011(owner,prediction,predictions_view,null));
});
om_tube_tracker.core.app_view = (function app_view(app,owner){if(typeof om_tube_tracker.core.t11049 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t11049 = (function (owner,app,app_view,meta11050){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta11050 = meta11050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t11049.cljs$lang$type = true;
om_tube_tracker.core.t11049.cljs$lang$ctorStr = "om-tube-tracker.core/t11049";
om_tube_tracker.core.t11049.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t11049");
});
om_tube_tracker.core.t11049.prototype.om$core$IRenderState$ = true;
om_tube_tracker.core.t11049.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11052){var self__ = this;
var map__11053 = p__11052;var map__11053__$1 = ((cljs.core.seq_QMARK_.call(null,map__11053))?cljs.core.apply.call(null,cljs.core.hash_map,map__11053):map__11053);var chans = cljs.core.get.call(null,map__11053__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,{"className": "network"},om.core.build_all.call(null,om_tube_tracker.core.network_view,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"tube-data","tube-data",3565156549).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null))),om.core.build.call(null,om_tube_tracker.core.predictions_view,new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
om_tube_tracker.core.t11049.prototype.om$core$IWillMount$ = true;
om_tube_tracker.core.t11049.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var current_station = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"current-station","current-station",2422672466)], null));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11067){var state_val_11068 = (state_11067[1]);if((state_val_11068 === 7))
{var inst_11057 = (state_11067[2]);var inst_11058 = (function (){var cs = inst_11057;return ((function (cs,inst_11057,state_val_11068){
return (function (p1__11014_SHARP_){return cljs.core.conj.call(null,p1__11014_SHARP_,cs);
});
;})(cs,inst_11057,state_val_11068))
})();var inst_11059 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347),inst_11058);var state_11067__$1 = (function (){var statearr_11069 = state_11067;(statearr_11069[7] = inst_11059);
return statearr_11069;
})();var statearr_11070_11083 = state_11067__$1;(statearr_11070_11083[2] = null);
(statearr_11070_11083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 6))
{var inst_11063 = (state_11067[2]);var state_11067__$1 = state_11067;var statearr_11071_11084 = state_11067__$1;(statearr_11071_11084[2] = inst_11063);
(statearr_11071_11084[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 5))
{var state_11067__$1 = state_11067;var statearr_11072_11085 = state_11067__$1;(statearr_11072_11085[2] = null);
(statearr_11072_11085[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 4))
{var state_11067__$1 = state_11067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11067__$1,7,current_station);
} else
{if((state_val_11068 === 3))
{var inst_11065 = (state_11067[2]);var state_11067__$1 = state_11067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11067__$1,inst_11065);
} else
{if((state_val_11068 === 2))
{var state_11067__$1 = state_11067;if(true)
{var statearr_11073_11086 = state_11067__$1;(statearr_11073_11086[1] = 4);
} else
{var statearr_11074_11087 = state_11067__$1;(statearr_11074_11087[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 1))
{var state_11067__$1 = state_11067;var statearr_11075_11088 = state_11067__$1;(statearr_11075_11088[2] = null);
(statearr_11075_11088[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11079 = [null,null,null,null,null,null,null,null];(statearr_11079[0] = state_machine__6178__auto__);
(statearr_11079[1] = 1);
return statearr_11079;
});
var state_machine__6178__auto____1 = (function (state_11067){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11080){if((e11080 instanceof Object))
{var ex__6181__auto__ = e11080;var statearr_11081_11089 = state_11067;(statearr_11081_11089[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11090 = state_11067;
state_11067 = G__11090;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11067){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11082 = f__6193__auto__.call(null);(statearr_11082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
om_tube_tracker.core.t11049.prototype.om$core$IInitState$ = true;
om_tube_tracker.core.t11049.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-station","current-station",2422672466),cljs.core.async.chan.call(null)], null)], null);
});
om_tube_tracker.core.t11049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11051){var self__ = this;
var _11051__$1 = this;return self__.meta11050;
});
om_tube_tracker.core.t11049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11051,meta11050__$1){var self__ = this;
var _11051__$1 = this;return (new om_tube_tracker.core.t11049(self__.owner,self__.app,self__.app_view,meta11050__$1));
});
om_tube_tracker.core.__GT_t11049 = (function __GT_t11049(owner__$1,app__$1,app_view__$1,meta11050){return (new om_tube_tracker.core.t11049(owner__$1,app__$1,app_view__$1,meta11050));
});
}
return (new om_tube_tracker.core.t11049(owner,app,app_view,null));
});
om.core.root.call(null,om_tube_tracker.core.app_view,om_tube_tracker.core.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map