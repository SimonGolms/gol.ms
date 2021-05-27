import { AppProps } from 'next/app';
import React from 'react';
import '../styles/main.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
