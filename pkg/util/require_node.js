'use strict'; /*zlint node, node_ios, be_ff*/
var is_node = typeof module=='object' && module.exports && module.children;
if (is_node)
    require('./config.js');
var opt = exports.opt = {};
exports.define = function(_module, rel_root){
    return function(name, req, setup){
        if (arguments.length==2)
        {
            setup = req;
            req = name;
        }
        _module.exports = setup.apply(this, req.map(function(dep){
            var ex;
            if (opt.on_require && (ex = opt.on_require(dep)))
                return ex;
            // XXX odin: react native bundler syntax error when require()
            // not string literal -> workaround.
            var node_req = require;
            if (!dep||/https?:\/\//.test(dep))
                return null;
            if (/^\.?\.?\//.test(dep)) // './' '../' '/'
                return node_req(rel_root+dep);
            return node_req(dep);
        }));
    };
};
