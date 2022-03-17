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
<Layout title='LIF DNA' desc='HTML Coding Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>HTML Coding Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
  <p>
    Coding conventions used by other companies:
    <a href=https://google.github.io/styleguide/htmlcssguide.xml>google</a> |
    <a href=http://www.w3schools.com/html/html5_syntax.asp>w3schools</a> |
    <a href=http://codeguide.co>@mdo</a>
  </p>
</div>
<div class=content>
<h2 id=consistent_minimal text="Consistent and Minimal">Consistent and
  Minimal</h2>
<p>
  Most important rules:<br>
  <a href=/dna/js_code#overview-consistent>Be consistent</a>.<br>
  <a href=/dna/js_code#overview-minimal>Be minimal</a>.<br>
  <a href=/dna/js_code#overview-tool>Use tools</a>.<br>
  Read these sections carefully.
</p>

<h2 id=template text="Standard template">Standard template</h2>
<xmp cat=good>
  <!doctype html>
  <html>
    <head>
      ...
    </head>
    <body>
      ..
    </body>
  </html>
</xmp>

<p>Indentation is 2 spaces (not 4 as in programming languages).<br>
  Column width is 79 chars, unless it breaks a single attribute value.</p>
<xmp cat=bad>
  <li>Click the button and go to Spark's main website page link
  <a href=http://holaspark.com>holaspark.com</a> and click about</li>
</xmp>
<xmp cat=bad>
  <li>Click the button and go to Spark's main website page link <a href=http://holaspark.com>holaspark.com</a> and click about</li>
</xmp>
<xmp cat=bad>
  <li>Click the button and go to Spark's main website page link <a
    href=http://holaspark.com>holaspark.com</a> and click about</li>
</xmp>
<xmp cat=bad>
  <li>Click the button and go to Spark's main website page link <a href=http://holaspark.com>
    holaspark.com</a> and click about</li>
</xmp>
<xmp cat=good>
  <li>
    Click the button and go to Spark's main website page link
    <a href=http://holaspark.com>holaspark.com</a>
    and click about
  </li>
</xmp>
<xmp cat=good>
  <li>
    Click the button and go to Spark's main website page link
    <a href=http://holaspark.com>holaspark.com</a> and click about
  </li>
</xmp>
<xmp cat=good>
  <li>Click the button and go to Spark's main website page link
    <a href=http://holaspark.com>holaspark.com</a> and click about</li>
</xmp>
<xmp cat=bad>
  <p>
    Click the button and go to a website page link
    <a
      href=http://very.long/url/that/exeeds/79/charachters>Very very long page name</a>
    and click about
  </p>
</xmp>
<xmp cat=bad>
  <p>
    Click the button and go to a website page link
    <a href=http://very.long/url/that/exeeds/79/charachters>
      Very very long page name</a> and click about
  </p>
</xmp>
<xmp cat=good>
  <p>
    Click the button and go to a website page link
    <a href=http://very.long/url/that/exeeds/79/charachters>Very very long page name</a>
    and click about
  </p>
</xmp>

<p>Items which contain less than two rows will end on the same line, while
  items which have more than two rows will end in a new line.</p>
<xmp cat=good>
  <li>Short line</li>
</xmp>
<xmp cat=good>
  <li>This is a sentence that goes above 79 characters per line and therefore
    should be split into two rows</li>
</xmp>
<xmp cat=good>
  <li>
    This is a sentence that goes above 79 characters and also above three
    lines and therefore it should be split into three rows and start/end the
    tags in new lines
  </li>
</xmp>
<xmp cat=bad>
  <li>This is a bad example of sentance that goes above 79 characters and
    also above three lines but ends on the same last line as it not suppose
    to be</li>
</xmp>

<p>Don't break the line before the closing tag of an empty element.
  If the line is too long, break it before an attribute.</p>
<xmp cat=bad>
  <script src=http://somecdn.com/long-path/jquery.js>
  </script>
