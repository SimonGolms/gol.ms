import { AppProps } from 'next/app';
import '../styles/main.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
