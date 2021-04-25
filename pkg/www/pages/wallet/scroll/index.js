'use strict'; /*jslint node:true, browser:true, react: true*/
import {useEffect, useState} from 'react';
import Link from 'next/link';
import Layout from '../../../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import date from '../../../../util/date.js';
import zutil from '../../../../util/util.js';
import Scroll from '../../../../core/scroll.js';
import {import_keys} from '../../../../core/wallet.js';

const Scroll_form = ({update_cb, keypair})=>{
    const [name, set_name] = useState('');
    const [error, set_error] = useState();
    const submit = async event=>{
        event.preventDefault();
        if (!name || error)
            return;
        await Scroll.create(name, import_keys());
        await update_cb();
        set_name('');
    };
    useEffect(()=>{
        set_error(null);
        if (!name.length)
            return;
        if (!/^[0-9a-z_]+$/i.test(name))
            set_error('invalid name');
    }, [name]);
    return <form className="grid grid-cols-1 gap-2 mb-8" onSubmit={submit}>
      <label className="block">
        <span className="text-gray-700">Scroll name</span>
        <input type="text" className="mt-1 block w-full rounded-md
          border-gray-300 shadow-sm focus:border-indigo-300 focus:ring
          focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="" value={name}
          onChange={e=>set_name(e.target.value)}/>
      </label>
      {error && <div className="text-sm text-red-800">{error}</div>}
      <button type="submit" className="bg-blue-600 w-32 disabled:opacity-50
        hover:bg-blue-800 text-white py-1 px-4 rounded"
        disabled={!!error || !name}>Add</button>
    </form>;
};

const Scroll_el = ({name, public_key, length, updated_at, created_at})=>{
    return <Link href={`/wallet/scroll/${encodeURIComponent(public_key)}`}>
        <div className="rounded-lg shadow-lg bg-gray-100 p-5 mb-4
          cursor-pointer group">
          <div className="text-lg group-hover:underline">
            <div className="inline text-xl font-bold">{name}</div>{' '}
            {length} declarations
          </div>
          <div className="text-gray-500 text-sm">
            public key {zutil.minify_str(public_key)}
          </div>
          {created_at && <div className="text-gray-500 text-sm mt-2">
              created {date.to_sql(created_at)}
            </div>}
          {updated_at && <div className="text-gray-500 text-sm">
              updated {date.to_sql(updated_at)}
            </div>}
        </div>
      </Link>;
};

export const getStaticProps = async ({locale})=>{
    const props = await serverSideTranslations(locale, ['common']);
    return {props};
};

export default function Scrolls(){
  const [scrolls, set_scrolls] = useState([]);
  let load_scrolls = async ()=>{
      set_scrolls(await Scroll.get_all_scrolls());
  };
  useEffect(()=>{
      load_scrolls();
  }, []);
  return (
    <Layout>
      <div className="px-3 max-w-xl mx-auto">
        <div className="text-center mb-5">
          <h1>Your <b>Scrolls</b></h1>
          <div className="text-base text-gray-500 font-semibold leading-5">
            Todo: Short explanation
          </div>
        </div>
        {<Scroll_form update_cb={()=>load_scrolls()}/>}
        {scrolls.map((scroll, i)=><Scroll_el key={i} {...scroll}/>)}
      </div>
    </Layout>
  );
}
