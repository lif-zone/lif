'use strict'; /*jslint node:true, browser:true, react: true*/
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import JSON6 from 'json-6';
import Layout from '../../../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import date from '../../../../util/date.js';
import zutil from '../../../../util/util.js';
import Scroll from '../../../../core/scroll.js';
import {import_keys} from '../../../../core/wallet.js';

export const getServerSideProps = async ({locale})=>{
    const props = await serverSideTranslations(locale, ['common']);
    return {props};
};

const Declaration_form = ({scroll, update_cb})=>{
    const [data_input, set_data_input] = useState();
    const [data, set_data] = useState(null);
    const [error, set_error] = useState();
    const submit = async event=>{
        event.preventDefault();
        if (error)
            return;
        await scroll.decl(data);
        await update_cb();
        set_data_input('');
    };
    useEffect(()=>{
        set_error(null);
        set_data(null);
        try {
            if (data_input)
                set_data(JSON6.parse(data_input));
        } catch(e){
            set_error(''+e);
        }
    }, [data_input]);
    return <form className="grid grid-cols-1 gap-2 mb-8" onSubmit={submit}>
      <label className="block">
        <span className="text-gray-700">Data JSON</span>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 h-28
            shadow-sm focus:border-indigo-300 focus:ring
            focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="" value={data_input}
          onChange={e=>set_data_input(e.target.value)}/>
      </label>
      {error && <div className="text-sm text-red-800">{error}</div>}
      <button type="submit" className="bg-blue-600 w-32 disabled:opacity-50
          hover:bg-blue-800 text-white py-1 px-4 rounded"
          disabled={!!error || !data}>
          Declare</button>
    </form>;
};

const Declaration = decl=>{
    const decl2str = ()=>{
        let obj = zutil.clone_deep(decl);
        if (obj.sig)
            obj.sig = zutil.minify_str(obj.sig);
        if (obj.meta && obj.meta.public_key)
            obj.meta.public_key = zutil.minify_str(obj.meta.public_key);
        if (obj.meta && obj.meta.prev_sig)
            obj.meta.prev_sig = zutil.minify_str(obj.meta.prev_sig);
        if (obj.data && obj.data.author && obj.data.author.sig)
            obj.data.author.sig = zutil.minify_str(obj.data.author.sig);
        return JSON.stringify(obj, null, 4);
    };
    return <div className="rounded-lg shadow-lg bg-gray-100 p-5 mb-4">
          <div className="text-gray-500 text-sm mt-2">
            {date.to_sql(decl.meta.ts)}
          </div>
          <div className="text-sm whitespace-pre">
            {decl2str()}
          </div>
        </div>;
};

export default function Declarations(){
  const router = useRouter();
  const sid = router.query.scroll;
  const [declarations, set_declarations] = useState([]);
  const [scroll, set_scroll] = useState();
  const [error, set_error] = useState(null);
  useEffect(()=>{
      (async ()=>{
          const _keypair = await import_keys();
          if (!_keypair)
              return router.push('/wallet');
      })();
  }, []);
  const load_declarations = async _scroll=>{
      set_declarations([]);
      set_declarations(await _scroll.find_all({}));
  };
  useEffect(()=>{
      (async ()=>{
          if (scroll)
              scroll.close();
          const keypair = Scroll.find_my_scroll_keypair(sid);
          if (!keypair)
              return set_error('Missing scroll keys in localStorage');
          const _scroll = await Scroll.open_write(keypair);
          set_scroll(_scroll);
          await load_declarations(_scroll);
      })();
  }, [sid]);
  const first_decl = declarations[0];
  let scroll_name = zutil.get(first_decl, 'data.author.name');
  return (
    <Layout>
      <div className="max-w-xl mx-auto px-3">
        <Link href="/wallet/scroll">← back to scrolls</Link>
        <div className="text-center mb-5">
          <h1><b>{scroll_name}</b> declarations</h1>
          <div className="text-base text-gray-500 font-semibold leading-5">
            public key {zutil.minify_str(sid)}
          </div>
        </div>
        {error && <div className="text-center text-sm text-red-800">
          {error}</div>}
        {scroll && <Declaration_form scroll={scroll}
            update_cb={()=>load_declarations(scroll)}/>}
        {declarations.map((decl, i)=><Declaration key={i} {...decl}/>)}
      </div>
    </Layout>
  );
}
