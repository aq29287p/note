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
      text: 'Leetcode_easy',
      link: '',
      children: ['13','205','217','242'],

    },
    {
      type: 'group',
      text: 'Linked list',
      link: '',
      children: ['21','141','143','160'],

    },
    {
      type: 'group',
      text: 'Sliding windows',
      link: '',
      children: ['643','438','209'],

    }
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
