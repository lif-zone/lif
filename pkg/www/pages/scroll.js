'use strict'; /*jslint node:true, browser:true, react: true*/
import cn from 'classnames';
import {useEffect, useState} from 'react';
import Layout from '../components/layout.js';
import Icon_plus from '../public/img/icon_plus.svg';
import Icon_login from '../public/img/icon_login.svg';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {use_app_context} from '../utils/context.js';
import LIF from '../../util/lif.js';

export const getStaticProps = async ({locale})=>{
    const props = await serverSideTranslations(locale, ['common']);
    return {props};
};

export default function Scroll_page(){
  const {direction} = use_app_context();
  const icon_c = cn('text-gray-300 group-hover:text-white',
      direction=='rtl' && 'transform rotate-180');
  let s = LIF.Scroll.create();
  s.write({sub_type: 'start', text: 'Hello LIF'});
  s.write({text: 'I am a free man'} );
  s.write({sub_type: 'close', text: 'And you?'} );
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
