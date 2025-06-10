import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Ezoic Privacy Scripts (must come first) */}
          <script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false"></script>
          <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false"></script>
          {/* Ezoic Header Script */}
          <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.ezstandalone = window.ezstandalone || {};
                ezstandalone.cmd = ezstandalone.cmd || [];
              `,
            }}
          />
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