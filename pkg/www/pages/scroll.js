'use strict'; /*jslint node:true, browser:true, react: true*/
import Layout from '../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import LIF from '../../util/lif.js';

export const getStaticProps = async ({locale})=>{
    const props = await serverSideTranslations(locale, ['common']);
    return {props};
};

export default function Scroll_page(){
  let s = LIF.Scroll.create();
  s.write({sub_type: 'start', text: 'Hello LIF'});
  s.write({text: 'I am a free man'});
  s.write({sub_type: 'close', text: 'And you?'});
  console.log('XXX scroll %s', s.str());
  s.close();
  return (
    <Layout>
      <div className="px-3">
        <h3>Scroll test</h3>
      </div>
    </Layout>
  );
}
