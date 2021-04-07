/* for testing:
var script = document.createElement('script');
script.src  = 'http://localhost/israeltomorrow.js';
document.head.appendChild(script);
*/
(function(){

function is_logged_in(){
  return document.body.classList.contains('logged-in'); }

function do_redirect(){
  var url = 'https://israeltomorrow.co.il/'+
    '%D7%94%D7%A6%D7%98%D7%A8%D7%A4%D7%95%D7%AA-%D7%90%D7%AA%D7%A8/?force';
  if (/debug=1/.test(location.search))
    url += '&debug=1';
  localStorage.setItem('lif_israeltomorrow_orig', location.href);
  localStorage.setItem('lif_israeltomorrow_orig_ts', Date.now());
  location.href = url;
}

function init_submit(){
  console.log('init submit');
  window.gloal_lif_on_submit = function(){
    var email = document.querySelector('#form-field-email').value;
    console.log('save email %s', email);
    localStorage.setItem('lif_israeltomorrow_email', email);
    localStorage.setItem('lif_israeltomorrow_email_ts', Date.now());
    jQuery.ajax('https://lif.zone/api/israeltomorrow_save_email',
      {timeout: 3000, method: 'POST', data: {email: email}})
    .always(function(){
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
  if (!/debug=1/.test(location.search))
      return;
  if (document.readyState!='complete')
    window.onload = function(){ init(); };
  if (is_logged_in())
    return console.log('skip, user logged in');
  if (decodeURIComponent(location.pathname)=='/הצטרפות-אתר/' &&
      /force/.test(location.search))
  {
      console.log('israeltomorrow submit page');
      return init_submit();
  }
  console.log('israeltomorrow email');
  if (localStorage.getItem('lif_israeltomorrow_email'))
  {
    console.log('israeltomorrow already registered email');
    return;
  }
  do_redirect();
}
init();
})();

/* script for site
(function(){
  function init(){
    try {
      if (!/force/.test(location.search))
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
