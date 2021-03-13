import cn from 'classnames';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Trans, useTranslation} from 'next-i18next';

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'use_case']);
    return {props};
});

export default function Home(){
    const {t} = useTranslation('use_case');
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-14 px-8">
          <h1>{t('title')}</h1>
          <p className="mt-8 text-2xl text-gray-800">{t('p1')}</p>
          <div className="mt-8 text-xl text-gray-600">
            <Trans t={t} i18nKey="p2"/>
          </div>
        </div>
      </Layout>
    );
}
