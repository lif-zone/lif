import {Component} from 'react';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {Footer, Video, Contact_us, Primary_button} from '../components/common.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import {Trans, useTranslation} from 'next-i18next';

const Home_first = ()=>{
    const {t} = useTranslation('homepage')
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div className="text-center mb-8 text-start md:pt-4 sm:pe-10">
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
	  <div className="mt-6" style={{lineHeight: '4rem'}}>
            <span className="pe-3"><Link href="/about">
	      <a><Primary_button>{t('faq')}</Primary_button>
	    </a></Link></span>
            <span className="pe-3"><Link href="/team">
	      <a><Primary_button>{t('team')}</Primary_button>
	    </a></Link></span>
            <span className="pe-3"><Link href="/#contact_us">
	      <a><Primary_button>{t('join')}</Primary_button>
	    </a></Link></span>
	  </div>
	</div>
      </div>
    );
};

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'homepage']);
    return {props};
});

// XXX: implement contact us popup and move to common.js
class Modal extends Component {
  state = {closed: true};
  render(){
    const {t} = this.props;
    const {closed} = this.state;
    if (closed)
      return <span/>;
    return <div className="bg-red-200 fixed w-full h-full z-10i">
      <p>XXX</p>
        <Contact_us t={t}/>
      <p onClick={this.close}>YYY</p>
    </div>;
  }
  close = ()=>this.setState({closed: true});
  show = ()=>this.setState({closed: false});
}

export default function Home(){
  const {t} = useTranslation('homepage', 'common');
  return (
    <Layout title={t('title')} desc={t('title2')}
      image="https://lif.zone/img/lif_logo.jpg">
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
	  <Trans t={t} i18nKey='sec2_p9'/>
          {t('sec2_p10')!='' &&
	  <p><Trans t={t} i18nKey='sec2_p10'/></p>}
	  {t('sec2_p11')!='' &&
	  <Trans t={t} i18nKey='sec2_p11'/>}
	  {t('sec2_p12')!='' &&
	  <p><Trans t={t} i18nKey='sec2_p12'/></p>}
	</div>
	<div className="max-w-6xl mx-auto px-6">
          <div className="lif-blue-bg rounded-lg mt-6 py-1 px-3 text-white">
	    <p><Trans t={t} i18nKey='sec2_box'/></p>
          </div>
	</div>
	<div className="max-w-6xl mx-auto px-6 mt-6 grid sm:grid-cols-2 mt-6">
	  <div className="pb-6">
            <p>{t('scroll_desc')}</p>
	    <Link href="/about"><a>
              <img src="/img/scroll.jpg" style={{width: '30rem'}}/>
            </a></Link>
	  </div>
	  <div className="max-w-6xl">
	    <p><Link href="/about"><a>{t('link')}</a></Link></p>
	    <p><Link href="/about#sec2"><a>{t('link2')}</a></Link></p>
	    <p><Link href="/about#sec3"><a>{t('link3')}</a></Link></p>
	    <p><Link href="/about#sec4"><a>{t('link4')}</a></Link></p>
	  </div>
	</div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 px-6 mt-6">
          <div className="mb-6">
            <Link href="/team#derry"><a className="text-lif-main">
	      <p><img src="/img/derry.jpg" className="w-100"/></p>
	      <h3 className="pt-2">{t('derry_h')}</h3>
	      <p>{t('derry_p')}</p>
            </a></Link>
          </div>
          <div className="mb-6">
            <Link href="/team#moshe"><a className="text-lif-main">
	      <p><img src="/img/moshe.jpg" className="w-100"/></p>
	      <h3 className="pt-2">{t('moshe_h')}</h3>
	      <p>{t('moshe_p')}</p>
            </a></Link>
          </div>
	</div>
      </div>
      <Footer contact_us={true} t={t}/>
    </Layout>
  );
}
