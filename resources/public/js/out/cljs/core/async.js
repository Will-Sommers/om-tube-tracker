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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9142 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9142 = (function (f,fn_handler,meta9143){
this.f = f;
this.fn_handler = fn_handler;
this.meta9143 = meta9143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9142.cljs$lang$type = true;
cljs.core.async.t9142.cljs$lang$ctorStr = "cljs.core.async/t9142";
cljs.core.async.t9142.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9142");
});
cljs.core.async.t9142.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9144){var self__ = this;
var _9144__$1 = this;return self__.meta9143;
});
cljs.core.async.t9142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9144,meta9143__$1){var self__ = this;
var _9144__$1 = this;return (new cljs.core.async.t9142(self__.f,self__.fn_handler,meta9143__$1));
});
cljs.core.async.__GT_t9142 = (function __GT_t9142(f__$1,fn_handler__$1,meta9143){return (new cljs.core.async.t9142(f__$1,fn_handler__$1,meta9143));
});
}
return (new cljs.core.async.t9142(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9146 = buff;if(G__9146)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__9146.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9146.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9146);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9146);
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
{var val_9147 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9147);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9147);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___9148 = n;var x_9149 = 0;while(true){
if((x_9149 < n__4291__auto___9148))
{(a[x_9149] = 0);
{
var G__9150 = (x_9149 + 1);
x_9149 = G__9150;
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
var G__9151 = (i + 1);
i = G__9151;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9155 = (function (flag,alt_flag,meta9156){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9156 = meta9156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9155.cljs$lang$type = true;
cljs.core.async.t9155.cljs$lang$ctorStr = "cljs.core.async/t9155";
cljs.core.async.t9155.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9155");
});
cljs.core.async.t9155.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9157){var self__ = this;
var _9157__$1 = this;return self__.meta9156;
});
cljs.core.async.t9155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9157,meta9156__$1){var self__ = this;
var _9157__$1 = this;return (new cljs.core.async.t9155(self__.flag,self__.alt_flag,meta9156__$1));
});
cljs.core.async.__GT_t9155 = (function __GT_t9155(flag__$1,alt_flag__$1,meta9156){return (new cljs.core.async.t9155(flag__$1,alt_flag__$1,meta9156));
});
}
return (new cljs.core.async.t9155(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9161 = (function (cb,flag,alt_handler,meta9162){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9162 = meta9162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9161.cljs$lang$type = true;
cljs.core.async.t9161.cljs$lang$ctorStr = "cljs.core.async/t9161";
cljs.core.async.t9161.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9161");
});
cljs.core.async.t9161.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9163){var self__ = this;
var _9163__$1 = this;return self__.meta9162;
});
cljs.core.async.t9161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9163,meta9162__$1){var self__ = this;
var _9163__$1 = this;return (new cljs.core.async.t9161(self__.cb,self__.flag,self__.alt_handler,meta9162__$1));
});
cljs.core.async.__GT_t9161 = (function __GT_t9161(cb__$1,flag__$1,alt_handler__$1,meta9162){return (new cljs.core.async.t9161(cb__$1,flag__$1,alt_handler__$1,meta9162));
});
}
return (new cljs.core.async.t9161(cb,flag,alt_handler,null));
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
return (function (p1__9164_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9164_SHARP_,port], null));
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
var G__9165 = (i + 1);
i = G__9165;
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
var alts_BANG___delegate = function (ports,p__9166){var map__9168 = p__9166;var map__9168__$1 = ((cljs.core.seq_QMARK_.call(null,map__9168))?cljs.core.apply.call(null,cljs.core.hash_map,map__9168):map__9168);var opts = map__9168__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9166 = null;if (arguments.length > 1) {
  p__9166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9166);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9169){
var ports = cljs.core.first(arglist__9169);
var p__9166 = cljs.core.rest(arglist__9169);
return alts_BANG___delegate(ports,p__9166);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9177 = (function (ch,f,map_LT_,meta9178){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9178 = meta9178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9177.cljs$lang$type = true;
cljs.core.async.t9177.cljs$lang$ctorStr = "cljs.core.async/t9177";
cljs.core.async.t9177.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9177");
});
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9180 = (function (fn1,_,meta9178,ch,f,map_LT_,meta9181){
this.fn1 = fn1;
this._ = _;
this.meta9178 = meta9178;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9181 = meta9181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9180.cljs$lang$type = true;
cljs.core.async.t9180.cljs$lang$ctorStr = "cljs.core.async/t9180";
cljs.core.async.t9180.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9180");
});
cljs.core.async.t9180.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9180.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9170_SHARP_){return f1.call(null,(((p1__9170_SHARP_ == null))?null:self__.f.call(null,p1__9170_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9182){var self__ = this;
var _9182__$1 = this;return self__.meta9181;
});
cljs.core.async.t9180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9182,meta9181__$1){var self__ = this;
var _9182__$1 = this;return (new cljs.core.async.t9180(self__.fn1,self__._,self__.meta9178,self__.ch,self__.f,self__.map_LT_,meta9181__$1));
});
cljs.core.async.__GT_t9180 = (function __GT_t9180(fn1__$1,___$2,meta9178__$1,ch__$2,f__$2,map_LT___$2,meta9181){return (new cljs.core.async.t9180(fn1__$1,___$2,meta9178__$1,ch__$2,f__$2,map_LT___$2,meta9181));
});
}
return (new cljs.core.async.t9180(fn1,___$1,self__.meta9178,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9179){var self__ = this;
var _9179__$1 = this;return self__.meta9178;
});
cljs.core.async.t9177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9179,meta9178__$1){var self__ = this;
var _9179__$1 = this;return (new cljs.core.async.t9177(self__.ch,self__.f,self__.map_LT_,meta9178__$1));
});
cljs.core.async.__GT_t9177 = (function __GT_t9177(ch__$1,f__$1,map_LT___$1,meta9178){return (new cljs.core.async.t9177(ch__$1,f__$1,map_LT___$1,meta9178));
});
}
return (new cljs.core.async.t9177(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9186 = (function (ch,f,map_GT_,meta9187){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9187 = meta9187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9186.cljs$lang$type = true;
cljs.core.async.t9186.cljs$lang$ctorStr = "cljs.core.async/t9186";
cljs.core.async.t9186.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9186");
});
cljs.core.async.t9186.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9186.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9186.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9188){var self__ = this;
var _9188__$1 = this;return self__.meta9187;
});
cljs.core.async.t9186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9188,meta9187__$1){var self__ = this;
var _9188__$1 = this;return (new cljs.core.async.t9186(self__.ch,self__.f,self__.map_GT_,meta9187__$1));
});
cljs.core.async.__GT_t9186 = (function __GT_t9186(ch__$1,f__$1,map_GT___$1,meta9187){return (new cljs.core.async.t9186(ch__$1,f__$1,map_GT___$1,meta9187));
});
}
return (new cljs.core.async.t9186(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9192 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9192 = (function (ch,p,filter_GT_,meta9193){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9193 = meta9193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9192.cljs$lang$type = true;
cljs.core.async.t9192.cljs$lang$ctorStr = "cljs.core.async/t9192";
cljs.core.async.t9192.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9192");
});
cljs.core.async.t9192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9192.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9194){var self__ = this;
var _9194__$1 = this;return self__.meta9193;
});
cljs.core.async.t9192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9194,meta9193__$1){var self__ = this;
var _9194__$1 = this;return (new cljs.core.async.t9192(self__.ch,self__.p,self__.filter_GT_,meta9193__$1));
});
cljs.core.async.__GT_t9192 = (function __GT_t9192(ch__$1,p__$1,filter_GT___$1,meta9193){return (new cljs.core.async.t9192(ch__$1,p__$1,filter_GT___$1,meta9193));
});
}
return (new cljs.core.async.t9192(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___9277 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9256){var state_val_9257 = (state_9256[1]);if((state_val_9257 === 1))
{var state_9256__$1 = state_9256;var statearr_9258_9278 = state_9256__$1;(statearr_9258_9278[2] = null);
(statearr_9258_9278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9257 === 2))
{var state_9256__$1 = state_9256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9256__$1,4,ch);
} else
{if((state_val_9257 === 3))
{var inst_9254 = (state_9256[2]);var state_9256__$1 = state_9256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9256__$1,inst_9254);
} else
{if((state_val_9257 === 4))
{var inst_9238 = (state_9256[7]);var inst_9238__$1 = (state_9256[2]);var inst_9239 = (inst_9238__$1 == null);var state_9256__$1 = (function (){var statearr_9259 = state_9256;(statearr_9259[7] = inst_9238__$1);
return statearr_9259;
})();if(cljs.core.truth_(inst_9239))
{var statearr_9260_9279 = state_9256__$1;(statearr_9260_9279[1] = 5);
} else
{var statearr_9261_9280 = state_9256__$1;(statearr_9261_9280[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9257 === 5))
{var inst_9241 = cljs.core.async.close_BANG_.call(null,out);var state_9256__$1 = state_9256;var statearr_9262_9281 = state_9256__$1;(statearr_9262_9281[2] = inst_9241);
(statearr_9262_9281[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9257 === 6))
{var inst_9238 = (state_9256[7]);var inst_9243 = p.call(null,inst_9238);var state_9256__$1 = state_9256;if(cljs.core.truth_(inst_9243))
{var statearr_9263_9282 = state_9256__$1;(statearr_9263_9282[1] = 8);
} else
{var statearr_9264_9283 = state_9256__$1;(statearr_9264_9283[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9257 === 7))
{var inst_9252 = (state_9256[2]);var state_9256__$1 = state_9256;var statearr_9265_9284 = state_9256__$1;(statearr_9265_9284[2] = inst_9252);
(statearr_9265_9284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9257 === 8))
{var inst_9238 = (state_9256[7]);var state_9256__$1 = state_9256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9256__$1,11,out,inst_9238);
} else
{if((state_val_9257 === 9))
{var state_9256__$1 = state_9256;var statearr_9266_9285 = state_9256__$1;(statearr_9266_9285[2] = null);
(statearr_9266_9285[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9257 === 10))
{var inst_9249 = (state_9256[2]);var state_9256__$1 = (function (){var statearr_9267 = state_9256;(statearr_9267[8] = inst_9249);
return statearr_9267;
})();var statearr_9268_9286 = state_9256__$1;(statearr_9268_9286[2] = null);
(statearr_9268_9286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9257 === 11))
{var inst_9246 = (state_9256[2]);var state_9256__$1 = state_9256;var statearr_9269_9287 = state_9256__$1;(statearr_9269_9287[2] = inst_9246);
(statearr_9269_9287[1] = 10);
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
var state_machine__6178__auto____0 = (function (){var statearr_9273 = [null,null,null,null,null,null,null,null,null];(statearr_9273[0] = state_machine__6178__auto__);
(statearr_9273[1] = 1);
return statearr_9273;
});
var state_machine__6178__auto____1 = (function (state_9256){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9256);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9274){if((e9274 instanceof Object))
{var ex__6181__auto__ = e9274;var statearr_9275_9288 = state_9256;(statearr_9275_9288[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9289 = state_9256;
state_9256 = G__9289;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9256){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9276 = f__6193__auto__.call(null);(statearr_9276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9277);
return statearr_9276;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9441){var state_val_9442 = (state_9441[1]);if((state_val_9442 === 1))
{var state_9441__$1 = state_9441;var statearr_9443_9480 = state_9441__$1;(statearr_9443_9480[2] = null);
(statearr_9443_9480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 2))
{var state_9441__$1 = state_9441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9441__$1,4,in$);
} else
{if((state_val_9442 === 3))
{var inst_9439 = (state_9441[2]);var state_9441__$1 = state_9441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9441__$1,inst_9439);
} else
{if((state_val_9442 === 4))
{var inst_9387 = (state_9441[7]);var inst_9387__$1 = (state_9441[2]);var inst_9388 = (inst_9387__$1 == null);var state_9441__$1 = (function (){var statearr_9444 = state_9441;(statearr_9444[7] = inst_9387__$1);
return statearr_9444;
})();if(cljs.core.truth_(inst_9388))
{var statearr_9445_9481 = state_9441__$1;(statearr_9445_9481[1] = 5);
} else
{var statearr_9446_9482 = state_9441__$1;(statearr_9446_9482[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 5))
{var inst_9390 = cljs.core.async.close_BANG_.call(null,out);var state_9441__$1 = state_9441;var statearr_9447_9483 = state_9441__$1;(statearr_9447_9483[2] = inst_9390);
(statearr_9447_9483[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 6))
{var inst_9387 = (state_9441[7]);var inst_9392 = f.call(null,inst_9387);var inst_9397 = cljs.core.seq.call(null,inst_9392);var inst_9398 = inst_9397;var inst_9399 = null;var inst_9400 = 0;var inst_9401 = 0;var state_9441__$1 = (function (){var statearr_9448 = state_9441;(statearr_9448[8] = inst_9399);
(statearr_9448[9] = inst_9398);
(statearr_9448[10] = inst_9400);
(statearr_9448[11] = inst_9401);
return statearr_9448;
})();var statearr_9449_9484 = state_9441__$1;(statearr_9449_9484[2] = null);
(statearr_9449_9484[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 7))
{var inst_9437 = (state_9441[2]);var state_9441__$1 = state_9441;var statearr_9450_9485 = state_9441__$1;(statearr_9450_9485[2] = inst_9437);
(statearr_9450_9485[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 8))
{var inst_9400 = (state_9441[10]);var inst_9401 = (state_9441[11]);var inst_9403 = (inst_9401 < inst_9400);var inst_9404 = inst_9403;var state_9441__$1 = state_9441;if(cljs.core.truth_(inst_9404))
{var statearr_9451_9486 = state_9441__$1;(statearr_9451_9486[1] = 10);
} else
{var statearr_9452_9487 = state_9441__$1;(statearr_9452_9487[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 9))
{var inst_9434 = (state_9441[2]);var state_9441__$1 = (function (){var statearr_9453 = state_9441;(statearr_9453[12] = inst_9434);
return statearr_9453;
})();var statearr_9454_9488 = state_9441__$1;(statearr_9454_9488[2] = null);
(statearr_9454_9488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 10))
{var inst_9399 = (state_9441[8]);var inst_9401 = (state_9441[11]);var inst_9406 = cljs.core._nth.call(null,inst_9399,inst_9401);var state_9441__$1 = state_9441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9441__$1,13,out,inst_9406);
} else
{if((state_val_9442 === 11))
{var inst_9398 = (state_9441[9]);var inst_9412 = (state_9441[13]);var inst_9412__$1 = cljs.core.seq.call(null,inst_9398);var state_9441__$1 = (function (){var statearr_9458 = state_9441;(statearr_9458[13] = inst_9412__$1);
return statearr_9458;
})();if(inst_9412__$1)
{var statearr_9459_9489 = state_9441__$1;(statearr_9459_9489[1] = 14);
} else
{var statearr_9460_9490 = state_9441__$1;(statearr_9460_9490[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 12))
{var inst_9432 = (state_9441[2]);var state_9441__$1 = state_9441;var statearr_9461_9491 = state_9441__$1;(statearr_9461_9491[2] = inst_9432);
(statearr_9461_9491[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 13))
{var inst_9399 = (state_9441[8]);var inst_9398 = (state_9441[9]);var inst_9400 = (state_9441[10]);var inst_9401 = (state_9441[11]);var inst_9408 = (state_9441[2]);var inst_9409 = (inst_9401 + 1);var tmp9455 = inst_9399;var tmp9456 = inst_9398;var tmp9457 = inst_9400;var inst_9398__$1 = tmp9456;var inst_9399__$1 = tmp9455;var inst_9400__$1 = tmp9457;var inst_9401__$1 = inst_9409;var state_9441__$1 = (function (){var statearr_9462 = state_9441;(statearr_9462[8] = inst_9399__$1);
(statearr_9462[9] = inst_9398__$1);
(statearr_9462[10] = inst_9400__$1);
(statearr_9462[11] = inst_9401__$1);
(statearr_9462[14] = inst_9408);
return statearr_9462;
})();var statearr_9463_9492 = state_9441__$1;(statearr_9463_9492[2] = null);
(statearr_9463_9492[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 14))
{var inst_9412 = (state_9441[13]);var inst_9414 = cljs.core.chunked_seq_QMARK_.call(null,inst_9412);var state_9441__$1 = state_9441;if(inst_9414)
{var statearr_9464_9493 = state_9441__$1;(statearr_9464_9493[1] = 17);
} else
{var statearr_9465_9494 = state_9441__$1;(statearr_9465_9494[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 15))
{var state_9441__$1 = state_9441;var statearr_9466_9495 = state_9441__$1;(statearr_9466_9495[2] = null);
(statearr_9466_9495[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 16))
{var inst_9430 = (state_9441[2]);var state_9441__$1 = state_9441;var statearr_9467_9496 = state_9441__$1;(statearr_9467_9496[2] = inst_9430);
(statearr_9467_9496[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 17))
{var inst_9412 = (state_9441[13]);var inst_9416 = cljs.core.chunk_first.call(null,inst_9412);var inst_9417 = cljs.core.chunk_rest.call(null,inst_9412);var inst_9418 = cljs.core.count.call(null,inst_9416);var inst_9398 = inst_9417;var inst_9399 = inst_9416;var inst_9400 = inst_9418;var inst_9401 = 0;var state_9441__$1 = (function (){var statearr_9468 = state_9441;(statearr_9468[8] = inst_9399);
(statearr_9468[9] = inst_9398);
(statearr_9468[10] = inst_9400);
(statearr_9468[11] = inst_9401);
return statearr_9468;
})();var statearr_9469_9497 = state_9441__$1;(statearr_9469_9497[2] = null);
(statearr_9469_9497[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 18))
{var inst_9412 = (state_9441[13]);var inst_9421 = cljs.core.first.call(null,inst_9412);var state_9441__$1 = state_9441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9441__$1,20,out,inst_9421);
} else
{if((state_val_9442 === 19))
{var inst_9427 = (state_9441[2]);var state_9441__$1 = state_9441;var statearr_9470_9498 = state_9441__$1;(statearr_9470_9498[2] = inst_9427);
(statearr_9470_9498[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9442 === 20))
{var inst_9412 = (state_9441[13]);var inst_9423 = (state_9441[2]);var inst_9424 = cljs.core.next.call(null,inst_9412);var inst_9398 = inst_9424;var inst_9399 = null;var inst_9400 = 0;var inst_9401 = 0;var state_9441__$1 = (function (){var statearr_9471 = state_9441;(statearr_9471[15] = inst_9423);
(statearr_9471[8] = inst_9399);
(statearr_9471[9] = inst_9398);
(statearr_9471[10] = inst_9400);
(statearr_9471[11] = inst_9401);
return statearr_9471;
})();var statearr_9472_9499 = state_9441__$1;(statearr_9472_9499[2] = null);
(statearr_9472_9499[1] = 8);
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
var state_machine__6178__auto____0 = (function (){var statearr_9476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9476[0] = state_machine__6178__auto__);
(statearr_9476[1] = 1);
return statearr_9476;
});
var state_machine__6178__auto____1 = (function (state_9441){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9477){if((e9477 instanceof Object))
{var ex__6181__auto__ = e9477;var statearr_9478_9500 = state_9441;(statearr_9478_9500[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9441);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9501 = state_9441;
state_9441 = G__9501;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9441){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9479 = f__6193__auto__.call(null);(statearr_9479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9479;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___9582 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9561){var state_val_9562 = (state_9561[1]);if((state_val_9562 === 1))
{var state_9561__$1 = state_9561;var statearr_9563_9583 = state_9561__$1;(statearr_9563_9583[2] = null);
(statearr_9563_9583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9562 === 2))
{var state_9561__$1 = state_9561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9561__$1,4,from);
} else
{if((state_val_9562 === 3))
{var inst_9559 = (state_9561[2]);var state_9561__$1 = state_9561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9561__$1,inst_9559);
} else
{if((state_val_9562 === 4))
{var inst_9544 = (state_9561[7]);var inst_9544__$1 = (state_9561[2]);var inst_9545 = (inst_9544__$1 == null);var state_9561__$1 = (function (){var statearr_9564 = state_9561;(statearr_9564[7] = inst_9544__$1);
return statearr_9564;
})();if(cljs.core.truth_(inst_9545))
{var statearr_9565_9584 = state_9561__$1;(statearr_9565_9584[1] = 5);
} else
{var statearr_9566_9585 = state_9561__$1;(statearr_9566_9585[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9562 === 5))
{var state_9561__$1 = state_9561;if(cljs.core.truth_(close_QMARK_))
{var statearr_9567_9586 = state_9561__$1;(statearr_9567_9586[1] = 8);
} else
{var statearr_9568_9587 = state_9561__$1;(statearr_9568_9587[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9562 === 6))
{var inst_9544 = (state_9561[7]);var state_9561__$1 = state_9561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9561__$1,11,to,inst_9544);
} else
{if((state_val_9562 === 7))
{var inst_9557 = (state_9561[2]);var state_9561__$1 = state_9561;var statearr_9569_9588 = state_9561__$1;(statearr_9569_9588[2] = inst_9557);
(statearr_9569_9588[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9562 === 8))
{var inst_9548 = cljs.core.async.close_BANG_.call(null,to);var state_9561__$1 = state_9561;var statearr_9570_9589 = state_9561__$1;(statearr_9570_9589[2] = inst_9548);
(statearr_9570_9589[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9562 === 9))
{var state_9561__$1 = state_9561;var statearr_9571_9590 = state_9561__$1;(statearr_9571_9590[2] = null);
(statearr_9571_9590[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9562 === 10))
{var inst_9551 = (state_9561[2]);var state_9561__$1 = state_9561;var statearr_9572_9591 = state_9561__$1;(statearr_9572_9591[2] = inst_9551);
(statearr_9572_9591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9562 === 11))
{var inst_9554 = (state_9561[2]);var state_9561__$1 = (function (){var statearr_9573 = state_9561;(statearr_9573[8] = inst_9554);
return statearr_9573;
})();var statearr_9574_9592 = state_9561__$1;(statearr_9574_9592[2] = null);
(statearr_9574_9592[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_9578 = [null,null,null,null,null,null,null,null,null];(statearr_9578[0] = state_machine__6178__auto__);
(statearr_9578[1] = 1);
return statearr_9578;
});
var state_machine__6178__auto____1 = (function (state_9561){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9561);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9579){if((e9579 instanceof Object))
{var ex__6181__auto__ = e9579;var statearr_9580_9593 = state_9561;(statearr_9580_9593[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9594 = state_9561;
state_9561 = G__9594;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9561){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9581 = f__6193__auto__.call(null);(statearr_9581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9582);
return statearr_9581;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___9681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9659){var state_val_9660 = (state_9659[1]);if((state_val_9660 === 1))
{var state_9659__$1 = state_9659;var statearr_9661_9682 = state_9659__$1;(statearr_9661_9682[2] = null);
(statearr_9661_9682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9660 === 2))
{var state_9659__$1 = state_9659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9659__$1,4,ch);
} else
{if((state_val_9660 === 3))
{var inst_9657 = (state_9659[2]);var state_9659__$1 = state_9659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9659__$1,inst_9657);
} else
{if((state_val_9660 === 4))
{var inst_9640 = (state_9659[7]);var inst_9640__$1 = (state_9659[2]);var inst_9641 = (inst_9640__$1 == null);var state_9659__$1 = (function (){var statearr_9662 = state_9659;(statearr_9662[7] = inst_9640__$1);
return statearr_9662;
})();if(cljs.core.truth_(inst_9641))
{var statearr_9663_9683 = state_9659__$1;(statearr_9663_9683[1] = 5);
} else
{var statearr_9664_9684 = state_9659__$1;(statearr_9664_9684[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9660 === 5))
{var inst_9643 = cljs.core.async.close_BANG_.call(null,tc);var inst_9644 = cljs.core.async.close_BANG_.call(null,fc);var state_9659__$1 = (function (){var statearr_9665 = state_9659;(statearr_9665[8] = inst_9643);
return statearr_9665;
})();var statearr_9666_9685 = state_9659__$1;(statearr_9666_9685[2] = inst_9644);
(statearr_9666_9685[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9660 === 6))
{var inst_9640 = (state_9659[7]);var inst_9646 = p.call(null,inst_9640);var state_9659__$1 = state_9659;if(cljs.core.truth_(inst_9646))
{var statearr_9667_9686 = state_9659__$1;(statearr_9667_9686[1] = 9);
} else
{var statearr_9668_9687 = state_9659__$1;(statearr_9668_9687[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9660 === 7))
{var inst_9655 = (state_9659[2]);var state_9659__$1 = state_9659;var statearr_9669_9688 = state_9659__$1;(statearr_9669_9688[2] = inst_9655);
(statearr_9669_9688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9660 === 8))
{var inst_9652 = (state_9659[2]);var state_9659__$1 = (function (){var statearr_9670 = state_9659;(statearr_9670[9] = inst_9652);
return statearr_9670;
})();var statearr_9671_9689 = state_9659__$1;(statearr_9671_9689[2] = null);
(statearr_9671_9689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9660 === 9))
{var state_9659__$1 = state_9659;var statearr_9672_9690 = state_9659__$1;(statearr_9672_9690[2] = tc);
(statearr_9672_9690[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9660 === 10))
{var state_9659__$1 = state_9659;var statearr_9673_9691 = state_9659__$1;(statearr_9673_9691[2] = fc);
(statearr_9673_9691[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9660 === 11))
{var inst_9640 = (state_9659[7]);var inst_9650 = (state_9659[2]);var state_9659__$1 = state_9659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9659__$1,8,inst_9650,inst_9640);
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
var state_machine__6178__auto____0 = (function (){var statearr_9677 = [null,null,null,null,null,null,null,null,null,null];(statearr_9677[0] = state_machine__6178__auto__);
(statearr_9677[1] = 1);
return statearr_9677;
});
var state_machine__6178__auto____1 = (function (state_9659){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9659);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9678){if((e9678 instanceof Object))
{var ex__6181__auto__ = e9678;var statearr_9679_9692 = state_9659;(statearr_9679_9692[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9659);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9693 = state_9659;
state_9659 = G__9693;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9659){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9680 = f__6193__auto__.call(null);(statearr_9680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9681);
return statearr_9680;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9740){var state_val_9741 = (state_9740[1]);if((state_val_9741 === 7))
{var inst_9736 = (state_9740[2]);var state_9740__$1 = state_9740;var statearr_9742_9758 = state_9740__$1;(statearr_9742_9758[2] = inst_9736);
(statearr_9742_9758[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9741 === 6))
{var inst_9729 = (state_9740[7]);var inst_9726 = (state_9740[8]);var inst_9733 = f.call(null,inst_9726,inst_9729);var inst_9726__$1 = inst_9733;var state_9740__$1 = (function (){var statearr_9743 = state_9740;(statearr_9743[8] = inst_9726__$1);
return statearr_9743;
})();var statearr_9744_9759 = state_9740__$1;(statearr_9744_9759[2] = null);
(statearr_9744_9759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9741 === 5))
{var inst_9726 = (state_9740[8]);var state_9740__$1 = state_9740;var statearr_9745_9760 = state_9740__$1;(statearr_9745_9760[2] = inst_9726);
(statearr_9745_9760[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9741 === 4))
{var inst_9729 = (state_9740[7]);var inst_9729__$1 = (state_9740[2]);var inst_9730 = (inst_9729__$1 == null);var state_9740__$1 = (function (){var statearr_9746 = state_9740;(statearr_9746[7] = inst_9729__$1);
return statearr_9746;
})();if(cljs.core.truth_(inst_9730))
{var statearr_9747_9761 = state_9740__$1;(statearr_9747_9761[1] = 5);
} else
{var statearr_9748_9762 = state_9740__$1;(statearr_9748_9762[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9741 === 3))
{var inst_9738 = (state_9740[2]);var state_9740__$1 = state_9740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9740__$1,inst_9738);
} else
{if((state_val_9741 === 2))
{var state_9740__$1 = state_9740;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9740__$1,4,ch);
} else
{if((state_val_9741 === 1))
{var inst_9726 = init;var state_9740__$1 = (function (){var statearr_9749 = state_9740;(statearr_9749[8] = inst_9726);
return statearr_9749;
})();var statearr_9750_9763 = state_9740__$1;(statearr_9750_9763[2] = null);
(statearr_9750_9763[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_9754 = [null,null,null,null,null,null,null,null,null];(statearr_9754[0] = state_machine__6178__auto__);
(statearr_9754[1] = 1);
return statearr_9754;
});
var state_machine__6178__auto____1 = (function (state_9740){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9740);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9755){if((e9755 instanceof Object))
{var ex__6181__auto__ = e9755;var statearr_9756_9764 = state_9740;(statearr_9756_9764[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9740);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9765 = state_9740;
state_9740 = G__9765;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9740){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9757 = f__6193__auto__.call(null);(statearr_9757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9757;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9827){var state_val_9828 = (state_9827[1]);if((state_val_9828 === 1))
{var inst_9807 = cljs.core.seq.call(null,coll);var inst_9808 = inst_9807;var state_9827__$1 = (function (){var statearr_9829 = state_9827;(statearr_9829[7] = inst_9808);
return statearr_9829;
})();var statearr_9830_9848 = state_9827__$1;(statearr_9830_9848[2] = null);
(statearr_9830_9848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9828 === 2))
{var inst_9808 = (state_9827[7]);var state_9827__$1 = state_9827;if(cljs.core.truth_(inst_9808))
{var statearr_9831_9849 = state_9827__$1;(statearr_9831_9849[1] = 4);
} else
{var statearr_9832_9850 = state_9827__$1;(statearr_9832_9850[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9828 === 3))
{var inst_9825 = (state_9827[2]);var state_9827__$1 = state_9827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9827__$1,inst_9825);
} else
{if((state_val_9828 === 4))
{var inst_9808 = (state_9827[7]);var inst_9811 = cljs.core.first.call(null,inst_9808);var state_9827__$1 = state_9827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9827__$1,7,ch,inst_9811);
} else
{if((state_val_9828 === 5))
{var state_9827__$1 = state_9827;if(cljs.core.truth_(close_QMARK_))
{var statearr_9833_9851 = state_9827__$1;(statearr_9833_9851[1] = 8);
} else
{var statearr_9834_9852 = state_9827__$1;(statearr_9834_9852[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9828 === 6))
{var inst_9823 = (state_9827[2]);var state_9827__$1 = state_9827;var statearr_9835_9853 = state_9827__$1;(statearr_9835_9853[2] = inst_9823);
(statearr_9835_9853[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9828 === 7))
{var inst_9808 = (state_9827[7]);var inst_9813 = (state_9827[2]);var inst_9814 = cljs.core.next.call(null,inst_9808);var inst_9808__$1 = inst_9814;var state_9827__$1 = (function (){var statearr_9836 = state_9827;(statearr_9836[7] = inst_9808__$1);
(statearr_9836[8] = inst_9813);
return statearr_9836;
})();var statearr_9837_9854 = state_9827__$1;(statearr_9837_9854[2] = null);
(statearr_9837_9854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9828 === 8))
{var inst_9818 = cljs.core.async.close_BANG_.call(null,ch);var state_9827__$1 = state_9827;var statearr_9838_9855 = state_9827__$1;(statearr_9838_9855[2] = inst_9818);
(statearr_9838_9855[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9828 === 9))
{var state_9827__$1 = state_9827;var statearr_9839_9856 = state_9827__$1;(statearr_9839_9856[2] = null);
(statearr_9839_9856[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9828 === 10))
{var inst_9821 = (state_9827[2]);var state_9827__$1 = state_9827;var statearr_9840_9857 = state_9827__$1;(statearr_9840_9857[2] = inst_9821);
(statearr_9840_9857[1] = 6);
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
var state_machine__6178__auto____0 = (function (){var statearr_9844 = [null,null,null,null,null,null,null,null,null];(statearr_9844[0] = state_machine__6178__auto__);
(statearr_9844[1] = 1);
return statearr_9844;
});
var state_machine__6178__auto____1 = (function (state_9827){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9827);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9845){if((e9845 instanceof Object))
{var ex__6181__auto__ = e9845;var statearr_9846_9858 = state_9827;(statearr_9846_9858[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9859 = state_9827;
state_9827 = G__9859;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9827){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9847 = f__6193__auto__.call(null);(statearr_9847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9847;
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
cljs.core.async.Mux = (function (){var obj9861 = {};return obj9861;
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
cljs.core.async.Mult = (function (){var obj9863 = {};return obj9863;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10087 = (function (cs,ch,mult,meta10088){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10088 = meta10088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10087.cljs$lang$type = true;
cljs.core.async.t10087.cljs$lang$ctorStr = "cljs.core.async/t10087";
cljs.core.async.t10087.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10087");
});})(cs))
;
cljs.core.async.t10087.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10087.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10087.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10087.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10087.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10089){var self__ = this;
var _10089__$1 = this;return self__.meta10088;
});})(cs))
;
cljs.core.async.t10087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10089,meta10088__$1){var self__ = this;
var _10089__$1 = this;return (new cljs.core.async.t10087(self__.cs,self__.ch,self__.mult,meta10088__$1));
});})(cs))
;
cljs.core.async.__GT_t10087 = ((function (cs){
return (function __GT_t10087(cs__$1,ch__$1,mult__$1,meta10088){return (new cljs.core.async.t10087(cs__$1,ch__$1,mult__$1,meta10088));
});})(cs))
;
}
return (new cljs.core.async.t10087(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___10310 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10224){var state_val_10225 = (state_10224[1]);if((state_val_10225 === 32))
{var inst_10092 = (state_10224[7]);var inst_10168 = (state_10224[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10224,31,Object,null,30);var inst_10175 = cljs.core.async.put_BANG_.call(null,inst_10168,inst_10092,done);var state_10224__$1 = state_10224;var statearr_10226_10311 = state_10224__$1;(statearr_10226_10311[2] = inst_10175);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10224__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 1))
{var state_10224__$1 = state_10224;var statearr_10227_10312 = state_10224__$1;(statearr_10227_10312[2] = null);
(statearr_10227_10312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 33))
{var inst_10181 = (state_10224[9]);var inst_10183 = cljs.core.chunked_seq_QMARK_.call(null,inst_10181);var state_10224__$1 = state_10224;if(inst_10183)
{var statearr_10228_10313 = state_10224__$1;(statearr_10228_10313[1] = 36);
} else
{var statearr_10229_10314 = state_10224__$1;(statearr_10229_10314[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 2))
{var state_10224__$1 = state_10224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10224__$1,4,ch);
} else
{if((state_val_10225 === 34))
{var state_10224__$1 = state_10224;var statearr_10230_10315 = state_10224__$1;(statearr_10230_10315[2] = null);
(statearr_10230_10315[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 3))
{var inst_10222 = (state_10224[2]);var state_10224__$1 = state_10224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10224__$1,inst_10222);
} else
{if((state_val_10225 === 35))
{var inst_10206 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10231_10316 = state_10224__$1;(statearr_10231_10316[2] = inst_10206);
(statearr_10231_10316[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 4))
{var inst_10092 = (state_10224[7]);var inst_10092__$1 = (state_10224[2]);var inst_10093 = (inst_10092__$1 == null);var state_10224__$1 = (function (){var statearr_10232 = state_10224;(statearr_10232[7] = inst_10092__$1);
return statearr_10232;
})();if(cljs.core.truth_(inst_10093))
{var statearr_10233_10317 = state_10224__$1;(statearr_10233_10317[1] = 5);
} else
{var statearr_10234_10318 = state_10224__$1;(statearr_10234_10318[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 36))
{var inst_10181 = (state_10224[9]);var inst_10185 = cljs.core.chunk_first.call(null,inst_10181);var inst_10186 = cljs.core.chunk_rest.call(null,inst_10181);var inst_10187 = cljs.core.count.call(null,inst_10185);var inst_10160 = inst_10186;var inst_10161 = inst_10185;var inst_10162 = inst_10187;var inst_10163 = 0;var state_10224__$1 = (function (){var statearr_10235 = state_10224;(statearr_10235[10] = inst_10163);
(statearr_10235[11] = inst_10161);
(statearr_10235[12] = inst_10162);
(statearr_10235[13] = inst_10160);
return statearr_10235;
})();var statearr_10236_10319 = state_10224__$1;(statearr_10236_10319[2] = null);
(statearr_10236_10319[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 5))
{var inst_10099 = cljs.core.deref.call(null,cs);var inst_10100 = cljs.core.seq.call(null,inst_10099);var inst_10101 = inst_10100;var inst_10102 = null;var inst_10103 = 0;var inst_10104 = 0;var state_10224__$1 = (function (){var statearr_10237 = state_10224;(statearr_10237[14] = inst_10103);
(statearr_10237[15] = inst_10104);
(statearr_10237[16] = inst_10102);
(statearr_10237[17] = inst_10101);
return statearr_10237;
})();var statearr_10238_10320 = state_10224__$1;(statearr_10238_10320[2] = null);
(statearr_10238_10320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 37))
{var inst_10181 = (state_10224[9]);var inst_10190 = cljs.core.first.call(null,inst_10181);var state_10224__$1 = (function (){var statearr_10239 = state_10224;(statearr_10239[18] = inst_10190);
return statearr_10239;
})();var statearr_10240_10321 = state_10224__$1;(statearr_10240_10321[2] = null);
(statearr_10240_10321[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 6))
{var inst_10152 = (state_10224[19]);var inst_10151 = cljs.core.deref.call(null,cs);var inst_10152__$1 = cljs.core.keys.call(null,inst_10151);var inst_10153 = cljs.core.count.call(null,inst_10152__$1);var inst_10154 = cljs.core.reset_BANG_.call(null,dctr,inst_10153);var inst_10159 = cljs.core.seq.call(null,inst_10152__$1);var inst_10160 = inst_10159;var inst_10161 = null;var inst_10162 = 0;var inst_10163 = 0;var state_10224__$1 = (function (){var statearr_10241 = state_10224;(statearr_10241[10] = inst_10163);
(statearr_10241[11] = inst_10161);
(statearr_10241[12] = inst_10162);
(statearr_10241[13] = inst_10160);
(statearr_10241[20] = inst_10154);
(statearr_10241[19] = inst_10152__$1);
return statearr_10241;
})();var statearr_10242_10322 = state_10224__$1;(statearr_10242_10322[2] = null);
(statearr_10242_10322[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 38))
{var inst_10203 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10243_10323 = state_10224__$1;(statearr_10243_10323[2] = inst_10203);
(statearr_10243_10323[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 7))
{var inst_10220 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10244_10324 = state_10224__$1;(statearr_10244_10324[2] = inst_10220);
(statearr_10244_10324[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 39))
{var inst_10181 = (state_10224[9]);var inst_10199 = (state_10224[2]);var inst_10200 = cljs.core.next.call(null,inst_10181);var inst_10160 = inst_10200;var inst_10161 = null;var inst_10162 = 0;var inst_10163 = 0;var state_10224__$1 = (function (){var statearr_10245 = state_10224;(statearr_10245[10] = inst_10163);
(statearr_10245[11] = inst_10161);
(statearr_10245[12] = inst_10162);
(statearr_10245[13] = inst_10160);
(statearr_10245[21] = inst_10199);
return statearr_10245;
})();var statearr_10246_10325 = state_10224__$1;(statearr_10246_10325[2] = null);
(statearr_10246_10325[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 8))
{var inst_10103 = (state_10224[14]);var inst_10104 = (state_10224[15]);var inst_10106 = (inst_10104 < inst_10103);var inst_10107 = inst_10106;var state_10224__$1 = state_10224;if(cljs.core.truth_(inst_10107))
{var statearr_10247_10326 = state_10224__$1;(statearr_10247_10326[1] = 10);
} else
{var statearr_10248_10327 = state_10224__$1;(statearr_10248_10327[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 40))
{var inst_10190 = (state_10224[18]);var inst_10191 = (state_10224[2]);var inst_10192 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10193 = cljs.core.async.untap_STAR_.call(null,m,inst_10190);var state_10224__$1 = (function (){var statearr_10249 = state_10224;(statearr_10249[22] = inst_10191);
(statearr_10249[23] = inst_10192);
return statearr_10249;
})();var statearr_10250_10328 = state_10224__$1;(statearr_10250_10328[2] = inst_10193);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10224__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 9))
{var inst_10149 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10251_10329 = state_10224__$1;(statearr_10251_10329[2] = inst_10149);
(statearr_10251_10329[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 41))
{var inst_10092 = (state_10224[7]);var inst_10190 = (state_10224[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10224,40,Object,null,39);var inst_10197 = cljs.core.async.put_BANG_.call(null,inst_10190,inst_10092,done);var state_10224__$1 = state_10224;var statearr_10252_10330 = state_10224__$1;(statearr_10252_10330[2] = inst_10197);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10224__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 10))
{var inst_10104 = (state_10224[15]);var inst_10102 = (state_10224[16]);var inst_10110 = cljs.core._nth.call(null,inst_10102,inst_10104);var inst_10111 = cljs.core.nth.call(null,inst_10110,0,null);var inst_10112 = cljs.core.nth.call(null,inst_10110,1,null);var state_10224__$1 = (function (){var statearr_10253 = state_10224;(statearr_10253[24] = inst_10111);
return statearr_10253;
})();if(cljs.core.truth_(inst_10112))
{var statearr_10254_10331 = state_10224__$1;(statearr_10254_10331[1] = 13);
} else
{var statearr_10255_10332 = state_10224__$1;(statearr_10255_10332[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 42))
{var state_10224__$1 = state_10224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10224__$1,45,dchan);
} else
{if((state_val_10225 === 11))
{var inst_10121 = (state_10224[25]);var inst_10101 = (state_10224[17]);var inst_10121__$1 = cljs.core.seq.call(null,inst_10101);var state_10224__$1 = (function (){var statearr_10256 = state_10224;(statearr_10256[25] = inst_10121__$1);
return statearr_10256;
})();if(inst_10121__$1)
{var statearr_10257_10333 = state_10224__$1;(statearr_10257_10333[1] = 16);
} else
{var statearr_10258_10334 = state_10224__$1;(statearr_10258_10334[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 43))
{var state_10224__$1 = state_10224;var statearr_10259_10335 = state_10224__$1;(statearr_10259_10335[2] = null);
(statearr_10259_10335[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 12))
{var inst_10147 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10260_10336 = state_10224__$1;(statearr_10260_10336[2] = inst_10147);
(statearr_10260_10336[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 44))
{var inst_10217 = (state_10224[2]);var state_10224__$1 = (function (){var statearr_10261 = state_10224;(statearr_10261[26] = inst_10217);
return statearr_10261;
})();var statearr_10262_10337 = state_10224__$1;(statearr_10262_10337[2] = null);
(statearr_10262_10337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 13))
{var inst_10111 = (state_10224[24]);var inst_10114 = cljs.core.async.close_BANG_.call(null,inst_10111);var state_10224__$1 = state_10224;var statearr_10263_10338 = state_10224__$1;(statearr_10263_10338[2] = inst_10114);
(statearr_10263_10338[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 45))
{var inst_10214 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10267_10339 = state_10224__$1;(statearr_10267_10339[2] = inst_10214);
(statearr_10267_10339[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 14))
{var state_10224__$1 = state_10224;var statearr_10268_10340 = state_10224__$1;(statearr_10268_10340[2] = null);
(statearr_10268_10340[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 15))
{var inst_10103 = (state_10224[14]);var inst_10104 = (state_10224[15]);var inst_10102 = (state_10224[16]);var inst_10101 = (state_10224[17]);var inst_10117 = (state_10224[2]);var inst_10118 = (inst_10104 + 1);var tmp10264 = inst_10103;var tmp10265 = inst_10102;var tmp10266 = inst_10101;var inst_10101__$1 = tmp10266;var inst_10102__$1 = tmp10265;var inst_10103__$1 = tmp10264;var inst_10104__$1 = inst_10118;var state_10224__$1 = (function (){var statearr_10269 = state_10224;(statearr_10269[27] = inst_10117);
(statearr_10269[14] = inst_10103__$1);
(statearr_10269[15] = inst_10104__$1);
(statearr_10269[16] = inst_10102__$1);
(statearr_10269[17] = inst_10101__$1);
return statearr_10269;
})();var statearr_10270_10341 = state_10224__$1;(statearr_10270_10341[2] = null);
(statearr_10270_10341[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 16))
{var inst_10121 = (state_10224[25]);var inst_10123 = cljs.core.chunked_seq_QMARK_.call(null,inst_10121);var state_10224__$1 = state_10224;if(inst_10123)
{var statearr_10271_10342 = state_10224__$1;(statearr_10271_10342[1] = 19);
} else
{var statearr_10272_10343 = state_10224__$1;(statearr_10272_10343[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 17))
{var state_10224__$1 = state_10224;var statearr_10273_10344 = state_10224__$1;(statearr_10273_10344[2] = null);
(statearr_10273_10344[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 18))
{var inst_10145 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10274_10345 = state_10224__$1;(statearr_10274_10345[2] = inst_10145);
(statearr_10274_10345[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 19))
{var inst_10121 = (state_10224[25]);var inst_10125 = cljs.core.chunk_first.call(null,inst_10121);var inst_10126 = cljs.core.chunk_rest.call(null,inst_10121);var inst_10127 = cljs.core.count.call(null,inst_10125);var inst_10101 = inst_10126;var inst_10102 = inst_10125;var inst_10103 = inst_10127;var inst_10104 = 0;var state_10224__$1 = (function (){var statearr_10275 = state_10224;(statearr_10275[14] = inst_10103);
(statearr_10275[15] = inst_10104);
(statearr_10275[16] = inst_10102);
(statearr_10275[17] = inst_10101);
return statearr_10275;
})();var statearr_10276_10346 = state_10224__$1;(statearr_10276_10346[2] = null);
(statearr_10276_10346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 20))
{var inst_10121 = (state_10224[25]);var inst_10131 = cljs.core.first.call(null,inst_10121);var inst_10132 = cljs.core.nth.call(null,inst_10131,0,null);var inst_10133 = cljs.core.nth.call(null,inst_10131,1,null);var state_10224__$1 = (function (){var statearr_10277 = state_10224;(statearr_10277[28] = inst_10132);
return statearr_10277;
})();if(cljs.core.truth_(inst_10133))
{var statearr_10278_10347 = state_10224__$1;(statearr_10278_10347[1] = 22);
} else
{var statearr_10279_10348 = state_10224__$1;(statearr_10279_10348[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 21))
{var inst_10142 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10280_10349 = state_10224__$1;(statearr_10280_10349[2] = inst_10142);
(statearr_10280_10349[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 22))
{var inst_10132 = (state_10224[28]);var inst_10135 = cljs.core.async.close_BANG_.call(null,inst_10132);var state_10224__$1 = state_10224;var statearr_10281_10350 = state_10224__$1;(statearr_10281_10350[2] = inst_10135);
(statearr_10281_10350[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 23))
{var state_10224__$1 = state_10224;var statearr_10282_10351 = state_10224__$1;(statearr_10282_10351[2] = null);
(statearr_10282_10351[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 24))
{var inst_10121 = (state_10224[25]);var inst_10138 = (state_10224[2]);var inst_10139 = cljs.core.next.call(null,inst_10121);var inst_10101 = inst_10139;var inst_10102 = null;var inst_10103 = 0;var inst_10104 = 0;var state_10224__$1 = (function (){var statearr_10283 = state_10224;(statearr_10283[14] = inst_10103);
(statearr_10283[15] = inst_10104);
(statearr_10283[16] = inst_10102);
(statearr_10283[17] = inst_10101);
(statearr_10283[29] = inst_10138);
return statearr_10283;
})();var statearr_10284_10352 = state_10224__$1;(statearr_10284_10352[2] = null);
(statearr_10284_10352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 25))
{var inst_10163 = (state_10224[10]);var inst_10162 = (state_10224[12]);var inst_10165 = (inst_10163 < inst_10162);var inst_10166 = inst_10165;var state_10224__$1 = state_10224;if(cljs.core.truth_(inst_10166))
{var statearr_10285_10353 = state_10224__$1;(statearr_10285_10353[1] = 27);
} else
{var statearr_10286_10354 = state_10224__$1;(statearr_10286_10354[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 26))
{var inst_10152 = (state_10224[19]);var inst_10210 = (state_10224[2]);var inst_10211 = cljs.core.seq.call(null,inst_10152);var state_10224__$1 = (function (){var statearr_10287 = state_10224;(statearr_10287[30] = inst_10210);
return statearr_10287;
})();if(inst_10211)
{var statearr_10288_10355 = state_10224__$1;(statearr_10288_10355[1] = 42);
} else
{var statearr_10289_10356 = state_10224__$1;(statearr_10289_10356[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 27))
{var inst_10163 = (state_10224[10]);var inst_10161 = (state_10224[11]);var inst_10168 = cljs.core._nth.call(null,inst_10161,inst_10163);var state_10224__$1 = (function (){var statearr_10290 = state_10224;(statearr_10290[8] = inst_10168);
return statearr_10290;
})();var statearr_10291_10357 = state_10224__$1;(statearr_10291_10357[2] = null);
(statearr_10291_10357[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 28))
{var inst_10160 = (state_10224[13]);var inst_10181 = (state_10224[9]);var inst_10181__$1 = cljs.core.seq.call(null,inst_10160);var state_10224__$1 = (function (){var statearr_10295 = state_10224;(statearr_10295[9] = inst_10181__$1);
return statearr_10295;
})();if(inst_10181__$1)
{var statearr_10296_10358 = state_10224__$1;(statearr_10296_10358[1] = 33);
} else
{var statearr_10297_10359 = state_10224__$1;(statearr_10297_10359[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 29))
{var inst_10208 = (state_10224[2]);var state_10224__$1 = state_10224;var statearr_10298_10360 = state_10224__$1;(statearr_10298_10360[2] = inst_10208);
(statearr_10298_10360[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 30))
{var inst_10163 = (state_10224[10]);var inst_10161 = (state_10224[11]);var inst_10162 = (state_10224[12]);var inst_10160 = (state_10224[13]);var inst_10177 = (state_10224[2]);var inst_10178 = (inst_10163 + 1);var tmp10292 = inst_10161;var tmp10293 = inst_10162;var tmp10294 = inst_10160;var inst_10160__$1 = tmp10294;var inst_10161__$1 = tmp10292;var inst_10162__$1 = tmp10293;var inst_10163__$1 = inst_10178;var state_10224__$1 = (function (){var statearr_10299 = state_10224;(statearr_10299[10] = inst_10163__$1);
(statearr_10299[11] = inst_10161__$1);
(statearr_10299[12] = inst_10162__$1);
(statearr_10299[13] = inst_10160__$1);
(statearr_10299[31] = inst_10177);
return statearr_10299;
})();var statearr_10300_10361 = state_10224__$1;(statearr_10300_10361[2] = null);
(statearr_10300_10361[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10225 === 31))
{var inst_10168 = (state_10224[8]);var inst_10169 = (state_10224[2]);var inst_10170 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10171 = cljs.core.async.untap_STAR_.call(null,m,inst_10168);var state_10224__$1 = (function (){var statearr_10301 = state_10224;(statearr_10301[32] = inst_10169);
(statearr_10301[33] = inst_10170);
return statearr_10301;
})();var statearr_10302_10362 = state_10224__$1;(statearr_10302_10362[2] = inst_10171);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10224__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_10306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10306[0] = state_machine__6178__auto__);
(statearr_10306[1] = 1);
return statearr_10306;
});
var state_machine__6178__auto____1 = (function (state_10224){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10224);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10307){if((e10307 instanceof Object))
{var ex__6181__auto__ = e10307;var statearr_10308_10363 = state_10224;(statearr_10308_10363[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10364 = state_10224;
state_10224 = G__10364;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10224){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10309 = f__6193__auto__.call(null);(statearr_10309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10310);
return statearr_10309;
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
cljs.core.async.Mix = (function (){var obj10366 = {};return obj10366;
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
;var m = (function (){if(typeof cljs.core.async.t10476 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10476 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10477){
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
this.meta10477 = meta10477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10476.cljs$lang$type = true;
cljs.core.async.t10476.cljs$lang$ctorStr = "cljs.core.async/t10476";
cljs.core.async.t10476.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10476");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10476.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10476.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10476.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10476.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10476.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10476.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10476.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10478){var self__ = this;
var _10478__$1 = this;return self__.meta10477;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10478,meta10477__$1){var self__ = this;
var _10478__$1 = this;return (new cljs.core.async.t10476(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10477__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10476 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10476(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10477){return (new cljs.core.async.t10476(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10477));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10476(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___10585 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10543){var state_val_10544 = (state_10543[1]);if((state_val_10544 === 1))
{var inst_10482 = (state_10543[7]);var inst_10482__$1 = calc_state.call(null);var inst_10483 = cljs.core.seq_QMARK_.call(null,inst_10482__$1);var state_10543__$1 = (function (){var statearr_10545 = state_10543;(statearr_10545[7] = inst_10482__$1);
return statearr_10545;
})();if(inst_10483)
{var statearr_10546_10586 = state_10543__$1;(statearr_10546_10586[1] = 2);
} else
{var statearr_10547_10587 = state_10543__$1;(statearr_10547_10587[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 2))
{var inst_10482 = (state_10543[7]);var inst_10485 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10482);var state_10543__$1 = state_10543;var statearr_10548_10588 = state_10543__$1;(statearr_10548_10588[2] = inst_10485);
(statearr_10548_10588[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 3))
{var inst_10482 = (state_10543[7]);var state_10543__$1 = state_10543;var statearr_10549_10589 = state_10543__$1;(statearr_10549_10589[2] = inst_10482);
(statearr_10549_10589[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 4))
{var inst_10482 = (state_10543[7]);var inst_10488 = (state_10543[2]);var inst_10489 = cljs.core.get.call(null,inst_10488,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10490 = cljs.core.get.call(null,inst_10488,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10491 = cljs.core.get.call(null,inst_10488,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10492 = inst_10482;var state_10543__$1 = (function (){var statearr_10550 = state_10543;(statearr_10550[8] = inst_10489);
(statearr_10550[9] = inst_10491);
(statearr_10550[10] = inst_10492);
(statearr_10550[11] = inst_10490);
return statearr_10550;
})();var statearr_10551_10590 = state_10543__$1;(statearr_10551_10590[2] = null);
(statearr_10551_10590[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 5))
{var inst_10492 = (state_10543[10]);var inst_10495 = cljs.core.seq_QMARK_.call(null,inst_10492);var state_10543__$1 = state_10543;if(inst_10495)
{var statearr_10552_10591 = state_10543__$1;(statearr_10552_10591[1] = 7);
} else
{var statearr_10553_10592 = state_10543__$1;(statearr_10553_10592[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 6))
{var inst_10541 = (state_10543[2]);var state_10543__$1 = state_10543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10543__$1,inst_10541);
} else
{if((state_val_10544 === 7))
{var inst_10492 = (state_10543[10]);var inst_10497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10492);var state_10543__$1 = state_10543;var statearr_10554_10593 = state_10543__$1;(statearr_10554_10593[2] = inst_10497);
(statearr_10554_10593[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 8))
{var inst_10492 = (state_10543[10]);var state_10543__$1 = state_10543;var statearr_10555_10594 = state_10543__$1;(statearr_10555_10594[2] = inst_10492);
(statearr_10555_10594[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 9))
{var inst_10500 = (state_10543[12]);var inst_10500__$1 = (state_10543[2]);var inst_10501 = cljs.core.get.call(null,inst_10500__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10502 = cljs.core.get.call(null,inst_10500__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10503 = cljs.core.get.call(null,inst_10500__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10543__$1 = (function (){var statearr_10556 = state_10543;(statearr_10556[13] = inst_10503);
(statearr_10556[12] = inst_10500__$1);
(statearr_10556[14] = inst_10502);
return statearr_10556;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10543__$1,10,inst_10501);
} else
{if((state_val_10544 === 10))
{var inst_10507 = (state_10543[15]);var inst_10508 = (state_10543[16]);var inst_10506 = (state_10543[2]);var inst_10507__$1 = cljs.core.nth.call(null,inst_10506,0,null);var inst_10508__$1 = cljs.core.nth.call(null,inst_10506,1,null);var inst_10509 = (inst_10507__$1 == null);var inst_10510 = cljs.core._EQ_.call(null,inst_10508__$1,change);var inst_10511 = (inst_10509) || (inst_10510);var state_10543__$1 = (function (){var statearr_10557 = state_10543;(statearr_10557[15] = inst_10507__$1);
(statearr_10557[16] = inst_10508__$1);
return statearr_10557;
})();if(cljs.core.truth_(inst_10511))
{var statearr_10558_10595 = state_10543__$1;(statearr_10558_10595[1] = 11);
} else
{var statearr_10559_10596 = state_10543__$1;(statearr_10559_10596[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 11))
{var inst_10507 = (state_10543[15]);var inst_10513 = (inst_10507 == null);var state_10543__$1 = state_10543;if(cljs.core.truth_(inst_10513))
{var statearr_10560_10597 = state_10543__$1;(statearr_10560_10597[1] = 14);
} else
{var statearr_10561_10598 = state_10543__$1;(statearr_10561_10598[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 12))
{var inst_10522 = (state_10543[17]);var inst_10503 = (state_10543[13]);var inst_10508 = (state_10543[16]);var inst_10522__$1 = inst_10503.call(null,inst_10508);var state_10543__$1 = (function (){var statearr_10562 = state_10543;(statearr_10562[17] = inst_10522__$1);
return statearr_10562;
})();if(cljs.core.truth_(inst_10522__$1))
{var statearr_10563_10599 = state_10543__$1;(statearr_10563_10599[1] = 17);
} else
{var statearr_10564_10600 = state_10543__$1;(statearr_10564_10600[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 13))
{var inst_10539 = (state_10543[2]);var state_10543__$1 = state_10543;var statearr_10565_10601 = state_10543__$1;(statearr_10565_10601[2] = inst_10539);
(statearr_10565_10601[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 14))
{var inst_10508 = (state_10543[16]);var inst_10515 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10508);var state_10543__$1 = state_10543;var statearr_10566_10602 = state_10543__$1;(statearr_10566_10602[2] = inst_10515);
(statearr_10566_10602[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 15))
{var state_10543__$1 = state_10543;var statearr_10567_10603 = state_10543__$1;(statearr_10567_10603[2] = null);
(statearr_10567_10603[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 16))
{var inst_10518 = (state_10543[2]);var inst_10519 = calc_state.call(null);var inst_10492 = inst_10519;var state_10543__$1 = (function (){var statearr_10568 = state_10543;(statearr_10568[10] = inst_10492);
(statearr_10568[18] = inst_10518);
return statearr_10568;
})();var statearr_10569_10604 = state_10543__$1;(statearr_10569_10604[2] = null);
(statearr_10569_10604[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 17))
{var inst_10522 = (state_10543[17]);var state_10543__$1 = state_10543;var statearr_10570_10605 = state_10543__$1;(statearr_10570_10605[2] = inst_10522);
(statearr_10570_10605[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 18))
{var inst_10503 = (state_10543[13]);var inst_10508 = (state_10543[16]);var inst_10502 = (state_10543[14]);var inst_10525 = cljs.core.empty_QMARK_.call(null,inst_10503);var inst_10526 = inst_10502.call(null,inst_10508);var inst_10527 = cljs.core.not.call(null,inst_10526);var inst_10528 = (inst_10525) && (inst_10527);var state_10543__$1 = state_10543;var statearr_10571_10606 = state_10543__$1;(statearr_10571_10606[2] = inst_10528);
(statearr_10571_10606[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 19))
{var inst_10530 = (state_10543[2]);var state_10543__$1 = state_10543;if(cljs.core.truth_(inst_10530))
{var statearr_10572_10607 = state_10543__$1;(statearr_10572_10607[1] = 20);
} else
{var statearr_10573_10608 = state_10543__$1;(statearr_10573_10608[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 20))
{var inst_10507 = (state_10543[15]);var state_10543__$1 = state_10543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10543__$1,23,out,inst_10507);
} else
{if((state_val_10544 === 21))
{var state_10543__$1 = state_10543;var statearr_10574_10609 = state_10543__$1;(statearr_10574_10609[2] = null);
(statearr_10574_10609[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 22))
{var inst_10500 = (state_10543[12]);var inst_10536 = (state_10543[2]);var inst_10492 = inst_10500;var state_10543__$1 = (function (){var statearr_10575 = state_10543;(statearr_10575[19] = inst_10536);
(statearr_10575[10] = inst_10492);
return statearr_10575;
})();var statearr_10576_10610 = state_10543__$1;(statearr_10576_10610[2] = null);
(statearr_10576_10610[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10544 === 23))
{var inst_10533 = (state_10543[2]);var state_10543__$1 = state_10543;var statearr_10577_10611 = state_10543__$1;(statearr_10577_10611[2] = inst_10533);
(statearr_10577_10611[1] = 22);
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
var state_machine__6178__auto____0 = (function (){var statearr_10581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10581[0] = state_machine__6178__auto__);
(statearr_10581[1] = 1);
return statearr_10581;
});
var state_machine__6178__auto____1 = (function (state_10543){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10543);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10582){if((e10582 instanceof Object))
{var ex__6181__auto__ = e10582;var statearr_10583_10612 = state_10543;(statearr_10583_10612[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10613 = state_10543;
state_10543 = G__10613;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10543){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10584 = f__6193__auto__.call(null);(statearr_10584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10585);
return statearr_10584;
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
cljs.core.async.Pub = (function (){var obj10615 = {};return obj10615;
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
return (function (p1__10616_SHARP_){if(cljs.core.truth_(p1__10616_SHARP_.call(null,topic)))
{return p1__10616_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10616_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10741 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10741 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10742){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10742 = meta10742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10741.cljs$lang$type = true;
cljs.core.async.t10741.cljs$lang$ctorStr = "cljs.core.async/t10741";
cljs.core.async.t10741.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10741");
});})(mults,ensure_mult))
;
cljs.core.async.t10741.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10741.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10741.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10741.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10741.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10741.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10743){var self__ = this;
var _10743__$1 = this;return self__.meta10742;
});})(mults,ensure_mult))
;
cljs.core.async.t10741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10743,meta10742__$1){var self__ = this;
var _10743__$1 = this;return (new cljs.core.async.t10741(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10742__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10741 = ((function (mults,ensure_mult){
return (function __GT_t10741(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10742){return (new cljs.core.async.t10741(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10742));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10741(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___10865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10817){var state_val_10818 = (state_10817[1]);if((state_val_10818 === 1))
{var state_10817__$1 = state_10817;var statearr_10819_10866 = state_10817__$1;(statearr_10819_10866[2] = null);
(statearr_10819_10866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 2))
{var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10817__$1,4,ch);
} else
{if((state_val_10818 === 3))
{var inst_10815 = (state_10817[2]);var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10817__$1,inst_10815);
} else
{if((state_val_10818 === 4))
{var inst_10746 = (state_10817[7]);var inst_10746__$1 = (state_10817[2]);var inst_10747 = (inst_10746__$1 == null);var state_10817__$1 = (function (){var statearr_10820 = state_10817;(statearr_10820[7] = inst_10746__$1);
return statearr_10820;
})();if(cljs.core.truth_(inst_10747))
{var statearr_10821_10867 = state_10817__$1;(statearr_10821_10867[1] = 5);
} else
{var statearr_10822_10868 = state_10817__$1;(statearr_10822_10868[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 5))
{var inst_10753 = cljs.core.deref.call(null,mults);var inst_10754 = cljs.core.vals.call(null,inst_10753);var inst_10755 = cljs.core.seq.call(null,inst_10754);var inst_10756 = inst_10755;var inst_10757 = null;var inst_10758 = 0;var inst_10759 = 0;var state_10817__$1 = (function (){var statearr_10823 = state_10817;(statearr_10823[8] = inst_10757);
(statearr_10823[9] = inst_10756);
(statearr_10823[10] = inst_10759);
(statearr_10823[11] = inst_10758);
return statearr_10823;
})();var statearr_10824_10869 = state_10817__$1;(statearr_10824_10869[2] = null);
(statearr_10824_10869[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 6))
{var inst_10746 = (state_10817[7]);var inst_10796 = (state_10817[12]);var inst_10794 = (state_10817[13]);var inst_10794__$1 = topic_fn.call(null,inst_10746);var inst_10795 = cljs.core.deref.call(null,mults);var inst_10796__$1 = cljs.core.get.call(null,inst_10795,inst_10794__$1);var state_10817__$1 = (function (){var statearr_10825 = state_10817;(statearr_10825[12] = inst_10796__$1);
(statearr_10825[13] = inst_10794__$1);
return statearr_10825;
})();if(cljs.core.truth_(inst_10796__$1))
{var statearr_10826_10870 = state_10817__$1;(statearr_10826_10870[1] = 19);
} else
{var statearr_10827_10871 = state_10817__$1;(statearr_10827_10871[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 7))
{var inst_10813 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10828_10872 = state_10817__$1;(statearr_10828_10872[2] = inst_10813);
(statearr_10828_10872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 8))
{var inst_10759 = (state_10817[10]);var inst_10758 = (state_10817[11]);var inst_10761 = (inst_10759 < inst_10758);var inst_10762 = inst_10761;var state_10817__$1 = state_10817;if(cljs.core.truth_(inst_10762))
{var statearr_10832_10873 = state_10817__$1;(statearr_10832_10873[1] = 10);
} else
{var statearr_10833_10874 = state_10817__$1;(statearr_10833_10874[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 9))
{var inst_10792 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10834_10875 = state_10817__$1;(statearr_10834_10875[2] = inst_10792);
(statearr_10834_10875[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 10))
{var inst_10757 = (state_10817[8]);var inst_10756 = (state_10817[9]);var inst_10759 = (state_10817[10]);var inst_10758 = (state_10817[11]);var inst_10764 = cljs.core._nth.call(null,inst_10757,inst_10759);var inst_10765 = cljs.core.async.muxch_STAR_.call(null,inst_10764);var inst_10766 = cljs.core.async.close_BANG_.call(null,inst_10765);var inst_10767 = (inst_10759 + 1);var tmp10829 = inst_10757;var tmp10830 = inst_10756;var tmp10831 = inst_10758;var inst_10756__$1 = tmp10830;var inst_10757__$1 = tmp10829;var inst_10758__$1 = tmp10831;var inst_10759__$1 = inst_10767;var state_10817__$1 = (function (){var statearr_10835 = state_10817;(statearr_10835[14] = inst_10766);
(statearr_10835[8] = inst_10757__$1);
(statearr_10835[9] = inst_10756__$1);
(statearr_10835[10] = inst_10759__$1);
(statearr_10835[11] = inst_10758__$1);
return statearr_10835;
})();var statearr_10836_10876 = state_10817__$1;(statearr_10836_10876[2] = null);
(statearr_10836_10876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 11))
{var inst_10770 = (state_10817[15]);var inst_10756 = (state_10817[9]);var inst_10770__$1 = cljs.core.seq.call(null,inst_10756);var state_10817__$1 = (function (){var statearr_10837 = state_10817;(statearr_10837[15] = inst_10770__$1);
return statearr_10837;
})();if(inst_10770__$1)
{var statearr_10838_10877 = state_10817__$1;(statearr_10838_10877[1] = 13);
} else
{var statearr_10839_10878 = state_10817__$1;(statearr_10839_10878[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 12))
{var inst_10790 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10840_10879 = state_10817__$1;(statearr_10840_10879[2] = inst_10790);
(statearr_10840_10879[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 13))
{var inst_10770 = (state_10817[15]);var inst_10772 = cljs.core.chunked_seq_QMARK_.call(null,inst_10770);var state_10817__$1 = state_10817;if(inst_10772)
{var statearr_10841_10880 = state_10817__$1;(statearr_10841_10880[1] = 16);
} else
{var statearr_10842_10881 = state_10817__$1;(statearr_10842_10881[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 14))
{var state_10817__$1 = state_10817;var statearr_10843_10882 = state_10817__$1;(statearr_10843_10882[2] = null);
(statearr_10843_10882[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 15))
{var inst_10788 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10844_10883 = state_10817__$1;(statearr_10844_10883[2] = inst_10788);
(statearr_10844_10883[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 16))
{var inst_10770 = (state_10817[15]);var inst_10774 = cljs.core.chunk_first.call(null,inst_10770);var inst_10775 = cljs.core.chunk_rest.call(null,inst_10770);var inst_10776 = cljs.core.count.call(null,inst_10774);var inst_10756 = inst_10775;var inst_10757 = inst_10774;var inst_10758 = inst_10776;var inst_10759 = 0;var state_10817__$1 = (function (){var statearr_10845 = state_10817;(statearr_10845[8] = inst_10757);
(statearr_10845[9] = inst_10756);
(statearr_10845[10] = inst_10759);
(statearr_10845[11] = inst_10758);
return statearr_10845;
})();var statearr_10846_10884 = state_10817__$1;(statearr_10846_10884[2] = null);
(statearr_10846_10884[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 17))
{var inst_10770 = (state_10817[15]);var inst_10779 = cljs.core.first.call(null,inst_10770);var inst_10780 = cljs.core.async.muxch_STAR_.call(null,inst_10779);var inst_10781 = cljs.core.async.close_BANG_.call(null,inst_10780);var inst_10782 = cljs.core.next.call(null,inst_10770);var inst_10756 = inst_10782;var inst_10757 = null;var inst_10758 = 0;var inst_10759 = 0;var state_10817__$1 = (function (){var statearr_10847 = state_10817;(statearr_10847[8] = inst_10757);
(statearr_10847[9] = inst_10756);
(statearr_10847[10] = inst_10759);
(statearr_10847[11] = inst_10758);
(statearr_10847[16] = inst_10781);
return statearr_10847;
})();var statearr_10848_10885 = state_10817__$1;(statearr_10848_10885[2] = null);
(statearr_10848_10885[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 18))
{var inst_10785 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10849_10886 = state_10817__$1;(statearr_10849_10886[2] = inst_10785);
(statearr_10849_10886[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 19))
{var state_10817__$1 = state_10817;var statearr_10850_10887 = state_10817__$1;(statearr_10850_10887[2] = null);
(statearr_10850_10887[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 20))
{var state_10817__$1 = state_10817;var statearr_10851_10888 = state_10817__$1;(statearr_10851_10888[2] = null);
(statearr_10851_10888[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 21))
{var inst_10810 = (state_10817[2]);var state_10817__$1 = (function (){var statearr_10852 = state_10817;(statearr_10852[17] = inst_10810);
return statearr_10852;
})();var statearr_10853_10889 = state_10817__$1;(statearr_10853_10889[2] = null);
(statearr_10853_10889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 22))
{var inst_10807 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10854_10890 = state_10817__$1;(statearr_10854_10890[2] = inst_10807);
(statearr_10854_10890[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 23))
{var inst_10794 = (state_10817[13]);var inst_10798 = (state_10817[2]);var inst_10799 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10794);var state_10817__$1 = (function (){var statearr_10855 = state_10817;(statearr_10855[18] = inst_10798);
return statearr_10855;
})();var statearr_10856_10891 = state_10817__$1;(statearr_10856_10891[2] = inst_10799);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10817__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 24))
{var inst_10746 = (state_10817[7]);var inst_10796 = (state_10817[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10817,23,Object,null,22);var inst_10803 = cljs.core.async.muxch_STAR_.call(null,inst_10796);var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10817__$1,25,inst_10803,inst_10746);
} else
{if((state_val_10818 === 25))
{var inst_10805 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10857_10892 = state_10817__$1;(statearr_10857_10892[2] = inst_10805);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10817__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_10861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10861[0] = state_machine__6178__auto__);
(statearr_10861[1] = 1);
return statearr_10861;
});
var state_machine__6178__auto____1 = (function (state_10817){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10817);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10862){if((e10862 instanceof Object))
{var ex__6181__auto__ = e10862;var statearr_10863_10893 = state_10817;(statearr_10863_10893[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10817);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10894 = state_10817;
state_10817 = G__10894;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10817){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10864 = f__6193__auto__.call(null);(statearr_10864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10865);
return statearr_10864;
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
,cljs.core.range.call(null,cnt));var c__6192__auto___11031 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11001){var state_val_11002 = (state_11001[1]);if((state_val_11002 === 1))
{var state_11001__$1 = state_11001;var statearr_11003_11032 = state_11001__$1;(statearr_11003_11032[2] = null);
(statearr_11003_11032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 2))
{var inst_10964 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10965 = 0;var state_11001__$1 = (function (){var statearr_11004 = state_11001;(statearr_11004[7] = inst_10964);
(statearr_11004[8] = inst_10965);
return statearr_11004;
})();var statearr_11005_11033 = state_11001__$1;(statearr_11005_11033[2] = null);
(statearr_11005_11033[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 3))
{var inst_10999 = (state_11001[2]);var state_11001__$1 = state_11001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11001__$1,inst_10999);
} else
{if((state_val_11002 === 4))
{var inst_10965 = (state_11001[8]);var inst_10967 = (inst_10965 < cnt);var state_11001__$1 = state_11001;if(cljs.core.truth_(inst_10967))
{var statearr_11006_11034 = state_11001__$1;(statearr_11006_11034[1] = 6);
} else
{var statearr_11007_11035 = state_11001__$1;(statearr_11007_11035[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 5))
{var inst_10985 = (state_11001[2]);var state_11001__$1 = (function (){var statearr_11008 = state_11001;(statearr_11008[9] = inst_10985);
return statearr_11008;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11001__$1,12,dchan);
} else
{if((state_val_11002 === 6))
{var state_11001__$1 = state_11001;var statearr_11009_11036 = state_11001__$1;(statearr_11009_11036[2] = null);
(statearr_11009_11036[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 7))
{var state_11001__$1 = state_11001;var statearr_11010_11037 = state_11001__$1;(statearr_11010_11037[2] = null);
(statearr_11010_11037[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 8))
{var inst_10983 = (state_11001[2]);var state_11001__$1 = state_11001;var statearr_11011_11038 = state_11001__$1;(statearr_11011_11038[2] = inst_10983);
(statearr_11011_11038[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 9))
{var inst_10965 = (state_11001[8]);var inst_10978 = (state_11001[2]);var inst_10979 = (inst_10965 + 1);var inst_10965__$1 = inst_10979;var state_11001__$1 = (function (){var statearr_11012 = state_11001;(statearr_11012[10] = inst_10978);
(statearr_11012[8] = inst_10965__$1);
return statearr_11012;
})();var statearr_11013_11039 = state_11001__$1;(statearr_11013_11039[2] = null);
(statearr_11013_11039[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 10))
{var inst_10969 = (state_11001[2]);var inst_10970 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11001__$1 = (function (){var statearr_11014 = state_11001;(statearr_11014[11] = inst_10969);
return statearr_11014;
})();var statearr_11015_11040 = state_11001__$1;(statearr_11015_11040[2] = inst_10970);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11001__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 11))
{var inst_10965 = (state_11001[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11001,10,Object,null,9);var inst_10974 = chs__$1.call(null,inst_10965);var inst_10975 = done.call(null,inst_10965);var inst_10976 = cljs.core.async.take_BANG_.call(null,inst_10974,inst_10975);var state_11001__$1 = state_11001;var statearr_11016_11041 = state_11001__$1;(statearr_11016_11041[2] = inst_10976);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11001__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 12))
{var inst_10987 = (state_11001[12]);var inst_10987__$1 = (state_11001[2]);var inst_10988 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10987__$1);var state_11001__$1 = (function (){var statearr_11017 = state_11001;(statearr_11017[12] = inst_10987__$1);
return statearr_11017;
})();if(cljs.core.truth_(inst_10988))
{var statearr_11018_11042 = state_11001__$1;(statearr_11018_11042[1] = 13);
} else
{var statearr_11019_11043 = state_11001__$1;(statearr_11019_11043[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 13))
{var inst_10990 = cljs.core.async.close_BANG_.call(null,out);var state_11001__$1 = state_11001;var statearr_11020_11044 = state_11001__$1;(statearr_11020_11044[2] = inst_10990);
(statearr_11020_11044[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 14))
{var inst_10987 = (state_11001[12]);var inst_10992 = cljs.core.apply.call(null,f,inst_10987);var state_11001__$1 = state_11001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11001__$1,16,out,inst_10992);
} else
{if((state_val_11002 === 15))
{var inst_10997 = (state_11001[2]);var state_11001__$1 = state_11001;var statearr_11021_11045 = state_11001__$1;(statearr_11021_11045[2] = inst_10997);
(statearr_11021_11045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11002 === 16))
{var inst_10994 = (state_11001[2]);var state_11001__$1 = (function (){var statearr_11022 = state_11001;(statearr_11022[13] = inst_10994);
return statearr_11022;
})();var statearr_11023_11046 = state_11001__$1;(statearr_11023_11046[2] = null);
(statearr_11023_11046[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11027[0] = state_machine__6178__auto__);
(statearr_11027[1] = 1);
return statearr_11027;
});
var state_machine__6178__auto____1 = (function (state_11001){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11001);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11028){if((e11028 instanceof Object))
{var ex__6181__auto__ = e11028;var statearr_11029_11047 = state_11001;(statearr_11029_11047[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11001);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11048 = state_11001;
state_11001 = G__11048;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11001){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11030 = f__6193__auto__.call(null);(statearr_11030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11031);
return statearr_11030;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11156 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11132){var state_val_11133 = (state_11132[1]);if((state_val_11133 === 1))
{var inst_11103 = cljs.core.vec.call(null,chs);var inst_11104 = inst_11103;var state_11132__$1 = (function (){var statearr_11134 = state_11132;(statearr_11134[7] = inst_11104);
return statearr_11134;
})();var statearr_11135_11157 = state_11132__$1;(statearr_11135_11157[2] = null);
(statearr_11135_11157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11133 === 2))
{var inst_11104 = (state_11132[7]);var inst_11106 = cljs.core.count.call(null,inst_11104);var inst_11107 = (inst_11106 > 0);var state_11132__$1 = state_11132;if(cljs.core.truth_(inst_11107))
{var statearr_11136_11158 = state_11132__$1;(statearr_11136_11158[1] = 4);
} else
{var statearr_11137_11159 = state_11132__$1;(statearr_11137_11159[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11133 === 3))
{var inst_11130 = (state_11132[2]);var state_11132__$1 = state_11132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11132__$1,inst_11130);
} else
{if((state_val_11133 === 4))
{var inst_11104 = (state_11132[7]);var state_11132__$1 = state_11132;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11132__$1,7,inst_11104);
} else
{if((state_val_11133 === 5))
{var inst_11126 = cljs.core.async.close_BANG_.call(null,out);var state_11132__$1 = state_11132;var statearr_11138_11160 = state_11132__$1;(statearr_11138_11160[2] = inst_11126);
(statearr_11138_11160[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11133 === 6))
{var inst_11128 = (state_11132[2]);var state_11132__$1 = state_11132;var statearr_11139_11161 = state_11132__$1;(statearr_11139_11161[2] = inst_11128);
(statearr_11139_11161[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11133 === 7))
{var inst_11112 = (state_11132[8]);var inst_11111 = (state_11132[9]);var inst_11111__$1 = (state_11132[2]);var inst_11112__$1 = cljs.core.nth.call(null,inst_11111__$1,0,null);var inst_11113 = cljs.core.nth.call(null,inst_11111__$1,1,null);var inst_11114 = (inst_11112__$1 == null);var state_11132__$1 = (function (){var statearr_11140 = state_11132;(statearr_11140[10] = inst_11113);
(statearr_11140[8] = inst_11112__$1);
(statearr_11140[9] = inst_11111__$1);
return statearr_11140;
})();if(cljs.core.truth_(inst_11114))
{var statearr_11141_11162 = state_11132__$1;(statearr_11141_11162[1] = 8);
} else
{var statearr_11142_11163 = state_11132__$1;(statearr_11142_11163[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11133 === 8))
{var inst_11104 = (state_11132[7]);var inst_11113 = (state_11132[10]);var inst_11112 = (state_11132[8]);var inst_11111 = (state_11132[9]);var inst_11116 = (function (){var c = inst_11113;var v = inst_11112;var vec__11109 = inst_11111;var cs = inst_11104;return ((function (c,v,vec__11109,cs,inst_11104,inst_11113,inst_11112,inst_11111,state_val_11133){
return (function (p1__11049_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11049_SHARP_);
});
;})(c,v,vec__11109,cs,inst_11104,inst_11113,inst_11112,inst_11111,state_val_11133))
})();var inst_11117 = cljs.core.filterv.call(null,inst_11116,inst_11104);var inst_11104__$1 = inst_11117;var state_11132__$1 = (function (){var statearr_11143 = state_11132;(statearr_11143[7] = inst_11104__$1);
return statearr_11143;
})();var statearr_11144_11164 = state_11132__$1;(statearr_11144_11164[2] = null);
(statearr_11144_11164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11133 === 9))
{var inst_11112 = (state_11132[8]);var state_11132__$1 = state_11132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11132__$1,11,out,inst_11112);
} else
{if((state_val_11133 === 10))
{var inst_11124 = (state_11132[2]);var state_11132__$1 = state_11132;var statearr_11146_11165 = state_11132__$1;(statearr_11146_11165[2] = inst_11124);
(statearr_11146_11165[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11133 === 11))
{var inst_11104 = (state_11132[7]);var inst_11121 = (state_11132[2]);var tmp11145 = inst_11104;var inst_11104__$1 = tmp11145;var state_11132__$1 = (function (){var statearr_11147 = state_11132;(statearr_11147[11] = inst_11121);
(statearr_11147[7] = inst_11104__$1);
return statearr_11147;
})();var statearr_11148_11166 = state_11132__$1;(statearr_11148_11166[2] = null);
(statearr_11148_11166[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11152 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11152[0] = state_machine__6178__auto__);
(statearr_11152[1] = 1);
return statearr_11152;
});
var state_machine__6178__auto____1 = (function (state_11132){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11132);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11153){if((e11153 instanceof Object))
{var ex__6181__auto__ = e11153;var statearr_11154_11167 = state_11132;(statearr_11154_11167[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11132);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11168 = state_11132;
state_11132 = G__11168;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11132){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11155 = f__6193__auto__.call(null);(statearr_11155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11156);
return statearr_11155;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11261 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11238){var state_val_11239 = (state_11238[1]);if((state_val_11239 === 1))
{var inst_11215 = 0;var state_11238__$1 = (function (){var statearr_11240 = state_11238;(statearr_11240[7] = inst_11215);
return statearr_11240;
})();var statearr_11241_11262 = state_11238__$1;(statearr_11241_11262[2] = null);
(statearr_11241_11262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 2))
{var inst_11215 = (state_11238[7]);var inst_11217 = (inst_11215 < n);var state_11238__$1 = state_11238;if(cljs.core.truth_(inst_11217))
{var statearr_11242_11263 = state_11238__$1;(statearr_11242_11263[1] = 4);
} else
{var statearr_11243_11264 = state_11238__$1;(statearr_11243_11264[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 3))
{var inst_11235 = (state_11238[2]);var inst_11236 = cljs.core.async.close_BANG_.call(null,out);var state_11238__$1 = (function (){var statearr_11244 = state_11238;(statearr_11244[8] = inst_11235);
return statearr_11244;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11238__$1,inst_11236);
} else
{if((state_val_11239 === 4))
{var state_11238__$1 = state_11238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11238__$1,7,ch);
} else
{if((state_val_11239 === 5))
{var state_11238__$1 = state_11238;var statearr_11245_11265 = state_11238__$1;(statearr_11245_11265[2] = null);
(statearr_11245_11265[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 6))
{var inst_11233 = (state_11238[2]);var state_11238__$1 = state_11238;var statearr_11246_11266 = state_11238__$1;(statearr_11246_11266[2] = inst_11233);
(statearr_11246_11266[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 7))
{var inst_11220 = (state_11238[9]);var inst_11220__$1 = (state_11238[2]);var inst_11221 = (inst_11220__$1 == null);var inst_11222 = cljs.core.not.call(null,inst_11221);var state_11238__$1 = (function (){var statearr_11247 = state_11238;(statearr_11247[9] = inst_11220__$1);
return statearr_11247;
})();if(inst_11222)
{var statearr_11248_11267 = state_11238__$1;(statearr_11248_11267[1] = 8);
} else
{var statearr_11249_11268 = state_11238__$1;(statearr_11249_11268[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 8))
{var inst_11220 = (state_11238[9]);var state_11238__$1 = state_11238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11238__$1,11,out,inst_11220);
} else
{if((state_val_11239 === 9))
{var state_11238__$1 = state_11238;var statearr_11250_11269 = state_11238__$1;(statearr_11250_11269[2] = null);
(statearr_11250_11269[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 10))
{var inst_11230 = (state_11238[2]);var state_11238__$1 = state_11238;var statearr_11251_11270 = state_11238__$1;(statearr_11251_11270[2] = inst_11230);
(statearr_11251_11270[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11239 === 11))
{var inst_11215 = (state_11238[7]);var inst_11225 = (state_11238[2]);var inst_11226 = (inst_11215 + 1);var inst_11215__$1 = inst_11226;var state_11238__$1 = (function (){var statearr_11252 = state_11238;(statearr_11252[7] = inst_11215__$1);
(statearr_11252[10] = inst_11225);
return statearr_11252;
})();var statearr_11253_11271 = state_11238__$1;(statearr_11253_11271[2] = null);
(statearr_11253_11271[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11257 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11257[0] = state_machine__6178__auto__);
(statearr_11257[1] = 1);
return statearr_11257;
});
var state_machine__6178__auto____1 = (function (state_11238){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11258){if((e11258 instanceof Object))
{var ex__6181__auto__ = e11258;var statearr_11259_11272 = state_11238;(statearr_11259_11272[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11273 = state_11238;
state_11238 = G__11273;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11238){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11260 = f__6193__auto__.call(null);(statearr_11260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11261);
return statearr_11260;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11370 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11345){var state_val_11346 = (state_11345[1]);if((state_val_11346 === 1))
{var inst_11322 = null;var state_11345__$1 = (function (){var statearr_11347 = state_11345;(statearr_11347[7] = inst_11322);
return statearr_11347;
})();var statearr_11348_11371 = state_11345__$1;(statearr_11348_11371[2] = null);
(statearr_11348_11371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11346 === 2))
{var state_11345__$1 = state_11345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11345__$1,4,ch);
} else
{if((state_val_11346 === 3))
{var inst_11342 = (state_11345[2]);var inst_11343 = cljs.core.async.close_BANG_.call(null,out);var state_11345__$1 = (function (){var statearr_11349 = state_11345;(statearr_11349[8] = inst_11342);
return statearr_11349;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11345__$1,inst_11343);
} else
{if((state_val_11346 === 4))
{var inst_11325 = (state_11345[9]);var inst_11325__$1 = (state_11345[2]);var inst_11326 = (inst_11325__$1 == null);var inst_11327 = cljs.core.not.call(null,inst_11326);var state_11345__$1 = (function (){var statearr_11350 = state_11345;(statearr_11350[9] = inst_11325__$1);
return statearr_11350;
})();if(inst_11327)
{var statearr_11351_11372 = state_11345__$1;(statearr_11351_11372[1] = 5);
} else
{var statearr_11352_11373 = state_11345__$1;(statearr_11352_11373[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11346 === 5))
{var inst_11325 = (state_11345[9]);var inst_11322 = (state_11345[7]);var inst_11329 = cljs.core._EQ_.call(null,inst_11325,inst_11322);var state_11345__$1 = state_11345;if(inst_11329)
{var statearr_11353_11374 = state_11345__$1;(statearr_11353_11374[1] = 8);
} else
{var statearr_11354_11375 = state_11345__$1;(statearr_11354_11375[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11346 === 6))
{var state_11345__$1 = state_11345;var statearr_11356_11376 = state_11345__$1;(statearr_11356_11376[2] = null);
(statearr_11356_11376[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11346 === 7))
{var inst_11340 = (state_11345[2]);var state_11345__$1 = state_11345;var statearr_11357_11377 = state_11345__$1;(statearr_11357_11377[2] = inst_11340);
(statearr_11357_11377[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11346 === 8))
{var inst_11322 = (state_11345[7]);var tmp11355 = inst_11322;var inst_11322__$1 = tmp11355;var state_11345__$1 = (function (){var statearr_11358 = state_11345;(statearr_11358[7] = inst_11322__$1);
return statearr_11358;
})();var statearr_11359_11378 = state_11345__$1;(statearr_11359_11378[2] = null);
(statearr_11359_11378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11346 === 9))
{var inst_11325 = (state_11345[9]);var state_11345__$1 = state_11345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11345__$1,11,out,inst_11325);
} else
{if((state_val_11346 === 10))
{var inst_11337 = (state_11345[2]);var state_11345__$1 = state_11345;var statearr_11360_11379 = state_11345__$1;(statearr_11360_11379[2] = inst_11337);
(statearr_11360_11379[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11346 === 11))
{var inst_11325 = (state_11345[9]);var inst_11334 = (state_11345[2]);var inst_11322 = inst_11325;var state_11345__$1 = (function (){var statearr_11361 = state_11345;(statearr_11361[10] = inst_11334);
(statearr_11361[7] = inst_11322);
return statearr_11361;
})();var statearr_11362_11380 = state_11345__$1;(statearr_11362_11380[2] = null);
(statearr_11362_11380[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11366 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11366[0] = state_machine__6178__auto__);
(statearr_11366[1] = 1);
return statearr_11366;
});
var state_machine__6178__auto____1 = (function (state_11345){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11345);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11367){if((e11367 instanceof Object))
{var ex__6181__auto__ = e11367;var statearr_11368_11381 = state_11345;(statearr_11368_11381[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11345);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11382 = state_11345;
state_11345 = G__11382;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11345){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11369 = f__6193__auto__.call(null);(statearr_11369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11370);
return statearr_11369;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11517 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11487){var state_val_11488 = (state_11487[1]);if((state_val_11488 === 1))
{var inst_11450 = (new Array(n));var inst_11451 = inst_11450;var inst_11452 = 0;var state_11487__$1 = (function (){var statearr_11489 = state_11487;(statearr_11489[7] = inst_11451);
(statearr_11489[8] = inst_11452);
return statearr_11489;
})();var statearr_11490_11518 = state_11487__$1;(statearr_11490_11518[2] = null);
(statearr_11490_11518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 2))
{var state_11487__$1 = state_11487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11487__$1,4,ch);
} else
{if((state_val_11488 === 3))
{var inst_11485 = (state_11487[2]);var state_11487__$1 = state_11487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11487__$1,inst_11485);
} else
{if((state_val_11488 === 4))
{var inst_11455 = (state_11487[9]);var inst_11455__$1 = (state_11487[2]);var inst_11456 = (inst_11455__$1 == null);var inst_11457 = cljs.core.not.call(null,inst_11456);var state_11487__$1 = (function (){var statearr_11491 = state_11487;(statearr_11491[9] = inst_11455__$1);
return statearr_11491;
})();if(inst_11457)
{var statearr_11492_11519 = state_11487__$1;(statearr_11492_11519[1] = 5);
} else
{var statearr_11493_11520 = state_11487__$1;(statearr_11493_11520[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 5))
{var inst_11451 = (state_11487[7]);var inst_11460 = (state_11487[10]);var inst_11455 = (state_11487[9]);var inst_11452 = (state_11487[8]);var inst_11459 = (inst_11451[inst_11452] = inst_11455);var inst_11460__$1 = (inst_11452 + 1);var inst_11461 = (inst_11460__$1 < n);var state_11487__$1 = (function (){var statearr_11494 = state_11487;(statearr_11494[11] = inst_11459);
(statearr_11494[10] = inst_11460__$1);
return statearr_11494;
})();if(cljs.core.truth_(inst_11461))
{var statearr_11495_11521 = state_11487__$1;(statearr_11495_11521[1] = 8);
} else
{var statearr_11496_11522 = state_11487__$1;(statearr_11496_11522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 6))
{var inst_11452 = (state_11487[8]);var inst_11473 = (inst_11452 > 0);var state_11487__$1 = state_11487;if(cljs.core.truth_(inst_11473))
{var statearr_11498_11523 = state_11487__$1;(statearr_11498_11523[1] = 12);
} else
{var statearr_11499_11524 = state_11487__$1;(statearr_11499_11524[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 7))
{var inst_11483 = (state_11487[2]);var state_11487__$1 = state_11487;var statearr_11500_11525 = state_11487__$1;(statearr_11500_11525[2] = inst_11483);
(statearr_11500_11525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 8))
{var inst_11451 = (state_11487[7]);var inst_11460 = (state_11487[10]);var tmp11497 = inst_11451;var inst_11451__$1 = tmp11497;var inst_11452 = inst_11460;var state_11487__$1 = (function (){var statearr_11501 = state_11487;(statearr_11501[7] = inst_11451__$1);
(statearr_11501[8] = inst_11452);
return statearr_11501;
})();var statearr_11502_11526 = state_11487__$1;(statearr_11502_11526[2] = null);
(statearr_11502_11526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 9))
{var inst_11451 = (state_11487[7]);var inst_11465 = cljs.core.vec.call(null,inst_11451);var state_11487__$1 = state_11487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11487__$1,11,out,inst_11465);
} else
{if((state_val_11488 === 10))
{var inst_11471 = (state_11487[2]);var state_11487__$1 = state_11487;var statearr_11503_11527 = state_11487__$1;(statearr_11503_11527[2] = inst_11471);
(statearr_11503_11527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 11))
{var inst_11467 = (state_11487[2]);var inst_11468 = (new Array(n));var inst_11451 = inst_11468;var inst_11452 = 0;var state_11487__$1 = (function (){var statearr_11504 = state_11487;(statearr_11504[7] = inst_11451);
(statearr_11504[8] = inst_11452);
(statearr_11504[12] = inst_11467);
return statearr_11504;
})();var statearr_11505_11528 = state_11487__$1;(statearr_11505_11528[2] = null);
(statearr_11505_11528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 12))
{var inst_11451 = (state_11487[7]);var inst_11475 = cljs.core.vec.call(null,inst_11451);var state_11487__$1 = state_11487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11487__$1,15,out,inst_11475);
} else
{if((state_val_11488 === 13))
{var state_11487__$1 = state_11487;var statearr_11506_11529 = state_11487__$1;(statearr_11506_11529[2] = null);
(statearr_11506_11529[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 14))
{var inst_11480 = (state_11487[2]);var inst_11481 = cljs.core.async.close_BANG_.call(null,out);var state_11487__$1 = (function (){var statearr_11507 = state_11487;(statearr_11507[13] = inst_11480);
return statearr_11507;
})();var statearr_11508_11530 = state_11487__$1;(statearr_11508_11530[2] = inst_11481);
(statearr_11508_11530[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11488 === 15))
{var inst_11477 = (state_11487[2]);var state_11487__$1 = state_11487;var statearr_11509_11531 = state_11487__$1;(statearr_11509_11531[2] = inst_11477);
(statearr_11509_11531[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_11513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11513[0] = state_machine__6178__auto__);
(statearr_11513[1] = 1);
return statearr_11513;
});
var state_machine__6178__auto____1 = (function (state_11487){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11487);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11514){if((e11514 instanceof Object))
{var ex__6181__auto__ = e11514;var statearr_11515_11532 = state_11487;(statearr_11515_11532[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11533 = state_11487;
state_11487 = G__11533;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11487){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11516 = f__6193__auto__.call(null);(statearr_11516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11517);
return statearr_11516;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11676 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11646){var state_val_11647 = (state_11646[1]);if((state_val_11647 === 1))
{var inst_11605 = [];var inst_11606 = inst_11605;var inst_11607 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11646__$1 = (function (){var statearr_11648 = state_11646;(statearr_11648[7] = inst_11606);
(statearr_11648[8] = inst_11607);
return statearr_11648;
})();var statearr_11649_11677 = state_11646__$1;(statearr_11649_11677[2] = null);
(statearr_11649_11677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 2))
{var state_11646__$1 = state_11646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11646__$1,4,ch);
} else
{if((state_val_11647 === 3))
{var inst_11644 = (state_11646[2]);var state_11646__$1 = state_11646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11646__$1,inst_11644);
} else
{if((state_val_11647 === 4))
{var inst_11610 = (state_11646[9]);var inst_11610__$1 = (state_11646[2]);var inst_11611 = (inst_11610__$1 == null);var inst_11612 = cljs.core.not.call(null,inst_11611);var state_11646__$1 = (function (){var statearr_11650 = state_11646;(statearr_11650[9] = inst_11610__$1);
return statearr_11650;
})();if(inst_11612)
{var statearr_11651_11678 = state_11646__$1;(statearr_11651_11678[1] = 5);
} else
{var statearr_11652_11679 = state_11646__$1;(statearr_11652_11679[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 5))
{var inst_11610 = (state_11646[9]);var inst_11607 = (state_11646[8]);var inst_11614 = (state_11646[10]);var inst_11614__$1 = f.call(null,inst_11610);var inst_11615 = cljs.core._EQ_.call(null,inst_11614__$1,inst_11607);var inst_11616 = cljs.core.keyword_identical_QMARK_.call(null,inst_11607,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11617 = (inst_11615) || (inst_11616);var state_11646__$1 = (function (){var statearr_11653 = state_11646;(statearr_11653[10] = inst_11614__$1);
return statearr_11653;
})();if(cljs.core.truth_(inst_11617))
{var statearr_11654_11680 = state_11646__$1;(statearr_11654_11680[1] = 8);
} else
{var statearr_11655_11681 = state_11646__$1;(statearr_11655_11681[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 6))
{var inst_11606 = (state_11646[7]);var inst_11631 = inst_11606.length;var inst_11632 = (inst_11631 > 0);var state_11646__$1 = state_11646;if(cljs.core.truth_(inst_11632))
{var statearr_11657_11682 = state_11646__$1;(statearr_11657_11682[1] = 12);
} else
{var statearr_11658_11683 = state_11646__$1;(statearr_11658_11683[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 7))
{var inst_11642 = (state_11646[2]);var state_11646__$1 = state_11646;var statearr_11659_11684 = state_11646__$1;(statearr_11659_11684[2] = inst_11642);
(statearr_11659_11684[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 8))
{var inst_11610 = (state_11646[9]);var inst_11606 = (state_11646[7]);var inst_11614 = (state_11646[10]);var inst_11619 = inst_11606.push(inst_11610);var tmp11656 = inst_11606;var inst_11606__$1 = tmp11656;var inst_11607 = inst_11614;var state_11646__$1 = (function (){var statearr_11660 = state_11646;(statearr_11660[7] = inst_11606__$1);
(statearr_11660[8] = inst_11607);
(statearr_11660[11] = inst_11619);
return statearr_11660;
})();var statearr_11661_11685 = state_11646__$1;(statearr_11661_11685[2] = null);
(statearr_11661_11685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 9))
{var inst_11606 = (state_11646[7]);var inst_11622 = cljs.core.vec.call(null,inst_11606);var state_11646__$1 = state_11646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11646__$1,11,out,inst_11622);
} else
{if((state_val_11647 === 10))
{var inst_11629 = (state_11646[2]);var state_11646__$1 = state_11646;var statearr_11662_11686 = state_11646__$1;(statearr_11662_11686[2] = inst_11629);
(statearr_11662_11686[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 11))
{var inst_11610 = (state_11646[9]);var inst_11614 = (state_11646[10]);var inst_11624 = (state_11646[2]);var inst_11625 = [];var inst_11626 = inst_11625.push(inst_11610);var inst_11606 = inst_11625;var inst_11607 = inst_11614;var state_11646__$1 = (function (){var statearr_11663 = state_11646;(statearr_11663[12] = inst_11626);
(statearr_11663[7] = inst_11606);
(statearr_11663[8] = inst_11607);
(statearr_11663[13] = inst_11624);
return statearr_11663;
})();var statearr_11664_11687 = state_11646__$1;(statearr_11664_11687[2] = null);
(statearr_11664_11687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 12))
{var inst_11606 = (state_11646[7]);var inst_11634 = cljs.core.vec.call(null,inst_11606);var state_11646__$1 = state_11646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11646__$1,15,out,inst_11634);
} else
{if((state_val_11647 === 13))
{var state_11646__$1 = state_11646;var statearr_11665_11688 = state_11646__$1;(statearr_11665_11688[2] = null);
(statearr_11665_11688[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 14))
{var inst_11639 = (state_11646[2]);var inst_11640 = cljs.core.async.close_BANG_.call(null,out);var state_11646__$1 = (function (){var statearr_11666 = state_11646;(statearr_11666[14] = inst_11639);
return statearr_11666;
})();var statearr_11667_11689 = state_11646__$1;(statearr_11667_11689[2] = inst_11640);
(statearr_11667_11689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11647 === 15))
{var inst_11636 = (state_11646[2]);var state_11646__$1 = state_11646;var statearr_11668_11690 = state_11646__$1;(statearr_11668_11690[2] = inst_11636);
(statearr_11668_11690[1] = 14);
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
var state_machine__6178__auto____0 = (function (){var statearr_11672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11672[0] = state_machine__6178__auto__);
(statearr_11672[1] = 1);
return statearr_11672;
});
var state_machine__6178__auto____1 = (function (state_11646){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11646);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11673){if((e11673 instanceof Object))
{var ex__6181__auto__ = e11673;var statearr_11674_11691 = state_11646;(statearr_11674_11691[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11692 = state_11646;
state_11646 = G__11692;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11646){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11675 = f__6193__auto__.call(null);(statearr_11675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11676);
return statearr_11675;
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