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
	  <h3>{t('founder_h')}</h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 p-6 pt-0 pb-0">
          <div id="derry">
            <p><img src="/img/derry.jpg" className="w-100"/></p>
            <h3>{t('founder_derry_h')}</h3>
	    <Trans t={t} i18nKey='founder_derry_p'/>
	    <Trans t={t} i18nKey='founder_derry_p2'/>
          </div>
          <div id="moshe">
	    <p><img src="/img/moshe.jpg" className="w-100 pt-6"/></p>
	    <h3>{t('founder_moshe_h')}</h3>
	    <Trans t={t} i18nKey='founder_moshe_p'/>
	    <Trans t={t} i18nKey='founder_moshe_p2'/>
          </div>
        </div>
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('team_h')}</h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 p-6 pt-0 pb-0">
          <div id="lior">
            <p><img src="/img/lior.jpg" className="w-100"/></p>
            <h3>{t('team_lior_h')}</h3>
	    <Trans t={t} i18nKey='team_lior_p'/>
          </div>
          <div id="shay">
	    <p><img src="/img/shay.jpg" className="w-100 pt-6"/></p>
	    <h3>{t('team_shay_h')}</h3>
	    <Trans t={t} i18nKey='team_shay_p'/>
          </div>
        </div>
        <div className="py-6"/>
        <Footer t={t}/>
      </Layout>
    );
}
