import Head from 'next/head';

export default function Layout({children}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>LIF - Liberty, Independence, Freedom - חירות, עצמאות, חופש
        </title>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <div className="container mx-auto py-6">{children}</div>
      <footer className="container mx-auto text-right pb-6">
	<p>
          <a href='https://github.com/lif-zone/lif' target='_blank'>
            GitHub</a>
        </p>
	<p><a href='mailto:lif@lif.zone'>lif@lif.zone</a></p>
      </footer>
    </>
  );
}
