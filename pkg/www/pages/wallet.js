'use strict'; /*jslint node:true, browser:true, react: true*/
import cn from 'classnames';
import {useEffect, useState} from 'react';
import Layout from '../components/layout.js';
import Icon_plus from '../public/img/icon_plus.svg';
import Icon_login from '../public/img/icon_login.svg';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {use_app_context} from '../utils/context.js';

export const getStaticProps = async ({locale})=>{
    const props = await serverSideTranslations(locale, ['common']);
    return {props};
};

export default function Wallet(){
  const {direction} = use_app_context();
  const icon_c = cn('text-gray-300 group-hover:text-white',
      direction=='rtl' && 'transform rotate-180');
  return (
    <Layout>
      <div className="px-3">
        <div className="text-center mb-5">
          <h1>Join LIF</h1>
          <div className="text-base text-gray-500 font-semibold leading-5">
            No registration, no install,<br/> 100% free</div>
        </div>
        <div className="rounded-lg shadow-lg bg-gray-100 p-2 max-w-xl mx-auto">
          <div className="divide-y">
            <button className="group flex justify-between w-full text-left
              items-center p-6 rounded-lg transition-colors duration-200
              hover:bg-green-500 hover:text-white" autoFocus>
              <div>
                <h2 className="pb-2 text-xl font-bold">Create Account</h2>
                <p className="text-base w-52">
                  Choose an Avatar. Set a password. Done.</p>
              </div>
              <Icon_plus className={icon_c}/>
            </button>
            <button className="group flex justify-between w-full text-left
              items-center p-6 rounded-lg transition-colors duration-200
              hover:bg-purple-500 hover:text-white">
              <div>
                <h2 className="pb-2 text-xl font-bold">Login</h2>
                <p className="text-base w-52">
                  Use your Login File or Recovery Words.</p>
              </div>
              <Icon_login className={icon_c}/>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
