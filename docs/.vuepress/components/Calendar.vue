<script>
import * as datedreamer from "datedreamer"
export default {
  props: {
    type: String,
    theme: {type: String, default:"lite-purple"}
  },
  data() {
    return {
      greeting: 'Hello World!'
    }
  },
  mounted() {
    if(window){
      if(this.$props.type == "regular"){
        new datedreamer.calendar({element: this.$refs.calendar, theme: this.$props.theme, format: "MM/DD/YYYY"})

      }

      if(this.$props.type == "toggle") {
        new datedreamer.calendarToggle({element: this.$refs.calendar, theme: this.$props.theme, format: "MM/DD/YYYY"})
      }
    }
  }
}
</script>

<template>
  <div ref="calendar" id="calendar" style="position: relative; z-index: 20"></div>
</template>
