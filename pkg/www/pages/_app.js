import '../styles/globals.css';
import zerr from '../../util/zerr.js';

zerr.set_exception_handler = ('www_', (name, n, err)=>{ throw err; });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
