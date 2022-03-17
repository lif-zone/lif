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
<Layout title='LIF DNA' desc='Dogs at the office' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Dogs at the office Guide</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class="content code_page">
<h1 id=effective text="Dog at the office procedure">Dog at the office procedure</h1>
<p>
  Congratulations, you've brought your dog to the office, now you need to do
  the following so that your dog doesn't get banned from the office
</p>
<ul>
  <li>If you see any dog pee in the hallways, clean it, even if it isn't your
    dog. This helps the office stay pleasant for the people that don't bring
    dogs.
  </li>
  <li>Set in your google calender at 17:30 everyday to take your dog out to
    pee.
  </li>
  <li>Your dog must NOT be aggressive to other dogs, if he is, then you MUST
    keep him inside your office or you must have eye contact with him when he
    is outside.
  </li>
</ul>
</div>`;
