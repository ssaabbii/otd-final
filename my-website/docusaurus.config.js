// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyHappySkin',
  tagline: 'Система Рекомендаций Уходовой Косметики',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ssaabbii.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/otd-final/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ssaabbii', // Usually your GitHub org/user name.
  projectName: 'otd-final', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MyHappySkin',
        logo: {
          alt: 'My Site Logo',
          src: 'img/android-chrome-512x512.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/api', label: 'API', position: 'left'},
          {to: '/demo', label: 'DEMO', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
         
          {
            href: 'https://github.com/ssaabbii/otd-final',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      algolia: {
        apiKey: 'ded5519b150136db8de7a8d2b5c51d08',
        indexName: 'MHS',
        appId: 'W2Z9XOF0W3'
      },


      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/start',
              },
            ],
          },
          {
            title: 'Team',
            items: [
              {
                label: 'Батурова Дари',
                href: 'https://t.me/dori_b',
              },
              {
                label: 'Дерунец Роман',
                href: 'https://t.me/rmndrnts',
              },
              {
                label: 'Нурдолотова Сабина',
                href: 'https://t.me/sabinaerikovna',
              },
              {
                label: 'Тимофеева Юлия',
                href: 'https://t.me/caelartg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com/ssaabbii/MyHappySkin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MyHappySkin, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
