import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="x-ua-compatible" content="IE=Edge" />
          <meta property="og:type" content="website" />
          {/* 
            - Open Graph Meta Tags
              -- Facebook
              -- Twitter
              -- Google Rich Results
            - Add favicons
            - pre-connect CDN
            - pre-load fonts
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
