// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t177669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t177669 = (function (f,fn_handler,meta177670){
this.f = f;
this.fn_handler = fn_handler;
this.meta177670 = meta177670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t177669.cljs$lang$type = true;
cljs.core.async.t177669.cljs$lang$ctorStr = "cljs.core.async/t177669";
cljs.core.async.t177669.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t177669");
});
cljs.core.async.t177669.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t177669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t177669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t177669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_177671){var self__ = this;
var _177671__$1 = this;return self__.meta177670;
});
cljs.core.async.t177669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_177671,meta177670__$1){var self__ = this;
var _177671__$1 = this;return (new cljs.core.async.t177669(self__.f,self__.fn_handler,meta177670__$1));
});
cljs.core.async.__GT_t177669 = (function __GT_t177669(f__$1,fn_handler__$1,meta177670){return (new cljs.core.async.t177669(f__$1,fn_handler__$1,meta177670));
});
}
return (new cljs.core.async.t177669(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__177673 = buff;if(G__177673)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__177673.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__177673.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__177673);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__177673);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_177674 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_177674);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_177674);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___177675 = n;var x_177676 = 0;while(true){
if((x_177676 < n__4291__auto___177675))
{(a[x_177676] = 0);
{
var G__177677 = (x_177676 + 1);
x_177676 = G__177677;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__177678 = (i + 1);
i = G__177678;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t177682 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t177682 = (function (flag,alt_flag,meta177683){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta177683 = meta177683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t177682.cljs$lang$type = true;
cljs.core.async.t177682.cljs$lang$ctorStr = "cljs.core.async/t177682";
cljs.core.async.t177682.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t177682");
});
cljs.core.async.t177682.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t177682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t177682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t177682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_177684){var self__ = this;
var _177684__$1 = this;return self__.meta177683;
});
cljs.core.async.t177682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_177684,meta177683__$1){var self__ = this;
var _177684__$1 = this;return (new cljs.core.async.t177682(self__.flag,self__.alt_flag,meta177683__$1));
});
cljs.core.async.__GT_t177682 = (function __GT_t177682(flag__$1,alt_flag__$1,meta177683){return (new cljs.core.async.t177682(flag__$1,alt_flag__$1,meta177683));
});
}
return (new cljs.core.async.t177682(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t177688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t177688 = (function (cb,flag,alt_handler,meta177689){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta177689 = meta177689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t177688.cljs$lang$type = true;
cljs.core.async.t177688.cljs$lang$ctorStr = "cljs.core.async/t177688";
cljs.core.async.t177688.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t177688");
});
cljs.core.async.t177688.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t177688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t177688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t177688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_177690){var self__ = this;
var _177690__$1 = this;return self__.meta177689;
});
cljs.core.async.t177688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_177690,meta177689__$1){var self__ = this;
var _177690__$1 = this;return (new cljs.core.async.t177688(self__.cb,self__.flag,self__.alt_handler,meta177689__$1));
});
cljs.core.async.__GT_t177688 = (function __GT_t177688(cb__$1,flag__$1,alt_handler__$1,meta177689){return (new cljs.core.async.t177688(cb__$1,flag__$1,alt_handler__$1,meta177689));
});
}
return (new cljs.core.async.t177688(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__177691_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__177691_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__177692 = (i + 1);
i = G__177692;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__177693){var map__177695 = p__177693;var map__177695__$1 = ((cljs.core.seq_QMARK_.call(null,map__177695))?cljs.core.apply.call(null,cljs.core.hash_map,map__177695):map__177695);var opts = map__177695__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__177693 = null;if (arguments.length > 1) {
  p__177693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__177693);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__177696){
var ports = cljs.core.first(arglist__177696);
var p__177693 = cljs.core.rest(arglist__177696);
return alts_BANG___delegate(ports,p__177693);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t177704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t177704 = (function (ch,f,map_LT_,meta177705){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta177705 = meta177705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t177704.cljs$lang$type = true;
cljs.core.async.t177704.cljs$lang$ctorStr = "cljs.core.async/t177704";
cljs.core.async.t177704.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t177704");
});
cljs.core.async.t177704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t177704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t177704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t177704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t177707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t177707 = (function (fn1,_,meta177705,ch,f,map_LT_,meta177708){
this.fn1 = fn1;
this._ = _;
this.meta177705 = meta177705;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta177708 = meta177708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t177707.cljs$lang$type = true;
cljs.core.async.t177707.cljs$lang$ctorStr = "cljs.core.async/t177707";
cljs.core.async.t177707.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t177707");
});
cljs.core.async.t177707.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t177707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t177707.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t177707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__177697_SHARP_){return f1.call(null,(((p1__177697_SHARP_ == null))?null:self__.f.call(null,p1__177697_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t177707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_177709){var self__ = this;
var _177709__$1 = this;return self__.meta177708;
});
cljs.core.async.t177707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_177709,meta177708__$1){var self__ = this;
var _177709__$1 = this;return (new cljs.core.async.t177707(self__.fn1,self__._,self__.meta177705,self__.ch,self__.f,self__.map_LT_,meta177708__$1));
});
cljs.core.async.__GT_t177707 = (function __GT_t177707(fn1__$1,___$2,meta177705__$1,ch__$2,f__$2,map_LT___$2,meta177708){return (new cljs.core.async.t177707(fn1__$1,___$2,meta177705__$1,ch__$2,f__$2,map_LT___$2,meta177708));
});
}
return (new cljs.core.async.t177707(fn1,___$1,self__.meta177705,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t177704.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t177704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t177704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_177706){var self__ = this;
var _177706__$1 = this;return self__.meta177705;
});
cljs.core.async.t177704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_177706,meta177705__$1){var self__ = this;
var _177706__$1 = this;return (new cljs.core.async.t177704(self__.ch,self__.f,self__.map_LT_,meta177705__$1));
});
cljs.core.async.__GT_t177704 = (function __GT_t177704(ch__$1,f__$1,map_LT___$1,meta177705){return (new cljs.core.async.t177704(ch__$1,f__$1,map_LT___$1,meta177705));
});
}
return (new cljs.core.async.t177704(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t177713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t177713 = (function (ch,f,map_GT_,meta177714){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta177714 = meta177714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t177713.cljs$lang$type = true;
cljs.core.async.t177713.cljs$lang$ctorStr = "cljs.core.async/t177713";
cljs.core.async.t177713.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t177713");
});
cljs.core.async.t177713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t177713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t177713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t177713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t177713.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t177713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t177713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_177715){var self__ = this;
var _177715__$1 = this;return self__.meta177714;
});
cljs.core.async.t177713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_177715,meta177714__$1){var self__ = this;
var _177715__$1 = this;return (new cljs.core.async.t177713(self__.ch,self__.f,self__.map_GT_,meta177714__$1));
});
cljs.core.async.__GT_t177713 = (function __GT_t177713(ch__$1,f__$1,map_GT___$1,meta177714){return (new cljs.core.async.t177713(ch__$1,f__$1,map_GT___$1,meta177714));
});
}
return (new cljs.core.async.t177713(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t177719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t177719 = (function (ch,p,filter_GT_,meta177720){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta177720 = meta177720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t177719.cljs$lang$type = true;
cljs.core.async.t177719.cljs$lang$ctorStr = "cljs.core.async/t177719";
cljs.core.async.t177719.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t177719");
});
cljs.core.async.t177719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t177719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t177719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t177719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t177719.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t177719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t177719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_177721){var self__ = this;
var _177721__$1 = this;return self__.meta177720;
});
cljs.core.async.t177719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_177721,meta177720__$1){var self__ = this;
var _177721__$1 = this;return (new cljs.core.async.t177719(self__.ch,self__.p,self__.filter_GT_,meta177720__$1));
});
cljs.core.async.__GT_t177719 = (function __GT_t177719(ch__$1,p__$1,filter_GT___$1,meta177720){return (new cljs.core.async.t177719(ch__$1,p__$1,filter_GT___$1,meta177720));
});
}
return (new cljs.core.async.t177719(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___177804 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_177783){var state_val_177784 = (state_177783[1]);if((state_val_177784 === 1))
{var state_177783__$1 = state_177783;var statearr_177785_177805 = state_177783__$1;(statearr_177785_177805[2] = null);
(statearr_177785_177805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177784 === 2))
{var state_177783__$1 = state_177783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_177783__$1,4,ch);
} else
{if((state_val_177784 === 3))
{var inst_177781 = (state_177783[2]);var state_177783__$1 = state_177783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_177783__$1,inst_177781);
} else
{if((state_val_177784 === 4))
{var inst_177765 = (state_177783[7]);var inst_177765__$1 = (state_177783[2]);var inst_177766 = (inst_177765__$1 == null);var state_177783__$1 = (function (){var statearr_177786 = state_177783;(statearr_177786[7] = inst_177765__$1);
return statearr_177786;
})();if(cljs.core.truth_(inst_177766))
{var statearr_177787_177806 = state_177783__$1;(statearr_177787_177806[1] = 5);
} else
{var statearr_177788_177807 = state_177783__$1;(statearr_177788_177807[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177784 === 5))
{var inst_177768 = cljs.core.async.close_BANG_.call(null,out);var state_177783__$1 = state_177783;var statearr_177789_177808 = state_177783__$1;(statearr_177789_177808[2] = inst_177768);
(statearr_177789_177808[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177784 === 6))
{var inst_177765 = (state_177783[7]);var inst_177770 = p.call(null,inst_177765);var state_177783__$1 = state_177783;if(cljs.core.truth_(inst_177770))
{var statearr_177790_177809 = state_177783__$1;(statearr_177790_177809[1] = 8);
} else
{var statearr_177791_177810 = state_177783__$1;(statearr_177791_177810[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177784 === 7))
{var inst_177779 = (state_177783[2]);var state_177783__$1 = state_177783;var statearr_177792_177811 = state_177783__$1;(statearr_177792_177811[2] = inst_177779);
(statearr_177792_177811[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177784 === 8))
{var inst_177765 = (state_177783[7]);var state_177783__$1 = state_177783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_177783__$1,11,out,inst_177765);
} else
{if((state_val_177784 === 9))
{var state_177783__$1 = state_177783;var statearr_177793_177812 = state_177783__$1;(statearr_177793_177812[2] = null);
(statearr_177793_177812[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177784 === 10))
{var inst_177776 = (state_177783[2]);var state_177783__$1 = (function (){var statearr_177794 = state_177783;(statearr_177794[8] = inst_177776);
return statearr_177794;
})();var statearr_177795_177813 = state_177783__$1;(statearr_177795_177813[2] = null);
(statearr_177795_177813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177784 === 11))
{var inst_177773 = (state_177783[2]);var state_177783__$1 = state_177783;var statearr_177796_177814 = state_177783__$1;(statearr_177796_177814[2] = inst_177773);
(statearr_177796_177814[1] = 10);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_177800 = [null,null,null,null,null,null,null,null,null];(statearr_177800[0] = state_machine__6178__auto__);
(statearr_177800[1] = 1);
return statearr_177800;
});
var state_machine__6178__auto____1 = (function (state_177783){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_177783);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e177801){if((e177801 instanceof Object))
{var ex__6181__auto__ = e177801;var statearr_177802_177815 = state_177783;(statearr_177802_177815[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_177783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e177801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__177816 = state_177783;
state_177783 = G__177816;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_177783){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_177783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_177803 = f__6193__auto__.call(null);(statearr_177803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___177804);
return statearr_177803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_177968){var state_val_177969 = (state_177968[1]);if((state_val_177969 === 1))
{var state_177968__$1 = state_177968;var statearr_177970_178007 = state_177968__$1;(statearr_177970_178007[2] = null);
(statearr_177970_178007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 2))
{var state_177968__$1 = state_177968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_177968__$1,4,in$);
} else
{if((state_val_177969 === 3))
{var inst_177966 = (state_177968[2]);var state_177968__$1 = state_177968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_177968__$1,inst_177966);
} else
{if((state_val_177969 === 4))
{var inst_177914 = (state_177968[7]);var inst_177914__$1 = (state_177968[2]);var inst_177915 = (inst_177914__$1 == null);var state_177968__$1 = (function (){var statearr_177971 = state_177968;(statearr_177971[7] = inst_177914__$1);
return statearr_177971;
})();if(cljs.core.truth_(inst_177915))
{var statearr_177972_178008 = state_177968__$1;(statearr_177972_178008[1] = 5);
} else
{var statearr_177973_178009 = state_177968__$1;(statearr_177973_178009[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 5))
{var inst_177917 = cljs.core.async.close_BANG_.call(null,out);var state_177968__$1 = state_177968;var statearr_177974_178010 = state_177968__$1;(statearr_177974_178010[2] = inst_177917);
(statearr_177974_178010[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 6))
{var inst_177914 = (state_177968[7]);var inst_177919 = f.call(null,inst_177914);var inst_177924 = cljs.core.seq.call(null,inst_177919);var inst_177925 = inst_177924;var inst_177926 = null;var inst_177927 = 0;var inst_177928 = 0;var state_177968__$1 = (function (){var statearr_177975 = state_177968;(statearr_177975[8] = inst_177927);
(statearr_177975[9] = inst_177928);
(statearr_177975[10] = inst_177925);
(statearr_177975[11] = inst_177926);
return statearr_177975;
})();var statearr_177976_178011 = state_177968__$1;(statearr_177976_178011[2] = null);
(statearr_177976_178011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 7))
{var inst_177964 = (state_177968[2]);var state_177968__$1 = state_177968;var statearr_177977_178012 = state_177968__$1;(statearr_177977_178012[2] = inst_177964);
(statearr_177977_178012[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 8))
{var inst_177927 = (state_177968[8]);var inst_177928 = (state_177968[9]);var inst_177930 = (inst_177928 < inst_177927);var inst_177931 = inst_177930;var state_177968__$1 = state_177968;if(cljs.core.truth_(inst_177931))
{var statearr_177978_178013 = state_177968__$1;(statearr_177978_178013[1] = 10);
} else
{var statearr_177979_178014 = state_177968__$1;(statearr_177979_178014[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 9))
{var inst_177961 = (state_177968[2]);var state_177968__$1 = (function (){var statearr_177980 = state_177968;(statearr_177980[12] = inst_177961);
return statearr_177980;
})();var statearr_177981_178015 = state_177968__$1;(statearr_177981_178015[2] = null);
(statearr_177981_178015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 10))
{var inst_177928 = (state_177968[9]);var inst_177926 = (state_177968[11]);var inst_177933 = cljs.core._nth.call(null,inst_177926,inst_177928);var state_177968__$1 = state_177968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_177968__$1,13,out,inst_177933);
} else
{if((state_val_177969 === 11))
{var inst_177925 = (state_177968[10]);var inst_177939 = (state_177968[13]);var inst_177939__$1 = cljs.core.seq.call(null,inst_177925);var state_177968__$1 = (function (){var statearr_177985 = state_177968;(statearr_177985[13] = inst_177939__$1);
return statearr_177985;
})();if(inst_177939__$1)
{var statearr_177986_178016 = state_177968__$1;(statearr_177986_178016[1] = 14);
} else
{var statearr_177987_178017 = state_177968__$1;(statearr_177987_178017[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 12))
{var inst_177959 = (state_177968[2]);var state_177968__$1 = state_177968;var statearr_177988_178018 = state_177968__$1;(statearr_177988_178018[2] = inst_177959);
(statearr_177988_178018[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 13))
{var inst_177927 = (state_177968[8]);var inst_177928 = (state_177968[9]);var inst_177925 = (state_177968[10]);var inst_177926 = (state_177968[11]);var inst_177935 = (state_177968[2]);var inst_177936 = (inst_177928 + 1);var tmp177982 = inst_177927;var tmp177983 = inst_177925;var tmp177984 = inst_177926;var inst_177925__$1 = tmp177983;var inst_177926__$1 = tmp177984;var inst_177927__$1 = tmp177982;var inst_177928__$1 = inst_177936;var state_177968__$1 = (function (){var statearr_177989 = state_177968;(statearr_177989[8] = inst_177927__$1);
(statearr_177989[9] = inst_177928__$1);
(statearr_177989[10] = inst_177925__$1);
(statearr_177989[11] = inst_177926__$1);
(statearr_177989[14] = inst_177935);
return statearr_177989;
})();var statearr_177990_178019 = state_177968__$1;(statearr_177990_178019[2] = null);
(statearr_177990_178019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 14))
{var inst_177939 = (state_177968[13]);var inst_177941 = cljs.core.chunked_seq_QMARK_.call(null,inst_177939);var state_177968__$1 = state_177968;if(inst_177941)
{var statearr_177991_178020 = state_177968__$1;(statearr_177991_178020[1] = 17);
} else
{var statearr_177992_178021 = state_177968__$1;(statearr_177992_178021[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 15))
{var state_177968__$1 = state_177968;var statearr_177993_178022 = state_177968__$1;(statearr_177993_178022[2] = null);
(statearr_177993_178022[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 16))
{var inst_177957 = (state_177968[2]);var state_177968__$1 = state_177968;var statearr_177994_178023 = state_177968__$1;(statearr_177994_178023[2] = inst_177957);
(statearr_177994_178023[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 17))
{var inst_177939 = (state_177968[13]);var inst_177943 = cljs.core.chunk_first.call(null,inst_177939);var inst_177944 = cljs.core.chunk_rest.call(null,inst_177939);var inst_177945 = cljs.core.count.call(null,inst_177943);var inst_177925 = inst_177944;var inst_177926 = inst_177943;var inst_177927 = inst_177945;var inst_177928 = 0;var state_177968__$1 = (function (){var statearr_177995 = state_177968;(statearr_177995[8] = inst_177927);
(statearr_177995[9] = inst_177928);
(statearr_177995[10] = inst_177925);
(statearr_177995[11] = inst_177926);
return statearr_177995;
})();var statearr_177996_178024 = state_177968__$1;(statearr_177996_178024[2] = null);
(statearr_177996_178024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 18))
{var inst_177939 = (state_177968[13]);var inst_177948 = cljs.core.first.call(null,inst_177939);var state_177968__$1 = state_177968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_177968__$1,20,out,inst_177948);
} else
{if((state_val_177969 === 19))
{var inst_177954 = (state_177968[2]);var state_177968__$1 = state_177968;var statearr_177997_178025 = state_177968__$1;(statearr_177997_178025[2] = inst_177954);
(statearr_177997_178025[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_177969 === 20))
{var inst_177939 = (state_177968[13]);var inst_177950 = (state_177968[2]);var inst_177951 = cljs.core.next.call(null,inst_177939);var inst_177925 = inst_177951;var inst_177926 = null;var inst_177927 = 0;var inst_177928 = 0;var state_177968__$1 = (function (){var statearr_177998 = state_177968;(statearr_177998[8] = inst_177927);
(statearr_177998[15] = inst_177950);
(statearr_177998[9] = inst_177928);
(statearr_177998[10] = inst_177925);
(statearr_177998[11] = inst_177926);
return statearr_177998;
})();var statearr_177999_178026 = state_177968__$1;(statearr_177999_178026[2] = null);
(statearr_177999_178026[1] = 8);
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
}
}
}
}
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
var state_machine__6178__auto____0 = (function (){var statearr_178003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_178003[0] = state_machine__6178__auto__);
(statearr_178003[1] = 1);
return statearr_178003;
});
var state_machine__6178__auto____1 = (function (state_177968){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_177968);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e178004){if((e178004 instanceof Object))
{var ex__6181__auto__ = e178004;var statearr_178005_178027 = state_177968;(statearr_178005_178027[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_177968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178004;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178028 = state_177968;
state_177968 = G__178028;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_177968){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_177968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_178006 = f__6193__auto__.call(null);(statearr_178006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_178006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___178109 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_178088){var state_val_178089 = (state_178088[1]);if((state_val_178089 === 1))
{var state_178088__$1 = state_178088;var statearr_178090_178110 = state_178088__$1;(statearr_178090_178110[2] = null);
(statearr_178090_178110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178089 === 2))
{var state_178088__$1 = state_178088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_178088__$1,4,from);
} else
{if((state_val_178089 === 3))
{var inst_178086 = (state_178088[2]);var state_178088__$1 = state_178088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_178088__$1,inst_178086);
} else
{if((state_val_178089 === 4))
{var inst_178071 = (state_178088[7]);var inst_178071__$1 = (state_178088[2]);var inst_178072 = (inst_178071__$1 == null);var state_178088__$1 = (function (){var statearr_178091 = state_178088;(statearr_178091[7] = inst_178071__$1);
return statearr_178091;
})();if(cljs.core.truth_(inst_178072))
{var statearr_178092_178111 = state_178088__$1;(statearr_178092_178111[1] = 5);
} else
{var statearr_178093_178112 = state_178088__$1;(statearr_178093_178112[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178089 === 5))
{var state_178088__$1 = state_178088;if(cljs.core.truth_(close_QMARK_))
{var statearr_178094_178113 = state_178088__$1;(statearr_178094_178113[1] = 8);
} else
{var statearr_178095_178114 = state_178088__$1;(statearr_178095_178114[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178089 === 6))
{var inst_178071 = (state_178088[7]);var state_178088__$1 = state_178088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_178088__$1,11,to,inst_178071);
} else
{if((state_val_178089 === 7))
{var inst_178084 = (state_178088[2]);var state_178088__$1 = state_178088;var statearr_178096_178115 = state_178088__$1;(statearr_178096_178115[2] = inst_178084);
(statearr_178096_178115[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178089 === 8))
{var inst_178075 = cljs.core.async.close_BANG_.call(null,to);var state_178088__$1 = state_178088;var statearr_178097_178116 = state_178088__$1;(statearr_178097_178116[2] = inst_178075);
(statearr_178097_178116[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178089 === 9))
{var state_178088__$1 = state_178088;var statearr_178098_178117 = state_178088__$1;(statearr_178098_178117[2] = null);
(statearr_178098_178117[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178089 === 10))
{var inst_178078 = (state_178088[2]);var state_178088__$1 = state_178088;var statearr_178099_178118 = state_178088__$1;(statearr_178099_178118[2] = inst_178078);
(statearr_178099_178118[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178089 === 11))
{var inst_178081 = (state_178088[2]);var state_178088__$1 = (function (){var statearr_178100 = state_178088;(statearr_178100[8] = inst_178081);
return statearr_178100;
})();var statearr_178101_178119 = state_178088__$1;(statearr_178101_178119[2] = null);
(statearr_178101_178119[1] = 2);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_178105 = [null,null,null,null,null,null,null,null,null];(statearr_178105[0] = state_machine__6178__auto__);
(statearr_178105[1] = 1);
return statearr_178105;
});
var state_machine__6178__auto____1 = (function (state_178088){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_178088);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e178106){if((e178106 instanceof Object))
{var ex__6181__auto__ = e178106;var statearr_178107_178120 = state_178088;(statearr_178107_178120[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178088);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178121 = state_178088;
state_178088 = G__178121;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_178088){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_178088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_178108 = f__6193__auto__.call(null);(statearr_178108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___178109);
return statearr_178108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___178208 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_178186){var state_val_178187 = (state_178186[1]);if((state_val_178187 === 1))
{var state_178186__$1 = state_178186;var statearr_178188_178209 = state_178186__$1;(statearr_178188_178209[2] = null);
(statearr_178188_178209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178187 === 2))
{var state_178186__$1 = state_178186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_178186__$1,4,ch);
} else
{if((state_val_178187 === 3))
{var inst_178184 = (state_178186[2]);var state_178186__$1 = state_178186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_178186__$1,inst_178184);
} else
{if((state_val_178187 === 4))
{var inst_178167 = (state_178186[7]);var inst_178167__$1 = (state_178186[2]);var inst_178168 = (inst_178167__$1 == null);var state_178186__$1 = (function (){var statearr_178189 = state_178186;(statearr_178189[7] = inst_178167__$1);
return statearr_178189;
})();if(cljs.core.truth_(inst_178168))
{var statearr_178190_178210 = state_178186__$1;(statearr_178190_178210[1] = 5);
} else
{var statearr_178191_178211 = state_178186__$1;(statearr_178191_178211[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178187 === 5))
{var inst_178170 = cljs.core.async.close_BANG_.call(null,tc);var inst_178171 = cljs.core.async.close_BANG_.call(null,fc);var state_178186__$1 = (function (){var statearr_178192 = state_178186;(statearr_178192[8] = inst_178170);
return statearr_178192;
})();var statearr_178193_178212 = state_178186__$1;(statearr_178193_178212[2] = inst_178171);
(statearr_178193_178212[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178187 === 6))
{var inst_178167 = (state_178186[7]);var inst_178173 = p.call(null,inst_178167);var state_178186__$1 = state_178186;if(cljs.core.truth_(inst_178173))
{var statearr_178194_178213 = state_178186__$1;(statearr_178194_178213[1] = 9);
} else
{var statearr_178195_178214 = state_178186__$1;(statearr_178195_178214[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178187 === 7))
{var inst_178182 = (state_178186[2]);var state_178186__$1 = state_178186;var statearr_178196_178215 = state_178186__$1;(statearr_178196_178215[2] = inst_178182);
(statearr_178196_178215[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178187 === 8))
{var inst_178179 = (state_178186[2]);var state_178186__$1 = (function (){var statearr_178197 = state_178186;(statearr_178197[9] = inst_178179);
return statearr_178197;
})();var statearr_178198_178216 = state_178186__$1;(statearr_178198_178216[2] = null);
(statearr_178198_178216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178187 === 9))
{var state_178186__$1 = state_178186;var statearr_178199_178217 = state_178186__$1;(statearr_178199_178217[2] = tc);
(statearr_178199_178217[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178187 === 10))
{var state_178186__$1 = state_178186;var statearr_178200_178218 = state_178186__$1;(statearr_178200_178218[2] = fc);
(statearr_178200_178218[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178187 === 11))
{var inst_178167 = (state_178186[7]);var inst_178177 = (state_178186[2]);var state_178186__$1 = state_178186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_178186__$1,8,inst_178177,inst_178167);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_178204 = [null,null,null,null,null,null,null,null,null,null];(statearr_178204[0] = state_machine__6178__auto__);
(statearr_178204[1] = 1);
return statearr_178204;
});
var state_machine__6178__auto____1 = (function (state_178186){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_178186);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e178205){if((e178205 instanceof Object))
{var ex__6181__auto__ = e178205;var statearr_178206_178219 = state_178186;(statearr_178206_178219[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178220 = state_178186;
state_178186 = G__178220;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_178186){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_178186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_178207 = f__6193__auto__.call(null);(statearr_178207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___178208);
return statearr_178207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_178267){var state_val_178268 = (state_178267[1]);if((state_val_178268 === 7))
{var inst_178263 = (state_178267[2]);var state_178267__$1 = state_178267;var statearr_178269_178285 = state_178267__$1;(statearr_178269_178285[2] = inst_178263);
(statearr_178269_178285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178268 === 6))
{var inst_178256 = (state_178267[7]);var inst_178253 = (state_178267[8]);var inst_178260 = f.call(null,inst_178253,inst_178256);var inst_178253__$1 = inst_178260;var state_178267__$1 = (function (){var statearr_178270 = state_178267;(statearr_178270[8] = inst_178253__$1);
return statearr_178270;
})();var statearr_178271_178286 = state_178267__$1;(statearr_178271_178286[2] = null);
(statearr_178271_178286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178268 === 5))
{var inst_178253 = (state_178267[8]);var state_178267__$1 = state_178267;var statearr_178272_178287 = state_178267__$1;(statearr_178272_178287[2] = inst_178253);
(statearr_178272_178287[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178268 === 4))
{var inst_178256 = (state_178267[7]);var inst_178256__$1 = (state_178267[2]);var inst_178257 = (inst_178256__$1 == null);var state_178267__$1 = (function (){var statearr_178273 = state_178267;(statearr_178273[7] = inst_178256__$1);
return statearr_178273;
})();if(cljs.core.truth_(inst_178257))
{var statearr_178274_178288 = state_178267__$1;(statearr_178274_178288[1] = 5);
} else
{var statearr_178275_178289 = state_178267__$1;(statearr_178275_178289[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178268 === 3))
{var inst_178265 = (state_178267[2]);var state_178267__$1 = state_178267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_178267__$1,inst_178265);
} else
{if((state_val_178268 === 2))
{var state_178267__$1 = state_178267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_178267__$1,4,ch);
} else
{if((state_val_178268 === 1))
{var inst_178253 = init;var state_178267__$1 = (function (){var statearr_178276 = state_178267;(statearr_178276[8] = inst_178253);
return statearr_178276;
})();var statearr_178277_178290 = state_178267__$1;(statearr_178277_178290[2] = null);
(statearr_178277_178290[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_178281 = [null,null,null,null,null,null,null,null,null];(statearr_178281[0] = state_machine__6178__auto__);
(statearr_178281[1] = 1);
return statearr_178281;
});
var state_machine__6178__auto____1 = (function (state_178267){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_178267);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e178282){if((e178282 instanceof Object))
{var ex__6181__auto__ = e178282;var statearr_178283_178291 = state_178267;(statearr_178283_178291[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178292 = state_178267;
state_178267 = G__178292;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_178267){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_178267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_178284 = f__6193__auto__.call(null);(statearr_178284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_178284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_178354){var state_val_178355 = (state_178354[1]);if((state_val_178355 === 1))
{var inst_178334 = cljs.core.seq.call(null,coll);var inst_178335 = inst_178334;var state_178354__$1 = (function (){var statearr_178356 = state_178354;(statearr_178356[7] = inst_178335);
return statearr_178356;
})();var statearr_178357_178375 = state_178354__$1;(statearr_178357_178375[2] = null);
(statearr_178357_178375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178355 === 2))
{var inst_178335 = (state_178354[7]);var state_178354__$1 = state_178354;if(cljs.core.truth_(inst_178335))
{var statearr_178358_178376 = state_178354__$1;(statearr_178358_178376[1] = 4);
} else
{var statearr_178359_178377 = state_178354__$1;(statearr_178359_178377[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178355 === 3))
{var inst_178352 = (state_178354[2]);var state_178354__$1 = state_178354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_178354__$1,inst_178352);
} else
{if((state_val_178355 === 4))
{var inst_178335 = (state_178354[7]);var inst_178338 = cljs.core.first.call(null,inst_178335);var state_178354__$1 = state_178354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_178354__$1,7,ch,inst_178338);
} else
{if((state_val_178355 === 5))
{var state_178354__$1 = state_178354;if(cljs.core.truth_(close_QMARK_))
{var statearr_178360_178378 = state_178354__$1;(statearr_178360_178378[1] = 8);
} else
{var statearr_178361_178379 = state_178354__$1;(statearr_178361_178379[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178355 === 6))
{var inst_178350 = (state_178354[2]);var state_178354__$1 = state_178354;var statearr_178362_178380 = state_178354__$1;(statearr_178362_178380[2] = inst_178350);
(statearr_178362_178380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178355 === 7))
{var inst_178335 = (state_178354[7]);var inst_178340 = (state_178354[2]);var inst_178341 = cljs.core.next.call(null,inst_178335);var inst_178335__$1 = inst_178341;var state_178354__$1 = (function (){var statearr_178363 = state_178354;(statearr_178363[8] = inst_178340);
(statearr_178363[7] = inst_178335__$1);
return statearr_178363;
})();var statearr_178364_178381 = state_178354__$1;(statearr_178364_178381[2] = null);
(statearr_178364_178381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178355 === 8))
{var inst_178345 = cljs.core.async.close_BANG_.call(null,ch);var state_178354__$1 = state_178354;var statearr_178365_178382 = state_178354__$1;(statearr_178365_178382[2] = inst_178345);
(statearr_178365_178382[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178355 === 9))
{var state_178354__$1 = state_178354;var statearr_178366_178383 = state_178354__$1;(statearr_178366_178383[2] = null);
(statearr_178366_178383[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178355 === 10))
{var inst_178348 = (state_178354[2]);var state_178354__$1 = state_178354;var statearr_178367_178384 = state_178354__$1;(statearr_178367_178384[2] = inst_178348);
(statearr_178367_178384[1] = 6);
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
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_178371 = [null,null,null,null,null,null,null,null,null];(statearr_178371[0] = state_machine__6178__auto__);
(statearr_178371[1] = 1);
return statearr_178371;
});
var state_machine__6178__auto____1 = (function (state_178354){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_178354);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e178372){if((e178372 instanceof Object))
{var ex__6181__auto__ = e178372;var statearr_178373_178385 = state_178354;(statearr_178373_178385[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178354);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178386 = state_178354;
state_178354 = G__178386;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_178354){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_178354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_178374 = f__6193__auto__.call(null);(statearr_178374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_178374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj178388 = {};return obj178388;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj178390 = {};return obj178390;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t178614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t178614 = (function (cs,ch,mult,meta178615){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta178615 = meta178615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t178614.cljs$lang$type = true;
cljs.core.async.t178614.cljs$lang$ctorStr = "cljs.core.async/t178614";
cljs.core.async.t178614.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t178614");
});})(cs))
;
cljs.core.async.t178614.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t178614.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t178614.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t178614.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t178614.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t178614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t178614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_178616){var self__ = this;
var _178616__$1 = this;return self__.meta178615;
});})(cs))
;
cljs.core.async.t178614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_178616,meta178615__$1){var self__ = this;
var _178616__$1 = this;return (new cljs.core.async.t178614(self__.cs,self__.ch,self__.mult,meta178615__$1));
});})(cs))
;
cljs.core.async.__GT_t178614 = ((function (cs){
return (function __GT_t178614(cs__$1,ch__$1,mult__$1,meta178615){return (new cljs.core.async.t178614(cs__$1,ch__$1,mult__$1,meta178615));
});})(cs))
;
}
return (new cljs.core.async.t178614(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___178837 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_178751){var state_val_178752 = (state_178751[1]);if((state_val_178752 === 32))
{var inst_178695 = (state_178751[7]);var inst_178619 = (state_178751[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_178751,31,Object,null,30);var inst_178702 = cljs.core.async.put_BANG_.call(null,inst_178695,inst_178619,done);var state_178751__$1 = state_178751;var statearr_178753_178838 = state_178751__$1;(statearr_178753_178838[2] = inst_178702);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178751__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 1))
{var state_178751__$1 = state_178751;var statearr_178754_178839 = state_178751__$1;(statearr_178754_178839[2] = null);
(statearr_178754_178839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 33))
{var inst_178708 = (state_178751[9]);var inst_178710 = cljs.core.chunked_seq_QMARK_.call(null,inst_178708);var state_178751__$1 = state_178751;if(inst_178710)
{var statearr_178755_178840 = state_178751__$1;(statearr_178755_178840[1] = 36);
} else
{var statearr_178756_178841 = state_178751__$1;(statearr_178756_178841[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 2))
{var state_178751__$1 = state_178751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_178751__$1,4,ch);
} else
{if((state_val_178752 === 34))
{var state_178751__$1 = state_178751;var statearr_178757_178842 = state_178751__$1;(statearr_178757_178842[2] = null);
(statearr_178757_178842[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 3))
{var inst_178749 = (state_178751[2]);var state_178751__$1 = state_178751;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_178751__$1,inst_178749);
} else
{if((state_val_178752 === 35))
{var inst_178733 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178758_178843 = state_178751__$1;(statearr_178758_178843[2] = inst_178733);
(statearr_178758_178843[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 4))
{var inst_178619 = (state_178751[8]);var inst_178619__$1 = (state_178751[2]);var inst_178620 = (inst_178619__$1 == null);var state_178751__$1 = (function (){var statearr_178759 = state_178751;(statearr_178759[8] = inst_178619__$1);
return statearr_178759;
})();if(cljs.core.truth_(inst_178620))
{var statearr_178760_178844 = state_178751__$1;(statearr_178760_178844[1] = 5);
} else
{var statearr_178761_178845 = state_178751__$1;(statearr_178761_178845[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 36))
{var inst_178708 = (state_178751[9]);var inst_178712 = cljs.core.chunk_first.call(null,inst_178708);var inst_178713 = cljs.core.chunk_rest.call(null,inst_178708);var inst_178714 = cljs.core.count.call(null,inst_178712);var inst_178687 = inst_178713;var inst_178688 = inst_178712;var inst_178689 = inst_178714;var inst_178690 = 0;var state_178751__$1 = (function (){var statearr_178762 = state_178751;(statearr_178762[10] = inst_178687);
(statearr_178762[11] = inst_178688);
(statearr_178762[12] = inst_178689);
(statearr_178762[13] = inst_178690);
return statearr_178762;
})();var statearr_178763_178846 = state_178751__$1;(statearr_178763_178846[2] = null);
(statearr_178763_178846[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 5))
{var inst_178626 = cljs.core.deref.call(null,cs);var inst_178627 = cljs.core.seq.call(null,inst_178626);var inst_178628 = inst_178627;var inst_178629 = null;var inst_178630 = 0;var inst_178631 = 0;var state_178751__$1 = (function (){var statearr_178764 = state_178751;(statearr_178764[14] = inst_178631);
(statearr_178764[15] = inst_178630);
(statearr_178764[16] = inst_178628);
(statearr_178764[17] = inst_178629);
return statearr_178764;
})();var statearr_178765_178847 = state_178751__$1;(statearr_178765_178847[2] = null);
(statearr_178765_178847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 37))
{var inst_178708 = (state_178751[9]);var inst_178717 = cljs.core.first.call(null,inst_178708);var state_178751__$1 = (function (){var statearr_178766 = state_178751;(statearr_178766[18] = inst_178717);
return statearr_178766;
})();var statearr_178767_178848 = state_178751__$1;(statearr_178767_178848[2] = null);
(statearr_178767_178848[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 6))
{var inst_178679 = (state_178751[19]);var inst_178678 = cljs.core.deref.call(null,cs);var inst_178679__$1 = cljs.core.keys.call(null,inst_178678);var inst_178680 = cljs.core.count.call(null,inst_178679__$1);var inst_178681 = cljs.core.reset_BANG_.call(null,dctr,inst_178680);var inst_178686 = cljs.core.seq.call(null,inst_178679__$1);var inst_178687 = inst_178686;var inst_178688 = null;var inst_178689 = 0;var inst_178690 = 0;var state_178751__$1 = (function (){var statearr_178768 = state_178751;(statearr_178768[20] = inst_178681);
(statearr_178768[10] = inst_178687);
(statearr_178768[11] = inst_178688);
(statearr_178768[12] = inst_178689);
(statearr_178768[13] = inst_178690);
(statearr_178768[19] = inst_178679__$1);
return statearr_178768;
})();var statearr_178769_178849 = state_178751__$1;(statearr_178769_178849[2] = null);
(statearr_178769_178849[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 38))
{var inst_178730 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178770_178850 = state_178751__$1;(statearr_178770_178850[2] = inst_178730);
(statearr_178770_178850[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 7))
{var inst_178747 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178771_178851 = state_178751__$1;(statearr_178771_178851[2] = inst_178747);
(statearr_178771_178851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 39))
{var inst_178708 = (state_178751[9]);var inst_178726 = (state_178751[2]);var inst_178727 = cljs.core.next.call(null,inst_178708);var inst_178687 = inst_178727;var inst_178688 = null;var inst_178689 = 0;var inst_178690 = 0;var state_178751__$1 = (function (){var statearr_178772 = state_178751;(statearr_178772[21] = inst_178726);
(statearr_178772[10] = inst_178687);
(statearr_178772[11] = inst_178688);
(statearr_178772[12] = inst_178689);
(statearr_178772[13] = inst_178690);
return statearr_178772;
})();var statearr_178773_178852 = state_178751__$1;(statearr_178773_178852[2] = null);
(statearr_178773_178852[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 8))
{var inst_178631 = (state_178751[14]);var inst_178630 = (state_178751[15]);var inst_178633 = (inst_178631 < inst_178630);var inst_178634 = inst_178633;var state_178751__$1 = state_178751;if(cljs.core.truth_(inst_178634))
{var statearr_178774_178853 = state_178751__$1;(statearr_178774_178853[1] = 10);
} else
{var statearr_178775_178854 = state_178751__$1;(statearr_178775_178854[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 40))
{var inst_178717 = (state_178751[18]);var inst_178718 = (state_178751[2]);var inst_178719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_178720 = cljs.core.async.untap_STAR_.call(null,m,inst_178717);var state_178751__$1 = (function (){var statearr_178776 = state_178751;(statearr_178776[22] = inst_178719);
(statearr_178776[23] = inst_178718);
return statearr_178776;
})();var statearr_178777_178855 = state_178751__$1;(statearr_178777_178855[2] = inst_178720);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178751__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 9))
{var inst_178676 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178778_178856 = state_178751__$1;(statearr_178778_178856[2] = inst_178676);
(statearr_178778_178856[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 41))
{var inst_178717 = (state_178751[18]);var inst_178619 = (state_178751[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_178751,40,Object,null,39);var inst_178724 = cljs.core.async.put_BANG_.call(null,inst_178717,inst_178619,done);var state_178751__$1 = state_178751;var statearr_178779_178857 = state_178751__$1;(statearr_178779_178857[2] = inst_178724);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178751__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 10))
{var inst_178631 = (state_178751[14]);var inst_178629 = (state_178751[17]);var inst_178637 = cljs.core._nth.call(null,inst_178629,inst_178631);var inst_178638 = cljs.core.nth.call(null,inst_178637,0,null);var inst_178639 = cljs.core.nth.call(null,inst_178637,1,null);var state_178751__$1 = (function (){var statearr_178780 = state_178751;(statearr_178780[24] = inst_178638);
return statearr_178780;
})();if(cljs.core.truth_(inst_178639))
{var statearr_178781_178858 = state_178751__$1;(statearr_178781_178858[1] = 13);
} else
{var statearr_178782_178859 = state_178751__$1;(statearr_178782_178859[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 42))
{var state_178751__$1 = state_178751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_178751__$1,45,dchan);
} else
{if((state_val_178752 === 11))
{var inst_178648 = (state_178751[25]);var inst_178628 = (state_178751[16]);var inst_178648__$1 = cljs.core.seq.call(null,inst_178628);var state_178751__$1 = (function (){var statearr_178783 = state_178751;(statearr_178783[25] = inst_178648__$1);
return statearr_178783;
})();if(inst_178648__$1)
{var statearr_178784_178860 = state_178751__$1;(statearr_178784_178860[1] = 16);
} else
{var statearr_178785_178861 = state_178751__$1;(statearr_178785_178861[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 43))
{var state_178751__$1 = state_178751;var statearr_178786_178862 = state_178751__$1;(statearr_178786_178862[2] = null);
(statearr_178786_178862[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 12))
{var inst_178674 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178787_178863 = state_178751__$1;(statearr_178787_178863[2] = inst_178674);
(statearr_178787_178863[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 44))
{var inst_178744 = (state_178751[2]);var state_178751__$1 = (function (){var statearr_178788 = state_178751;(statearr_178788[26] = inst_178744);
return statearr_178788;
})();var statearr_178789_178864 = state_178751__$1;(statearr_178789_178864[2] = null);
(statearr_178789_178864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 13))
{var inst_178638 = (state_178751[24]);var inst_178641 = cljs.core.async.close_BANG_.call(null,inst_178638);var state_178751__$1 = state_178751;var statearr_178790_178865 = state_178751__$1;(statearr_178790_178865[2] = inst_178641);
(statearr_178790_178865[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 45))
{var inst_178741 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178794_178866 = state_178751__$1;(statearr_178794_178866[2] = inst_178741);
(statearr_178794_178866[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 14))
{var state_178751__$1 = state_178751;var statearr_178795_178867 = state_178751__$1;(statearr_178795_178867[2] = null);
(statearr_178795_178867[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 15))
{var inst_178631 = (state_178751[14]);var inst_178630 = (state_178751[15]);var inst_178628 = (state_178751[16]);var inst_178629 = (state_178751[17]);var inst_178644 = (state_178751[2]);var inst_178645 = (inst_178631 + 1);var tmp178791 = inst_178630;var tmp178792 = inst_178628;var tmp178793 = inst_178629;var inst_178628__$1 = tmp178792;var inst_178629__$1 = tmp178793;var inst_178630__$1 = tmp178791;var inst_178631__$1 = inst_178645;var state_178751__$1 = (function (){var statearr_178796 = state_178751;(statearr_178796[14] = inst_178631__$1);
(statearr_178796[15] = inst_178630__$1);
(statearr_178796[27] = inst_178644);
(statearr_178796[16] = inst_178628__$1);
(statearr_178796[17] = inst_178629__$1);
return statearr_178796;
})();var statearr_178797_178868 = state_178751__$1;(statearr_178797_178868[2] = null);
(statearr_178797_178868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 16))
{var inst_178648 = (state_178751[25]);var inst_178650 = cljs.core.chunked_seq_QMARK_.call(null,inst_178648);var state_178751__$1 = state_178751;if(inst_178650)
{var statearr_178798_178869 = state_178751__$1;(statearr_178798_178869[1] = 19);
} else
{var statearr_178799_178870 = state_178751__$1;(statearr_178799_178870[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 17))
{var state_178751__$1 = state_178751;var statearr_178800_178871 = state_178751__$1;(statearr_178800_178871[2] = null);
(statearr_178800_178871[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 18))
{var inst_178672 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178801_178872 = state_178751__$1;(statearr_178801_178872[2] = inst_178672);
(statearr_178801_178872[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 19))
{var inst_178648 = (state_178751[25]);var inst_178652 = cljs.core.chunk_first.call(null,inst_178648);var inst_178653 = cljs.core.chunk_rest.call(null,inst_178648);var inst_178654 = cljs.core.count.call(null,inst_178652);var inst_178628 = inst_178653;var inst_178629 = inst_178652;var inst_178630 = inst_178654;var inst_178631 = 0;var state_178751__$1 = (function (){var statearr_178802 = state_178751;(statearr_178802[14] = inst_178631);
(statearr_178802[15] = inst_178630);
(statearr_178802[16] = inst_178628);
(statearr_178802[17] = inst_178629);
return statearr_178802;
})();var statearr_178803_178873 = state_178751__$1;(statearr_178803_178873[2] = null);
(statearr_178803_178873[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 20))
{var inst_178648 = (state_178751[25]);var inst_178658 = cljs.core.first.call(null,inst_178648);var inst_178659 = cljs.core.nth.call(null,inst_178658,0,null);var inst_178660 = cljs.core.nth.call(null,inst_178658,1,null);var state_178751__$1 = (function (){var statearr_178804 = state_178751;(statearr_178804[28] = inst_178659);
return statearr_178804;
})();if(cljs.core.truth_(inst_178660))
{var statearr_178805_178874 = state_178751__$1;(statearr_178805_178874[1] = 22);
} else
{var statearr_178806_178875 = state_178751__$1;(statearr_178806_178875[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 21))
{var inst_178669 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178807_178876 = state_178751__$1;(statearr_178807_178876[2] = inst_178669);
(statearr_178807_178876[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 22))
{var inst_178659 = (state_178751[28]);var inst_178662 = cljs.core.async.close_BANG_.call(null,inst_178659);var state_178751__$1 = state_178751;var statearr_178808_178877 = state_178751__$1;(statearr_178808_178877[2] = inst_178662);
(statearr_178808_178877[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 23))
{var state_178751__$1 = state_178751;var statearr_178809_178878 = state_178751__$1;(statearr_178809_178878[2] = null);
(statearr_178809_178878[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 24))
{var inst_178648 = (state_178751[25]);var inst_178665 = (state_178751[2]);var inst_178666 = cljs.core.next.call(null,inst_178648);var inst_178628 = inst_178666;var inst_178629 = null;var inst_178630 = 0;var inst_178631 = 0;var state_178751__$1 = (function (){var statearr_178810 = state_178751;(statearr_178810[14] = inst_178631);
(statearr_178810[29] = inst_178665);
(statearr_178810[15] = inst_178630);
(statearr_178810[16] = inst_178628);
(statearr_178810[17] = inst_178629);
return statearr_178810;
})();var statearr_178811_178879 = state_178751__$1;(statearr_178811_178879[2] = null);
(statearr_178811_178879[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 25))
{var inst_178689 = (state_178751[12]);var inst_178690 = (state_178751[13]);var inst_178692 = (inst_178690 < inst_178689);var inst_178693 = inst_178692;var state_178751__$1 = state_178751;if(cljs.core.truth_(inst_178693))
{var statearr_178812_178880 = state_178751__$1;(statearr_178812_178880[1] = 27);
} else
{var statearr_178813_178881 = state_178751__$1;(statearr_178813_178881[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 26))
{var inst_178679 = (state_178751[19]);var inst_178737 = (state_178751[2]);var inst_178738 = cljs.core.seq.call(null,inst_178679);var state_178751__$1 = (function (){var statearr_178814 = state_178751;(statearr_178814[30] = inst_178737);
return statearr_178814;
})();if(inst_178738)
{var statearr_178815_178882 = state_178751__$1;(statearr_178815_178882[1] = 42);
} else
{var statearr_178816_178883 = state_178751__$1;(statearr_178816_178883[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 27))
{var inst_178688 = (state_178751[11]);var inst_178690 = (state_178751[13]);var inst_178695 = cljs.core._nth.call(null,inst_178688,inst_178690);var state_178751__$1 = (function (){var statearr_178817 = state_178751;(statearr_178817[7] = inst_178695);
return statearr_178817;
})();var statearr_178818_178884 = state_178751__$1;(statearr_178818_178884[2] = null);
(statearr_178818_178884[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 28))
{var inst_178687 = (state_178751[10]);var inst_178708 = (state_178751[9]);var inst_178708__$1 = cljs.core.seq.call(null,inst_178687);var state_178751__$1 = (function (){var statearr_178822 = state_178751;(statearr_178822[9] = inst_178708__$1);
return statearr_178822;
})();if(inst_178708__$1)
{var statearr_178823_178885 = state_178751__$1;(statearr_178823_178885[1] = 33);
} else
{var statearr_178824_178886 = state_178751__$1;(statearr_178824_178886[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 29))
{var inst_178735 = (state_178751[2]);var state_178751__$1 = state_178751;var statearr_178825_178887 = state_178751__$1;(statearr_178825_178887[2] = inst_178735);
(statearr_178825_178887[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 30))
{var inst_178687 = (state_178751[10]);var inst_178688 = (state_178751[11]);var inst_178689 = (state_178751[12]);var inst_178690 = (state_178751[13]);var inst_178704 = (state_178751[2]);var inst_178705 = (inst_178690 + 1);var tmp178819 = inst_178687;var tmp178820 = inst_178688;var tmp178821 = inst_178689;var inst_178687__$1 = tmp178819;var inst_178688__$1 = tmp178820;var inst_178689__$1 = tmp178821;var inst_178690__$1 = inst_178705;var state_178751__$1 = (function (){var statearr_178826 = state_178751;(statearr_178826[10] = inst_178687__$1);
(statearr_178826[11] = inst_178688__$1);
(statearr_178826[12] = inst_178689__$1);
(statearr_178826[13] = inst_178690__$1);
(statearr_178826[31] = inst_178704);
return statearr_178826;
})();var statearr_178827_178888 = state_178751__$1;(statearr_178827_178888[2] = null);
(statearr_178827_178888[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178752 === 31))
{var inst_178695 = (state_178751[7]);var inst_178696 = (state_178751[2]);var inst_178697 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_178698 = cljs.core.async.untap_STAR_.call(null,m,inst_178695);var state_178751__$1 = (function (){var statearr_178828 = state_178751;(statearr_178828[32] = inst_178697);
(statearr_178828[33] = inst_178696);
return statearr_178828;
})();var statearr_178829_178889 = state_178751__$1;(statearr_178829_178889[2] = inst_178698);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178751__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__6178__auto____0 = (function (){var statearr_178833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_178833[0] = state_machine__6178__auto__);
(statearr_178833[1] = 1);
return statearr_178833;
});
var state_machine__6178__auto____1 = (function (state_178751){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_178751);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e178834){if((e178834 instanceof Object))
{var ex__6181__auto__ = e178834;var statearr_178835_178890 = state_178751;(statearr_178835_178890[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178751);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178891 = state_178751;
state_178751 = G__178891;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_178751){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_178751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_178836 = f__6193__auto__.call(null);(statearr_178836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___178837);
return statearr_178836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj178893 = {};return obj178893;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t179003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179003 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta179004){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta179004 = meta179004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179003.cljs$lang$type = true;
cljs.core.async.t179003.cljs$lang$ctorStr = "cljs.core.async/t179003";
cljs.core.async.t179003.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t179003");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179003.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t179003.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179003.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179003.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179003.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179003.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179003.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t179003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_179005){var self__ = this;
var _179005__$1 = this;return self__.meta179004;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_179005,meta179004__$1){var self__ = this;
var _179005__$1 = this;return (new cljs.core.async.t179003(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta179004__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t179003 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t179003(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta179004){return (new cljs.core.async.t179003(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta179004));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t179003(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___179112 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_179070){var state_val_179071 = (state_179070[1]);if((state_val_179071 === 1))
{var inst_179009 = (state_179070[7]);var inst_179009__$1 = calc_state.call(null);var inst_179010 = cljs.core.seq_QMARK_.call(null,inst_179009__$1);var state_179070__$1 = (function (){var statearr_179072 = state_179070;(statearr_179072[7] = inst_179009__$1);
return statearr_179072;
})();if(inst_179010)
{var statearr_179073_179113 = state_179070__$1;(statearr_179073_179113[1] = 2);
} else
{var statearr_179074_179114 = state_179070__$1;(statearr_179074_179114[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 2))
{var inst_179009 = (state_179070[7]);var inst_179012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_179009);var state_179070__$1 = state_179070;var statearr_179075_179115 = state_179070__$1;(statearr_179075_179115[2] = inst_179012);
(statearr_179075_179115[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 3))
{var inst_179009 = (state_179070[7]);var state_179070__$1 = state_179070;var statearr_179076_179116 = state_179070__$1;(statearr_179076_179116[2] = inst_179009);
(statearr_179076_179116[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 4))
{var inst_179009 = (state_179070[7]);var inst_179015 = (state_179070[2]);var inst_179016 = cljs.core.get.call(null,inst_179015,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_179017 = cljs.core.get.call(null,inst_179015,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_179018 = cljs.core.get.call(null,inst_179015,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_179019 = inst_179009;var state_179070__$1 = (function (){var statearr_179077 = state_179070;(statearr_179077[8] = inst_179017);
(statearr_179077[9] = inst_179018);
(statearr_179077[10] = inst_179019);
(statearr_179077[11] = inst_179016);
return statearr_179077;
})();var statearr_179078_179117 = state_179070__$1;(statearr_179078_179117[2] = null);
(statearr_179078_179117[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 5))
{var inst_179019 = (state_179070[10]);var inst_179022 = cljs.core.seq_QMARK_.call(null,inst_179019);var state_179070__$1 = state_179070;if(inst_179022)
{var statearr_179079_179118 = state_179070__$1;(statearr_179079_179118[1] = 7);
} else
{var statearr_179080_179119 = state_179070__$1;(statearr_179080_179119[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 6))
{var inst_179068 = (state_179070[2]);var state_179070__$1 = state_179070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179070__$1,inst_179068);
} else
{if((state_val_179071 === 7))
{var inst_179019 = (state_179070[10]);var inst_179024 = cljs.core.apply.call(null,cljs.core.hash_map,inst_179019);var state_179070__$1 = state_179070;var statearr_179081_179120 = state_179070__$1;(statearr_179081_179120[2] = inst_179024);
(statearr_179081_179120[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 8))
{var inst_179019 = (state_179070[10]);var state_179070__$1 = state_179070;var statearr_179082_179121 = state_179070__$1;(statearr_179082_179121[2] = inst_179019);
(statearr_179082_179121[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 9))
{var inst_179027 = (state_179070[12]);var inst_179027__$1 = (state_179070[2]);var inst_179028 = cljs.core.get.call(null,inst_179027__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_179029 = cljs.core.get.call(null,inst_179027__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_179030 = cljs.core.get.call(null,inst_179027__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_179070__$1 = (function (){var statearr_179083 = state_179070;(statearr_179083[13] = inst_179030);
(statearr_179083[14] = inst_179029);
(statearr_179083[12] = inst_179027__$1);
return statearr_179083;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_179070__$1,10,inst_179028);
} else
{if((state_val_179071 === 10))
{var inst_179034 = (state_179070[15]);var inst_179035 = (state_179070[16]);var inst_179033 = (state_179070[2]);var inst_179034__$1 = cljs.core.nth.call(null,inst_179033,0,null);var inst_179035__$1 = cljs.core.nth.call(null,inst_179033,1,null);var inst_179036 = (inst_179034__$1 == null);var inst_179037 = cljs.core._EQ_.call(null,inst_179035__$1,change);var inst_179038 = (inst_179036) || (inst_179037);var state_179070__$1 = (function (){var statearr_179084 = state_179070;(statearr_179084[15] = inst_179034__$1);
(statearr_179084[16] = inst_179035__$1);
return statearr_179084;
})();if(cljs.core.truth_(inst_179038))
{var statearr_179085_179122 = state_179070__$1;(statearr_179085_179122[1] = 11);
} else
{var statearr_179086_179123 = state_179070__$1;(statearr_179086_179123[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 11))
{var inst_179034 = (state_179070[15]);var inst_179040 = (inst_179034 == null);var state_179070__$1 = state_179070;if(cljs.core.truth_(inst_179040))
{var statearr_179087_179124 = state_179070__$1;(statearr_179087_179124[1] = 14);
} else
{var statearr_179088_179125 = state_179070__$1;(statearr_179088_179125[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 12))
{var inst_179049 = (state_179070[17]);var inst_179030 = (state_179070[13]);var inst_179035 = (state_179070[16]);var inst_179049__$1 = inst_179030.call(null,inst_179035);var state_179070__$1 = (function (){var statearr_179089 = state_179070;(statearr_179089[17] = inst_179049__$1);
return statearr_179089;
})();if(cljs.core.truth_(inst_179049__$1))
{var statearr_179090_179126 = state_179070__$1;(statearr_179090_179126[1] = 17);
} else
{var statearr_179091_179127 = state_179070__$1;(statearr_179091_179127[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 13))
{var inst_179066 = (state_179070[2]);var state_179070__$1 = state_179070;var statearr_179092_179128 = state_179070__$1;(statearr_179092_179128[2] = inst_179066);
(statearr_179092_179128[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 14))
{var inst_179035 = (state_179070[16]);var inst_179042 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_179035);var state_179070__$1 = state_179070;var statearr_179093_179129 = state_179070__$1;(statearr_179093_179129[2] = inst_179042);
(statearr_179093_179129[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 15))
{var state_179070__$1 = state_179070;var statearr_179094_179130 = state_179070__$1;(statearr_179094_179130[2] = null);
(statearr_179094_179130[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 16))
{var inst_179045 = (state_179070[2]);var inst_179046 = calc_state.call(null);var inst_179019 = inst_179046;var state_179070__$1 = (function (){var statearr_179095 = state_179070;(statearr_179095[18] = inst_179045);
(statearr_179095[10] = inst_179019);
return statearr_179095;
})();var statearr_179096_179131 = state_179070__$1;(statearr_179096_179131[2] = null);
(statearr_179096_179131[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 17))
{var inst_179049 = (state_179070[17]);var state_179070__$1 = state_179070;var statearr_179097_179132 = state_179070__$1;(statearr_179097_179132[2] = inst_179049);
(statearr_179097_179132[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 18))
{var inst_179030 = (state_179070[13]);var inst_179029 = (state_179070[14]);var inst_179035 = (state_179070[16]);var inst_179052 = cljs.core.empty_QMARK_.call(null,inst_179030);var inst_179053 = inst_179029.call(null,inst_179035);var inst_179054 = cljs.core.not.call(null,inst_179053);var inst_179055 = (inst_179052) && (inst_179054);var state_179070__$1 = state_179070;var statearr_179098_179133 = state_179070__$1;(statearr_179098_179133[2] = inst_179055);
(statearr_179098_179133[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 19))
{var inst_179057 = (state_179070[2]);var state_179070__$1 = state_179070;if(cljs.core.truth_(inst_179057))
{var statearr_179099_179134 = state_179070__$1;(statearr_179099_179134[1] = 20);
} else
{var statearr_179100_179135 = state_179070__$1;(statearr_179100_179135[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 20))
{var inst_179034 = (state_179070[15]);var state_179070__$1 = state_179070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179070__$1,23,out,inst_179034);
} else
{if((state_val_179071 === 21))
{var state_179070__$1 = state_179070;var statearr_179101_179136 = state_179070__$1;(statearr_179101_179136[2] = null);
(statearr_179101_179136[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 22))
{var inst_179027 = (state_179070[12]);var inst_179063 = (state_179070[2]);var inst_179019 = inst_179027;var state_179070__$1 = (function (){var statearr_179102 = state_179070;(statearr_179102[10] = inst_179019);
(statearr_179102[19] = inst_179063);
return statearr_179102;
})();var statearr_179103_179137 = state_179070__$1;(statearr_179103_179137[2] = null);
(statearr_179103_179137[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179071 === 23))
{var inst_179060 = (state_179070[2]);var state_179070__$1 = state_179070;var statearr_179104_179138 = state_179070__$1;(statearr_179104_179138[2] = inst_179060);
(statearr_179104_179138[1] = 22);
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
}
}
}
}
}
}
}
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
var state_machine__6178__auto____0 = (function (){var statearr_179108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_179108[0] = state_machine__6178__auto__);
(statearr_179108[1] = 1);
return statearr_179108;
});
var state_machine__6178__auto____1 = (function (state_179070){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_179070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e179109){if((e179109 instanceof Object))
{var ex__6181__auto__ = e179109;var statearr_179110_179139 = state_179070;(statearr_179110_179139[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179140 = state_179070;
state_179070 = G__179140;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_179070){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_179070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_179111 = f__6193__auto__.call(null);(statearr_179111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___179112);
return statearr_179111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj179142 = {};return obj179142;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__179143_SHARP_){if(cljs.core.truth_(p1__179143_SHARP_.call(null,topic)))
{return p1__179143_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__179143_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t179268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179268 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta179269){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta179269 = meta179269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179268.cljs$lang$type = true;
cljs.core.async.t179268.cljs$lang$ctorStr = "cljs.core.async/t179268";
cljs.core.async.t179268.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t179268");
});})(mults,ensure_mult))
;
cljs.core.async.t179268.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t179268.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t179268.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t179268.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t179268.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t179268.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t179268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t179268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_179270){var self__ = this;
var _179270__$1 = this;return self__.meta179269;
});})(mults,ensure_mult))
;
cljs.core.async.t179268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_179270,meta179269__$1){var self__ = this;
var _179270__$1 = this;return (new cljs.core.async.t179268(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta179269__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t179268 = ((function (mults,ensure_mult){
return (function __GT_t179268(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta179269){return (new cljs.core.async.t179268(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta179269));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t179268(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___179392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_179344){var state_val_179345 = (state_179344[1]);if((state_val_179345 === 1))
{var state_179344__$1 = state_179344;var statearr_179346_179393 = state_179344__$1;(statearr_179346_179393[2] = null);
(statearr_179346_179393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 2))
{var state_179344__$1 = state_179344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179344__$1,4,ch);
} else
{if((state_val_179345 === 3))
{var inst_179342 = (state_179344[2]);var state_179344__$1 = state_179344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179344__$1,inst_179342);
} else
{if((state_val_179345 === 4))
{var inst_179273 = (state_179344[7]);var inst_179273__$1 = (state_179344[2]);var inst_179274 = (inst_179273__$1 == null);var state_179344__$1 = (function (){var statearr_179347 = state_179344;(statearr_179347[7] = inst_179273__$1);
return statearr_179347;
})();if(cljs.core.truth_(inst_179274))
{var statearr_179348_179394 = state_179344__$1;(statearr_179348_179394[1] = 5);
} else
{var statearr_179349_179395 = state_179344__$1;(statearr_179349_179395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 5))
{var inst_179280 = cljs.core.deref.call(null,mults);var inst_179281 = cljs.core.vals.call(null,inst_179280);var inst_179282 = cljs.core.seq.call(null,inst_179281);var inst_179283 = inst_179282;var inst_179284 = null;var inst_179285 = 0;var inst_179286 = 0;var state_179344__$1 = (function (){var statearr_179350 = state_179344;(statearr_179350[8] = inst_179286);
(statearr_179350[9] = inst_179284);
(statearr_179350[10] = inst_179285);
(statearr_179350[11] = inst_179283);
return statearr_179350;
})();var statearr_179351_179396 = state_179344__$1;(statearr_179351_179396[2] = null);
(statearr_179351_179396[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 6))
{var inst_179273 = (state_179344[7]);var inst_179323 = (state_179344[12]);var inst_179321 = (state_179344[13]);var inst_179321__$1 = topic_fn.call(null,inst_179273);var inst_179322 = cljs.core.deref.call(null,mults);var inst_179323__$1 = cljs.core.get.call(null,inst_179322,inst_179321__$1);var state_179344__$1 = (function (){var statearr_179352 = state_179344;(statearr_179352[12] = inst_179323__$1);
(statearr_179352[13] = inst_179321__$1);
return statearr_179352;
})();if(cljs.core.truth_(inst_179323__$1))
{var statearr_179353_179397 = state_179344__$1;(statearr_179353_179397[1] = 19);
} else
{var statearr_179354_179398 = state_179344__$1;(statearr_179354_179398[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 7))
{var inst_179340 = (state_179344[2]);var state_179344__$1 = state_179344;var statearr_179355_179399 = state_179344__$1;(statearr_179355_179399[2] = inst_179340);
(statearr_179355_179399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 8))
{var inst_179286 = (state_179344[8]);var inst_179285 = (state_179344[10]);var inst_179288 = (inst_179286 < inst_179285);var inst_179289 = inst_179288;var state_179344__$1 = state_179344;if(cljs.core.truth_(inst_179289))
{var statearr_179359_179400 = state_179344__$1;(statearr_179359_179400[1] = 10);
} else
{var statearr_179360_179401 = state_179344__$1;(statearr_179360_179401[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 9))
{var inst_179319 = (state_179344[2]);var state_179344__$1 = state_179344;var statearr_179361_179402 = state_179344__$1;(statearr_179361_179402[2] = inst_179319);
(statearr_179361_179402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 10))
{var inst_179286 = (state_179344[8]);var inst_179284 = (state_179344[9]);var inst_179285 = (state_179344[10]);var inst_179283 = (state_179344[11]);var inst_179291 = cljs.core._nth.call(null,inst_179284,inst_179286);var inst_179292 = cljs.core.async.muxch_STAR_.call(null,inst_179291);var inst_179293 = cljs.core.async.close_BANG_.call(null,inst_179292);var inst_179294 = (inst_179286 + 1);var tmp179356 = inst_179284;var tmp179357 = inst_179285;var tmp179358 = inst_179283;var inst_179283__$1 = tmp179358;var inst_179284__$1 = tmp179356;var inst_179285__$1 = tmp179357;var inst_179286__$1 = inst_179294;var state_179344__$1 = (function (){var statearr_179362 = state_179344;(statearr_179362[8] = inst_179286__$1);
(statearr_179362[9] = inst_179284__$1);
(statearr_179362[10] = inst_179285__$1);
(statearr_179362[11] = inst_179283__$1);
(statearr_179362[14] = inst_179293);
return statearr_179362;
})();var statearr_179363_179403 = state_179344__$1;(statearr_179363_179403[2] = null);
(statearr_179363_179403[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 11))
{var inst_179283 = (state_179344[11]);var inst_179297 = (state_179344[15]);var inst_179297__$1 = cljs.core.seq.call(null,inst_179283);var state_179344__$1 = (function (){var statearr_179364 = state_179344;(statearr_179364[15] = inst_179297__$1);
return statearr_179364;
})();if(inst_179297__$1)
{var statearr_179365_179404 = state_179344__$1;(statearr_179365_179404[1] = 13);
} else
{var statearr_179366_179405 = state_179344__$1;(statearr_179366_179405[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 12))
{var inst_179317 = (state_179344[2]);var state_179344__$1 = state_179344;var statearr_179367_179406 = state_179344__$1;(statearr_179367_179406[2] = inst_179317);
(statearr_179367_179406[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 13))
{var inst_179297 = (state_179344[15]);var inst_179299 = cljs.core.chunked_seq_QMARK_.call(null,inst_179297);var state_179344__$1 = state_179344;if(inst_179299)
{var statearr_179368_179407 = state_179344__$1;(statearr_179368_179407[1] = 16);
} else
{var statearr_179369_179408 = state_179344__$1;(statearr_179369_179408[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 14))
{var state_179344__$1 = state_179344;var statearr_179370_179409 = state_179344__$1;(statearr_179370_179409[2] = null);
(statearr_179370_179409[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 15))
{var inst_179315 = (state_179344[2]);var state_179344__$1 = state_179344;var statearr_179371_179410 = state_179344__$1;(statearr_179371_179410[2] = inst_179315);
(statearr_179371_179410[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 16))
{var inst_179297 = (state_179344[15]);var inst_179301 = cljs.core.chunk_first.call(null,inst_179297);var inst_179302 = cljs.core.chunk_rest.call(null,inst_179297);var inst_179303 = cljs.core.count.call(null,inst_179301);var inst_179283 = inst_179302;var inst_179284 = inst_179301;var inst_179285 = inst_179303;var inst_179286 = 0;var state_179344__$1 = (function (){var statearr_179372 = state_179344;(statearr_179372[8] = inst_179286);
(statearr_179372[9] = inst_179284);
(statearr_179372[10] = inst_179285);
(statearr_179372[11] = inst_179283);
return statearr_179372;
})();var statearr_179373_179411 = state_179344__$1;(statearr_179373_179411[2] = null);
(statearr_179373_179411[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 17))
{var inst_179297 = (state_179344[15]);var inst_179306 = cljs.core.first.call(null,inst_179297);var inst_179307 = cljs.core.async.muxch_STAR_.call(null,inst_179306);var inst_179308 = cljs.core.async.close_BANG_.call(null,inst_179307);var inst_179309 = cljs.core.next.call(null,inst_179297);var inst_179283 = inst_179309;var inst_179284 = null;var inst_179285 = 0;var inst_179286 = 0;var state_179344__$1 = (function (){var statearr_179374 = state_179344;(statearr_179374[8] = inst_179286);
(statearr_179374[9] = inst_179284);
(statearr_179374[10] = inst_179285);
(statearr_179374[11] = inst_179283);
(statearr_179374[16] = inst_179308);
return statearr_179374;
})();var statearr_179375_179412 = state_179344__$1;(statearr_179375_179412[2] = null);
(statearr_179375_179412[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 18))
{var inst_179312 = (state_179344[2]);var state_179344__$1 = state_179344;var statearr_179376_179413 = state_179344__$1;(statearr_179376_179413[2] = inst_179312);
(statearr_179376_179413[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 19))
{var state_179344__$1 = state_179344;var statearr_179377_179414 = state_179344__$1;(statearr_179377_179414[2] = null);
(statearr_179377_179414[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 20))
{var state_179344__$1 = state_179344;var statearr_179378_179415 = state_179344__$1;(statearr_179378_179415[2] = null);
(statearr_179378_179415[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 21))
{var inst_179337 = (state_179344[2]);var state_179344__$1 = (function (){var statearr_179379 = state_179344;(statearr_179379[17] = inst_179337);
return statearr_179379;
})();var statearr_179380_179416 = state_179344__$1;(statearr_179380_179416[2] = null);
(statearr_179380_179416[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 22))
{var inst_179334 = (state_179344[2]);var state_179344__$1 = state_179344;var statearr_179381_179417 = state_179344__$1;(statearr_179381_179417[2] = inst_179334);
(statearr_179381_179417[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 23))
{var inst_179321 = (state_179344[13]);var inst_179325 = (state_179344[2]);var inst_179326 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_179321);var state_179344__$1 = (function (){var statearr_179382 = state_179344;(statearr_179382[18] = inst_179325);
return statearr_179382;
})();var statearr_179383_179418 = state_179344__$1;(statearr_179383_179418[2] = inst_179326);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179344__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179345 === 24))
{var inst_179273 = (state_179344[7]);var inst_179323 = (state_179344[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_179344,23,Object,null,22);var inst_179330 = cljs.core.async.muxch_STAR_.call(null,inst_179323);var state_179344__$1 = state_179344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179344__$1,25,inst_179330,inst_179273);
} else
{if((state_val_179345 === 25))
{var inst_179332 = (state_179344[2]);var state_179344__$1 = state_179344;var statearr_179384_179419 = state_179344__$1;(statearr_179384_179419[2] = inst_179332);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179344__$1);
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
}
}
}
}
}
}
}
}
}
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
var state_machine__6178__auto____0 = (function (){var statearr_179388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_179388[0] = state_machine__6178__auto__);
(statearr_179388[1] = 1);
return statearr_179388;
});
var state_machine__6178__auto____1 = (function (state_179344){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_179344);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e179389){if((e179389 instanceof Object))
{var ex__6181__auto__ = e179389;var statearr_179390_179420 = state_179344;(statearr_179390_179420[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179344);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179421 = state_179344;
state_179344 = G__179421;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_179344){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_179344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_179391 = f__6193__auto__.call(null);(statearr_179391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___179392);
return statearr_179391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6192__auto___179558 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_179528){var state_val_179529 = (state_179528[1]);if((state_val_179529 === 1))
{var state_179528__$1 = state_179528;var statearr_179530_179559 = state_179528__$1;(statearr_179530_179559[2] = null);
(statearr_179530_179559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 2))
{var inst_179491 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_179492 = 0;var state_179528__$1 = (function (){var statearr_179531 = state_179528;(statearr_179531[7] = inst_179492);
(statearr_179531[8] = inst_179491);
return statearr_179531;
})();var statearr_179532_179560 = state_179528__$1;(statearr_179532_179560[2] = null);
(statearr_179532_179560[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 3))
{var inst_179526 = (state_179528[2]);var state_179528__$1 = state_179528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179528__$1,inst_179526);
} else
{if((state_val_179529 === 4))
{var inst_179492 = (state_179528[7]);var inst_179494 = (inst_179492 < cnt);var state_179528__$1 = state_179528;if(cljs.core.truth_(inst_179494))
{var statearr_179533_179561 = state_179528__$1;(statearr_179533_179561[1] = 6);
} else
{var statearr_179534_179562 = state_179528__$1;(statearr_179534_179562[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 5))
{var inst_179512 = (state_179528[2]);var state_179528__$1 = (function (){var statearr_179535 = state_179528;(statearr_179535[9] = inst_179512);
return statearr_179535;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179528__$1,12,dchan);
} else
{if((state_val_179529 === 6))
{var state_179528__$1 = state_179528;var statearr_179536_179563 = state_179528__$1;(statearr_179536_179563[2] = null);
(statearr_179536_179563[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 7))
{var state_179528__$1 = state_179528;var statearr_179537_179564 = state_179528__$1;(statearr_179537_179564[2] = null);
(statearr_179537_179564[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 8))
{var inst_179510 = (state_179528[2]);var state_179528__$1 = state_179528;var statearr_179538_179565 = state_179528__$1;(statearr_179538_179565[2] = inst_179510);
(statearr_179538_179565[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 9))
{var inst_179492 = (state_179528[7]);var inst_179505 = (state_179528[2]);var inst_179506 = (inst_179492 + 1);var inst_179492__$1 = inst_179506;var state_179528__$1 = (function (){var statearr_179539 = state_179528;(statearr_179539[10] = inst_179505);
(statearr_179539[7] = inst_179492__$1);
return statearr_179539;
})();var statearr_179540_179566 = state_179528__$1;(statearr_179540_179566[2] = null);
(statearr_179540_179566[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 10))
{var inst_179496 = (state_179528[2]);var inst_179497 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_179528__$1 = (function (){var statearr_179541 = state_179528;(statearr_179541[11] = inst_179496);
return statearr_179541;
})();var statearr_179542_179567 = state_179528__$1;(statearr_179542_179567[2] = inst_179497);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179528__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 11))
{var inst_179492 = (state_179528[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_179528,10,Object,null,9);var inst_179501 = chs__$1.call(null,inst_179492);var inst_179502 = done.call(null,inst_179492);var inst_179503 = cljs.core.async.take_BANG_.call(null,inst_179501,inst_179502);var state_179528__$1 = state_179528;var statearr_179543_179568 = state_179528__$1;(statearr_179543_179568[2] = inst_179503);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179528__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 12))
{var inst_179514 = (state_179528[12]);var inst_179514__$1 = (state_179528[2]);var inst_179515 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_179514__$1);var state_179528__$1 = (function (){var statearr_179544 = state_179528;(statearr_179544[12] = inst_179514__$1);
return statearr_179544;
})();if(cljs.core.truth_(inst_179515))
{var statearr_179545_179569 = state_179528__$1;(statearr_179545_179569[1] = 13);
} else
{var statearr_179546_179570 = state_179528__$1;(statearr_179546_179570[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 13))
{var inst_179517 = cljs.core.async.close_BANG_.call(null,out);var state_179528__$1 = state_179528;var statearr_179547_179571 = state_179528__$1;(statearr_179547_179571[2] = inst_179517);
(statearr_179547_179571[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 14))
{var inst_179514 = (state_179528[12]);var inst_179519 = cljs.core.apply.call(null,f,inst_179514);var state_179528__$1 = state_179528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179528__$1,16,out,inst_179519);
} else
{if((state_val_179529 === 15))
{var inst_179524 = (state_179528[2]);var state_179528__$1 = state_179528;var statearr_179548_179572 = state_179528__$1;(statearr_179548_179572[2] = inst_179524);
(statearr_179548_179572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179529 === 16))
{var inst_179521 = (state_179528[2]);var state_179528__$1 = (function (){var statearr_179549 = state_179528;(statearr_179549[13] = inst_179521);
return statearr_179549;
})();var statearr_179550_179573 = state_179528__$1;(statearr_179550_179573[2] = null);
(statearr_179550_179573[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_179554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_179554[0] = state_machine__6178__auto__);
(statearr_179554[1] = 1);
return statearr_179554;
});
var state_machine__6178__auto____1 = (function (state_179528){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_179528);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e179555){if((e179555 instanceof Object))
{var ex__6181__auto__ = e179555;var statearr_179556_179574 = state_179528;(statearr_179556_179574[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179575 = state_179528;
state_179528 = G__179575;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_179528){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_179528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_179557 = f__6193__auto__.call(null);(statearr_179557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___179558);
return statearr_179557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___179683 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_179659){var state_val_179660 = (state_179659[1]);if((state_val_179660 === 1))
{var inst_179630 = cljs.core.vec.call(null,chs);var inst_179631 = inst_179630;var state_179659__$1 = (function (){var statearr_179661 = state_179659;(statearr_179661[7] = inst_179631);
return statearr_179661;
})();var statearr_179662_179684 = state_179659__$1;(statearr_179662_179684[2] = null);
(statearr_179662_179684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179660 === 2))
{var inst_179631 = (state_179659[7]);var inst_179633 = cljs.core.count.call(null,inst_179631);var inst_179634 = (inst_179633 > 0);var state_179659__$1 = state_179659;if(cljs.core.truth_(inst_179634))
{var statearr_179663_179685 = state_179659__$1;(statearr_179663_179685[1] = 4);
} else
{var statearr_179664_179686 = state_179659__$1;(statearr_179664_179686[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179660 === 3))
{var inst_179657 = (state_179659[2]);var state_179659__$1 = state_179659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179659__$1,inst_179657);
} else
{if((state_val_179660 === 4))
{var inst_179631 = (state_179659[7]);var state_179659__$1 = state_179659;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_179659__$1,7,inst_179631);
} else
{if((state_val_179660 === 5))
{var inst_179653 = cljs.core.async.close_BANG_.call(null,out);var state_179659__$1 = state_179659;var statearr_179665_179687 = state_179659__$1;(statearr_179665_179687[2] = inst_179653);
(statearr_179665_179687[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179660 === 6))
{var inst_179655 = (state_179659[2]);var state_179659__$1 = state_179659;var statearr_179666_179688 = state_179659__$1;(statearr_179666_179688[2] = inst_179655);
(statearr_179666_179688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179660 === 7))
{var inst_179638 = (state_179659[8]);var inst_179639 = (state_179659[9]);var inst_179638__$1 = (state_179659[2]);var inst_179639__$1 = cljs.core.nth.call(null,inst_179638__$1,0,null);var inst_179640 = cljs.core.nth.call(null,inst_179638__$1,1,null);var inst_179641 = (inst_179639__$1 == null);var state_179659__$1 = (function (){var statearr_179667 = state_179659;(statearr_179667[10] = inst_179640);
(statearr_179667[8] = inst_179638__$1);
(statearr_179667[9] = inst_179639__$1);
return statearr_179667;
})();if(cljs.core.truth_(inst_179641))
{var statearr_179668_179689 = state_179659__$1;(statearr_179668_179689[1] = 8);
} else
{var statearr_179669_179690 = state_179659__$1;(statearr_179669_179690[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179660 === 8))
{var inst_179640 = (state_179659[10]);var inst_179631 = (state_179659[7]);var inst_179638 = (state_179659[8]);var inst_179639 = (state_179659[9]);var inst_179643 = (function (){var c = inst_179640;var v = inst_179639;var vec__179636 = inst_179638;var cs = inst_179631;return ((function (c,v,vec__179636,cs,inst_179640,inst_179631,inst_179638,inst_179639,state_val_179660){
return (function (p1__179576_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__179576_SHARP_);
});
;})(c,v,vec__179636,cs,inst_179640,inst_179631,inst_179638,inst_179639,state_val_179660))
})();var inst_179644 = cljs.core.filterv.call(null,inst_179643,inst_179631);var inst_179631__$1 = inst_179644;var state_179659__$1 = (function (){var statearr_179670 = state_179659;(statearr_179670[7] = inst_179631__$1);
return statearr_179670;
})();var statearr_179671_179691 = state_179659__$1;(statearr_179671_179691[2] = null);
(statearr_179671_179691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179660 === 9))
{var inst_179639 = (state_179659[9]);var state_179659__$1 = state_179659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179659__$1,11,out,inst_179639);
} else
{if((state_val_179660 === 10))
{var inst_179651 = (state_179659[2]);var state_179659__$1 = state_179659;var statearr_179673_179692 = state_179659__$1;(statearr_179673_179692[2] = inst_179651);
(statearr_179673_179692[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179660 === 11))
{var inst_179631 = (state_179659[7]);var inst_179648 = (state_179659[2]);var tmp179672 = inst_179631;var inst_179631__$1 = tmp179672;var state_179659__$1 = (function (){var statearr_179674 = state_179659;(statearr_179674[11] = inst_179648);
(statearr_179674[7] = inst_179631__$1);
return statearr_179674;
})();var statearr_179675_179693 = state_179659__$1;(statearr_179675_179693[2] = null);
(statearr_179675_179693[1] = 2);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_179679 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_179679[0] = state_machine__6178__auto__);
(statearr_179679[1] = 1);
return statearr_179679;
});
var state_machine__6178__auto____1 = (function (state_179659){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_179659);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e179680){if((e179680 instanceof Object))
{var ex__6181__auto__ = e179680;var statearr_179681_179694 = state_179659;(statearr_179681_179694[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179659);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179695 = state_179659;
state_179659 = G__179695;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_179659){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_179659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_179682 = f__6193__auto__.call(null);(statearr_179682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___179683);
return statearr_179682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___179788 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_179765){var state_val_179766 = (state_179765[1]);if((state_val_179766 === 1))
{var inst_179742 = 0;var state_179765__$1 = (function (){var statearr_179767 = state_179765;(statearr_179767[7] = inst_179742);
return statearr_179767;
})();var statearr_179768_179789 = state_179765__$1;(statearr_179768_179789[2] = null);
(statearr_179768_179789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179766 === 2))
{var inst_179742 = (state_179765[7]);var inst_179744 = (inst_179742 < n);var state_179765__$1 = state_179765;if(cljs.core.truth_(inst_179744))
{var statearr_179769_179790 = state_179765__$1;(statearr_179769_179790[1] = 4);
} else
{var statearr_179770_179791 = state_179765__$1;(statearr_179770_179791[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179766 === 3))
{var inst_179762 = (state_179765[2]);var inst_179763 = cljs.core.async.close_BANG_.call(null,out);var state_179765__$1 = (function (){var statearr_179771 = state_179765;(statearr_179771[8] = inst_179762);
return statearr_179771;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179765__$1,inst_179763);
} else
{if((state_val_179766 === 4))
{var state_179765__$1 = state_179765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179765__$1,7,ch);
} else
{if((state_val_179766 === 5))
{var state_179765__$1 = state_179765;var statearr_179772_179792 = state_179765__$1;(statearr_179772_179792[2] = null);
(statearr_179772_179792[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179766 === 6))
{var inst_179760 = (state_179765[2]);var state_179765__$1 = state_179765;var statearr_179773_179793 = state_179765__$1;(statearr_179773_179793[2] = inst_179760);
(statearr_179773_179793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179766 === 7))
{var inst_179747 = (state_179765[9]);var inst_179747__$1 = (state_179765[2]);var inst_179748 = (inst_179747__$1 == null);var inst_179749 = cljs.core.not.call(null,inst_179748);var state_179765__$1 = (function (){var statearr_179774 = state_179765;(statearr_179774[9] = inst_179747__$1);
return statearr_179774;
})();if(inst_179749)
{var statearr_179775_179794 = state_179765__$1;(statearr_179775_179794[1] = 8);
} else
{var statearr_179776_179795 = state_179765__$1;(statearr_179776_179795[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179766 === 8))
{var inst_179747 = (state_179765[9]);var state_179765__$1 = state_179765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179765__$1,11,out,inst_179747);
} else
{if((state_val_179766 === 9))
{var state_179765__$1 = state_179765;var statearr_179777_179796 = state_179765__$1;(statearr_179777_179796[2] = null);
(statearr_179777_179796[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179766 === 10))
{var inst_179757 = (state_179765[2]);var state_179765__$1 = state_179765;var statearr_179778_179797 = state_179765__$1;(statearr_179778_179797[2] = inst_179757);
(statearr_179778_179797[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179766 === 11))
{var inst_179742 = (state_179765[7]);var inst_179752 = (state_179765[2]);var inst_179753 = (inst_179742 + 1);var inst_179742__$1 = inst_179753;var state_179765__$1 = (function (){var statearr_179779 = state_179765;(statearr_179779[10] = inst_179752);
(statearr_179779[7] = inst_179742__$1);
return statearr_179779;
})();var statearr_179780_179798 = state_179765__$1;(statearr_179780_179798[2] = null);
(statearr_179780_179798[1] = 2);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_179784 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_179784[0] = state_machine__6178__auto__);
(statearr_179784[1] = 1);
return statearr_179784;
});
var state_machine__6178__auto____1 = (function (state_179765){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_179765);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e179785){if((e179785 instanceof Object))
{var ex__6181__auto__ = e179785;var statearr_179786_179799 = state_179765;(statearr_179786_179799[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179800 = state_179765;
state_179765 = G__179800;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_179765){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_179765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_179787 = f__6193__auto__.call(null);(statearr_179787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___179788);
return statearr_179787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___179897 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_179872){var state_val_179873 = (state_179872[1]);if((state_val_179873 === 1))
{var inst_179849 = null;var state_179872__$1 = (function (){var statearr_179874 = state_179872;(statearr_179874[7] = inst_179849);
return statearr_179874;
})();var statearr_179875_179898 = state_179872__$1;(statearr_179875_179898[2] = null);
(statearr_179875_179898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 2))
{var state_179872__$1 = state_179872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179872__$1,4,ch);
} else
{if((state_val_179873 === 3))
{var inst_179869 = (state_179872[2]);var inst_179870 = cljs.core.async.close_BANG_.call(null,out);var state_179872__$1 = (function (){var statearr_179876 = state_179872;(statearr_179876[8] = inst_179869);
return statearr_179876;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179872__$1,inst_179870);
} else
{if((state_val_179873 === 4))
{var inst_179852 = (state_179872[9]);var inst_179852__$1 = (state_179872[2]);var inst_179853 = (inst_179852__$1 == null);var inst_179854 = cljs.core.not.call(null,inst_179853);var state_179872__$1 = (function (){var statearr_179877 = state_179872;(statearr_179877[9] = inst_179852__$1);
return statearr_179877;
})();if(inst_179854)
{var statearr_179878_179899 = state_179872__$1;(statearr_179878_179899[1] = 5);
} else
{var statearr_179879_179900 = state_179872__$1;(statearr_179879_179900[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 5))
{var inst_179849 = (state_179872[7]);var inst_179852 = (state_179872[9]);var inst_179856 = cljs.core._EQ_.call(null,inst_179852,inst_179849);var state_179872__$1 = state_179872;if(inst_179856)
{var statearr_179880_179901 = state_179872__$1;(statearr_179880_179901[1] = 8);
} else
{var statearr_179881_179902 = state_179872__$1;(statearr_179881_179902[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 6))
{var state_179872__$1 = state_179872;var statearr_179883_179903 = state_179872__$1;(statearr_179883_179903[2] = null);
(statearr_179883_179903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 7))
{var inst_179867 = (state_179872[2]);var state_179872__$1 = state_179872;var statearr_179884_179904 = state_179872__$1;(statearr_179884_179904[2] = inst_179867);
(statearr_179884_179904[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 8))
{var inst_179849 = (state_179872[7]);var tmp179882 = inst_179849;var inst_179849__$1 = tmp179882;var state_179872__$1 = (function (){var statearr_179885 = state_179872;(statearr_179885[7] = inst_179849__$1);
return statearr_179885;
})();var statearr_179886_179905 = state_179872__$1;(statearr_179886_179905[2] = null);
(statearr_179886_179905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 9))
{var inst_179852 = (state_179872[9]);var state_179872__$1 = state_179872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179872__$1,11,out,inst_179852);
} else
{if((state_val_179873 === 10))
{var inst_179864 = (state_179872[2]);var state_179872__$1 = state_179872;var statearr_179887_179906 = state_179872__$1;(statearr_179887_179906[2] = inst_179864);
(statearr_179887_179906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 11))
{var inst_179852 = (state_179872[9]);var inst_179861 = (state_179872[2]);var inst_179849 = inst_179852;var state_179872__$1 = (function (){var statearr_179888 = state_179872;(statearr_179888[7] = inst_179849);
(statearr_179888[10] = inst_179861);
return statearr_179888;
})();var statearr_179889_179907 = state_179872__$1;(statearr_179889_179907[2] = null);
(statearr_179889_179907[1] = 2);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_179893 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_179893[0] = state_machine__6178__auto__);
(statearr_179893[1] = 1);
return statearr_179893;
});
var state_machine__6178__auto____1 = (function (state_179872){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_179872);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e179894){if((e179894 instanceof Object))
{var ex__6181__auto__ = e179894;var statearr_179895_179908 = state_179872;(statearr_179895_179908[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179872);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179909 = state_179872;
state_179872 = G__179909;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_179872){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_179872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_179896 = f__6193__auto__.call(null);(statearr_179896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___179897);
return statearr_179896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___180044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_180014){var state_val_180015 = (state_180014[1]);if((state_val_180015 === 1))
{var inst_179977 = (new Array(n));var inst_179978 = inst_179977;var inst_179979 = 0;var state_180014__$1 = (function (){var statearr_180016 = state_180014;(statearr_180016[7] = inst_179979);
(statearr_180016[8] = inst_179978);
return statearr_180016;
})();var statearr_180017_180045 = state_180014__$1;(statearr_180017_180045[2] = null);
(statearr_180017_180045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 2))
{var state_180014__$1 = state_180014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180014__$1,4,ch);
} else
{if((state_val_180015 === 3))
{var inst_180012 = (state_180014[2]);var state_180014__$1 = state_180014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180014__$1,inst_180012);
} else
{if((state_val_180015 === 4))
{var inst_179982 = (state_180014[9]);var inst_179982__$1 = (state_180014[2]);var inst_179983 = (inst_179982__$1 == null);var inst_179984 = cljs.core.not.call(null,inst_179983);var state_180014__$1 = (function (){var statearr_180018 = state_180014;(statearr_180018[9] = inst_179982__$1);
return statearr_180018;
})();if(inst_179984)
{var statearr_180019_180046 = state_180014__$1;(statearr_180019_180046[1] = 5);
} else
{var statearr_180020_180047 = state_180014__$1;(statearr_180020_180047[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 5))
{var inst_179979 = (state_180014[7]);var inst_179978 = (state_180014[8]);var inst_179987 = (state_180014[10]);var inst_179982 = (state_180014[9]);var inst_179986 = (inst_179978[inst_179979] = inst_179982);var inst_179987__$1 = (inst_179979 + 1);var inst_179988 = (inst_179987__$1 < n);var state_180014__$1 = (function (){var statearr_180021 = state_180014;(statearr_180021[11] = inst_179986);
(statearr_180021[10] = inst_179987__$1);
return statearr_180021;
})();if(cljs.core.truth_(inst_179988))
{var statearr_180022_180048 = state_180014__$1;(statearr_180022_180048[1] = 8);
} else
{var statearr_180023_180049 = state_180014__$1;(statearr_180023_180049[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 6))
{var inst_179979 = (state_180014[7]);var inst_180000 = (inst_179979 > 0);var state_180014__$1 = state_180014;if(cljs.core.truth_(inst_180000))
{var statearr_180025_180050 = state_180014__$1;(statearr_180025_180050[1] = 12);
} else
{var statearr_180026_180051 = state_180014__$1;(statearr_180026_180051[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 7))
{var inst_180010 = (state_180014[2]);var state_180014__$1 = state_180014;var statearr_180027_180052 = state_180014__$1;(statearr_180027_180052[2] = inst_180010);
(statearr_180027_180052[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 8))
{var inst_179978 = (state_180014[8]);var inst_179987 = (state_180014[10]);var tmp180024 = inst_179978;var inst_179978__$1 = tmp180024;var inst_179979 = inst_179987;var state_180014__$1 = (function (){var statearr_180028 = state_180014;(statearr_180028[7] = inst_179979);
(statearr_180028[8] = inst_179978__$1);
return statearr_180028;
})();var statearr_180029_180053 = state_180014__$1;(statearr_180029_180053[2] = null);
(statearr_180029_180053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 9))
{var inst_179978 = (state_180014[8]);var inst_179992 = cljs.core.vec.call(null,inst_179978);var state_180014__$1 = state_180014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180014__$1,11,out,inst_179992);
} else
{if((state_val_180015 === 10))
{var inst_179998 = (state_180014[2]);var state_180014__$1 = state_180014;var statearr_180030_180054 = state_180014__$1;(statearr_180030_180054[2] = inst_179998);
(statearr_180030_180054[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 11))
{var inst_179994 = (state_180014[2]);var inst_179995 = (new Array(n));var inst_179978 = inst_179995;var inst_179979 = 0;var state_180014__$1 = (function (){var statearr_180031 = state_180014;(statearr_180031[7] = inst_179979);
(statearr_180031[8] = inst_179978);
(statearr_180031[12] = inst_179994);
return statearr_180031;
})();var statearr_180032_180055 = state_180014__$1;(statearr_180032_180055[2] = null);
(statearr_180032_180055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 12))
{var inst_179978 = (state_180014[8]);var inst_180002 = cljs.core.vec.call(null,inst_179978);var state_180014__$1 = state_180014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180014__$1,15,out,inst_180002);
} else
{if((state_val_180015 === 13))
{var state_180014__$1 = state_180014;var statearr_180033_180056 = state_180014__$1;(statearr_180033_180056[2] = null);
(statearr_180033_180056[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 14))
{var inst_180007 = (state_180014[2]);var inst_180008 = cljs.core.async.close_BANG_.call(null,out);var state_180014__$1 = (function (){var statearr_180034 = state_180014;(statearr_180034[13] = inst_180007);
return statearr_180034;
})();var statearr_180035_180057 = state_180014__$1;(statearr_180035_180057[2] = inst_180008);
(statearr_180035_180057[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180015 === 15))
{var inst_180004 = (state_180014[2]);var state_180014__$1 = state_180014;var statearr_180036_180058 = state_180014__$1;(statearr_180036_180058[2] = inst_180004);
(statearr_180036_180058[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_180040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_180040[0] = state_machine__6178__auto__);
(statearr_180040[1] = 1);
return statearr_180040;
});
var state_machine__6178__auto____1 = (function (state_180014){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_180014);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e180041){if((e180041 instanceof Object))
{var ex__6181__auto__ = e180041;var statearr_180042_180059 = state_180014;(statearr_180042_180059[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180014);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180060 = state_180014;
state_180014 = G__180060;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_180014){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_180014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_180043 = f__6193__auto__.call(null);(statearr_180043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___180044);
return statearr_180043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___180203 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_180173){var state_val_180174 = (state_180173[1]);if((state_val_180174 === 1))
{var inst_180132 = [];var inst_180133 = inst_180132;var inst_180134 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_180173__$1 = (function (){var statearr_180175 = state_180173;(statearr_180175[7] = inst_180133);
(statearr_180175[8] = inst_180134);
return statearr_180175;
})();var statearr_180176_180204 = state_180173__$1;(statearr_180176_180204[2] = null);
(statearr_180176_180204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 2))
{var state_180173__$1 = state_180173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180173__$1,4,ch);
} else
{if((state_val_180174 === 3))
{var inst_180171 = (state_180173[2]);var state_180173__$1 = state_180173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180173__$1,inst_180171);
} else
{if((state_val_180174 === 4))
{var inst_180137 = (state_180173[9]);var inst_180137__$1 = (state_180173[2]);var inst_180138 = (inst_180137__$1 == null);var inst_180139 = cljs.core.not.call(null,inst_180138);var state_180173__$1 = (function (){var statearr_180177 = state_180173;(statearr_180177[9] = inst_180137__$1);
return statearr_180177;
})();if(inst_180139)
{var statearr_180178_180205 = state_180173__$1;(statearr_180178_180205[1] = 5);
} else
{var statearr_180179_180206 = state_180173__$1;(statearr_180179_180206[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 5))
{var inst_180141 = (state_180173[10]);var inst_180134 = (state_180173[8]);var inst_180137 = (state_180173[9]);var inst_180141__$1 = f.call(null,inst_180137);var inst_180142 = cljs.core._EQ_.call(null,inst_180141__$1,inst_180134);var inst_180143 = cljs.core.keyword_identical_QMARK_.call(null,inst_180134,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_180144 = (inst_180142) || (inst_180143);var state_180173__$1 = (function (){var statearr_180180 = state_180173;(statearr_180180[10] = inst_180141__$1);
return statearr_180180;
})();if(cljs.core.truth_(inst_180144))
{var statearr_180181_180207 = state_180173__$1;(statearr_180181_180207[1] = 8);
} else
{var statearr_180182_180208 = state_180173__$1;(statearr_180182_180208[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 6))
{var inst_180133 = (state_180173[7]);var inst_180158 = inst_180133.length;var inst_180159 = (inst_180158 > 0);var state_180173__$1 = state_180173;if(cljs.core.truth_(inst_180159))
{var statearr_180184_180209 = state_180173__$1;(statearr_180184_180209[1] = 12);
} else
{var statearr_180185_180210 = state_180173__$1;(statearr_180185_180210[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 7))
{var inst_180169 = (state_180173[2]);var state_180173__$1 = state_180173;var statearr_180186_180211 = state_180173__$1;(statearr_180186_180211[2] = inst_180169);
(statearr_180186_180211[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 8))
{var inst_180141 = (state_180173[10]);var inst_180133 = (state_180173[7]);var inst_180137 = (state_180173[9]);var inst_180146 = inst_180133.push(inst_180137);var tmp180183 = inst_180133;var inst_180133__$1 = tmp180183;var inst_180134 = inst_180141;var state_180173__$1 = (function (){var statearr_180187 = state_180173;(statearr_180187[7] = inst_180133__$1);
(statearr_180187[8] = inst_180134);
(statearr_180187[11] = inst_180146);
return statearr_180187;
})();var statearr_180188_180212 = state_180173__$1;(statearr_180188_180212[2] = null);
(statearr_180188_180212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 9))
{var inst_180133 = (state_180173[7]);var inst_180149 = cljs.core.vec.call(null,inst_180133);var state_180173__$1 = state_180173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180173__$1,11,out,inst_180149);
} else
{if((state_val_180174 === 10))
{var inst_180156 = (state_180173[2]);var state_180173__$1 = state_180173;var statearr_180189_180213 = state_180173__$1;(statearr_180189_180213[2] = inst_180156);
(statearr_180189_180213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 11))
{var inst_180141 = (state_180173[10]);var inst_180137 = (state_180173[9]);var inst_180151 = (state_180173[2]);var inst_180152 = [];var inst_180153 = inst_180152.push(inst_180137);var inst_180133 = inst_180152;var inst_180134 = inst_180141;var state_180173__$1 = (function (){var statearr_180190 = state_180173;(statearr_180190[7] = inst_180133);
(statearr_180190[8] = inst_180134);
(statearr_180190[12] = inst_180151);
(statearr_180190[13] = inst_180153);
return statearr_180190;
})();var statearr_180191_180214 = state_180173__$1;(statearr_180191_180214[2] = null);
(statearr_180191_180214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 12))
{var inst_180133 = (state_180173[7]);var inst_180161 = cljs.core.vec.call(null,inst_180133);var state_180173__$1 = state_180173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180173__$1,15,out,inst_180161);
} else
{if((state_val_180174 === 13))
{var state_180173__$1 = state_180173;var statearr_180192_180215 = state_180173__$1;(statearr_180192_180215[2] = null);
(statearr_180192_180215[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 14))
{var inst_180166 = (state_180173[2]);var inst_180167 = cljs.core.async.close_BANG_.call(null,out);var state_180173__$1 = (function (){var statearr_180193 = state_180173;(statearr_180193[14] = inst_180166);
return statearr_180193;
})();var statearr_180194_180216 = state_180173__$1;(statearr_180194_180216[2] = inst_180167);
(statearr_180194_180216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180174 === 15))
{var inst_180163 = (state_180173[2]);var state_180173__$1 = state_180173;var statearr_180195_180217 = state_180173__$1;(statearr_180195_180217[2] = inst_180163);
(statearr_180195_180217[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_180199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_180199[0] = state_machine__6178__auto__);
(statearr_180199[1] = 1);
return statearr_180199;
});
var state_machine__6178__auto____1 = (function (state_180173){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_180173);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e180200){if((e180200 instanceof Object))
{var ex__6181__auto__ = e180200;var statearr_180201_180218 = state_180173;(statearr_180201_180218[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180173);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180219 = state_180173;
state_180173 = G__180219;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_180173){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_180173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_180202 = f__6193__auto__.call(null);(statearr_180202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___180203);
return statearr_180202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map