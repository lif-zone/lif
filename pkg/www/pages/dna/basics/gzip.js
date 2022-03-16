import * as _jquery from 'jquery';
import Layout from '../../../components/layout.js';
import anchorific from '../../../components/anchorific.js';
import {dna_style} from '../../../components/style.js';
import {H1, H2, H3} from '../../../components/anchor.js';
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
<Layout title='LIF DNA' desc='GZIP Basics' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>gzip Basics</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:dna@holaspark.com>dna@holaspark.com</a>
  </p>
</div>
<div class=content>
<h1 id=z_files text=".Z files">.Z files (deletes processed file after
  compressing/uncompressing)</h1>
<ol>
  <li>to compress:<br>
    <code>$ compress file_name</code></li>
  <li>to uncompress:<br>
    <code>$ uncompress file_name</code></li>
</ol>

<h1 id=gz_files text=".gz files">.gz files (deletes processed file after
  zipping/unzipping)</h1>
<ol>
  <li>to zip:<br>
    <code>$ gzip file_name</code></li>
  <li>to unzip:<br>
    <code>$ gunzip file_name</code></li>
  <li>
    to open a gz file without deleting the zipped file after unzipping,
    gunzip (or bunzip2 for bz2 files) with -c (console output) and redirection
    in order to keep the original file:<br>
    <code>$ gunzip -c file_name.gz &gt; file_name</code>
  </li>
</ol>

<h1 id=tar_files text=".tar files">.tar files</h1>
<ol>
  <li>to create:<br>
    <code>$ tar cvf file_name.tar files_to_process</code></li>
  <li>to extract:<br>
    <code>$ tar xvf file_name.tar</code></li>
  <li>to view content:<br>
    <code>$ tar tf file_name.tar</code></li>
</ol>

<h1 id=tgz_files text=".tgz and .tar.gz files">.tgz and .tar.gz files</h1>
<p>
  <code>$ tar xzvf file_name.tgz</code><br>
  does the same as: <code>$ gunzip -c file_name.tar.gz | tar xv</code>
</p>

<h1 id=tar_bz2_files text=".tar.bz2 files">.tar.bz2 files</h1>
<code>$ tar xIvf file_name.tar.bz2</code>
</div>`;
