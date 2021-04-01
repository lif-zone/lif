'use strict'; /*jslint node:true, browser:true, react: true*/
import {useEffect} from 'react';
import Layout from '../../components/layout.js';
import mongo from '../../../util/mongo.js';
import date from '../../../util/date.js';
import url from '../../../util/url.js';
import csv from '../../../util/csv.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {signIn, useSession, getSession} from 'next-auth/client';
import {useRouter} from 'next/router';

export async function getServerSideProps(context){
    const session = await getSession(context);
    const translations = await serverSideTranslations(context.locale,
        ['common']);
    let messages = null;
    if (session)
    {
        let data = await mongo.find_all('contact_us');
        messages = (data||[]).map(({name, email, phone, freetext, ts})=>
            ({name, email, phone, freetext, ts: date.to_sql(ts)}));
    }
    return {props: {session, messages, ...translations}};
}

const Table_row = ({ts, name, email, phone, freetext})=>{
    return <tr className="text-sm">
          <td className="border border-emerald-500 align-top whitespace-pre">
            {ts}</td>
          <td className="border border-emerald-500 align-top">{name}</td>
          <td className="border border-emerald-500 align-top">
            {url.is_valid_email(email) ?
                <a href={'mailto:'+email}>{email}</a> : email}
          </td>
          <td className="border border-emerald-500 align-top">
            {phone}</td>
          <td className="border border-emerald-500 align-top">
            {freetext}</td>
        </tr>;
};

const Login = ()=>{
    return <Layout>
          <div className="text-center mb-5 max-w-xl pt-10 mx-auto">
            <p>You are not permitted to see this page.</p>
            <a onClick={signIn}>Sign in</a>
          </div>
        </Layout>;
};

const Error = ()=>{
    return <Layout>
          <div className="text-center mb-5 max-w-xl pt-10 mx-auto">
            <p>An error occurred.</p>
          </div>
        </Layout>;
};

const download_csv = (data, file_name)=>{
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    let str = csv.to_str(data);
    let blob = new Blob([str], {type: 'octet/stream'});
    let burl = window.URL.createObjectURL(blob);
    a.href = burl;
    a.download = file_name;
    a.click();
    window.URL.revokeObjectURL(burl);
};

export default function Contact_us({messages}){
  const [session] = useSession();
  const router = useRouter();
  const download = ()=>download_csv(messages, 'contacts.csv');
  useEffect(()=>{
      if (messages && router.query.csv)
          download();
  }, []);
  if (!session)
      return <Login/>;
  if (!messages)
      return <Error/>;
  return (
    <Layout>
      <div className="px-3">
        <div className="mb-5">
          <h1>Contact us submissions</h1>
          <div className="mb-4">
            <a onClick={download}>Download csv</a>
          </div>
          <div className="text-base font-semibold leading-5">
            <table className="table-auto bg-white border-collapse w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Free text</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((m, i)=><Table_row key={i} {...m}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

