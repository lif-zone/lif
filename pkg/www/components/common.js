import cn from 'classnames';
import {Component} from 'react';
import Icon_arrow from '../public/img/icon_arrow.svg';
import {use_app_context} from '../utils/context.js';
import axios from 'axios';

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

export class Contact_us extends Component{
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

