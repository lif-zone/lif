/* for testing:
var script = document.createElement('script');
script.src  = 'http://localhost/israeltomorrow.js';
document.head.appendChild(script);
*/
// TODO:
// Check email is valid format
// Click outside should show error and not close dialog
// Show this dialog only once. once use entered email, store it in storage
// Save to lif db and to israeltomorrow db
// hover effect on button
// loggins to review conversation

var it_global_on_click;
(function(){
function on_click(){
  document.querySelector('#__register_popup').remove();
}
it_global_on_click = on_click;

function show_popup(){
  let div = document.createElement('dib');
  div.id='__register_popup';
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
            <input type="email" class="__it_email" placeholder="אימייל"/>
            <button onClick="it_global_on_click()" class="__it_email_send"><span>כניסה</span></button>
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
