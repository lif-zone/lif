import cn from 'classnames';
import {forwardRef} from 'react';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import Icon_arrow from '../public/img/icon_arrow.svg';
import Icon_wht1 from '../public/img/wht-icon1.svg';
import Icon_wht2 from '../public/img/wht-icon2.svg';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {use_app_context} from '../utils/context.js';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';

const video_url = 'https://drive.google.com/file/d/1haTxF4aocS6V9FVej21ghdy3ZFetOzba/preview';

const Primary_button = forwardRef(({children, arrow}, ref)=>{
    /* XXX TODO: add arrow LTR/RTL
      {arrow && <Icon_arrow className="ml-3 transition-transform
      duration-300 transform group-hover:translate-x-1"/>} */
    return <a ref={ref} className="group inline-flex font-bold cursor-pointer
        no-underline bg-lif-blue text-white px-6 py-2 leading-4 rounded-full
        items-center hover:bg-lif-blue-darkened h-12 transform
        hover:-translate-y-0.5 transition-transform shadow-md">
        {children}
      </a>;
});

const Inline_button = forwardRef(({children}, ref)=>{
    return <a ref={ref} className="group flex-inline font-bold cursor-pointer
        no-underline bg-lif-blue text-white px-3 py-1 leading-4 rounded-2xl
        items-center hover:bg-lif-blue-darkened">
        {children}
      </a>;
});

const Arrow_link = forwardRef(({children}, ref)=>{
    return <a ref={ref} className="group inline-flex font-bold cursor-pointer
        no-underline text-lif-blue items-center">
        {children}
        <Icon_arrow className="ml-1 transition-transform relative top-0.5
            duration-300 transform group-hover:translate-x-1"/>
      </a>;
});

const Home_first = ()=>{
    const {direction} = use_app_context();
    const {t} = useTranslation('homepage');
    const title_c = cn('text-center mb-8 sm:text-right md:pt-4',
        direction=='rtl' ? 'sm:pl-10' : 'sm:pr-10');
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 py-14
        pl-10 pr-14">
        <div className={title_c}>
          <h1>LIF</h1>
          <p className="mt-8 text-2xl">{t('title')}</p>
        </div>
        <div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe src={video_url} allowFullScreen className="shadow-xl"/>
          </div>
        </div>
      </div>
    );
};

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'homepage']);
    return {props};
});

export default function Home(){
  const {t} = useTranslation('homepage');
  return (
    <Layout>
      <Home_first/>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 p-14 pb-0">
          <div className="mb-16">
            <h2>{t('what_is_lif')}</h2>
            <p className="mt-4 mb-8 text-xl leading-7">
	      {t('lif_is')}<br/>{t('lif_is2')}
	    </p>
            <Primary_button arrow>{t('more_info')}</Primary_button>
          </div>
          <div className="">
            <div className="mb-14">
              <h3 className="flex items-start">
                <Icon_wht1 className="h-8 inline mr-2"/>
                What makes it secure?
              </h3>
              <p className="mt-4 mb-3">LIF uses cutting-edge
                encryption technology and never compromises on decentralization
                and censorship-resistance. Your funds are accessible to no one
                but you.
              </p>
              <Arrow_link><Link href="/about">Learn More</Link></Arrow_link>
            </div>
            <div className="mb-14">
              <h3 className="flex items-start">
                <Icon_wht2 className="h-8 inline mr-2"/>
                What makes it special?
              </h3>
              <p className="mt-4 mb-3">Being browser-first. It allows for easy
                user and developer interaction and makes complicated Blockchain
                universally accessible. Think library vs. Wikipedia.
              </p>
              <Arrow_link><Link href="/about">Learn More</Link></Arrow_link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto pb-6">
          <h2 className="sm:text-center px-10 pb-6">What can I do with it?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="px-12 py-6 sm:border-r">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/pay_online.png" className="w-60"/>
              </div>
              <h3>Pay Online</h3>
              <p>LIF is the easiest way to pay with decentralized money.
                Integrate it via API or shop plugins.</p>
              <Arrow_link><Link href="/about">Learn More</Link></Arrow_link>
            </div>
            <div className="px-12 py-6 hidden sm:block border-r">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/digital_money.png" className="w-60"/>
              </div>
              <h3>Pay Online</h3>
              <p>LIF is the easiest way to pay with decentralized money.
                Integrate it via API or shop plugins.</p>
              <Arrow_link><Link href="/about">Learn More</Link></Arrow_link>
            </div>
            <div className="px-12 py-6 hidden md:block">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/get_donations.png" className="w-60"/>
              </div>
              <h3>Pay Online</h3>
              <p>LIF is the easiest way to pay with decentralized money.
                Integrate it via API or shop plugins.</p>
              <Arrow_link><Link href="/about">Learn More</Link></Arrow_link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-12">
        <Inline_button>See all Use Cases</Inline_button>
      </div>
      <div className="px-12 max-w-6xl mx-auto">
        <div className="lif-blue-bg rounded-lg p-8 text-white
          grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h2>Build on it</h2>
            <p className="text-xl">JavaScript and a basic understanding of
              Blockchain is all you need.<br/>A great community is happy to
              help you.</p>
          </div>
          <div className="mt-4 flex sm:flex-col justify-between sm:items-end">
            <div></div>
            <Primary_button arrow>GO TO DEV CENTER</Primary_button>
          </div>
        </div>
      </div>
      <div className="lif-blue-bg mt-12">
        <div className="lif-hexagon-bg">
          <div className="p-12 max-w-6xl mx-auto text-white">
            <h2>Support the Network by mining</h2>
            <p className="my-10 text-xl">Connecting to the blockchain only
              requires opening a web browser. See how mining works on
              lif.zone/mining</p>
            <Primary_button arrow>SEE IT IN ACTION</Primary_button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
