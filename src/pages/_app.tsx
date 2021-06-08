import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { AppProps } from 'next/app'
import * as React from 'react'
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
  // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  })
  return (
    // RecoilRoot ...ルートコンポーネントを囲む
    <RecoilRoot>
    {/* テーマプロバイダーの設置 */}
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            {/* 各ブラウザーの差異を平均化 */}
            <CssBaseline />
            {/* アクティブなpageが描画される */}
            <Component {...pageProps}/>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </RecoilRoot>
  );
}

