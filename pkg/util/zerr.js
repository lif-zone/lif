// LICENSE_CODE ZON ISC
'use strict'; /*zlint node, br*/
var is_node = typeof module=='object' && module.exports && module.children;
if (!is_node)
    require('./config.js');
var date = require('./date.js');
var zutil = require('./util.js');
var sprintf = require('./sprintf.js');
var rate_limit = require('./rate_limit.js');
var zescape = require('./escape.js');
var _zerr;
var env = process.env;
var zerr = function(msg){ _zerr(L.ERR, arguments); };
var E = module.exports = zerr;
E = zerr;
// XXX amir: why do we need both E and E.zerr to point to the same function?
E.zerr = zerr;
var L = E.L = {
    EMERG: 0,
    ALERT: 1,
    CRIT: 2,
    ERR: 3,
    WARN: 4,
    NOTICE: 5,
    INFO: 6,
    DEBUG: 7,
};
var perr_pending = [];
// inverted
var LINV = E.LINV = {};
for (let k in L)
    LINV[L[k]] = k;

['debug', 'info', 'notice', 'warn', 'err', 'crit'].forEach(function(l){
    var level = L[l.toUpperCase()];
    E[l] = function(){ return _zerr(level, arguments); };
});

E.assert = function(exp, msg){
    if (!exp)
        zerr.crit(msg);
};

E.json = function(o, replacer, space){
    try { return JSON.stringify(o, replacer, space)||''; }
    catch(e){ return '[circular]'; }
};

E.is = function(level){ return level<=E.level; };
['debug', 'info', 'notice', 'warn', 'err'].forEach(function(l){
    var level = L[l.toUpperCase()];
    E.is[l] = function(){ return level<=E.level; };
});

/* perr is a stub overridden by upper layers */
E.perr = function(id, info, opt){
    E._zerr(!opt || opt.level===undefined ? L.ERR : opt.level,
        ['perr '+id+' '+E.json(info)]);
    if (perr_pending && perr_pending.length<100)
        perr_pending.push(Array.from(arguments));
};
var perr_hooks = [];
E.add_perr_hook = perr_hooks.push.bind(perr_hooks);
var perr_dropped = {};
var perr_orig = E.perr;
function wrap_perr(perr_fn){
    var send = perr_fn, pre_send;
    if (typeof perr_fn!='function')
    {
        send = perr_fn.send;
        pre_send = perr_fn.pre_send;
    }
    return function(id, info, opt){
        opt = opt||{};
        var _rate_limit = opt.rate_limit||{};
        var ms = _rate_limit.ms||date.ms.HOUR, count = _rate_limit.count||10;
        var disable_drop_count = _rate_limit.disable_drop_count;
        var rl_hash = perr_orig.rl_hash = perr_orig.rl_hash||{};
        var rl = rl_hash[id] = rl_hash[id]||{};
        if (pre_send)
            pre_send(id, info, opt);
        perr_hooks.filter(function(h){ return h.ids.test(id); })
        .forEach(function(h){ h.fn(id, info, opt); });
        if (opt.rate_limit===false || rate_limit(rl, ms, count))
        {
            if (perr_dropped[id])
            {
                if (!disable_drop_count && info && typeof info!='string')
                    info.w = perr_dropped[id];
                perr_dropped[id] = null;
            }
            return send(id, info, opt);
        }
        perr_dropped[id] = (perr_dropped[id]||0)+1;
        if (info && typeof info!='string')
            info = zerr.json(info);
        zerr('perr %s %s rate too high %s %d %d', id, info, zerr.json(rl), ms,
            count);
    };
}
E.perr_install = function(install_fn){
    E.perr = wrap_perr(install_fn(perr_orig, perr_pending||[]));
    perr_pending = null;
};

function err_has_stack(err){ return err instanceof Error && err.stack; }

