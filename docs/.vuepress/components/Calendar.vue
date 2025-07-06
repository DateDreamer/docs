<script>
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
    if(typeof window !== 'undefined' && window.document){
      import('datedreamer').then((datedreamer) => {
        if(this.$props.type == "regular"){
          new datedreamer.calendar({element: this.$refs.calendar, theme: this.$props.theme, format: "MM/DD/YYYY", darkModeAuto: true})
        }

        if(this.$props.type == "toggle") {
          new datedreamer.calendarToggle({element: this.$refs.calendar, theme: this.$props.theme, format: "MM/DD/YYYY", darkModeAuto: true})
        }
      }).catch(err => {
        console.error('Failed to load datedreamer:', err);
      });
    }
  }
}
</script>

<template>
  <div ref="calendar" id="calendar" style="position: relative; z-index: 20"></div>
</template>
