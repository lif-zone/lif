import * as _jquery from 'jquery';
import Layout from '../../components/layout.js';
import anchorific from '../../components/anchorific.js';
import {dna_style} from '../../components/style.js';
import etask from '../../../util/etask.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
const NL = '\n';
const $ = jquery__WEBPACK_IMPORTED_MODULE_1__;
anchorific.init($);

export const getStaticProps = ({locale})=>etask(function*(){
  return {props: yield serverSideTranslations(locale, ['common'])}; });

export default function DNA(){
  Layout.use_scroll_to_hash($);
return (
<Layout title='LIF DNA' desc='Cloud Office' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Cloud Office</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>
      lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class=content>
<h1 id=cloud>Cloud Office</h1>
<p>
  At Spark we managed to make it possible to work from everywhere!<br>
  We have invested a lot of efforts in creating the right environment, the
  right tools, and the required procedures, so that you would feel no
  difference if you work from our headquarters, offices, from home, or from a
  local Cafe. All you need is an Internet connection, to allow you to connect
  to our <i>Cloud Office</i>.<br>
  The enhanced environment, tools, and procedures were evolved to compensate
  for the fact you are not sitting together with your peers in the same
  physical place, and to create conditions equivalent to working next to
  your peers at the same office.
</p>

<h2 id=cloud-login>Login and logout</h2>
<p>
  While working remotely, you are requested to
  <a href=/dna/dict#attendance-report>log in</a> when starting your day of
  work. Once logged in, you actually notify everybody you are "in the office",
  responsive, and available for every incoming task.<br>
  It is sometimes unclear when you need to log out, namely: to distinguish
  between real work, for which you are required to be logged in, and your
  free time, when you should be logged out.<br>
  Below you can find examples for both options:
</p>
<div class=email cat=good>
  <ul>
    <li>Reading emails</li>
    <li>Writing code</li>
    <li>Participating in all-hands meeting</li>
    <li>Talking to a customer</li>
  </ul>
</div>
<div class=email cat=bad>
  <ul>
    <li>Having lunch</li>
    <li>Upgrading your laptop</li>
    <li>Having a break that is longer than 5 minutes</li>
  </ul>
</div>
<p>
  While working from Spark headquarters, login and logout is used once you
  enter and leave the office.
</p>

<h2 id=cloud-morning>Morning greeting</h2>
<p>
  In a regular office, once starting your working day you usually pass by your
  peers and manager and say "good morning". At the Cloud Office, we are using
  IM applications to do the same.<br>
  Start your day by posting "Good morning" to your manager and peers, so that
  they know you are online and started your day.<br>
  You can also <a href=/dna/comm#im-notifications>notify</a> your peers about
  your current status on one of the IM apps you are using.
</p>

<h2 id=cloud-whatnext>What to do next?</h2>
<p>vp</p>

<h2 id=cloud-online>Is my peer online?</h2>
<p>contacts</p>

<h2 id=cloud-daily>What did I do today?</h2>
<p>daily</p>

<h2 id=cloud-servers>Is working remotely fast enough?</h2>
<p>servers are in the cloud</p>
</div>`;
