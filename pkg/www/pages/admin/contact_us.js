'use strict'; /*jslint node:true, browser:true, react: true*/
import cn from 'classnames';
import {useEffect, useState} from 'react';
import Layout from '../../components/layout.js';
import Icon_plus from '../../public/img/icon_plus.svg';
import Icon_login from '../../public/img/icon_login.svg';
import mongo from '../../../util/mongo.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {signIn, useSession, getSession} from 'next-auth/client';

export async function getServerSideProps(context){
    const session = await getSession(context);
    const translations = await serverSideTranslations(context.locale,
        ['common']);
    let messages = null;
    if (session)
    {
        let data = await mongo.find_all('contact_us');
        messages = (data||[]).map(({name, email, phone, freetext})=>
            ({name, email, phone, freetext}));
    }
    return {props: {session, messages, ...translations}};
}

export default function Contact_us({messages}){
  const [session] = useSession();
  if (!session)
  {
      return (
        <Layout>
          <div className="text-center mb-5 max-w-xl pt-10">
            <p>You are not permitted to see this page.</p>
            <a onClick={signIn}>Sign in</a>
          </div>
        </Layout>
      );
  }
  return (
    <Layout>
      <div className="px-3">
        <div className="mb-5">
          <h1>Protected page</h1>
          <div className="text-base font-semibold leading-5">
            {JSON.stringify(messages)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