E.e2s = function(err){
    if (!is_node && err_has_stack(err))
    {
        var e_str = ''+err, e_stack = ''+err.stack;
        return e_stack.startsWith(e_str) ? e_stack : e_str+' '+e_stack;
    }
    return err_has_stack(err) ? ''+err.stack : ''+err;
};

E.on_exception = undefined;
var in_exception;
E.set_exception_handler = function(prefix, err_func){
    E.on_exception = function(err){
        if (!(err instanceof TypeError || err instanceof ReferenceError) ||
            err.sent_perr)
        {
            return;
        }
        if (in_exception)
            return;
        in_exception = 1;
        err.sent_perr = true;
        // XXX amir: better not to get a prefix arg, it can be added by the
        // err_func
        err_func((prefix ? prefix+'_' : '')+'etask_typeerror', null, err);
        in_exception = 0;
    };
};

E.on_unhandled_exception = undefined;
E.catch_unhandled_exception = function(func, obj){
    return function(){
        var args = arguments;
        try { return func.apply(obj, Array.from(args)); }
        catch(e){ E.on_unhandled_exception(e); }
    };
};
E.set_level = function(level){
    var prev = 'L'+LINV[E.level];
    level = level||env.ZERR;
    if (!level)
        return prev;
    var val = L[level] || L[level.replace(/^L/, '')];
    if (val!==undefined)
        E.level = val;
    return prev;
};

E.get_stack_trace = function(opt){
    if (!opt)
        opt = {};
    if (opt.limit===undefined)
        opt.limit = Infinity;
    if (opt.short===undefined)
        opt.short = true;
    var old_stack_limit = Error.stackTraceLimit;
    if (opt.limit)
        Error.stackTraceLimit = opt.limit;
    var stack = zerr.e2s(new Error());
    if (opt.limit)
        Error.stackTraceLimit = old_stack_limit;
    if (opt.short)
    {
        stack = stack
            .replace(/^.+util\/etask.+$/gm, '    ...')
            .replace(/( {4}\.\.\.\n)+/g, '    ...\n');
    }
    return stack;
};

E.log = [];
E.log.max_size = 200;
E.log_tail = function(size){
    return (E.log||[]).join('\n').substr(-(size||4096)); };

function log_tail_push(msg){
    E.log.push(msg);
    if (E.log.length>E.log.max_size)
        E.log.splice(0, E.log.length - E.log.max_size/2);
}

