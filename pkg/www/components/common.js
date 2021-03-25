import cn from 'classnames';
import {Component} from 'react';
import Icon_arrow from '../public/img/icon_arrow.svg';
import {use_app_context} from '../utils/context.js';
import axios from 'axios';
import {Trans} from 'next-i18next';
import Github2 from '../public/img/github2.svg';
import Link from 'next/link';
import Player from '@vimeo/player';

export const Primary_button = ({children, arrow, onClick})=>{
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

export const Arrow_link = ({children, href, onClick})=>{
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

export class Contact_us extends Component {
  state = {};
  render(){
    const {t} = this.props;
    const {mode} = this.state;
    return <div id="contact_us" className="contact_us_form">
      {mode=='error' ? <p>{t('common:thank_you_error')}</p> : undefined}
      {mode=='sent' ?
	<div>
	  <p className="py-8">{t('common:thank_you_will_get_back_to_you_soon')}</p>
            <Primary_button onClick={this.on_click}>
	      {t('common:contact_us')}
	    </Primary_button>
	</div>
	: undefined
      }
      {mode!='sent' ?
	<form ref={this.on_ref}>
	  <input className="lif-input" id='name'
	    placeholder={t('common:name')}/>
	  <input inputMode="email" id='email' className="lif-input"
	    placeholder={t('common:email')}/>
	  <input inputMode="tel" id='phone' className="lif-input"
	    placeholder={t('common:phone')}/>
	  <textarea className="lif-textarea" id='freetext'
	    placeholder={t('common:what_i_can_do')}/>
	  <div className="text-end">
	    <Primary_button onClick={this.on_send}>
	      {t('common:send')}
	    </Primary_button>
	  </div>
	</form> : undefined
      }
    </div>;
  }
  on_click = ()=>this.setState({mode: 'enter'});
  on_send = async ()=>{
    let o = {};
    for (let i=0, f=this.form; i<f.length; i++)
      o[f[i].id] = f[i].value;
    try {
      this.setState({mode: 'sent'});
      await axios.post('/api/register_contact_us', o, {timeout: 7000});
      console.log('register_contact_us success');
    } catch(err){
      console.log('register_contact_us error %o', err);
      this.setState({mode: 'error'});
    }
  };
  on_ref = (ref=>this.form=ref);
}

export class Footer extends Component {
  render(){
    const {t, contact_us} = this.props;
    return <div className="lif-blue-bg pb-1 mt-10">
        <div className="px-6 lif-hexagon-bg max-w-6xl mx-auto text-white">
          {contact_us && <div>
	    <h3>{t('common:help_h')}</h3>
	    <div className="text-xl">
	      <Trans t={t} i18nKey='common:help_p'/>
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
	    <div className="pb-6"></div>
          </div>
          }
	  <bdo dir="ltr">
	    <div className={'py-4'}>
	      <div className="flex">
		<div>
		  <a href="/en" className="text-white">
		    <img src="/img/lif_white.svg" className="h-6"
                      style={{display: 'inline'}}/>
		    </a>
                </div>
                <div className="flex-grow"></div>
		<div>
		  <a href="/he" className="text-white">
		    <img src="/img/hah_white.svg" className="h-6"
                      style={{display: 'inline'}}/>
		    </a>
                </div>
	      </div>
	    </div>
	  </bdo>
        </div>
      </div>;
  }
}

const video_url = ['https://player.vimeo.com/video/525625726?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    'https://player.vimeo.com/video/525624995?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'];

const players = {};
export class Video extends Component {
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


