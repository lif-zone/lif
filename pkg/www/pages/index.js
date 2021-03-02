import Head from 'next/head';
import Layout from '../components/layout.js';
import lang from '../components/lang_he.js';

const video_url = 'https://drive.google.com/file/d/1haTxF4aocS6V9FVej21ghdy3ZFetOzba/preview';

export default function Home(){
  return (
    <Layout>
      <h1 className="text-right">
        LIF - Liberty, Independence, Freedom - חירות, עצמאות, חופש
      </h1>
      <div className="container flex justify-end mb-6">
        <iframe src={video_url} width='640lvt' height='360lvt'/>
      </div>
      <div>{lang.body}</div>
    </Layout>
  )
}
