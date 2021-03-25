import {Component} from 'react';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {Footer, Video} from '../components/common.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import {Trans, useTranslation} from 'next-i18next';

const Home_first = ()=>{
    const {t, i18n} = useTranslation('homepage')
    const lang = i18n.language;
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div className="text-center mb-8 text-start md:pt-4 sm:pe-10">
	  <div className={'px-6 '+
            (lang=='en' ? ' text-right' : 'text-left')}>
	    <a href={lang=='he' ? '/en' : '/he'}>{t('en_he_link')}</a>
	  </div>
          <h1 className="px-6 pb-3 text-2xl">
	    <nobr><span className="text-4xl">{t('title_w1a')}</span>
	    <span>{t('title_w1b')}</span></nobr>
            <span> </span>
	    <nobr><span className="text-4xl">{t('title_w2a')}</span>
	    <span>{t('title_w2b')} </span></nobr>
            <span> </span>
	    <nobr><span className="text-4xl">{t('title_w3a')}</span>
	    <span>{t('title_w3b')}</span></nobr>
	  </h1>
          <div className="mt-6 text-2xl px-6 pb-6">
	  {t('title2')}
          </div>
        </div>
        <div className="px-6">
          <Video num={0}/>
	</div>
        <div className="px-6">
	  <div className="mt-6">
	    <p><Link href="#contact_us"><a>{t('common:want_to_reg')}</a></Link></p>
	    <p><Link href="#contact_us"><a>{t('common:want_to_help')}</a></Link></p>
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
  const {t} = useTranslation('homepage', 'common');
  return (
    <Layout>
      <Home_first/>
      <div>
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('sec_h')}</h3>
	  <p><Trans t={t} i18nKey='sec_p'/></p>
	  <p><Trans t={t} i18nKey='sec_p2'/></p>
	  <p><Trans t={t} i18nKey='sec_p3'/></p>
	  <p><Trans t={t} i18nKey='sec_p4'/></p>
	  <p><Trans t={t} i18nKey='sec_p5'/></p>
	  <p><Trans t={t} i18nKey='sec_p6'/></p>
	  {t('sec_p7')!='' &&
	  <p><Trans t={t} i18nKey='sec_p7'/></p>}
	  {t('sec_p8')!='' &&
	  <p><Trans t={t} i18nKey='sec_p8'/></p>}
	  {t('sec_p9')!='' &&
	  <p><Trans t={t} i18nKey='sec_p9'/></p>}
	</div>
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('sec2_h')}</h3>
	  <p><Trans t={t} i18nKey='sec2_p'/></p>
	  <p><Trans t={t} i18nKey='sec2_p2'/></p>
	  <p><Trans t={t} i18nKey='sec2_p3'/></p>
	  <p><Trans t={t} i18nKey='sec2_p4'/></p>
	  <p><Trans t={t} i18nKey='sec2_p5'/></p>
	  <p><Trans t={t} i18nKey='sec2_p6'/></p>
	  <p><Trans t={t} i18nKey='sec2_p7'/></p>
	  <p><Trans t={t} i18nKey='sec2_p8'/></p>
	  <p><Trans t={t} i18nKey='sec2_p9'/></p>
          {t('sec2_p10')!='' &&
	  <p><Trans t={t} i18nKey='sec2_p10'/>}</p>}
	  {t('sec2_p11')!='' &&
	  <p><Trans t={t} i18nKey='sec2_p11'/></p>}
	  {t('sec2_p12')!='' &&
	  <p><Trans t={t} i18nKey='sec2_p12'/></p>}
	</div>
	<div className="max-w-6xl mx-auto px-6">
          <div className="lif-blue-bg rounded-lg mt-6 py-1 px-3 text-white">
	    <p><Trans t={t} i18nKey='sec2_box'/></p>
          </div>
	</div>
	<div className="max-w-6xl mx-auto px-6 mt-6">
          <bdo dir="ltr">
	    <p><Link href="/about"><a>{t('link')}</a></Link></p>
          </bdo>
	  <p><Link href="/about#sec2"><a>{t('link2')}</a></Link></p>
	  <p><Link href="/about#sec3"><a>{t('link3')}</a></Link></p>
	  <p><Link href="/about#sec4"><a>{t('link4')}</a></Link></p>
	  <p><Link href="/team"><a>{t('link5')}</a></Link></p>
	</div>
      </div>
      <Footer contact_us={true} t={t}/>
    </Layout>
  );
}
