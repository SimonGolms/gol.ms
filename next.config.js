const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';

module.exports = withBundleAnalyzer({
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
  poweredByHeader: false,
  swcMinify: true,
  trailingSlash: true,
});
