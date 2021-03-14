import cn from 'classnames';
import axios from 'axios';
import {forwardRef, Component} from 'react';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';
import Icon_arrow from '../public/img/icon_arrow.svg';
import Icon_wht1 from '../public/img/wht-icon1.svg';
import Icon_wht2 from '../public/img/wht-icon2.svg';
import Github2 from '../public/img/github2.svg';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {use_app_context} from '../utils/context.js';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import Player from '@vimeo/player';

const video_url = 'https://player.vimeo.com/video/520902331?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479';

// XXX: mv to components
const Primary_button = ({children, arrow, onClick})=>{
    const {direction} = use_app_context();
    const arr_c = cn(`ms-3 transition-transform duration-300 transform`,
        direction=='rtl' ? 'rotate-180 group-hover:-translate-x-1' :
        'group-hover:translate-x-1');
    return <span onClick={onClick}
        className="group inline-flex font-bold cursor-pointer no-underline
        bg-lif-blue text-white px-6 py-2 leading-4 rounded-full items-center
        hover:bg-lif-blue-darkened h-12 transform text-xl btn-effect
        transition-transform shadow-md">
        {children}
        {arrow && <Icon_arrow className={arr_c}/>}
      </span>;
};

const Arrow_link = ({children, href, onClick})=>{
    const {direction} = use_app_context();
    const arr_c = cn(`ms-1 transition-transform relative top-0.5
        duration-300 transform group-hover:translate-x-1`,
        direction=='rtl' && 'rotate-180');
    return <span onClick={onClick} className="group inline-flex font-bold
        cursor-pointer no-underline text-lif-blue text-lg items-center">
        {children}
        <Icon_arrow className={arr_c}/>
      </span>;
};

class Video extends Component{
  state = {};
  render(){
    const {className} = this.props;
    const {play} = this.state;
    return <div className="aspect-w-16 aspect-h-9 video">
      {!play ? <img src="/img/video.jpg" className="video_image"/> : undefined}
      {!play ?
	<div className="video-thumbnail" onClick={this.play_video}></div> : undefined}
      <iframe src={video_url} allowFullScreen className="shadow-xl"
	frameBorder="0" title="LIF - Liberty, Independence, Freedom"
	allow="autoplay; fullscreen; picture-in-picture"/>
    </div>
  }
  play_video = ()=>{
    var iframe = document.querySelector('iframe');
    var player = new Player(iframe);
    player.play();
    this.setState({play: true});
  };
}

const Home_first = ()=>{
    const {t} = useTranslation('homepage');
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 py-14">
        <div className="text-center mb-8 text-start md:pt-4 sm:pe-10">
          <h1 className="px-6 sm:text-4xl md:text-5xl">{t('title')}</h1>
          <p className="mt-8 text-2xl pl-6 pr-6">{t('title2')}</p>
          <p className="mt-8 text-2xl pl-6 pr-6">{t('title3')}</p>
        </div>
        <div className="px-6">
          <Video/>
	</div>
      </div>
    );
};

export const getStaticProps = ({locale})=>etask(function*(){
    const props = yield serverSideTranslations(locale, ['common', 'homepage']);
    return {props};
});

class Contact_us extends Component{
  state = {};
  render(){
    const {t} = this.props;
    const {mode} = this.state;
    return <div className="contact_us_form">
      {mode=='error' ? <p>{t('thank_you_error')}</p> : undefined}
      {mode=='sent' ? (
	<div>
	  <p>{t('thank_you_will_get_back_to_you_soon')}</p>
           <Primary_button arrow onClick={this.on_click}>{t('contact_us')}</Primary_button>
	</div> 
	): undefined
      }
      {mode!='sent' ?
	(<form ref={this.on_ref}>
	  <input className="lif-input" id='name' placeholder={t('name')}/>
	  <input inputMode="email" id='email' className="lif-input" placeholder={t('email')}/>
	  <input inputMode="tel" id='phone' className="lif-input" placeholder={t('phone')}/>
	  <textarea className="lif-textarea" id='freetext' placeholder={t('what_i_can_do')}/>
	  <div className="text-end">
	    <Primary_button arrow onClick={this.on_send}>{t('send')}</Primary_button>
	  </div>
	</form>) : undefined
      }
    </div>
  }
  on_click = ()=>this.setState({mode: 'enter'});
  on_send = async ()=>{
    let o = {};
    for (let i=0, f=this.form; i<f.length; i++)
      o[f[i].id] = f[i].value;
    try {
      this.setState({mode: 'sent'});
      const res = await axios.post('/api/register_contact_us', o, {timeout: 7000});
      console.log('register_contact_us success');
    } catch(err){
      console.log('register_contact_us error %o', err);
      this.setState({mode: 'error'});
    }
  };
  on_ref = (ref=>this.form=ref);
}

