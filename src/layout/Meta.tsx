import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { config } from '../utils/config';

type Props = {
  canonical?: string;
  description?: string;
  locale?: string;
  siteName?: string;
  title?: string;
};

const Meta: React.FC<Props> = ({
  title = config.title,
  description = config.description,
  canonical = config.canonical,
  locale = config.locale,
  siteName = config.siteName,
}) => (
  <>
    <Head>
      <meta key="charset" charSet="UTF-8" />
      <meta key="viewport" content="width=device-width,initial-scale=1" name="viewport" />
      <link key="apple" href={`${process.env.baseUrl}/apple-touch-icon.png`} rel="apple-touch-icon" sizes="180x180" />
      <link key="icon32" href={`${process.env.baseUrl}/favicon-32x32.png`} rel="icon" sizes="32x32" type="image/png" />
      <link key="icon16" href={`${process.env.baseUrl}/favicon-16x16.png`} rel="icon" sizes="16x16" type="image/png" />
      <link key="favicon" href={`${process.env.baseUrl}/favicon.ico`} rel="icon" />
    </Head>
    <NextSeo
      canonical={canonical}
      description={description}
      openGraph={{
        description,
        images: [
          {
            alt: 'Open Graph Image',
            height: 600,
            url: `${process.env.baseUrl}/og-image.jpg`,
            width: 800,
          },
        ],
        locale,
        // eslint-disable-next-line camelcase
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
