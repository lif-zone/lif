import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Trans, useTranslation} from 'next-i18next';
import {Footer} from '../components/common.js';

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'team']);
    return {props};
});

export default function Home(){
    const {t} = useTranslation('team');
    return (
      <Layout>
	<div className="max-w-6xl mx-auto p-6">
	  <h3>{t('title')}</h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 p-6 pt-0 pb-0">
          <div id="derry">
            <p><img src="/img/derry.jpg" className="w-100"/></p>
            <h3>{t('derry_h')}</h3>
	    <p>{t('derry_p')}</p>
	    <p>{t('derry_p2')}</p>
	    <p>{t('derry_p3')}</p>
	    <p>{t('derry_p4')}</p>
	    <p>{t('derry_p5')}</p>
          </div>
          <div id="moshe">
	    <p><img src="/img/moshe.jpg" className="w-100 pt-10"/></p>
	    <h3>{t('moshe_h')}</h3>
	    <p>{t('moshe_p')}</p>
	    <p>{t('moshe_p2')}</p>
	    <p>{t('moshe_p3')}</p>
          </div>
          <div id="lior">
            <p><img src="/img/lior.jpg" className="w-100 pt-10"/></p>
            <h3>{t('lior_h')}</h3>
	    <p>{t('lior_p')}</p>
          </div>
          <div id="shay">
	    <p><img src="/img/shay.jpg" className="w-100 pt-10"/></p>
	    <h3>{t('shay_h')}</h3>
	    <p>{t('shay_p')}</p>
          </div>
        </div>
        <div className="py-6"/>
        <Footer t={t}/>
      </Layout>
    );
}
