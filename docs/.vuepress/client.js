import { defineClientConfig } from '@vuepress/client'
import Calendar from './components/Calendar.vue'
import Range from './components/Range.vue'
import CalendarConstraints from './components/CalendarConstraints.vue'
import Playground from './components/Playground.vue'

export default defineClientConfig({
  enhance({ app }) {
    // Load datedreamer UMD bundle as global script before component initialization
    if (typeof document !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/datedreamer@0.6.0/dist/datedreamer.js'
      script.onload = () => console.log('datedreamer loaded globally')
      document.head.appendChild(script)
    }
    app.component('Calendar', Calendar)
    app.component('Range', Range)
    app.component('CalendarConstraints', CalendarConstraints)
    app.component('Playground', Playground)
  },
}) 