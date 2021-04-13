/* for testing:
var script = document.createElement('script');
script.src  = 'http://localhost:3100/israeltomorrow.js';
document.head.appendChild(script);
*/
(function(){

var fbl_link, force_link, local_debug_link;

function is_logged_in(){
  return document.body.classList.contains('logged-in'); }

function do_redirect(){
  var url = 'https://israeltomorrow.co.il/'+
    '%D7%94%D7%A6%D7%98%D7%A8%D7%A4%D7%95%D7%AA-%D7%90%D7%AA%D7%A8/?'+
    (fbl_link ? 'fbl' : 'force');
  localStorage.setItem('lif_israeltomorrow_orig', location.href);
  localStorage.setItem('lif_israeltomorrow_orig_ts', Date.now());
  location.href = url;
}

function log_visit(event){
  if (!(fbl_link||force_link))
    return;
  var api = local_debug_link ?
    'http://localhost:3100/api/israeltomorrow_log_visit' :
    'https://lif.zone/api/israeltomorrow_log_visit';
  var path = decodeURIComponent(location.pathname);
  jQuery.ajax(api, {timeout: 3000, method: 'POST', data: {event, path}});
}

function init_submit(){
  console.log('init submit');
  window.gloal_lif_on_submit = function(){
    log_visit('join_submit');
    var email = document.querySelector('#form-field-email').value;
    console.log('save email %s', email);
    localStorage.setItem('lif_israeltomorrow_email', email);
    localStorage.setItem('lif_israeltomorrow_email_ts', Date.now());
    var api = local_debug_link ?
      'http://localhost:3100/api/israeltomorrow_save_email' :
      'https://lif.zone/api/israeltomorrow_save_email';
    jQuery.ajax(api, {timeout: 3000, method: 'POST', data: {email: email}})
    .always(function(){
      log_visit('join_redirect');
      var orig = localStorage.getItem('lif_israeltomorrow_orig');
      var ts = localStorage.getItem('lif_israeltomorrow_orig_ts');
      var url = '/';
      if (orig && Date.now() - ts < 60*60*1000)
        url = orig;
      console.log('redirect %s', url);
      location.replace(url);
    });
  };
}

function init(){
  force_link = /\bforce\b/.test(location.search);
  fbl_link = /\bfbl\b/.test(location.search);
  local_debug_link = /\blocal_debug\b/.test(location.search);
  if (!force_link && !fbl_link)
      return;
  if (document.readyState!='complete')
    window.onload = function(){ init(); };
  log_visit('new');
  if (is_logged_in())
  {
    log_visit('logged_in');
    return console.log('skip, user logged in');
  }
  if (decodeURIComponent(location.pathname)=='/הצטרפות-אתר/')
  {
      log_visit('join_page');
      console.log('israeltomorrow submit page');
      return init_submit();
  }
  console.log('israeltomorrow email');
  if (localStorage.getItem('lif_israeltomorrow_email'))
  {
    log_visit('already_registered');
    console.log('israeltomorrow already registered email');
    return;
  }
  log_visit('redirect');
  do_redirect();
}
init();
})();

/* script for site
(function(){
  function init(){
    try {
      if (decodeURIComponent(location.pathname)!='/הצטרפות-אתר/')
        return;
      if (document.readyState!='complete')
      {
        window.onload = function(){ init(); };
        return;
      }
      var form = document.querySelector('form');
      if (!form)
        return;
      if (!document.querySelector('#form-field-email'))
        return;
      form.onsubmit = function(e){
        if (window.gloal_lif_on_submit)
          return window.gloal_lif_on_submit();
        var email = document.querySelector('#form-field-email').value;
        localStorage.setItem('lif_israeltomorrow_email', email);
        localStorage.setItem('lif_israeltomorrow_email_ts', Date.now());
        location.replace('/');
      };
    } catch(err){ console.error(e); }
  }
  init();
})();
*/
