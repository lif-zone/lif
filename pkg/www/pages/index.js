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
    const {direction} = use_app_context();
    const arr_c = cn(`ms-3 transition-transform duration-300 transform
        group-hover:translate-x-1`, direction=='rtl' && 'rotate-180');
    return <a ref={ref} className="group inline-flex font-bold cursor-pointer
        no-underline bg-lif-blue text-white px-6 py-2 leading-4 rounded-full
        items-center hover:bg-lif-blue-darkened h-12 transform
        hover:-translate-y-0.5 transition-transform shadow-md">
        {children}
        {arrow && <Icon_arrow className={arr_c}/>}
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
    const {direction} = use_app_context();
    const arr_c = cn(`ms-1 transition-transform relative top-0.5
        duration-300 transform group-hover:translate-x-1`,
        direction=='rtl' && 'rotate-180');
    return <a ref={ref} className="group inline-flex font-bold cursor-pointer
        no-underline text-lif-blue items-center">
        {children}
        <Icon_arrow className={arr_c}/>
      </a>;
});

const Home_first = ()=>{
    const {t} = useTranslation('homepage');
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 py-14
        pl-10 pr-14">
        <div className="text-center mb-8 sm:text-right md:pt-4 sm:pe-10">
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
                <Icon_wht1 className="h-8 inline me-2"/>
   	        {t('what_can_i_do_with_lif')}
              </h3>
              <div className="mt-4 mb-3">
	        <ul>
	          <li>{t('what_can_i_do_with_lif_desc1')}</li>
	          <li>{t('what_can_i_do_with_lif_desc2')}</li>
	          <li>{t('what_can_i_do_with_lif_desc3')}</li>
	          <li>{t('what_can_i_do_with_lif_desc4')}</li>
	          <li>{t('what_can_i_do_with_lif_desc5')}</li>
	          <li>{t('what_can_i_do_with_lif_desc6')}</li>
	        </ul>
	      </div>
              <Link href="/about"><Arrow_link>{t('more_info')}</Arrow_link></Link>
            </div>
            <div className="mb-14">
              <h3 className="flex items-start">
                <Icon_wht2 className="h-8 inline me-2"/>
    	        {t('lif_advantages')}
              </h3>
              <div className="mt-4 mb-3">
	        <ul>
	          <li>{t('lif_advantages_desc1')}</li>
	          <li>{t('lif_advantages_desc2')}</li>
	          <li>{t('lif_advantages_desc3')}</li>
	          <li>{t('lif_advantages_desc4')}</li>
	          <li>{t('lif_advantages_desc5')}</li>
	        </ul>
              </div>
              <Link href="/about"><Arrow_link>{t('more_info')}</Arrow_link></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto pb-6">
          <h2 className="sm:text-center px-10 pb-6">{t('usage_examples')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="px-12 py-6 sm:border-e">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/pay_online.png" className="w-60"/>
              </div>
              <h3>{t('usage1')}</h3>
              <p>{t('usage1_desc')}</p>
              <Link href="/about"><Arrow_link>Learn More</Arrow_link></Link>
            </div>
            <div className="px-12 py-6 hidden sm:block border-e">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/digital_money.png" className="w-60"/>
              </div>
              <h3>{t('usage2')}</h3>
              <p>{t('usage2_desc')}</p>
              <Link href="/about"><Arrow_link>Learn More</Arrow_link></Link>
            </div>
            <div className="px-12 py-6 hidden md:block">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/get_donations.png" className="w-60"/>
              </div>
              <h3>{t('usage3')}</h3>
              <p>{t('usage3_desc')}</p>
              <Link href="/about"><Arrow_link>{t('more_info')}</Arrow_link></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-12">
        <Inline_button>See all Use Cases</Inline_button>
      </div>
      {false && // XXX decide if needed
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
            <Primary_button arrow>GitHub</Primary_button>
          </div>
        </div>
      </div>
      }
      <div className="lif-blue-bg mt-12">
        <div className="lif-hexagon-bg">
          <div className="p-12 max-w-6xl mx-auto text-white">
            <h2>{t('want_to_help')}</h2>
            <div className="my-10 text-xl">
              <p>{t('want_to_help_desc1')}</p>
              <p>{t('want_to_help_desc2')}</p>
              <p>{t('want_to_help_desc3')}</p>
	    </div>
            <Primary_button arrow>{t('contact_us')}</Primary_button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
