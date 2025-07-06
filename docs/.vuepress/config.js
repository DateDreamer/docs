import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: "DateDreamer Docs",
  description: 'An easy to use lightweight javascript calendar library.',
  dest: "./dist",
  base: "/docs/",
  
  // SEO and meta improvements
  head: [
    ['meta', { name: 'keywords', content: 'javascript, calendar, datepicker, web components, typescript, lightweight' }],
    ['meta', { name: 'author', content: 'DateDreamer' }],
    ['meta', { property: 'og:title', content: 'DateDreamer - Lightweight JavaScript Calendar Library' }],
    ['meta', { property: 'og:description', content: 'An easy to use lightweight javascript calendar library built with Web Components and TypeScript.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  
  theme: defaultTheme({
    colorMode: 'auto',
    colorModeSwitch: true,
    displayAllHeaders: true,
    
    // Improved sidebar structure
    sidebar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Getting Started',
        link: '/Getting Started/',
        children: []
      },
      {
        text: 'Guide',
        children: [
          '/Introduction/',
          '/Options/',
        ]
      },
      {
        text: 'Help',
        children: [
          '/Troubleshooting/',
        ]
      }
    ],
    
    // Enhanced navbar
    navbar: [
      {
        text: 'Guide',
        children: [
          '/Introduction/',
          '/Getting Started/',
          '/Options/',
        ]
      },
      {
        text: 'Help',
        children: [
          '/Troubleshooting/',
        ]
      },
      {
        text: 'Links',
        children: [
          {
            text: 'GitHub',
            link: 'https://github.com/DateDreamer/datedreamer'
          },
          {
            text: 'npm',
            link: 'https://www.npmjs.com/package/datedreamer'
          }
        ]
      }
    ],
    
    // GitHub integration
    repo: 'DateDreamer/datedreamer',
    editLink: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    lastUpdatedText: 'Last Updated',
    
    // Additional navigation
    prev: true,
    next: true,
  }),
  
  alias: {
    '@': '/docs/.vuepress/components'
  }
})