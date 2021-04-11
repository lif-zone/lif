'use strict'; /*jslint node:true, browser:true, react: true*/
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import date from '../../../../util/date.js';
import zutil from '../../../../util/util.js';
import Scroll from '../../../../core/scroll.js';
import db_provider from '../../../../core/db_provider_stub.js';
import {import_keys} from '../../../../core/wallet.js';

export const getServerSideProps = async ({locale})=>{
    const props = await serverSideTranslations(locale, ['common']);
    return {props};
};

const Declaration_form = ({scroll, keypair, update_cb})=>{
    const [data_input, set_data_input] = useState();
    const [data_json, set_data_json] = useState({});
    const [error, set_error] = useState();
    const submit = async event=>{
        event.preventDefault();
        if (error)
            return;
        await scroll.decl(keypair, data_json);
        await update_cb();
        set_data_input('');
    };
    useEffect(()=>{
        set_error(null);
        try {
            if (data_input)
                set_data_json(JSON.parse(data_input));
            else
                set_data_json({});
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
          hover:bg-blue-800 text-white py-1 px-4 rounded" disabled={!!error}>
          Declare</button>
    </form>;
};

const minify_str = str=>{
    if (str.lenght<20)
        return;
    return str.slice(0, 16)+'...'+str.slice(-16);
};

const Declaration = decl=>{
    const decl2str = ()=>{
        let obj = zutil.clone_deep(decl);
        if (obj.sig)
            obj.sig = minify_str(obj.sig);
        if (obj.meta && obj.meta.public_key)
            obj.meta.public_key = minify_str(obj.meta.public_key);
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
  const [keypair, set_keypair] = useState();
  useEffect(()=>{
      (async ()=>{
          const _keypair = await import_keys();
          if (!_keypair)
              return router.push('/wallet');
          set_keypair(_keypair);
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
          const _scroll = await Scroll.open(db_provider, sid);
          set_scroll(_scroll);
          await load_declarations(_scroll);
      })();
  }, [sid]);
  return (
    <Layout>
      <div className="max-w-xl mx-auto px-3">
        <Link href="/wallet/scroll">← back to scrolls</Link>
        <div className="text-center mb-5">
          <h1><b>{sid}</b> declarations</h1>
          <div className="text-base text-gray-500 font-semibold leading-5">
            Todo: Short explanation
          </div>
        </div>
        {keypair && scroll && <Declaration_form scroll={scroll}
            keypair={keypair} update_cb={()=>load_declarations(scroll)}/>}
        {declarations.map((decl, i)=><Declaration key={i} {...decl}/>)}
      </div>
    </Layout>
  );
}
