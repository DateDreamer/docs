import { defineClientConfig } from '@vuepress/client'
import Calendar from './components/Calendar.vue'
import Range from './components/Range.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Calendar', Calendar)
    app.component('Range', Range)
  },
}) 