import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

import { ServerStyleSheets } from '@material-ui/core/styles';

// サーバーサイド（Node.js）でのみ実行される
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const muiSheets = new ServerStyleSheets();
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // styled-componentをサーバーサイドレンダリング
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => styledComponentsSheet.collectStyles(muiSheets.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          muiSheets.getStyleElement(),
          styledComponentsSheet.getStyleElement(),
        ],
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
