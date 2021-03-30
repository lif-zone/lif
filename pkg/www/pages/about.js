import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Trans, useTranslation} from 'next-i18next';
import {Footer, Video} from '../components/common.js';

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'about']);
    return {props};
});

export default function Home(){
    const {t} = useTranslation('about', 'common');
    return (
      <Layout title={t('title')} desc={t('title2')}
        image="https://lif.zone/img/moshe.jpg">
        <div className="max-w-6xl mx-auto px-6">
          <h3>{t('title')}</h3>
	  <div className="max-w-3xl pt-3">
	    <Video num={1}/>
	  </div>
          <h3>{t('title2')}</h3>
          <div>
	    <h3><Trans t={t} i18nKey="sec_h"/></h3>
	    <Trans t={t} i18nKey="sec_p"/>
           {t('sec_p2')!='' && <p><Trans t={t} i18nKey="sec_p2"/></p>}
	  </div>
          <div id="sec2">
	    <h3><Trans t={t} i18nKey="sec2_h"/></h3>
	    <p><Trans t={t} i18nKey="sec2_p"/></p>
	    <p><Trans t={t} i18nKey="sec2_p2"/></p>
	    <p><Trans t={t} i18nKey="sec2_p3"/></p>
	    <p><Trans t={t} i18nKey="sec2_p4"/></p>
	    <p><Trans t={t} i18nKey="sec2_p5"/></p>
	  </div>
          <div id="sec3">
	    <h3><Trans t={t} i18nKey="sec3_h"/></h3>
	    <p><Trans t={t} i18nKey="sec3_p"/></p>
	    <p><Trans t={t} i18nKey="sec3_p2"/></p>
	    <p><Trans t={t} i18nKey="sec3_p3"/></p>
	    <p><Trans t={t} i18nKey="sec3_p4"/></p>
	    <p><Trans t={t} i18nKey="sec3_p5"/></p>
	    <p><Trans t={t} i18nKey="sec3_p6"/></p>
	    <p><Trans t={t} i18nKey="sec3_p7"/></p>
	    <p><Trans t={t} i18nKey="sec3_p8"/></p>
            {t('sec3_p9') &&
	    <p><Trans t={t} i18nKey="sec3_p9"/></p>}
	  </div>
          <div id="sec4">
	    <h3><Trans t={t} i18nKey="sec4_h"/></h3>
	    <p><Trans t={t} i18nKey="sec4_p"/></p>
	    <p>
              <Trans t={t} i18nKey="sec4_p2" components={[
	        <a href='https://hola.org/dna'>, </a>,
	        <a href='https://luminati.io/dna'>, </a>,
	        <a href='https://holaspark.com/dna'>, </a>]}/>
            </p>
	    <p><Trans t={t} i18nKey="sec4_p3"/></p>
	    <p><Trans t={t} i18nKey="sec4_p4"/></p>
	    <p><Trans t={t} i18nKey="sec4_p5"/></p>
            {t('sec4_p6') &&
	    <p><Trans t={t} i18nKey="sec4_p6"/></p>}
            {t('sec4_p7') &&
	    <p><Trans t={t} i18nKey="sec4_p7"/></p>}
	  </div>
        </div>
        <Footer t={t}/>
      </Layout>
    );
}
