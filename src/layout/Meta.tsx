import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { config } from '../utils/config';

type Props = {
  title?: string;
  description?: string;
  canonical?: string;
  locale?: string;
  siteName?: string;
};

const Meta: React.FC<Props> = ({
  title = config.title,
  description = config.description,
  canonical = config.canonical,
  locale = config.locale,
  siteName = config.site_name,
}) => (
  <>
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.baseUrl}/apple-touch-icon.png`} key="apple" />
      <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.baseUrl}/favicon-32x32.png`} key="icon32" />
      <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.baseUrl}/favicon-16x16.png`} key="icon16" />
      <link rel="icon" href={`${process.env.baseUrl}/favicon.ico`} key="favicon" />
    </Head>
    <NextSeo
      canonical={canonical}
      description={description}
      openGraph={{
        description,
        images: [
          {
            url: `${process.env.baseUrl}/og-image.jpg`,
            width: 800,
            height: 600,
            alt: 'Open Graph Image',
          },
        ],
        locale,
        site_name: siteName,
        title,
        type: 'website',
        url: canonical,
      }}
      title={title}
    />
  </>
);

export { Meta };
