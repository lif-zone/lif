'use strict'; /*jslint node:true, browser:true, react: true*/
import Layout from '../components/layout.js';

export default function Scroll_page(){
  return (
    <Layout>
      <script src="/js/hyper-sdk-bundle.js"/>
      <script src='/js/test.js'/>
      <div className="px-3">
        <h3>Test</h3>
      </div>
    </Layout>
  );
}
