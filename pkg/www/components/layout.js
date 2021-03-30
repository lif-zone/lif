import cn from 'classnames';
import {useRef, useState, useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Icon_lang from '../public/img/icon_lang.svg';
import Github from '../public/img/github.svg';
import {use_app_context} from '../utils/context.js';
import {use_outside_alerter} from '../utils/react.js';
import {useCookies} from 'react-cookie';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';

const classes = {
    popup_link: `font-semibold text-gray-500 text-opacity-75
        hover:text-opacity-100`,
};

const full_lang = {en: 'English', he: 'עברית'};

const select_lang = (l, router, setCookie)=>{
  setCookie('NEXT_LOCALE', l);
  router.push(router.route, router.route, {locale: l});
};

const Lang_selector = ()=>{
    const setCookie = useCookies([])[1];
    const {locale, locales} = useRouter();
    const [opened, set_opened] = useState();
    const toggle = ()=>set_opened(!opened);
    const wrapper_ref = useRef(null);
    use_outside_alerter(wrapper_ref, ()=>set_opened(false));
    const button_class = cn(`flex flex-row items-center transition-colors
        cursor-pointer hover:text-gray-700`,
        opened ? 'text-gray-500' : 'text-gray-400');
    const router = useRouter();
    return <div ref={wrapper_ref}>
          <span className={button_class} onClick={toggle}>
            <Icon_lang className="me-1"/> {locale.toUpperCase()}
          </span>
          <div className={cn(opened ? 'flex' : 'hidden', `absolute z-10
              bg-white mt-2 shadow-2xl rounded-lg`)}>
            <div className="px-2 text-gray-400 text-base">
              <div className="px-4 pt-4 pb-3">
                <div className="text-xs mb-3 tracking-widest">Language</div>
                {locales.map(l=><div className="my-2" key={l}>
                      <a onClick={()=>select_lang(l, router, setCookie)}
                        className={cn(classes.popup_link,
                          locale==l && 'font-bold')}>
                        {full_lang[l]||l.toUpperCase()}
                      </a>
                    </div>)
		}
              </div>
            </div>
          </div>
        </div>;
};

const Header_small = ()=>{
    const setCookie = useCookies([])[1];
    const router = useRouter();
    const {t} = useTranslation('common');
    const {direction} = use_app_context();
    const rtl = direction=='rtl'
    return <bdo dir="ltr">
      <header className="p-6 text-sm lg:text-base">
        <div>
          <a href="/en"><img src="/img/lif.svg" className="h-8"/></a>
        </div>
        {!rtl && <div className="flex-grow"></div>}
        <bdo dir={rtl ? 'rtl' : 'ltr'}>
	  <div className="flex items-top">
	    <a href="https://github.com/lif-zone/lif"
	      className="text-lif-main flex items-top text-lg opacity-70
	      transition-opacity hover:opacity-100">
	      <Github className="w-auto"/>
	    </a>
	    <div className="px-4">
             <a onClick={()=>select_lang(rtl ? 'en' : 'he', router, setCookie)}
	       className="text-lif-main">
	       {t('en_he_link')}
              </a>
            </div>
	  </div>
        </bdo>
        {rtl && <div className="flex-grow"></div>}
        <div>
          <a href="/he"><img src="/img/hah.svg" className="h-8"/></a>
        </div>
      </header>
      </bdo>;
};

let google_analytics = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-94G7HR3TVG');`;

export default function Layout({title, children, desc, image}){
  const {direction} = use_app_context();
  title = title || 'LIF - Liberty Independence Freedom - חירות עצמאות חופש';
  const router = useRouter();
  let url = 'https://lif.zone/'+router.locale+router.pathname;
  return (
    <div dir={direction||'ltr'} className="min-h-screen">
      <Head>
        <script async
          src="https://www.googletagmanager.com/gtag/js?id=G-94G7HR3TVG"/>
        <script dangerouslySetInnerHTML={{__html: google_analytics}} />
        <meta charSet="UTF-8"/>
        <title>{title}</title>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={desc}/>
        <meta property="og:url" content={url}/>
        <meta property="og:image" content={image}/>
        <link rel="icon" href="/img/favicon.svg"/>
        <link rel="stylesheet" type="text/css"
          href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800"/>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
        <meta name="viewport" content={'width=device-width, '+
	  'height=device-height, initial-scale=1.0, minimum-scale=1.0'}/>
      </Head>
      <Header_small/>
      {children}
    </div>
  );
}
