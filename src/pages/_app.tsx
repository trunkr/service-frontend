import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any;
    kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  function kakaoInit() {
    // 페이지가 로드되면 실행
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Head>
          <title>Trunkr</title>
          <link rel="shortcut icon" href="./assets/logo/favicon_large.svg" />
        </Head>
        <Component {...pageProps} />
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit}></Script>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
