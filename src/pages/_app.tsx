import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { AppProps } from 'next/app'
import * as React from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps}/>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </RecoilRoot>
  )
}