export default function Home(){
  const {t} = useTranslation('homepage');
  return (
    <Layout>
      <Home_first/>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:gap-x-12
          sm:grid-cols-2 p-6 pb-0">
          <div className="mb-16">
            <h2>{t('what_is_lif')}</h2>
            <p className="mt-4 mb-8 text-2xl leading-9">
            {t('lif_is')}
	    </p>
            <Link href="/about">
              <a><Primary_button arrow>{t('more_info')}</Primary_button></a>
            </Link>
          </div>
          <div className="">
            <div className="mb-14">
              <h3 className="flex items-start">
                <Icon_wht2 className="h-8 inline me-2"/>
    	        {t('lif_advantages')}
              </h3>
              <p className="mt-4 mb-3 text-lg">{t('lif_advantages_p1')}</p>
              <p className="mt-4 mb-3 text-lg">{t('lif_advantages_p2')}</p>
              <p className="mt-4 mb-3 text-lg">{t('lif_advantages_p3')}</p>
              <Link href="//github.com/lif-zone/lif">
                <a><Arrow_link>{t('more_info')}</Arrow_link></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-20 bg-white">
        <div className="lif-blue-bg rounded-lg p-7 text-white max-w-6xl
          mx-auto">
          <h3 className="mb-6">
            <Icon_wht1 className="h-8 inline me-2"/>
	    {t('lif_vs_block')}
          </h3>
          <p className="text-lg">{t('lif_vs_block_p1')}</p>
          <p className="text-lg">{t('lif_vs_block_p2')}</p>
          <p className="text-lg">{t('lif_vs_block_p3')}</p>
          <p className="text-lg">
            {t('lif_vs_block_more')}
            <bdo dir="ltr">
	      <a href="https://github.com/lif-zone/lif"
	        className="text-white hover:text-white items-center text-lg
                  opacity-70 transition-opacity hover:opacity-100 ms-2 me-5">
	        <Github2 className="mt-1 inline-block fill-current"/>
                GitHub
	      </a>
            </bdo>
          </p>
        </div>
      </div>
      <div className="bg-white text-lg pb-12">
        <div className="max-w-6xl mx-auto pb-6">
          <h2 className="text-center px-10 pb-6">{t('usage_examples')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="px-6 py-6 sm:border-e">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/digital_money.png" className="w-60"/>
              </div>
              <h3>{t('usage1')}</h3>
              <p>{t('usage1_desc')}</p>
              <Link href="/use-cases">
                <a><Arrow_link>{t('more_info')}</Arrow_link></a>
              </Link>
            </div>
            <div className="px-6 py-6 sm:block border-e">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/get_donations.png" className="w-60"/>
              </div>
              <h3>{t('usage2')}</h3>
              <p>{t('usage2_desc')}</p>
              <Link href="/use-cases">
                <a><Arrow_link>{t('more_info')}</Arrow_link></a>
              </Link>
            </div>
            <div className="px-6 py-6 md:block">
              <div className="flex flex-col items-center mb-4">
                <img src="/img/pay_online.png" className="w-60"/>
              </div>
              <h3>{t('usage3')}</h3>
              <p>{t('usage3_desc')}</p>
              <Link href="/use-cases">
                <a><Arrow_link>{t('more_info')}</Arrow_link></a>
              </Link>
            </div>
          </div>
	  <div className="text-center pt-10">
            <Link href="/use-cases">
	      <a>
	        <Primary_button arrow>{t('see_all_use_cases')}</Primary_button>
	     </a>
            </Link>
	  </div>
        </div>
      </div>
      <div className="bg-white text-lg pb-12">
        <div className="max-w-6xl mx-auto pb-6">
          <h2 className="text-center px-10 pb-6">Who is behind it?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            <div className="px-6 py-6 sm:border-e">
              <div className="flex flex-col items-center mb-6">
                <img src="/img/moshe.jpg" className="w-60"/>
              </div>
              <h3>Moshe Zalman Feiglin</h3>
<p>
Moshe Zalman Feiglin an Israeli politician and activist for freedom of expression and individual rights, and the leader of libertarian Jewish party Zehut (Identity). A former member of Likud, he headed the Manhigut Yehudit (Jewish Leadership) faction within the party, and represented Likud in the Knesset between 2013 and 2015.
</p>
<p>
During his public career, Feiglin worked to reduce state control over different aspects of citizens' lives, abolish some government ministries, remove religion from politics, dismantle mandatory regulatory bodies, to free the economy and lower prices through competition, autonomy in education and more - all to promote freedom and reduce the states grip on the lives of citizens. Feiglin believes that the state belongs to the citizens and not that the citizens belong to the state.
</p>
            </div>
            <div className="px-6 py-6 sm:block">
              <div className="flex flex-col items-center mb-6">
                <img src="/img/derry.jpg" className="w-60"/>
              </div>
              <h3>Derry Shribman</h3>
              <p>XXX</p>
              <p>XXX</p>
            </div>
	  </div>
	</div>
      </div>
 

    {false && <div className="px-6 mt-12 max-w-6xl mx-auto">
        <div className="lif-blue-bg rounded-lg p-8 text-white">
          <div>
            <h2>Build it!</h2>
            <p className="text-xl">JavaScript and a basic understanding of
              Node is all you need. A great community is happy to help you.</p>
          </div>
          <div className="mt-6 flex sm:flex-col justify-between sm:items-end">
            <div></div>
  	      <a href="https://github.com/lif-zone/lif">
                <Primary_button arrow>GitHub</Primary_button>
	      </a>
          </div>
        </div>
      </div>
      }
      <div className="lif-blue-bg">
        <div className="p-12 lif-hexagon-bg max-w-6xl mx-auto text-white">
          <h2>{t('want_to_help')}</h2>
          <div className="my-10 text-xl">
            <p>{t('want_to_help_desc1')}</p>
            <p>{t('want_to_help_desc2')}</p>
            <p>{t('want_to_help_desc3')}</p>
            <div className="float-right">
              <bdo dir="ltr">
                <a href="https://github.com/lif-zone/lif"
                  className="text-white hover:text-white items-center text-lg
                    opacity-70 transition-opacity hover:opacity-100 ms-2
                    me-5">
                  <Github2 className="mt-1 inline-block fill-current"/>
                  GitHub
                </a>
              </bdo>
	    </div>
            <div>
	      <a href="mailto:join@lif.zone">join@lif.zone</a>
	    </div>
	  </div>
	  <Contact_us t={t}/>
        </div>
      </div>
    </Layout>
  );
}
