import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>스크루</title>
        <meta name="description" content="스포츠모임어플" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
