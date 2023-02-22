module.exports = {
    title: "DateDreamer Docs",
    description: 'An easy to use lightweight javascript calendar library.',
    dest: "./dist",
    base: "/docs/",
    plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top','@vuepress/active-header-links'],
    themeConfig: {
      displayAllHeaders: true,
      sidebar: [
        '/',
        '/Introduction/',
        '/Getting Started/',
        '/Options/'
      ],
      nav: [
        {text: "Github", link: "https://github.com/DateDreamer/datedreamer"}
      ],
      globalLayout: {
        Calendar: '@/components/Calendar.vue',
        Range: '@/components/Range.vue'
      }
    }
  }