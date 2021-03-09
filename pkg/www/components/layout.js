import cn from 'classnames';
import {useRef, useState, forwardRef} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Icon_arrow from '../public/img/icon_arrow.svg';
import Icon_lang from '../public/img/icon_lang.svg';
import Github from '../public/img/github.svg';
import {use_app_context} from '../utils/context.js';
import {use_outside_alerter} from '../utils/react.js';
import {useRouter} from 'next/router';

const Nav_link = forwardRef(({children}, ref)=>{
    return <a ref={ref} className="font-bold opacity-50
        transition-opacity hover:opacity-100 duration-300 cursor-pointer
        no-underline mr-10 text-lif-main">{children}</a>;
});

const Nav_button_sec = forwardRef(({children}, ref)=>{
    return <a ref={ref} className="font-bold text-lif-main cursor-pointer
        no-underline mr-4 bg-lif-gray-bg px-4 py-2 leading-4 rounded-2xl
        items-center transition-colors duration-300
        hover:bg-lif-gray-bg-darkened">
        {children}
      </a>;
});

const Nav_button = forwardRef(({children, arrow}, ref)=>{
    return <a ref={ref} className="group flex font-bold cursor-pointer
        no-underline bg-lif-blue text-white px-4 py-2 leading-4 rounded-2xl
        items-center hover:bg-lif-blue-darkened">
        {children}
        {arrow && <Icon_arrow className="ml-2 transition-transform
            duration-300 transform group-hover:translate-x-0.5"/>}
      </a>;
});

const classes = {
    popup_link: `font-semibold text-gray-500 text-opacity-75
        hover:text-opacity-100`,
};

const Mobile_menu_overlay = ()=>{
    return <div className="px-2">
          <div className="flex items-center px-4 py-6 border-b">
            <Link href="/">
              <Nav_button_sec>Login</Nav_button_sec>
            </Link>
            <Link href="/">
              <Nav_button arrow>Create Account</Nav_button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-12 text-gray-400 text-base">
            <div className="px-4 py-6">
              <div className="text-xs mb-3 tracking-widest">ECOSYSTEM</div>
              <div className="my-2">
                <a className={classes.popup_link}>Apps</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Exchanges</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Use Cases</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Community</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Mining</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Security</a>
              </div>
            </div>
            <div className="px-4 py-6">
              <div className="text-xs mb-3 tracking-widest">
                PROJECT
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>About</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Roadmap</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Team</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Blog</a>
              </div>
              <div className="my-2">
                <a className={classes.popup_link}>Press Center</a>
              </div>
            </div>
          </div>
        </div>;
};

const Mobile_menu = ()=>{
    const [opened, set_opened] = useState();
    const toggle = ()=>set_opened(!opened);
    const wrapper_ref = useRef(null);
    use_outside_alerter(wrapper_ref, ()=>set_opened(false));
    const line_class = cn('group-hover:bg-gray-400 transition-colors',
        opened ? 'bg-gray-400' : 'bg-gray-300');
    return <div ref={wrapper_ref}>
          <button className="group flex w-6 h-5 flex-col justify-between
            items-end" onClick={toggle}>
            <span className={cn(line_class, 'w-full')}
              style={{height: '2px'}}/>
            <span className={cn(line_class, 'w-11/12')}
              style={{height: '2px'}}/>
            <span className={cn(line_class, 'w-10/12')}
              style={{height: '2px'}}/>
          </button>
          <div className={cn(opened ? 'flex' : 'hidden', `absolute z-10
              right-0 bg-white mt-2 origin-top-right shadow-2xl rounded-lg`)}>
            <Mobile_menu_overlay/>
          </div>
        </div>;
};

const Header = ()=>{
    return <header className="p-4 mx-4 relative top-4 flex justify-between
          items-center text-sm lg:text-base">
        <div className="left">
          <Link href="/">
            <a><img src="/img/lif.svg" alt="LIF - Trusted data network"
              className="h-8"/></a>
          </Link>
        </div>
	<div className="hidden md:flex items-center">
	  <Link href="/"><Nav_link>Developers</Nav_link></Link>
	  <Link href="/"><Nav_link>Apps</Nav_link></Link>
	  <Link href="/"><Nav_link>About</Nav_link></Link>
	  <Link href="/"><Nav_button_sec>Login</Nav_button_sec></Link>
	  <Link href="/"><Nav_button arrow>Create Account</Nav_button></Link>
	</div>
	<div className="md:hidden">
          <Mobile_menu/>
	</div>
      </header>;
};

const full_lang = {en: 'English', he: 'עִברִית'};

const Lang_selector = ()=>{
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
                {locales.map(l=>(
                    <div className="my-2" key={l}>
                      <a onClick={()=>select_lang(l)}
                        className={cn(classes.popup_link,
                          locale==l && 'font-bold')}>
                        {full_lang[l]||l.toUpperCase()}
                      </a>
                    </div>
                ))}
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
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet"/>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Header_small/>
      <div>{children}</div>
    </div>
  );
}