if (is_node)
{ // zerr-node
E.ZEXIT_LOG_DIR = env.ZEXIT_LOG_DIR||'/tmp/zexit_logs';
E.prefix = '';

E.level = L.NOTICE;
E.flush = function(){};
var node_init = function(){
    if (zutil.is_mocha())
    {
        E.level = L.WARN;
        return;
    }
    E.prefix = '';
};

var init = function(){
    if (is_node)
        node_init();
    E.set_level();
};
init();

var zerr_format = function(args){
    return args.length<=1 ? args[0] : sprintf.apply(null, args); };
var __zerr = function(level, args){
    var msg = zerr_format(args);
    var k = Object.keys(L);
    var prefix = E.hide_timestamp ? '' : E.prefix+date.to_sql_ms()+' ';
    if (env.CURRENT_SYSTEMD_UNIT_NAME)
        prefix = '<'+level+'>'+prefix;
    var res = prefix+k[level]+': '+msg;
    console.error(res);
    log_tail_push(res);
};

E.set_logger = function(logger){
    __zerr = function(level, args){
        var msg = zerr_format(args);
        logger(level, msg);
        log_tail_push(E.prefix+date.to_sql_ms()+': '+msg);
    };
};

_zerr = function(level, args){
    if (level>E.level)
        return;
    __zerr(level, args);
};
E._zerr = _zerr;

E.zexit = function(args){
    if (err_has_stack(args))
        __zerr(L.CRIT, [E.e2s(args)]);
    else
        __zerr(L.CRIT, arguments);
    if ((args&&args.code)!='ERR_ASSERTION')
        console.error('zerr.zexit was called', new Error().stack);
    E.flush();
    // workaround for process.zon override issue
    if (process.zon && process.zon.main)
    {
        // XXX: expose constants via zutil module
        var LCRIT = 2;
        var LCONSOLE = 0x100;
        var emb_zutil = process.binding('zutil');
        emb_zutil.zerr(LCRIT|LCONSOLE, 'perr node_zexit '+E.e2s(args));
        process.exit(1);
    }
    if (env.NODE_ENV=='production')
        E.flush();
    /*jslint -W087*/
    debugger;
    process.exit(1);
};

}
else
{ // browser-zerr
var chrome;
E.log = [];
var L_STR = E.L_STR = ['EMERGENCY', 'ALERT', 'CRITICAL', 'ERROR', 'WARNING',
    'NOTICE', 'INFO', 'DEBUG'];
E.log.max_size = 200;
if (is_rn)
{
    E.level = L.WARN;
    // logcat has timestamp by default
    E.hide_timestamp = true;
}
else
{
    chrome = self.chrome;
    E.conf = self.conf;
    E.level = self.is_tpopup ? L.CRITICAL : E.conf && E.conf.zerr_level ?
        L[self.conf.zerr_level] : L.WARN;
}

var console_method = function(l){
    // XXX arik HACK: in react-native, console.error/console.warn print full
    // backtrace. this is very slow. as a quick hack we just use log/info/debug
    // need to check how to configure react-native not to print backtrace
    if (is_rn)
        return l<=L.NOTICE ? 'log' : l<=L.INFO ? 'info' : 'debug';
    return l<=L.ERR ? 'error' : !chrome ? 'log' : l===L.WARN ? 'warn' :
        l<=L.INFO ? 'info' : 'debug';
};

_zerr = function(l, args){
    var s;
    try {
        var fmt = ''+args[0];
        var fmt_args = Array.prototype.slice.call(args, 1);
        /* XXX arik/bahaa HACK: use sprintf (note, console % options are
         * differnt than sprintf % options) */
        s = (fmt+(fmt_args.length ? ' '+E.json(fmt_args) : ''))
        .substr(0, 1024);
        var prefix = (E.hide_timestamp ? '' : date.to_sql_ms()+' ')
        +L_STR[l]+': ';
        if (E.is(l))
        {
            Function.prototype.apply.bind(console[console_method(l)],
                console)([prefix+fmt].concat(fmt_args));
        }
        log_tail_push(prefix+s);
    } catch(err){
        try { console.error('ERROR in zerr '+(err.stack||err), arguments); }
        catch(e){}
    }
    if (l<=L.CRIT)
        throw new Error(s);
};
E._zerr = _zerr;

var post = function(url, data){
    var use_xdr = typeof XDomainRequest=='function' &&
        !('withCredentials' in XMLHttpRequest.prototype);
    var req = use_xdr ? new XDomainRequest() : new XMLHttpRequest();
    req.open('POST', url);
    if (req.setRequestHeader)
    {
        req.setRequestHeader('Content-Type',
            'application/x-www-form-urlencoded; charset=UTF-8');
    }
    req.send(zescape.qs(data));
    return req;
};
var perr_transport = function(id, info, opt){
    opt = zutil.clone(opt||{});
    var qs = opt.qs||{}, data = opt.data||{};
    data.is_json = 1;
    if (info && typeof info!='string')
        info = zerr.json(info);
    if (opt.err && !info)
        info = ''+(opt.err.message||zerr.json(opt.err));
    data.info = info;
    qs.id = id;
    if (!opt.no_zerr)
    {
        zerr._zerr(opt.level, ['perr '+id+(info ? ' info: '+info : '')+
            (opt.bt ? '\n'+opt.bt : '')]);
    }
    return post(zescape.uri(E.conf.url_perr+'/perr', qs), data);
};

var perr = function(orig, pending){
    while (pending.length)
        perr_transport.apply(null, pending.shift());
    // set the zerr.perr stub to send to the clog server
    return perr_transport;
};
E.perr_install(perr);

} // end of browser-zerr
