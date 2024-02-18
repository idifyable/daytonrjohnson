import {NextPage } from 'next';
import 'normalize.css';
import './styles/fonts.css';
import {GlobalStyles } from 'src/styled/GlobalStyles';
import React, {Fragment } from 'react';

interface Props {
  Component: any;
  pageProps: any;
}

const App: NextPage<Props> = ({ Component, pageProps }: Props) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
