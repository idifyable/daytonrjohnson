import { NextPage } from 'next';
import 'normalize.css';
import './styles/global.css';
import './styles/site.css';
import './styles/mobile.css';

interface Props {
  Component: any;
  pageProps: any;
}

const App: NextPage<Props> = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />;
};

export default App;
