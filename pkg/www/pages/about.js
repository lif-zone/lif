import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Trans, useTranslation} from 'next-i18next';
import {Footer} from '../components/common.js';

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'about']);
    return {props};
});

export default function Home(){
    const {t} = useTranslation('about', 'common');
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-14 px-8">
          <h1>{t('title')}</h1>
	  <Trans t={t} i18nKey="p1"/>
	  <Trans t={t} i18nKey="p2"/>
	  <Trans t={t} i18nKey="p3"/>
	  <Trans t={t} i18nKey="p4"/>
	  <Trans t={t} i18nKey="p5"/>
	  <Trans t={t} i18nKey="p6"/>
        </div>
        <Footer t={t}/>
      </Layout>
    );
}
