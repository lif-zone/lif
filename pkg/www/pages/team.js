import cn from 'classnames';
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
	  <h2>{t('team_h')}</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 p-6 pt-0 pb-0">
          <div>
            <p><img src="/img/derry.jpg" className="w-100"/></p>
            <h3>{t('team_derry_h')}</h3>
	    <p><Trans t={t} i18nKey='team_derry_p'/></p>
          </div>
          <div>
	    <p><img src="/img/moshe.jpg" className="w-100"/></p>
	    <h3>{t('team_moshe_h')}</h3>
	    <p><Trans t={t} i18nKey='team_moshe_p'/></p>
          </div>
        </div>
        <Footer t={t}/>
      </Layout>
    );
}
