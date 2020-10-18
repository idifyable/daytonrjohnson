import { NextPage } from 'next';
import './styles/global.css';

interface Props {
  Component: any;
  pageProps: any;
}

const App: NextPage<Props> = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />;
};

export default App;
