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
import ReactGA from 'react-ga';

// XXX: move to proper init section
ReactGA.initialize('G-94G7HR3TVG');

const classes = {
    popup_link: `font-semibold text-gray-500 text-opacity-75
        hover:text-opacity-100`,
};

const full_lang = {en: 'English', he: 'עברית'};

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
    const select_lang = l=>{
        setCookie('NEXT_LOCALE', l);
        router.push(router.route, router.route, {locale: l});
    };
    return <div ref={wrapper_ref}>
          <span className={button_class} onClick={toggle}>
            <Icon_lang className="me-1"/> {locale.toUpperCase()}
          </span>
          <div className={cn(opened ? 'flex' : 'hidden', `absolute z-10
              end-0 bg-white mt-2 shadow-2xl rounded-lg`)}>
            <div className="px-2 text-gray-400 text-base">
              <div className="px-4 pt-4 pb-3">
                <div className="text-xs mb-3 tracking-widest">Language</div>
                {locales.map(l=><div className="my-2" key={l}>
                      <a onClick={()=>select_lang(l)}
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
    return <header className="p-4 mx-4 relative top-4 flex justify-between
          items-center text-sm lg:text-base">
        <div className="left">
          <Link href="/">
            <a><img src="/img/lif.svg" alt="LIF - Trusted data network"
              className="h-8"/></a>
          </Link>
        </div>
	<div className="flex items-center">
	  <a href="https://github.com/lif-zone/lif"
            className="text-black flex items-center text-lg opacity-70
              transition-opacity hover:opacity-100 me-5">
            <Github className="w-auto me-2"/> GitHub
          </a>
          <Lang_selector/>
	</div>
      </header>;
};

export default function Layout({children}){
  useEffect(function mount(){
    // XXX: mv to right place to track page navigation
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  const {direction} = use_app_context();
  return (
    <div dir={direction||'ltr'}>
      <Head>
        <meta charSet="UTF-8"/>
        <title>LIF - Liberty, Independence, Freedom - חירות, עצמאות, חופש
        </title>
        <link rel="icon" href="/img/favicon.svg"/>
        <link rel="stylesheet" type="text/css"
          href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800"/>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
        <meta name="viewport" content={'width=device-width, '+
	  'height=device-height, initial-scale=1.0, minimum-scale=1.0'}/>
      </Head>
      <Header_small/>
      <div>{children}</div>
    </div>
  );
}
