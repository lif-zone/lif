'use strict'; /*jslint node:true, browser:true, react: true*/
import cn from 'classnames';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Layout from '../../components/layout.js';
import Icon_plus from '../../public/img/icon_plus.svg';
import Icon_login from '../../public/img/icon_login.svg';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {use_app_context} from '../../utils/context.js';
import {import_keys, generate_and_store_keys} from '../../../core/wallet.js';

export const getStaticProps = async ({locale})=>{
    const props = await serverSideTranslations(locale, ['common']);
    return {props};
};

const Login_btn = ({on_click})=>{
    const {direction} = use_app_context();
    const icon_c = cn('text-gray-300 group-hover:text-white',
        direction=='rtl' && 'transform rotate-180');
    return <button className="group flex justify-between w-full
          text-left items-center p-6 rounded-lg transition-colors
          duration-200 hover:bg-purple-500 hover:text-white"
          onClick={on_click}>
          <div>
            <h2 className="pb-2 text-xl font-bold">Login</h2>
            <p className="text-base w-52">
              Use keys found in your browser storage.</p>
          </div>
          <Icon_login className={icon_c}/>
        </button>;
};

const Create_wallet_btn = ({has_keys, on_click})=>{
    const {direction} = use_app_context();
    const icon_c = cn('text-gray-300 group-hover:text-white',
        direction=='rtl' && 'transform rotate-180');
    const title = has_keys ? 'Create another wallet' : 'Create Wallet';
    return <button className="group flex justify-between w-full text-left
          items-center p-6 rounded-lg transition-colors duration-200
          hover:bg-green-500 hover:text-white" autoFocus
          onClick={on_click}>
          <div>
            <h2 className="pb-2 text-xl font-bold">{title}</h2>
            <p className="text-base w-52">
              {has_keys ? 'Your current wallet keys will be replaced.' :
                'The keys be stored in your browser local storage.'}
            </p>
          </div>
          <Icon_plus className={icon_c}/>
        </button>;
};

export default function Wallet(){
  const [has_keys, set_has_keys] = useState();
  const router = useRouter();
  const check_keys = async ()=>{
      set_has_keys(!!await import_keys());
  };
  useEffect(()=>{
      check_keys();
  }, []);
  const login_cb = ()=>{
      router.push('/wallet/scroll');
  };
  const create_cb = async ()=>{
      if (has_keys && !window.confirm('Are you sure you want to replace your '+
        'local keypair with a new one?'))
      {
          return;
      }
      await generate_and_store_keys();
      if (has_keys)
          return login_cb();
      await check_keys();
  };
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
            {has_keys && <Login_btn on_click={login_cb}/>}
            <Create_wallet_btn has_keys={has_keys} on_click={create_cb}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
