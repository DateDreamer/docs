<script>
import * as datedreamer from "datedreamer"
export default {
  props: {
  },
  data() {
    return {
      
    }
  },
  mounted() {
    if(window){
        new datedreamer.range({element: this.$refs.range,theme: "lite-purple", format: "MM/DD/YYYY"})
    }
  }
}
</script>

<template>
  <div ref="range" id="range"></div>
</template>