</xmp>
<xmp cat=good>
  <script src=http://somecdn.com/long-path/jquery.js></script>
</xmp>
<xmp cat=good>
  <script
    src=http://somecdn.com/long-path/jquery.js></script>
</xmp>

<p><code>&lt;br&gt;</code> are like new line in text.
  Break the line after it.</p>
<xmp cat=bad>
  Time flies when you are having fun!<br>You finished your first week.
</xmp>
<xmp cat=good>
  Time flies when you are having fun!<br>
  You finished your first week.
</xmp>
<xmp cat=bad>
  Time flies when you are having fun!<br><br><br>
  You finished your first week.
</xmp>
<xmp cat=good>
  Time flies when you are having fun!<br>
  <br>
  <br>
  You finished your first week.
</xmp>

<h2 id=names_tags text="Element names and tags">Element names and tags always
  in lower case.</h2>
<xmp cat=bad>
  <FORM ACTION=/submit>
</xmp>
<xmp cat=good>
  <form action=/submit>
</xmp>

<h2 id=hyperlinks text="Hyperlinks">Hyperlinks</h2>
<p>Always use absolute links and paths.</p>
<xmp cat=bad>
  <a href=file>Click here</a>
</xmp>
<xmp cat=bad>
  <a href=dir/file>Click here</a>
</xmp>
<xmp cat=bad>
  <a href=../dir/file>Click here</a>
</xmp>
<xmp cat=good>
  <a href=/root/path/file>Click here</a>
</xmp>
<xmp cat=good>
  <a href=//site.com/path/file>Click here</a>
</xmp>
<xmp cat=good>
  <a href=http://site.com/path/file>Click here</a>
</xmp>
<p>Using relative links and paths are allowed only if they point to the same
  document.</p>
<xmp cat=good>
  <a href=#id>Click here</a>
</xmp>
<xmp cat=bad>
  <a href=file#id>Click here</a>
</xmp>
<xmp cat=bad>
  <a href=./file#id>Click here</a>
</xmp>
<xmp cat=good>
  <a href=/path/to/file#id>Click here</a>
</xmp>

<h2 id=special text="Special characters">Special characters</h2>
<p>
  Use <code>&amp;amp; &amp;lt; &amp;gt;</code> only in html, not inside tags.
</p>
<xmp cat=good>
  <div>The answer is: a &gt; b</div>
</xmp>
<xmp cat=bad>
  <div title="The answer is: a &gt; b">Answer</div>
</xmp>
<xmp cat=good>
  <div title="The answer is: a > b">Answer</div>
</xmp>

<p>
  Avoid using <code>&amp;amp;</code>. Use plain <code>&</code>
  wherever possible.
</p>
<xmp cat=bad>
    Hello &amp; Goodbye!
</xmp>
<xmp cat=good>
    Hello & Goodbye!
</xmp>
<xmp cat=bad>
  <a href=/get?type=user&amp;name=bat></a>
</xmp>
<xmp cat=good>
  <a href=/get?type=user&name=bat></a>
</xmp>
<p>
  Use <code>&amp;amp;</code> only where escaping needed - when followed by
  <code>a-z0-9</code> and <code>;</code>
</p>
<xmp cat=bad>
  <div>expression: x = a&b;</div>
</xmp>
<xmp cat=good>
  <div>expression: x = a&amp;b;</div>
</xmp>

<p>
  <code>&amp;copy; &amp;apos; &amp;lsquo; &amp;rsquo; &amp;mdash; &amp;bull;</code>
  etc.:<br>
  use plain unicode UTF8 chars for it (validate your VI is
  <code>:set encoding=utf-8</code>).
</p>
<xmp cat=bad>
  <div>This &lsquo;download&rsquo; is the right one.</div>
</xmp>
<xmp cat=good>
  <div>This ‘download’ is the right one.</div>
</xmp>

