import '../styles/globals.css';
import zerr from '../../util/zerr.js';
import {App_wrapper} from '../utils/context.js';
import {appWithTranslation} from 'next-i18next';

zerr.set_exception_handler = ('www_', (name, n, err)=>{ throw err; });

function My_app({Component, pageProps}){
    return <App_wrapper><Component {...pageProps} /></App_wrapper>;
}

export default appWithTranslation(My_app);
