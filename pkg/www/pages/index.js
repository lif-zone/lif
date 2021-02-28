import Head from 'next/head';
import styles from '../styles/Home.module.css';
import lang from '../components/lang_he.js';

const video_url = 'https://drive.google.com/file/d/1haTxF4aocS6V9FVej21ghdy3ZFetOzba/preview';

export default function Home(){
  return (
    <div className={styles.container}>
      <Head>
        <title>LIF - Liberty, Independence, Freedom - חירות, עצמאות, חופש
        </title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          LIF - Liberty, Independence, Freedom - חירות, עצמאות, חופש
        </h1>
        <iframe src={video_url} width='640lvt' height='480lvt'/>

        <p className={styles.description}>
          <div>{lang.body}</div>
        </p>
      </main>
      <footer className={styles.footer}>
	<div>
          <a href='https://github.com/lif-zone/lif' target='_blank'>
            GitHub</a>
        </div>
	<p><a href='mailto:help@lif.zone'>lif@lif.zone</a></p>
      </footer>
    </div>
  )
}