<h2 id=quote text="Quote only if needed">Quote only if needed</h2>
<p>
  Due to <a href=#consistent_minimal>minimalism</a><br>
  quote attribute values only if they need quoting (contain spaces,
  <code>&lt;</code> <code>&gt;</code> <code>"</code> <code>'</code>...).
  No need to quote <code>&</code> <code>?</code> <code>=</code>
  <code>#</code>.
</p>
<xmp cat=bad>
  <a href="http://site.com/download?option=1&set=1">Download</a>
</xmp>
<xmp cat=good>
  <a href=http://site.com/download?option=1&set=1>Download</a>
</xmp>
<xmp cat=bad>
  <div id="download_btn">Download now</div>
</xmp>
<xmp cat=good>
  <div id=download_btn>Download now</div>
</xmp>
<xmp cat=bad>
  <div class="download">Download now</div>
</xmp>
<xmp cat=good>
  <div class=download>Download now</div>
</xmp>
<xmp cat=good>
  <div class="download button">Download now</div>
</xmp>

<p>
  Leave quotes on attributes that typically require quoting,
  such as JS fragments, and angular 'JS like' directives.
</p>
<xmp cat=bad>
  <div ng-click=img_click('brand')>
</xmp>
<xmp cat=good>
  <div ng-click="img_click('brand')">
</xmp>
<xmp cat=bad>
  <div ng-if=!hide_filter>
</xmp>
<xmp cat=good>
  <div ng-if="!hide_filter">
</xmp>

<p>
  No need to quote empty attributes.
</p>
<xmp cat=bad>
  <option selected="">Customer</option>
</xmp>
<xmp cat=good>
  <option selected>Customer</option>
</xmp>

<h2 id=tag_id text="Tag's id">Tag's id should be the first element</h2>
<xmp cat=bad>
  <h3 text="Bring value" id=bring_value>Bring value</h3>
</xmp>
<xmp cat=good>
  <h3 id=bring_value text="Bring value">Bring value</h3>
</xmp>

<h2 id=tag_class text="Tag's class">Tag's class should be after id element</h2>
<xmp cat=bad>
  <h3 text="Bring value" class=bring_value>Bring value</h3>
</xmp>
<xmp cat=bad>
  <h3 class=more_value id=bring_value text="Bring value">Bring value</h3>
</xmp>
<xmp cat=good>
  <h3 id=bring_value class=more_value text="Bring value">Bring value</h3>
</xmp>
<xmp cat=good>
  <h3 class=more_value text="Bring value">Bring value</h3>
</xmp>

<h2 id=redundant_type text="Avoid redundant type">Avoid redundant
  <code>type=text/javascript</code></h2>
<p>
  Due to <a href=#consistent_minimal>minimalism</a>
</p>
<xmp cat=bad>
    <script type=text/javascript src=/jquery.js></script>
</xmp>
<xmp cat=good>
    <script src=/jquery.js></script>
</xmp>
<xmp cat=bad>
    <link rel=stylesheet type=text/css href=/main.css>
</xmp>
<xmp cat=good>
    <link rel=stylesheet href=/main.css>
</xmp>

<h2 id=noscript_alt_title text="noscript/alt/title">
  Don't use <code>&lt;noscript&gt;</code> <code>alt=</code> <code>title=</code>
</h2>
<p>
  We are in the age of HTML5. We don't do web pages for browsers without
  JavaScript, or text based browsers. Therefore we avoid obsolete features
  such as <code>&lt;noscript&gt;</code> and <code>alt=</code>
</p>
<xmp cat=bad>
  <img src=/login.png alt="Click to login">
</xmp>
<xmp cat=good>
  <img src=/login.png>
</xmp>
<xmp cat=bad>
  <script>... login form in JS...</script>
  <noscript>...pure html login from without JS...<noscript>
</xmp>
<xmp cat=good>
  <script>... login form in JS...</script>
</xmp>
<p>
  Tooltips are great - they are the modern alternative to <code>F1</code>
  help. But browsers tooltips (<code>title=</code>) don't display nice clear
  large fonts, cannot include HTML, just plain text.<br>
  Since tooltips are important, we avoid using the built-in browser tooltips,
  and we use our own jquery/angularjs tooltips, such as
  <code>data-tooltip</code>.
</p>
<xmp cat=bad>
  <div title="KB/s: kilobytes per second">4385</div>
</xmp>
<xmp cat=good>
  <div data-tooltip title="<b>4385 KB/s</b>: kilobytes per second">4385</div>
</xmp>

<h2 id=svg_usage text="SVG usage">SVG usage</h2>
<p>
  SVGs should be placed in <code>svg</code> files,
  not embedded into the <code>html</code>.<br>
  Loading an SVG resource should be done with <code>&lt;use&gt;</code>.
</p>
<xmp cat=bad>
  <div>
    <svg>
      <path d="M 2,0 0,11 9,6 z"></path>
    </svg>
  </div>
</xmp>
<xmp cat=good>
  <div>
    <svg>
      <use xlink:href=/img/image.svg#cat></use>
    </svg>
  </div>
</xmp>
<p>
  And the <code>svg</code> file:
</p>
<xmp cat=good title=img/logo.svg>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <symbol id=cat viewBox="0 0 9 11">
      <path d="M 2,0 0,11 9,6 z"></path>
    </symbol>
  </svg>
</xmp>
<p>Include <code>svg4everybody</code> (polyfill for IE) library and call it
  after your html will be ready.</p>
<p>
  Multiple related SVGs may be put in the same <code>svg</code> file and loaded
  separately using <code>&lt;symbol&gt;</code> tag.
</p>
<xmp cat=good>
  <div>
    <svg>
      <use xlink:href=/img/image.svg#dog></use>
      <use xlink:href=/img/image.svg#cat></use>
    </svg>
  </div>
</xmp>
<p>
  Apply styles (like <code>fill</code>) to each fragment of svg.
</p>
<xmp cat=good>
  .my_svg use {
      fill: #ccc;
  }
</xmp>

<h2 id=new_window>New window</h2>
<p>Links should not open new windows/tabs - user can right-click himself to
  open new tab, or click BACK to return to current window</p>
<xmp cat=bad>
  <a href=http://different.site.com target=_blank>click here</a>
</xmp>
<xmp cat=good>
  <a href=http://different.site.com>click here</a>
</xmp>

<h2 id=filename>Filenames</h2>
<p>
  The path is part of the name. Don't include the path name in the filename.
</p>
<xmp cat=bad>
    pkg/svc/dashboard/pub/dashboard_table.html
</xmp>
<xmp cat=good>
    pkg/svc/dashboard/pub/table.html
</xmp>
<p>
  Main module page is called index.html.
</p>
<xmp cat=bad>
    pkg/svc/dashboard/pub/dashboard.html
</xmp>
<xmp cat=good>
    pkg/svc/dashboard/pub/index.html
</xmp>

<h2 id=external text="External JS/CSS">External JS/CSS</h2>
<p>External JS/CSS code used on our site as-is should be via CDN, in the
  following order of preference:</p>
<ol>
  <li><a href=http://cdnjs.com>cloudflare cdnjs</a></li>
  <li><a href=http://developers.google.com/speed/libraries/devguide>google</a></li>
  <li><a href=http://www.asp.net/ajaxlibrary/cdn.ashx>microsoft</a></li>
  <li><a href=http://www.jsdelivr.com>jsdelivr</a></li>
</ol>

<h2 id=angular text="AngularJS">AngularJS</h2>
<p>
  Avoid <code>data-</code> prefix by default.
</p>
<xmp cat=bad>
  <div data-ng-if="is_customer">
</xmp>
<xmp cat=good>
  <div ng-if="is_customer">
</xmp>

<h2 id=express text="ExpressJS">ExpressJS</h2>
<p>
  TODO (missing description of our angular tree layout)
</p>
</div>`;
