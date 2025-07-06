import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  title: "DateDreamer Docs",
  description: 'An easy to use lightweight javascript calendar library.',
  dest: "./dist",
  base: "/docs/",
  
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  
  theme: defaultTheme({
    displayAllHeaders: true,
    sidebar: [
      {
        text: 'Home',
        link: '/'
      },
      '/Introduction/',
      '/Getting Started/',
      '/Options/'
    ],
    navbar: [
      {text: "Github", link: "https://github.com/DateDreamer/datedreamer"}
    ],
  }),
  
  plugins: [
    activeHeaderLinksPlugin({
      headerLinkSelector: 'a.sidebar-item',
      headerAnchorSelector: '.header-anchor',
    }),
    backToTopPlugin(),
  ],
  
  alias: {
    '@': '/docs/.vuepress/components'
  }
})