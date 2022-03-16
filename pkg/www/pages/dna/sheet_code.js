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
<Layout title='LIF DNA' desc='Spreadsheet Coding Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Spreadsheet Coding Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:dna@holaspark.com>dna@holaspark.com</a>
  </p>
</div>
<div class=content>
<h2 id=overview>Overview</h2>
<p>
  These guidelines are for spreadsheets that will be used by multiple people at
  Spark.
  The guidelines are meant to create sheets that are simple to digest, to use,
  and to expand.
  We work only with Google sheets.
</p>

<h2 id=consistent_minimal>Consistent and Minimal</h2>
<p>
  Most important rules:
  <a href=/dna/js_code#overview-consistent>Be consistent</a>.
  <a href=/dna/js_code#overview-minimal>Be minimal</a>.
  Read these sections carefully.
</p>

<h2 id=gdoc>Use Google Sheets</h2>
<h3 id=gdoc_why text="Why?">Why we use Google sheets?</h3>
<p>
  We use exclusively Google Docs Sheets, never Microsoft Office Excel.
  This allows us to easily share and contribute the document, control
  revisions, and provide a common platform.<br>
  Due to historic reasons, we may sometimes refer to a spreadsheet
  in short as an 'XL' - but we still mean Google Sheets, not Microsoft Excel...
</p>
<h3 id=gdoc_how text="How?">How to save a new Google sheet?</h3>
<p>Newly added files should be owned by <dfn>sysadmin@holaspark.com</dfn>.</p>
<ul>
  <li>Move the newly created sheet to the correct folder under <dfn>Spark</dfn>
    drive</li>
  <li>Change the sheet's owner to <dfn>sysadmin@holaspark.com</dfn></li>
  <ul>
    <li>Right-click on the sheet and choose <dfn>Share</dfn></li>
    <li>Click on <dfn>Advanced</dfn> in the bottom right corner</li>
    <li>Search for <dfn>sysadmin@holaspark.com</dfn></li>
    <li>Click on the pencil icon next to Sysadmin and choose
      <dfn>Is owner</dfn></li>
  </ul>
</ul>
<p>Once done, the sheet will be moved to Spark's storage.</p>

<h2 id=number text="Numbers">Number format</h2>

<h3 id=number-thousands>Thousands separator</h3>
<p>
  Should always have commas thousands separator.<br>
  Click in the menu: <code>Format</code> &rarr; <code>Number</code> &rarr;
  <code>Custom number format...</code> &rarr; select
  <code>#,##0</code> (<code>1,235</code>) format.
</p>
<xmp cat=bad>
  77302
</xmp>
<xmp cat=good>
  77,302
</xmp>

<h3 id=number-decimal>Avoid decimal point</h3>
<p>
  Don't use decimal points unless they are substantial.
</p>
<xmp cat=bad>
  77,302.23
</xmp>
<xmp cat=good>
  77,302
</xmp>
<xmp cat=bad>
  0
</xmp>
<xmp cat=good>
  0.23
</xmp>

<h2 id=date text="Dates">Date format</h2>
<p>
  Use only  or DD-Mmm-YYYY (or DD-Mmm-YY).<br>
  Click in the menu: <code>Format</code> &rarr; <code>Number</code> &rarr;
  <code>More date and time formats...</code> &rarr; select
  <code>5-Aug-1930</code> format.
</p>
<xmp cat=bad>
  15/1/16
</xmp>
<xmp cat=bad>
  2016-15-01
</xmp>
<xmp cat=good>
  15-Jan-16
</xmp>
<xmp cat=good>
  15-Jan-2016
</xmp>

<h2 id=cell text="Cell content">Cell content & format</h2>

<h3 id=cell-single>Single value</h3>
<p>
  Should have only one value, so that the cells are sortable.
  If you have 2 values in a cell, split it up in to 2 different cells.
</p>
<xmp cat=bad>
  C4 cell: "15-Jan-16 started with the new green button"
</xmp>
<xmp cat=good>
  C4 cell: "15-Jan-16"
  D4 cell: "started with a new green button"
</xmp>

<h3 id=cell-merge>Never merge cells</h3>
<p>
  Don't merge cells. It makes the sheet manipulation impossible.
</p>

<h3 id=cell-highlight>Avoid highlighting</h3>
<p>
  Don't highlight cells to show their status.
  If you need to highlight its typically a sign that you need another
  information cell next to it.
  Why? So that you can sort cells according to this data (highlight is not a
  sort feature yet) Should have only one value, so that the cells are sortable.
</p>

<h3 id=cell-headers Text="Headers">Column and Row Headers</h3>
<p>
  First row should typically have the column headers,
  and first column should typically have row headers.<br>
  These should be highlighted in a different color, in bold,
  and row/column of headers should be 'frozen'
  (<code>View</code> &rarr; <code>Freeze</code> &rarr; <code>1 row</code>)
  so that it doesn't scroll with the values.
</p>

<h2 id=share>Sharing</h2>
<p>
  By default build the sheets in the Spark directory so that they are
  accessible to all without needing to share.
</p>

<h2 id=sanity text="Sanity">Sanity checks</h2>
<p>
  Incorporate sanity checks that will discover errors.
  For example by summing up % columns to make sure they total 100%.
</p>

<h2 id=obsolete text="Obsolete">Obsolete sheets</h2>
<p>
  If the sheet is no longer in use, due to being replaced by a different
  sheet, erase all the sheets, and leave a text on the only sheet left with
  the link to the new sheet, so that nobody uses that sheet by accident.
</p>
</div>`;
