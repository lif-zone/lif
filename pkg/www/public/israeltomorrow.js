/* for testing:
var script = document.createElement('script');
script.src  = 'http://localhost/israeltomorrow.js';
document.head.appendChild(script);
*/
// TODO:
// + heck email is valid format
// + click outside should show error and not close dialog
// show this dialog only once. once use entered email, store it in storage
// save to lif db and to israeltomorrow db
// hover effect on button
// loggins to review conversation

var it_email_on_click, it_email_on_key_press;
(function(){

function valid_email(email){
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function popup_on_click(){ on_click(); }

function on_click(){
  var el = document.querySelector('#__it_email');
  if (!el)
    return;
  var email = ''+el.value;
  if (!valid_email(email))
  {
    var warn = document.querySelector('#__it_email_warn');
    warn.style.visibility = 'visible';
    return;
  }
  document.querySelector('#__it_register_popup').remove();
}
it_email_on_click = on_click;

function on_key_press(){
  console.log('XXX on_key_press');
  var warn = document.querySelector('#__it_email_warn');
  warn.style.visibility = 'hidden';
}
it_email_on_key_press = on_key_press;

function show_popup(){
  var div = document.createElement('dib');
  div.id='__it_register_popup';
  div.onclick = popup_on_click;
  div.style = `
    width: 100%; height: 100%; position: fixed; lef: 0; top: 0;
    z-index: 99999999; background-color: #cccccccc;
    display: flex; flex-direction: column; justify-content: center;
    align-items: center; padding: 3rem`;
  div.innerHTML = `
    <style>
      .__it_email {
        direction: ltr;
        border-radius: 1rem; padding: 1rem; font-size: 2rem;
        color: #0F1543; border-color: #0F1543; border: 0.2rem solid #0F1543;
        max-width: 40rem; width: 100%;
      }
      .__it_email:focus {
        outline: 0;
      }
      .__it_email:placeholder-shown {
        direction: rtl;
      }
      .__it_email_send {
        color: white;
        font-size: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border: none;
        background-color: #ffb200;
        margin-top: 2rem;
      }
      .__it_title {color: #0F1543; font-size: 2.5rem;
        padding-bottom: 3rem; padding-top: 1rem;}
    </style>
    <div style="width: 100%; max-width: 50rem; background-color: white;
      border-radius: 1rem; border: 0.25rem solid #ffb200; padding: 2rem;
      padding-bottom: 4rem">
      <img style="width:16.9rem; height:13rem;"
        src="https://israeltomorrow.co.il/wp-content/uploads/2020/07/Group-1-3.svg"/>
      <div style="display: flex;">
        <div style="flex-grow: 1;"></div>
        <div>
          <div class="__it_title">
            ישראל מחר פתוח לכולם, <nobr>ללא תשלום</nobr>
          </div>
          <div style="text-align: left;">
            <input id=__it_email type="email" class="__it_email"
              onKeyPress="it_email_on_key_press()" placeholder="אימייל"/>
            <div style="display: flex; max-width: 40rem;">
              <div id=__it_email_warn
                style="flex-grow: 1; color: #ff9900; font-size: 1.6rem;
                font-weight: bold; text-align: right; line-height: 130%;
                padding-top: 0.2rem; visibility: hidden;">
                כדי לקבל גישה לאתר יש לרשום את האימייל שלך
              </div>
              <div style="width: 2rem;"></div>
              <button onClick="it_email_on_click()"
                class="__it_email_send"><span>כניסה</span></button>
            </div>
          </div>
        </div>
        <div style="flex-grow: 1;"></div>
      </div>
    </div>`;
  document.body.appendChild(div);
}

function is_logged_in(){
  return document.body.classList.contains('logged-in'); }

function init(){
  if (!/debug_email=1/.test(location.search))
      return;
  if (is_logged_in())
    return console.log('skip, user logged in');
  console.log('israeltomorrow email');
  show_popup();
}
init();
})();
