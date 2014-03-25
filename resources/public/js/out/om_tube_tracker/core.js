// Compiled by ClojureScript 0.0-2173
goog.provide('om_tube_tracker.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
om_tube_tracker.core.js_data = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
om_tube_tracker.core.data = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4160__auto__ = (function iter__30038(s__30039){return (new cljs.core.LazySeq(null,(function (){var s__30039__$1 = s__30039;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30039__$1);if(temp__4092__auto__)
{var s__30039__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30039__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__30039__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__30041 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__30040 = 0;while(true){
if((i__30040 < size__4159__auto__))
{var vec__30044 = cljs.core._nth.call(null,c__4158__auto__,i__30040);var k = cljs.core.nth.call(null,vec__30044,0,null);var v = cljs.core.nth.call(null,vec__30044,1,null);cljs.core.chunk_append.call(null,b__30041,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),v,new cljs.core.Keyword(null,"nick","nick",1017285333),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"stations","stations",2332236081),cljs.core.map.call(null,((function (i__30040,vec__30044,k,v,c__4158__auto__,size__4159__auto__,b__30041,s__30039__$2,temp__4092__auto__){
return (function (p1__30037_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"nick","nick",1017285333),new cljs.core.Keyword(null,"name","name",1017277949)],[p1__30037_SHARP_,cljs.core.keyword.call(null,p1__30037_SHARP_).call(null,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data))]);
});})(i__30040,vec__30044,k,v,c__4158__auto__,size__4159__auto__,b__30041,s__30039__$2,temp__4092__auto__))
,k.call(null,new cljs.core.Keyword(null,"stationsOnLines","stationsOnLines",1056531731).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data)))], null));
{
var G__30046 = (i__30040 + 1);
i__30040 = G__30046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30041),iter__30038.call(null,cljs.core.chunk_rest.call(null,s__30039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30041),null);
}
} else
{var vec__30045 = cljs.core.first.call(null,s__30039__$2);var k = cljs.core.nth.call(null,vec__30045,0,null);var v = cljs.core.nth.call(null,vec__30045,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),v,new cljs.core.Keyword(null,"nick","nick",1017285333),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"stations","stations",2332236081),cljs.core.map.call(null,((function (vec__30045,k,v,s__30039__$2,temp__4092__auto__){
return (function (p1__30037_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"nick","nick",1017285333),new cljs.core.Keyword(null,"name","name",1017277949)],[p1__30037_SHARP_,cljs.core.keyword.call(null,p1__30037_SHARP_).call(null,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data))]);
});})(vec__30045,k,v,s__30039__$2,temp__4092__auto__))
,k.call(null,new cljs.core.Keyword(null,"stationsOnLines","stationsOnLines",1056531731).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data)))], null),iter__30038.call(null,cljs.core.rest.call(null,s__30039__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(om_tube_tracker.core.js_data));
})());
om_tube_tracker.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tube-data","tube-data",3565156549),om_tube_tracker.core.data,new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347),cljs.core.PersistentArrayMap.EMPTY], null));
om_tube_tracker.core.GETS = (function GETS(url,c_api_resp){var ch = c_api_resp;goog.net.XhrIo.send(url,(function (event){var res = event.target.getResponseText();return cljs.core.async.put_BANG_.call(null,ch,res);
}));
return ch;
});
om_tube_tracker.core.build_req_url = (function build_req_url(line_nick,station_nick){return [cljs.core.str("http://127.0.0.1:8080/line/"),cljs.core.str(line_nick),cljs.core.str("/station/"),cljs.core.str(station_nick)].join('');
});
om_tube_tracker.core.station_view = (function station_view(station,owner){if(typeof om_tube_tracker.core.t30050 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t30050 = (function (owner,station,station_view,meta30051){
this.owner = owner;
this.station = station;
this.station_view = station_view;
this.meta30051 = meta30051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t30050.cljs$lang$type = true;
om_tube_tracker.core.t30050.cljs$lang$ctorStr = "om-tube-tracker.core/t30050";
om_tube_tracker.core.t30050.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t30050");
});
om_tube_tracker.core.t30050.prototype.om$core$IRender$ = true;
om_tube_tracker.core.t30050.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.dom.option.call(null,{"value": new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(self__.station)},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.station));
});
om_tube_tracker.core.t30050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30052){var self__ = this;
var _30052__$1 = this;return self__.meta30051;
});
om_tube_tracker.core.t30050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30052,meta30051__$1){var self__ = this;
var _30052__$1 = this;return (new om_tube_tracker.core.t30050(self__.owner,self__.station,self__.station_view,meta30051__$1));
});
om_tube_tracker.core.__GT_t30050 = (function __GT_t30050(owner__$1,station__$1,station_view__$1,meta30051){return (new om_tube_tracker.core.t30050(owner__$1,station__$1,station_view__$1,meta30051));
});
}
return (new om_tube_tracker.core.t30050(owner,station,station_view,null));
});
om_tube_tracker.core.change_current_station = (function change_current_station(event,owner,nick,c_current_station){cljs.core.async.put_BANG_.call(null,c_current_station,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-nick","line-nick",3466450190),nick,new cljs.core.Keyword(null,"station-nick","station-nick",826624974),document.getElementById(nick).value], null));
return event.preventDefault();
});
om_tube_tracker.core.network_view = (function network_view(line,owner){if(typeof om_tube_tracker.core.t30059 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t30059 = (function (owner,line,network_view,meta30060){
this.owner = owner;
this.line = line;
this.network_view = network_view;
this.meta30060 = meta30060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t30059.cljs$lang$type = true;
om_tube_tracker.core.t30059.cljs$lang$ctorStr = "om-tube-tracker.core/t30059";
om_tube_tracker.core.t30059.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t30059");
});
om_tube_tracker.core.t30059.prototype.om$core$IRenderState$ = true;
om_tube_tracker.core.t30059.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30062){var self__ = this;
var map__30063 = p__30062;var map__30063__$1 = ((cljs.core.seq_QMARK_.call(null,map__30063))?cljs.core.apply.call(null,cljs.core.hash_map,map__30063):map__30063);var current_station = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"current-station","current-station",2422672466));var ___$1 = this;return React.DOM.div(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.line),React.DOM.form({"onSubmit": (function (p1__30053_SHARP_){return om_tube_tracker.core.change_current_station.call(null,p1__30053_SHARP_,self__.owner,new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.line)),current_station);
})},React.DOM.legend(null,new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(self__.line)),cljs.core.apply.call(null,om.dom.select,{"id": new cljs.core.Keyword(null,"nick","nick",1017285333).cljs$core$IFn$_invoke$arity$1(self__.line)},om.core.build_all.call(null,om_tube_tracker.core.station_view,new cljs.core.Keyword(null,"stations","stations",2332236081).cljs$core$IFn$_invoke$arity$1(self__.line))),React.DOM.button({"style": {"color": "red"}, "type": "submit"},"Go")));
});
om_tube_tracker.core.t30059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30061){var self__ = this;
var _30061__$1 = this;return self__.meta30060;
});
om_tube_tracker.core.t30059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30061,meta30060__$1){var self__ = this;
var _30061__$1 = this;return (new om_tube_tracker.core.t30059(self__.owner,self__.line,self__.network_view,meta30060__$1));
});
om_tube_tracker.core.__GT_t30059 = (function __GT_t30059(owner__$1,line__$1,network_view__$1,meta30060){return (new om_tube_tracker.core.t30059(owner__$1,line__$1,network_view__$1,meta30060));
});
}
return (new om_tube_tracker.core.t30059(owner,line,network_view,null));
});
om_tube_tracker.core.train_view = (function train_view(train,owner){if(typeof om_tube_tracker.core.t30067 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t30067 = (function (owner,train,train_view,meta30068){
this.owner = owner;
this.train = train;
this.train_view = train_view;
this.meta30068 = meta30068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t30067.cljs$lang$type = true;
om_tube_tracker.core.t30067.cljs$lang$ctorStr = "om-tube-tracker.core/t30067";
om_tube_tracker.core.t30067.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t30067");
});
om_tube_tracker.core.t30067.prototype.om$core$IRender$ = true;
om_tube_tracker.core.t30067.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var train_data = new cljs.core.Keyword(null,"attrs","attrs",1107056660).cljs$core$IFn$_invoke$arity$1(self__.train);return React.DOM.tr(null,React.DOM.td(null,new cljs.core.Keyword(null,"SecondsTo","SecondsTo",2200290476).cljs$core$IFn$_invoke$arity$1(train_data)),React.DOM.td(null,new cljs.core.Keyword(null,"Destination","Destination",1251925856).cljs$core$IFn$_invoke$arity$1(train_data)),React.DOM.td(null,new cljs.core.Keyword(null,"Location","Location",2979592007).cljs$core$IFn$_invoke$arity$1(train_data)));
});
om_tube_tracker.core.t30067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30069){var self__ = this;
var _30069__$1 = this;return self__.meta30068;
});
om_tube_tracker.core.t30067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30069,meta30068__$1){var self__ = this;
var _30069__$1 = this;return (new om_tube_tracker.core.t30067(self__.owner,self__.train,self__.train_view,meta30068__$1));
});
om_tube_tracker.core.__GT_t30067 = (function __GT_t30067(owner__$1,train__$1,train_view__$1,meta30068){return (new om_tube_tracker.core.t30067(owner__$1,train__$1,train_view__$1,meta30068));
});
}
return (new om_tube_tracker.core.t30067(owner,train,train_view,null));
});
om_tube_tracker.core.platform_view = (function platform_view(platform,owner){if(typeof om_tube_tracker.core.t30073 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t30073 = (function (owner,platform,platform_view,meta30074){
this.owner = owner;
this.platform = platform;
this.platform_view = platform_view;
this.meta30074 = meta30074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t30073.cljs$lang$type = true;
om_tube_tracker.core.t30073.cljs$lang$ctorStr = "om-tube-tracker.core/t30073";
om_tube_tracker.core.t30073.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t30073");
});
om_tube_tracker.core.t30073.prototype.om$core$IRender$ = true;
om_tube_tracker.core.t30073.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div(null,cljs.core.get_in.call(null,self__.platform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",1107056660),new cljs.core.Keyword(null,"N","N",1013904320)], null))),React.DOM.table(null,React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Time"),React.DOM.th(null,"Destination"),React.DOM.th(null,"Current Location"))),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,om_tube_tracker.core.train_view,cljs.core.get_in.call(null,self__.platform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trains","trains",4443161309)], null))))));
});
om_tube_tracker.core.t30073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30075){var self__ = this;
var _30075__$1 = this;return self__.meta30074;
});
om_tube_tracker.core.t30073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30075,meta30074__$1){var self__ = this;
var _30075__$1 = this;return (new om_tube_tracker.core.t30073(self__.owner,self__.platform,self__.platform_view,meta30074__$1));
});
om_tube_tracker.core.__GT_t30073 = (function __GT_t30073(owner__$1,platform__$1,platform_view__$1,meta30074){return (new om_tube_tracker.core.t30073(owner__$1,platform__$1,platform_view__$1,meta30074));
});
}
return (new om_tube_tracker.core.t30073(owner,platform,platform_view,null));
});
om_tube_tracker.core.predictions_view = (function predictions_view(prediction,owner){if(typeof om_tube_tracker.core.t30081 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t30081 = (function (owner,prediction,predictions_view,meta30082){
this.owner = owner;
this.prediction = prediction;
this.predictions_view = predictions_view;
this.meta30082 = meta30082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t30081.cljs$lang$type = true;
om_tube_tracker.core.t30081.cljs$lang$ctorStr = "om-tube-tracker.core/t30081";
om_tube_tracker.core.t30081.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t30081");
});
om_tube_tracker.core.t30081.prototype.om$core$IRenderState$ = true;
om_tube_tracker.core.t30081.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30084){var self__ = this;
var map__30085 = p__30084;var map__30085__$1 = ((cljs.core.seq_QMARK_.call(null,map__30085))?cljs.core.apply.call(null,cljs.core.hash_map,map__30085):map__30085);var ajax_resp = cljs.core.get.call(null,map__30085__$1,new cljs.core.Keyword(null,"ajax-resp","ajax-resp",1212879567));var ___$1 = this;var station_name = cljs.core.get_in.call(null,self__.prediction,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"attrs","attrs",1107056660),new cljs.core.Keyword(null,"N","N",1013904320)], null));var platforms = cljs.core.get_in.call(null,self__.prediction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"station","station",3411735718),new cljs.core.Keyword(null,"platforms","platforms",3294534098)], null));return React.DOM.div({"className": "predictions"},React.DOM.div(null,station_name),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_tube_tracker.core.platform_view,platforms)));
});
om_tube_tracker.core.t30081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30083){var self__ = this;
var _30083__$1 = this;return self__.meta30082;
});
om_tube_tracker.core.t30081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30083,meta30082__$1){var self__ = this;
var _30083__$1 = this;return (new om_tube_tracker.core.t30081(self__.owner,self__.prediction,self__.predictions_view,meta30082__$1));
});
om_tube_tracker.core.__GT_t30081 = (function __GT_t30081(owner__$1,prediction__$1,predictions_view__$1,meta30082){return (new om_tube_tracker.core.t30081(owner__$1,prediction__$1,predictions_view__$1,meta30082));
});
}
return (new om_tube_tracker.core.t30081(owner,prediction,predictions_view,null));
});
om_tube_tracker.core.app_view = (function app_view(app,owner){if(typeof om_tube_tracker.core.t30129 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tube_tracker.core.t30129 = (function (owner,app,app_view,meta30130){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta30130 = meta30130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tube_tracker.core.t30129.cljs$lang$type = true;
om_tube_tracker.core.t30129.cljs$lang$ctorStr = "om-tube-tracker.core/t30129";
om_tube_tracker.core.t30129.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-tube-tracker.core/t30129");
});
om_tube_tracker.core.t30129.prototype.om$core$IRenderState$ = true;
om_tube_tracker.core.t30129.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30132){var self__ = this;
var map__30133 = p__30132;var map__30133__$1 = ((cljs.core.seq_QMARK_.call(null,map__30133))?cljs.core.apply.call(null,cljs.core.hash_map,map__30133):map__30133);var chans = cljs.core.get.call(null,map__30133__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,{"className": "network"},om.core.build_all.call(null,om_tube_tracker.core.network_view,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"tube-data","tube-data",3565156549).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null))),om.core.build.call(null,om_tube_tracker.core.predictions_view,new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null)));
});
om_tube_tracker.core.t30129.prototype.om$core$IWillMount$ = true;
om_tube_tracker.core.t30129.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var current_station = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"current-station","current-station",2422672466)], null));var ajax_resp = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.Keyword(null,"ajax-resp","ajax-resp",1212879567)], null));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_30156){var state_val_30157 = (state_30156[1]);if((state_val_30157 === 8))
{var inst_30143 = (state_30156[2]);var inst_30144 = cljs.reader.read_string.call(null,inst_30143);var inst_30145 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347),inst_30144);var inst_30146 = cljs.core.deref.call(null,self__.app);var inst_30147 = new cljs.core.Keyword(null,"selected-stations","selected-stations",3205261347).cljs$core$IFn$_invoke$arity$1(inst_30146);var inst_30148 = cljs.core.println.call(null,inst_30147);var state_30156__$1 = (function (){var statearr_30158 = state_30156;(statearr_30158[7] = inst_30145);
(statearr_30158[8] = inst_30148);
return statearr_30158;
})();var statearr_30159_30172 = state_30156__$1;(statearr_30159_30172[2] = null);
(statearr_30159_30172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30157 === 7))
{var inst_30137 = (state_30156[2]);var inst_30138 = new cljs.core.Keyword(null,"line-nick","line-nick",3466450190).cljs$core$IFn$_invoke$arity$1(inst_30137);var inst_30139 = new cljs.core.Keyword(null,"station-nick","station-nick",826624974).cljs$core$IFn$_invoke$arity$1(inst_30137);var inst_30140 = om_tube_tracker.core.build_req_url.call(null,inst_30138,inst_30139);var inst_30141 = om_tube_tracker.core.GETS.call(null,inst_30140,ajax_resp);var state_30156__$1 = state_30156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30156__$1,8,inst_30141);
} else
{if((state_val_30157 === 6))
{var inst_30152 = (state_30156[2]);var state_30156__$1 = state_30156;var statearr_30160_30173 = state_30156__$1;(statearr_30160_30173[2] = inst_30152);
(statearr_30160_30173[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30157 === 5))
{var state_30156__$1 = state_30156;var statearr_30161_30174 = state_30156__$1;(statearr_30161_30174[2] = null);
(statearr_30161_30174[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30157 === 4))
{var state_30156__$1 = state_30156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30156__$1,7,current_station);
} else
{if((state_val_30157 === 3))
{var inst_30154 = (state_30156[2]);var state_30156__$1 = state_30156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30156__$1,inst_30154);
} else
{if((state_val_30157 === 2))
{var state_30156__$1 = state_30156;if(true)
{var statearr_30162_30175 = state_30156__$1;(statearr_30162_30175[1] = 4);
} else
{var statearr_30163_30176 = state_30156__$1;(statearr_30163_30176[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30157 === 1))
{var state_30156__$1 = state_30156;var statearr_30164_30177 = state_30156__$1;(statearr_30164_30177[2] = null);
(statearr_30164_30177[1] = 2);
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
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_30168 = [null,null,null,null,null,null,null,null,null];(statearr_30168[0] = state_machine__6178__auto__);
(statearr_30168[1] = 1);
return statearr_30168;
});
var state_machine__6178__auto____1 = (function (state_30156){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_30156);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e30169){if((e30169 instanceof Object))
{var ex__6181__auto__ = e30169;var statearr_30170_30178 = state_30156;(statearr_30170_30178[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30156);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30179 = state_30156;
state_30156 = G__30179;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_30156){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_30156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_30171 = f__6193__auto__.call(null);(statearr_30171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_30171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
om_tube_tracker.core.t30129.prototype.om$core$IInitState$ = true;
om_tube_tracker.core.t30129.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-station","current-station",2422672466),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"ajax-resp","ajax-resp",1212879567),cljs.core.async.chan.call(null)], null)], null);
});
om_tube_tracker.core.t30129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30131){var self__ = this;
var _30131__$1 = this;return self__.meta30130;
});
om_tube_tracker.core.t30129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30131,meta30130__$1){var self__ = this;
var _30131__$1 = this;return (new om_tube_tracker.core.t30129(self__.owner,self__.app,self__.app_view,meta30130__$1));
});
om_tube_tracker.core.__GT_t30129 = (function __GT_t30129(owner__$1,app__$1,app_view__$1,meta30130){return (new om_tube_tracker.core.t30129(owner__$1,app__$1,app_view__$1,meta30130));
});
}
return (new om_tube_tracker.core.t30129(owner,app,app_view,null));
});
om.core.root.call(null,om_tube_tracker.core.app_view,om_tube_tracker.core.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map