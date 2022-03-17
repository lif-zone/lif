import * as _jquery from 'jquery';
import Layout from '../../../components/layout.js';
import anchorific from '../../../components/anchorific.js';
import {dna_style} from '../../../components/style.js';
import etask from '../../../../util/etask.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
const NL = '\n';
const $ = jquery__WEBPACK_IMPORTED_MODULE_1__;
anchorific.init($);

export const getStaticProps = ({locale})=>etask(function*(){
  return {props: yield serverSideTranslations(locale, ['common'])}; });

export default function DNA(){
  Layout.use_scroll_to_hash($);
return (
<Layout title='LIF DNA' desc='Diff & Patch Basics' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>diff & patch Basics</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class=content>
<h1 id=diff_files>.diff files</h1>
<ol>
  <li>
    to create a .diff file of two directories for use with patch:<br>
    <code>$ diff -rNC3 original_dir changed_dir &gt; diff_file_name.diff</code>
  </li>
  <li>to apply a diff to a whole directory:<br>
    <code>$ patch -p1 -d dir_name &lt; diff_file_name.diff</code></li>
  <li>if apply the diff in reverse:<br>
    <code>$ patch -R -p1 -d dir_name &lt; diff_file_name.diff</code></li>
  <li>
    if the diff file is zipped:<br>
    <code>$ gunzip -c diff_file_name.diff.gz | patch -p1 -d dir_name</code>
  </li>
  <li>
    to create a .diff file from files contain a cvs flags (like $Id):<br>
    <code>$ diff -rNC3 -I'.*\$Id.*Exp \$' linux-2.2.14/ linux-2.2.15/ &gt;
      diff_file_name.diff</code>
  </li>
</ol>
</div>`;
