import { defineClientConfig } from '@vuepress/client'
import Calendar from './components/Calendar.vue'
import Range from './components/Range.vue'

export default defineClientConfig({
  enhance({ app }) {
    // Load datedreamer UMD bundle as global script before component initialization
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/datedreamer@0.5.2/dist/datedreamer.js'
    script.onload = () => console.log('datedreamer loaded globally')
    document.head.appendChild(script)
    
    app.component('Calendar', Calendar)
    app.component('Range', Range)
  },
}) 