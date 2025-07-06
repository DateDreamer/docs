import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

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
  
  alias: {
    '@': '/docs/.vuepress/components'
  }
})