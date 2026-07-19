import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  ...(isProd && {
    output: 'export',
    basePath: '/never-stop-learning',
    images: {
      unoptimized: true,
    },
  }),
};

export default withMDX(config);
