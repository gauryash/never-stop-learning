import createMDX from 'fumadocs-mdx/config';
import path from 'path';
import { fileURLToPath } from 'url';

const isProd = process.env.NODE_ENV === 'production';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stubPath = path.resolve(__dirname, 'lib/shiki-stub.js');

const withMDX = createMDX({
  mdxOptions: {
    rehypeCodeOptions: false,
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias ??= {};
    config.resolve.alias['@shikijs/rehype'] = stubPath;
    config.resolve.alias['@shikijs/transformers'] = stubPath;
    return config;
  },
  ...(isProd && {
    output: 'export',
    basePath: '/never-stop-learning',
    images: {
      unoptimized: true,
    },
  }),
};

export default withMDX(config);
