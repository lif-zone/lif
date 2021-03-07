import cn from 'classnames';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'about']);
    return {props};
});

export default function Home(){
    const {t} = useTranslation('about');
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-14 px-8">
          <h1>{t('title')}</h1>
          <p className="mt-8 text-2xl">{t('p1')}</p>
          <p className="mt-8 text-xl text-gray-400">{t('p2')}</p>
          <p className="mt-8 text-xl text-gray-400">{t('p3')}</p>
        </div>
      </Layout>
    );
}
