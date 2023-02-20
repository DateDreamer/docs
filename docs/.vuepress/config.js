module.exports = {
    title: "DateDreamer Docs",
    description: 'An easy to use lightweight javascript calendar plugin.',
    dest: "./dist",
    base: "/docs/",
    plugins: ['@vuepress/active-header-links'],
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
        Calendar: '@/components/Calendar.vue'
      }
    }
  }