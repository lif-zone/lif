import * as _jquery from 'jquery';
import Layout from '../../components/layout.js';
import anchorific from '../../components/anchorific.js';
import {dna_style} from '../../components/style.js';
import {H1, H2, H3} from '../../components/anchor.js';
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
<Layout title='LIF DNA' desc='Development Tree Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Development Tree Conventions</div>
  <p>
    During our development process, there is a lot of knowledge we
    use which is a common practice.<br>
    <b>What name should I give to a new file?</b><br>
    <b>Where should I put a new file?</b><br>
    <b>What type of file should go into <code>pub</code>?</b><br>
    Here are the answers!
  </p>
  <p>
    Improvements? Suggestions?
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class=content>
<h1 id=overview-consistent_minimal text="Consistent and Minimal">Consistent
  and Minimal</h1>
<p>
  Most important rules:
  <a href=/dna/js_code#overview-consistent>Be consistent</a>.
  <a href=/dna/js_code#overview-minimal>Be minimal</a>.
  Read these sections carefully.
</p>

<h1 id=lift text="LIFT">LIFT</h1>
<p>
  we adopted
  <a href=https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#folders-by-feature-structure>LIFT</a>
  principles:
</p>
<ul>
  <li><a href=#lift-locate>Locating</a> our code is easy</li>
  <li><a href=#lift-identify>Identify</a> code at a glance</li>
  <li><a href=#lift-flat>Flat</a> structure as long as we can</li>
  <li>Try to stay DRY (Don’t Repeat Yourself) or
    <a href=#lift-tdry>T-DRY</a></li>
</ul>

<h2 id=lift-locate text="Easy locate">Easy locate</h2>
<p>
  Easy to locate via tree structure that its path splits up according to
  modules and subjects.
</p>

<h2 id=lift-identify text="Identify at glance">Identify at glance</h2>
<p>
  The path of the file tells what it is:
  <code>pkg/www/hola/pub/inc/navbar.html</code>
</p>
<ul>
  <li>
    <code>pkg</code>: this is a source code module (package...), as opposed
    to <code>doc</code> that holds documents.
  </li>
  <li>
    <code>www</code>: this is the web-site package.
  </li>
  <li>
    <code>hola</code>: this is the
    <a href=http://holaspark.com>holaspark.com</a> web-site (we have also
    <a href=http://holacdn.com>holacdn.com</a> and other sites).
  </li>
  <li>
    <code>pub</code>: this is the 'public' browser client side part
    of the site, as opposed to the server side nodejs part of the site.
  </li>
  <li>
    <code>inc</code>: this is the fragments that included by html pages.
  </li>
  <li>
    <code>navbar.html</code>: this is the navigation bar fragment included
    by all pages of the <a href=http://holaspark.com>holaspark.com</a> site.
  </li>
</ul>

<h2 id=lift-flat text="Flat structure">Flat structure</h2>
<p>
  Don't open a new subdir, unless you have at least 7 files in the current
  directory.<br>
  We avoid this deep and unnecesary neasting of directories that 'Java'
  programmers love:
  <a href=https://github.com/anthonycr/Lightning-Browser/tree/dev/app/src/main/java>
  Deep dir Java example from github</a>:
</p>
<pre>
  /Lightning-Browser
    /gradle
    /app
      /src
         /main
           /java: 1 dir
             /acr: 1 dir
               /browser: 1 dir
                 /lightning: finially the source code begins...
</pre>
<p>
  We would have arranged it:
</p>
<pre>
  Lightning-Browser
    /gradle
    /src: the source code begins!
          (was Lightning-Browser/app/src/main/java/acr/browser/lightning)
</pre>

<h2 id=lift-tdry text="DRY">Try to stay DRY</h2>
<p>
  Try not repeat yourself, but don't take it to the extreeme.
  If its a large function, avoid repetition by moving it into a shared
  directory, and make it 'utility'.
  This also helps preventing the need to repeat the unit-tests.
  But, if its a tiny 1 or 2 line function, its not always
  worth the effort preventing repetition, since the modularization,
  importing, and sharing this code my sometimes be longer that
  just duplicating the tiny function, and will make the
  code less 'stand alone' due to the additional importing.<br>
</p>

<h3 id=lift-tdry-name text="Don't repeat name">Don't repeat name</h3>
<p>
  The path is part of the name - don't repeat the path name in the filename:
</p>
<xmp cat=bad>
    pkg/svc/dashboard/pub/dashboard_main.js
</xmp>
<xmp cat=good>
    pkg/svc/dashboard/pub/main.js
</xmp>

<h1 id=name text="Naming">Naming</h1>
<p>
  Short and concise names, taking into account that the path name already
  provides a lot of into on the file's purpose.
</p>
<h2 id=name-unix text="Unix notation">Unix notation</h2>
<p>
  lower case.
</p>
<xmp cat=bad>
  Controller.HTML
  Controller.html
</xmp>
<xmp cat=good>
  controller.html
</xmp>
<p>
  use <code>_</code> as word splitter, just like
  <a href=/dna/js_code#format-notation>JS var name conventions</a>
</p>
<xmp cat=bad>
  loginApprove.html
</xmp>
<xmp cat=good>
  login_approve.html
</xmp>
<p>
  avoid spaces and any special chars. Use <code>_</code>.
</p>
<xmp cat=bad>
  login.approve.html
  login-approve.html
</xmp>
<xmp cat=good>
  login_approve.html
</xmp>

<h2 id=name-techeng text="Technical simiplified english">Technical simplified
  english</h2>
<p>
  Names should be in technical simplified english (as opposed to 'correct
  english'). Use simple present tense.
</p>
<xmp cat=bad>
  walk_through_the_tree_and_show_results.html
</xmp>
<xmp cat=good>
  result.html
</xmp>
<xmp cat=good>
  walk.html
</xmp>
<p>
  Simple present tense.
</p>
<xmp cat=bad>
  walker.js
</xmp>
<xmp cat=good>
  walk.js
</xmp>
<xmp cat=bad>
  removal.js
</xmp>
<xmp cat=good>
  remove.js
</xmp>
<p>
  Normally avoid plural. Use it only when both plural and singular exist.
</p>
<xmp cat=bad>
  referrals.js
</xmp>
<xmp cat=good>
  referral.js
</xmp>
<xmp cat=bad>
  results.js
</xmp>
<xmp cat=good>
  result.js
</xmp>
<xmp cat=good>
  customers.js // tables of all customer
  customer.js // view/edit a single customer
</xmp>

<h1 id=template text="Templates">Templates</h1>
<p>
  Web applications: NodeJS code in the root, public client browser files
  under pub: JS and HTML at the root, <code>/css</code> for css,
  <code>/img</code> for images, <code>/inc</code> for html fragments.
</p>
<xmp cat=good>
  /app.js
  /login.js
  /pub/index.html
  /pub/download.html
  /pub/main.js
  /pub/login.js
  /pub/inc/navbar.html
  /pub/css/main.css
  /pub/img/logo.png
</xmp>
<p>
  AngularJS: Component oriented.<br>
  Split into files/directories according to components/features, not
  accoding to directive/controller/service/view/route.
</p>
<xmp cat=bad>
  /pub/main_directives.js
  /pub/main_controllers.js
  /pub/main_services.js
  /pub/main_views.js
</xmp>
<xmp cat=good>
  /pub/login.js
  /pub/navbar.js
  /pub/referral.js
  /pub/download.js
</xmp>
</div>`;
