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
<Layout title='LIF DNA' desc='Perl Coding Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Perl Coding Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:dna@holaspark.com>dna@holaspark.com</a>
  </p>
</div>
<div class=content>
<h2 id=general text="General">General</h2>
<p>
  In general, most of C coding convention apply to Perl coding convention, and
  one should try to make the perl code looks like c code as mush he can.
  for example:
</p>
<ul>
  <li>- Indentation is always one shift-width(4):</li>
  <li>- case has the same indentatio level and switch</li>
  <li>- ...</li>
</ul><br>
<p>
  Important note: Perl have many features that allow the programmer to do
  strange, dangrous and hard to maintain coding. avoid that by using common
  sense, and by keeping your code close to our c coding conventions (see
  previous code as a reference). if you have a doubt - ask.
</p>

<h2 id=strict text="strict">strict</h2>
<p>
  allway use strict package by putting <code>use strict</code> at the
  beginning of the file.
</p>

<h2 id=functions_arguments text="Functions arguments">Functions arguments</h2>
<p>Allways declare argument names at the beginning of the function.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      sub my_sub
      {
          return sys_get(@_);
      }
  </xmp>
  <xmp cat=good>
      sub my_sub
      {
          my ($cmd) = (@_);
          return sys_get($cmd);
      }
  </xmp>
</div>
<h2 id=braces text="Open and close braces">Open and close braces</h2>
<p>
  <code>if/else/case/for</code> there is only one line of code, put the
  opening brace at the same line as the <code>if</code> statement. if there is
  more than one line, put it on the line below the <code>if</code> statement.
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if ($var eq '')
      {
          do_something();
      }
      if ($var eq ''){
          do_something();
          do_something_else();
      }
  </xmp>
  <xmp cat=good>
      if ($var eq ''){
          do_something(); }
      if ($var eq '')
      {
          do_something();
          do_something_else();
      }
  </xmp>
</div>

<h2 id=if text="if statement"><code>if</code> statement</h2>
<p>
  when comparing vars with string value, use perl internal functions (e.g. eq,
  ne).<br>
  when comparing vars with boolean/int value use == or omit the comparison
  completely (like in C).
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if ($var == "a string") ...
      if ($var eq 2)...
  </xmp>
  <xmp cat=good>
      if ($var eq "a string") ...
      if ($var == 2) ...
      if ($var) ...
  </xmp>
</div>

<h2 id=switch text="switch statement">switch statement</h2>
<p>
  put the case as the same level of the switch statement.<br>
  use else for the default value.
</p>
<xmp cat=good>
    switch($type)
    {
    case ('str')
    {
        if ($var == 2){
            do_something(); }
    }
    case ('bool'){
        do_something(); }
    else {
        err("invalind option");
    }
    }
</xmp>
<p>
  if you have many short satements, you can put the staement in the same line
  as the case statement:
</p>
<xmp cat=good>
    switch ($DIST)
    {
    case ('APP'){ add_package_APP(); }
    case ('HOST'){ add_package_HOST(); }
    case ('SYSSERVER'){ add_package_SYSSERVER(); }
    else { err("invalid DIST $DIST"); }
    }
</xmp>

<h2 id=eval text="Using eval()">Using eval()</h2>
<p>
  You should not run a 'lot of code' under eval(), since eval() does not exit
  the programm upon failure (e.g. these is an invalid expression inside
  eval()).<br>
  Hence, you should always check the return value of eval and do the
  appropriate erorr handling.<br>
  Needless to say, eval() should be avoided if at all possible.
</p>
</div>`;
