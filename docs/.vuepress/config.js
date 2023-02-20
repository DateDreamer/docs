module.exports = {
    title: "DateDreamer Docs",
    description: 'An easy to use lightweight javascript calendar plugin.',
    dest: "./dist",
    plugins: ['@vuepress/active-header-links'],
    themeConfig: {
      sidebar: 'auto',
      nav: [
        {text: "Github", link: "https://github.com/DateDreamer/datedreamer"}
      ],
      globalLayout: {
        Calendar: '@/components/Calendar.vue'
      }
    }
  }