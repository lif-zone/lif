import Head from 'next/head';
import Github from '../public/img/github.svg';
import {useEffect} from 'react';
import {use_app_context} from '../utils/context.js';
import {useCookies} from 'react-cookie';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';

const select_lang = (l, router, setCookie)=>{
  setCookie('NEXT_LOCALE', l);
  router.push(`/${l}${router.asPath}`, `/${l}${router.asPath}`,
      {locale: false});
};

const Header_small = ()=>{
    const setCookie = useCookies([])[1];
    const router = useRouter();
    const {t} = useTranslation('common');
    const {direction} = use_app_context();
    const rtl = direction=='rtl';
    return <bdo dir="ltr">
      <header className='p-6 text-sm lg:text-base'>
        <div className='lif_logo'>
          <a href="/en"><img src="/img/lif.svg" className="h-8"/></a>
        </div>
        {!rtl && <div className="flex-grow"></div>}
        <bdo dir={rtl ? 'rtl' : 'ltr'}>
	  <div className="flex items-top git_icon">
	    <a href="https://github.com/lif-zone/lif"
	      className="text-lif-main flex items-top text-lg opacity-70
	      transition-opacity hover:opacity-100">
	      <Github className="w-auto"/>
	    </a>
	    <div className="px-4 lang_selector">
             <a onClick={()=>select_lang(rtl ? 'en' : 'he', router, setCookie)}
	       className="text-lif-main text-lg">
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

export default function Layout({title, children, desc, image, style, dir}){
  var {direction} = dir || use_app_context();
  title = title || 'LIF - Liberty Independence Freedom - חירות עצמאות חופש';
  const router = useRouter();
  let url = 'https://lif.zone/'+router.locale+router.pathname;
  return (
    <div dir={direction||'ltr'} className="min-h-screen">
      <Head>
        <script src="/js/console_overload.js"/>
        <script async
          src="https://www.googletagmanager.com/gtag/js?id=G-94G7HR3TVG"/>
        <script dangerouslySetInnerHTML={{__html: google_analytics}} />
        <meta charSet="UTF-8"/>
        <title>{title}</title>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={desc}/>
        <meta property="og:url" content={url}/>
        <meta property="og:image" content={image}/>
        <meta property="og:type" content="website"/>
        <meta property="og:updated_time" content="2021-03-30T14:38:00-00:00"/>
        <link rel="icon" href="/img/favicon.svg"/>
        <link rel="stylesheet" type="text/css"
          href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800"/>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
        <meta name="viewport" content={'width=device-width, '+
	  'height=device-height, initial-scale=1.0, minimum-scale=1.0'}/>
        {style}
      </Head>
      <Header_small/>
      {children}
    </div>
  );
}
Layout.use_scroll_to_hash = function($){
  if (typeof window=='undefined')
    return;
  $('.content').anchorific({spyOffset: -10, anchorText: ''});
  let current;
  useEffect(()=>{
    let hash = location.hash, timer, timer2;
    if (hash && current!=hash){
      current = hash;
      clearTimeout(timer);
      clearTimeout(timer2);
      let id = hash.replace('#', '');
      let el = document.getElementById(id);
      if (el){
        el.scrollIntoView({behavior: 'smooth'});
        timer = setTimeout(()=>el.scrollIntoView(), 100);
        timer2 = setTimeout(()=>el.scrollIntoView(), 250);
        current = hash;
      }
    }
  });
}
