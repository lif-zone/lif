import {Component} from 'react';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import {Footer} from '../components/common.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import {Trans, useTranslation} from 'next-i18next';
import Player from '@vimeo/player';

const video_url = ['https://player.vimeo.com/video/525625726?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/525624995?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'];

const players = {};
class Video extends Component {
  state = {};
  render(){
    const {play} = this.state;
    const num = this.props.num||0;
    return <div className="aspect-w-16 aspect-h-9 video">
      {!play ? <img src={'/img/video'+num+'.jpg'} className="video_image"/> : undefined}
      {!play ?
	<div className="video-thumbnail" onClick={this.play_video}></div>
        : undefined}
      <iframe id={'video_frame'+num} src={video_url[num]} allowFullScreen
	className="shadow-xl"
	frameBorder="0" title="LIF - Liberty, Independence, Freedom"
	allow="autoplay; fullscreen; picture-in-picture"/>
    </div>;
  }
  play_video = ()=>{
    const num = this.props.num||0;
    var iframe, player;
    for (let p in players)
      players[p].pause();
    if (!players[num])
    {
      iframe = document.querySelector('#video_frame'+num);
      players[num] = player = new Player(iframe);
    }
    player.play();
    this.setState({play: true});
  };
}

const Home_first = ()=>{
    const {t} = useTranslation('homepage');
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 py-10">
        <div className="text-center mb-8 text-start md:pt-4 sm:pe-10">
          <h1 className="px-6 text-3xl">
	    <nobr><span className="text-4xl">{t('title_w1a')}</span>
	    <span>{t('title_w1b')} </span></nobr>
	    <nobr><span className="text-4xl">{t('title_w2a')}</span>
	    <span>{t('title_w2b')} </span></nobr>
	    <nobr><span className="text-4xl">{t('title_w3a')}</span>
	    <span>{t('title_w3b')}</span></nobr>
	  </h1>
          <div className="mt-6 text-2xl px-6 text-left">
	  {t('title2')}
          </div>
          <div className="mt-6 text-2xl px-6">
            {t('title3')}
          </div>
        </div>
        <div className="px-6">
          <Video num={0}/>
	</div>
      </div>
    );
};

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'homepage']);
    return {props};
});

export default function Home(){
  const {t} = useTranslation('homepage', 'common');
  return (
    <Layout>
      <Home_first/>
      <div className="bg-white">
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('sec1_h')}</h3>
	  <Trans t={t} i18nKey='sec1_p'/>
	</div>
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('sec2_h')}</h3>
	  <Trans t={t} i18nKey='sec2_p'/>
	</div>
	<div className="max-w-6xl mx-auto px-6">
          <div className="lif-blue-bg rounded-lg mt-6 py-1 px-3 text-white">
	    <Trans t={t} i18nKey='sec2_p2'/>
          </div>
	</div>
	<div className="max-w-6xl mx-auto px-6">
	  <div className="mt-6">
	    <div><Link href="#contact_us"><a>{t('common:want_to_help')}</a></Link></div>
	    <div><Link href="#contact_us"><a>{t('common:want_to_reg')}</a></Link></div>
	  </div>
	</div>
	<div className="max-w-6xl mx-auto mt-6 px-6 pb-10">
	  <h3>{t('sec3_h')}</h3>
	  <Trans t={t} i18nKey='sec3_p'/>
	  <div className="max-w-3xl">
	    <Video num={1}/>
	  </div>
	</div>
	<div className="max-w-6xl mx-auto px-6">
	  <bdo dir='ltr'>
            <h3>{t('sec4_h')}<nobr>{t('sec4_h2')}</nobr></h3>
          </bdo>
	  <Trans t={t} i18nKey='sec4_p'/>
	</div>
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('sec5_h')}</h3>
	  <Trans t={t} i18nKey='sec5_p'/>
	</div>
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('sec6_h')}</h3>
	  <Trans t={t} i18nKey='sec6_p'/>
	  <Trans t={t} i18nKey='sec6_p2'/>
	  <Trans t={t} i18nKey='sec6_p3'/>
	</div>
      </div>
      <div className="bg-white">
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('founder_h')}</h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 p-6 pt-0 pb-0">
          <div>
	    <p>
  	      <Link href="/team#derry"><a>
		<img src="/img/derry.jpg" className="w-100 pt-6"/>
	      </a></Link>
	    </p>
	    <h3><Link href="/team#derry"><a className="text-lif-main">
	      {t('founder_derry_h')}
	    </a></Link></h3>
	    <div><Link href="/team#derry"><a
              className="text-lif-main font-normal">
              <Trans t={t} i18nKey='founder_derry_p'/>
            </a></Link></div>
          </div>
          <div>
	    <p>
  	      <Link href="/team#moshe"><a>
		<img src="/img/moshe.jpg" className="w-100 pt-6"/>
	      </a></Link>
	    </p>
	    <h3><Link href="/team#moshe"><a className="text-lif-main">
             {t('founder_moshe_h')}
	    </a></Link></h3>
	    <div><Link href="/team#moshe"><a
              className="text-lif-main font-normal">
              <Trans t={t} i18nKey='founder_moshe_p'/>
            </a></Link></div>
          </div>
        </div>
      </div>
      <div className="bg-white">
	<div className="max-w-6xl mx-auto px-6">
	  <h3>{t('team_h')}</h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 p-6 pt-0 pb-0">
          <div>
	    <p>
  	      <Link href="/team#lior"><a>
		<img src="/img/lior.jpg" className="w-100 pt-6"/>
	      </a></Link>
	    </p>
	    <h3><Link href="/team#lior"r><a className="text-lif-main">
              {t('team_lior_h')}
            </a></Link></h3>
	    <div><Link href="/team#lior"r><a
              className="text-lif-main font-normal">
              <Trans t={t} i18nKey='team_lior_p'/>
            </a></Link></div>
          </div>
          <div>
	    <p>
  	      <Link href="/team#shay"><a>
		<img src="/img/shay.jpg" className="w-100 pt-6"/>
	      </a></Link>
	    </p>
	    <h3><Link href="/team#shay"><a className="text-lif-main">
              {t('team_shay_h')}
            </a></Link></h3>
	    <div><Link href="/team#shay"><a
              className="text-lif-main font-normal">
              <Trans t={t} i18nKey='team_shay_p'/>
            </a></Link></div>
          </div>
        </div>
      </div>
      <div className="bg-white text-lg py-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="px-6">{t('usage_examples')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="px-6 py-6 sm:border-e">
	      <Link href="/use-cases"><a className="no-link">
		<div className="flex flex-col items-center mb-4">
		  <img src="/img/digital_money.png" className="w-60"/>
		</div>
		<h3>{t('usage1')}</h3>
		<p>{t('usage1_desc')}</p>
	      </a></Link>
            </div>
            <div className="px-6 py-6 sm:block border-e">
	      <Link href="/use-cases"><a className="no-link">
		<div className="flex flex-col items-center mb-4">
		  <img src="/img/get_donations.png" className="w-60"/>
		</div>
		<h3>{t('usage2')}</h3>
		<p>{t('usage2_desc')}</p>
	      </a></Link>
            </div>
            <div className="px-6 py-6 md:block">
	      <Link href="/use-cases"><a className="no-link">
		<div className="flex flex-col items-center mb-4">
		  <img src="/img/pay_online.png" className="w-60"/>
		</div>
		<h3>{t('usage3')}</h3>
		<p>{t('usage3_desc')}</p>
	      </a></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer t={t}/>
    </Layout>
  );
}
