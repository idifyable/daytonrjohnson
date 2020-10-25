import { NextPage } from 'next';
import 'normalize.css';
import './styles/fonts.css';
import { GlobalStyles } from '@components/styled/GlobalStyles';
import React, { Fragment } from 'react';

interface Props {
  Component: any;
  pageProps: any;
}

const App: NextPage<Props> = ({ Component, pageProps }: Props) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
