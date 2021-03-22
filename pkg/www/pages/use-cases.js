import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Trans, useTranslation} from 'next-i18next';
import {Footer} from '../components/common.js';

const url_hd = 'https://www.ivory.co.il/catalog.php?id=26411';
const url_etherium = 'https://ethereum.stackexchange.com/questions/872/what-is-the-cost-to-store-1kb-10kb-100kb-worth-of-data-into-the-ethereum-block/896#896';

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale,
      ['common', 'use-cases']);
    return {props};
});

export default function Home(){
    const {t} = useTranslation('use-cases');
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-14 px-6">
          <h3>{t('title')}</h3>
          <p>{t('title2')}</p>
          <div className="mt-4">
	    <div>
	      <img src="/img/digital_money.png" className="w-60"/>
	      <h3>{t('usage1')}</h3>
	    </div>
	    <div><Trans t={t} i18nKey="usage1_desc"/></div>
	  </div>
          <div className="mt-4">
	    <div>
	      <img src="/img/get_donations.png" className="w-60"/>
	      <h3>{t('usage2')}</h3>
	    </div>
	    <p>{t('usage2_desc')}</p>
	  </div>
          <div className="mt-4">
	    <div>
	      <img src="/img/pay_online.png" className="w-60"/>
	      <h3>{t('usage3')}</h3>
	    </div>
	    <p>{t('usage3_desc')}</p>
	  </div>
          <div className="mt-4">
	    <div>
	      <img src="/img/voting.png" className="w-60"/>
	      <h3>{t('usage4')}</h3>
	    </div>
	    <p>{t('usage4_desc')}</p>
	  </div>
          <div className="mt-4">
	    <div>
	      <img src="/img/storage.png" className="w-60"/>
	      <h3>{t('usage5')}</h3>
	    </div>
	    <div><Trans t={t} i18nKey="usage5_desc"/></div>
            <p><a href={url_hd}>{t('usage5_link1')}</a></p>
            <p><a href={url_etherium}>{t('usage5_link2')}</a></p>
	  </div>
          <div className="mt-4">
	    <div>
	      <img src="/img/passport.png" className="w-60"/>
	      <h3>{t('usage6')}</h3>
	    </div>
	    <div><Trans t={t} i18nKey="usage6_desc"/></div>
	  </div>
        </div>
        <Footer t={t}/>
      </Layout>
    );
}
