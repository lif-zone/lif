(function(){
function overload(){
  var debug = console.debug;
  console.debug = function(){
    if (window.console_overload && window.console_overload.debug)
      return console_overload.debug({fn: debug, args: arguments});
    return debug.apply(console, arguments)
  }
  var info = console.info;
  console.info = function(){
    if (window.console_overload && window.console_overload.info)
      return console_overload.info({fn: info, args: arguments});
    return info.apply(console, arguments)
  }
  var log = console.log;
  console.log = function(){
    if (window.console_overload && window.console_overload.log)
      return console_overload.log({fn: log, args: arguments});
    return log.apply(console, arguments)
  }
  var warn = console.warn;
  console.warn = function(){
    if (window.console_overload && window.console_overload.warn)
      return console_overload.warn({fn: warn, args: arguments});
    return warn.apply(console, arguments)
  }
  var error = console.error;
  console.error = function(){
    if (window.console_overload && window.console_overload.error)
      return console_overload.error({fn: error, args: arguments});
    return error.apply(console, arguments)
  }
}

overload();
})();
