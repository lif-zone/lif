'use strict'; /*jslint node:true, browser:true, react: true*/
import cn from 'classnames';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Layout from '../../../components/layout.js';
import Icon_plus from '../../../public/img/icon_plus.svg';
import Icon_login from '../../../public/img/icon_login.svg';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {use_app_context} from '../../../utils/context.js';
import {import_keys} from '../../../../util/wallet.js';

export const getStaticProps = async ({locale})=>{
    const props = await serverSideTranslations(locale, ['common']);
    return {props};
};

export default function Wallet(){
  let router = useRouter();
  useEffect(()=>{
      (async ()=>{
          if (!(await import_keys()))
              router.push('/wallet');
      })();
  }, []);
  return (
    <Layout>
      <div className="px-3">
        <div className="text-center mb-5">
          <h1>Your <b>Scrolls</b></h1>
          <div className="text-base text-gray-500 font-semibold leading-5">
            Todo: Short explanation
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-gray-100 p-2 max-w-xl mx-auto">
          Todo: list scrolls
        </div>
      </div>
    </Layout>
  );
}
