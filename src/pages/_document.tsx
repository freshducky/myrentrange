import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>MyRentRange</title>
          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6587604118170067"
            crossOrigin="anonymous"
          ></script>
          <link rel="icon" type="image/png" href="/logo-1x1.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
} 