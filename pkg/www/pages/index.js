import Layout from '../components/layout.js';
import lang from '../components/lang_he.js';

const video_url = 'https://drive.google.com/file/d/1haTxF4aocS6V9FVej21ghdy3ZFetOzba/preview';

export default function Home(){
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="text-center mb-8 sm:text-right sm:pr-10 md:pt-4">
          <h1>LIF</h1>
          <p className="mt-8 text-2xl">Liberty, Independence, Freedom
            - חירות, עצמאות, חופש</p>
        </div>
        <div className="flex items-center">
          <div class="aspect-w-16 aspect-h-9">
            <iframe src={video_url} allowFullScreen/>
          </div>
        </div>
      </div>
      <div>{lang.body}</div>
    </Layout>
  );
}
