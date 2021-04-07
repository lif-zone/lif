/* for testing:
var script = document.createElement('script');
script.src  = 'http://localhost/israeltomorrow.js';
document.head.appendChild(script);
*/
(function(){

function is_logged_in(){
  return document.body.classList.contains('logged-in'); }

function do_redirect(){
  localStorage.setItem('lif_israeltomorrow_orig', location.href);
  localStorage.setItem('lif_israeltomorrow_orig_ts', Date.now());
  location.href = 'https://israeltomorrow.co.il/'+
    '%D7%94%D7%A6%D7%98%D7%A8%D7%A4%D7%95%D7%AA-%D7%90%D7%AA%D7%A8/?force=1';
}

function init_submit(){
  console.log('XXX init_submit');
  var form = document.querySelector('form');
  if (!form)
    window.onload = function(){ init_submit(); };
  console.log('XXX ready');
  form.onsubmit = function(e){
    e.stopPropagation();
    var email = document.querySelector('#form-field-email').value;
    console.log('XXX submit email %s', email);
    localStorage.setItem('lif_israeltomorrow_email', email);
    localStorage.setItem('lif_israeltomorrow_email_ts', Date.now());
    jQuery.ajax('https://lif.zone/api/israeltomorrow_save_email',
      {timeout: 3000, method: 'POST', data: {email: email}})
    .always(function(){
      console.log('XXX done');
      var orig = localStorage.gettItem('lif_israeltomorrow_orig');
      var ts = localStorage.gettItem('lif_israeltomorrow_orig_ts');
      var url = '/';
      if (orig && Date.now() - ts < 60*60*1000)
        url = orig;
      location.replace(url);
    });
    return false;
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
      /force=1/.test(location.search))
  {
      console.log('israeltomorrow submit page');
      return init_submit();
  }
  console.log('israeltomorrow email');
  if (localStorage.setItem('lif_israeltomorrow_email'))
  {
    console.log('israeltomorrow already registered email');
    return;
  }
  do_redirect();
}
init();
})();
