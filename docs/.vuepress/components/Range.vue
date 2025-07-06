<script>
export default {
  props: {
  },
  data() {
    return {
      
    }
  },
  mounted() {
    if(typeof window !== 'undefined' && window.document){
      import('datedreamer').then((datedreamer) => {
        new datedreamer.range({element: this.$refs.range,theme: "lite-purple", format: "MM/DD/YYYY", darkModeAuto: true})
      }).catch(err => {
        console.error('Failed to load datedreamer:', err);
      });
    }
  }
}
</script>

<template>
  <div ref="range" id="range"></div>
</template>
