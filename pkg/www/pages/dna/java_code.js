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
<Layout title='LIF DNA' desc='Java Coding Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Java Coding Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class=content>
<h2 id=general text="General">General</h2>
<p>
  Use <a href=/dna/js_code>JS coding conventions</a>, except for
  the following, use <a href=/dna/c_code>C coding
    conventions</a>:
</p>
<ul>
  <li>class definitions: like C struct</li>
  <li>variables: like C variables</li>
  <li>field in a class should have m_ prefix</li>
  <li>static public should NOT have g_ prefix</li>
  <li>anon class will be declared like anon function in js</li>
  <li>
    if overriding method use @Override in line above:
    <div class=bad_good_bind>
      <xmp cat=bad>
          @Override public void on_change(...)
      </xmp>
      <xmp cat=good>
          @Override
          public void on_change(...)
      </xmp>
    </div>
  </li>
  <li>no getter or setter need for internal classes</li>
  <li>private fields in class must be at start of the class (there is an
    exception when it is the main class of the file)</li>
  <li>
    synchronized should be formatted like JS function/catch:
    <div class=bad_good_bind>
      <xmp cat=bad>
          synchronized (a) { a = 1; }
      </xmp>
      <xmp cat=good>
          synchronized(a){ a = 1; }
      </xmp>
      <xmp cat=good>
          synchronized(a){
              a = 1; }
      </xmp>
      <xmp cat=good>
          synchronized(a)
          {
              a = 1;
              b = 1;
          }
      </xmp>
    </div>
  </li>
  <li>
    classes with a single method can use the JS tiny function style:
    <div class=bad_good_bind>
      <xmp cat=good>
          new Thread()
          {
              run()
              {
                  ...
              }
          };
      </xmp>
      <xmp cat=good>
          new Thread(){
              run(){
                  ...
              }
          };
      </xmp>
      <xmp cat=good>
          new Thread(){ run(){
             ...
          }};
      </xmp>
      <xmp cat=good>
          new Thread(){ run(){
             ...; }};
      </xmp>
      <xmp cat=good>
          new Thread(){ run(){ ...; }};
      </xmp>
    </div>
  </li>
  <li>main class (that the file is named after) content should not be
    indented</li>
</ul>
</div>`;
