import type { NavbarConfig, SidebarConfig } from 'vuepress-theme-mix';

export const navbar: NavbarConfig = [
  {
    text: '首頁',
    link: '/',
  },
  {
    text: '頁面',
    link: '/leetcode/',
  },
  {
    text: '群組',
    children: [
      '/CHANGELOG.md',
      {
        text: 'H.-H. Peng',
        link: 'https://github.com/Hsins',
      },
    ],
  },
  {
    text: '關於',
    link: '/about/',
  },
  {
    text: 'GitHub',
    link: 'https://github.com/Hsins/vuepress-mix-template',
  },
];

export const sidebar: SidebarConfig = {
  '/example/': [
    {
      type: 'group',
      text: '範例頁面',
      link: '',
      children: ['', 'code-block'],
    },
  ],
  '/leetcode/': [
    {
      type: 'group',
      text: 'Leetcode',
      link: '',
      children: ['Roman2intege'],
    },
    {
      type: 'group',
      text: 'Romna1',
      link: '',
      children: ['Roman2intege1'],
    },
  ],
};

export const tags: String[] = [
  'maction',
  'math',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mglyph',
  'mi',
  'mlabeledtr',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mspace',
  'msqrt',
  'mstyle',
  'msubsup',
  'msub',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'msup',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
];
