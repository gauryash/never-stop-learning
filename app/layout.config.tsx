import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { pageTree } from '@/app/source';
import { FiBookOpen } from 'react-icons/fi';

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Never Stop Learning',
  },
  links: [
    {
      text: 'Notes',
      url: '/docs',
      active: 'nested-url',
      icon: <FiBookOpen />,
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
