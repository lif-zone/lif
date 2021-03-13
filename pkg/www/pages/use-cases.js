import cn from 'classnames';
import Link from 'next/link';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Trans, useTranslation} from 'next-i18next';

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'use-cases']);
    return {props};
});

export default function Home(){
    const {t} = useTranslation('use-cases');
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-14 px-8">
          <h1>{t('title')}</h1>
          <h2 className="pt-10 font-normal">{t('title2')}</h2>
          <div className="mt-8">
	    <div className="mb-4">
	      <img src="/img/digital_money.png" className="w-60"/>
	      <h2>{t('usage1')}</h2>
	    </div>
	    <p className="text-lg">{t('usage1_desc')}</p>
	  </div>
          <div className="mt-8">
	    <div className="mb-4">
	      <img src="/img/get_donations.png" className="w-60"/>
	      <h2>{t('usage2')}</h2>
	    </div>
	    <p className="text-lg">{t('usage2_desc')}</p>
	  </div>
          <div className="mt-8">
	    <div className="mb-4">
	      <img src="/img/pay_online.png" className="w-60"/>
	      <h2>{t('usage3')}</h2>
	    </div>
	    <p className="text-lg">{t('usage3_desc')}</p>
	  </div>
          <div className="mt-8">
	    <div className="mb-4">
	      <img src="/img/voting.png" className="w-60"/>
	      <h2>{t('usage4')}</h2>
	    </div>
	    <p className="text-lg">{t('usage4_desc')}</p>
	  </div>
        </div>
      </Layout>
    );
}
