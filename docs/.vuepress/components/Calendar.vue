<script>
import {calendarToggle} from "datedreamer"
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  },
  mounted() {
    if(window){
      console.log(window,this.$refs.calendar)
      new calendarToggle({element: this.$refs.calendar, theme: "lite-purple", format: "MM/DD/YYYY"})
    }
  }
}
</script>

<template>
  <div ref="calendar" id="calendar"></div>
</template>
