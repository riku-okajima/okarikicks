import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { AppProps } from 'next/app'
import * as React from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

// 共通レイアウトの作成
export default function App({ Component, pageProps }: AppProps) {
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

