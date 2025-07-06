<script>
export default {
  props: {
  },
  data() {
    return {
      isDarkMode: false
    }
  },
  mounted() {
    // Detect initial VuePress dark mode state
    this.detectVuePressColorMode()
    
    // Listen for changes to VuePress color mode
    if (typeof window !== 'undefined' && window.document) {
      // Create a MutationObserver to watch for class changes on the document
      this.observer = new MutationObserver(() => {
        this.detectVuePressColorMode()
      })
      
      // Start observing the document for class changes
      this.observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class', 'data-theme']
      })
    }
    
    if(typeof window !== 'undefined' && window.document){
      import('datedreamer').then((datedreamer) => {
        new datedreamer.range({
          element: this.$refs.range,
          theme: "lite-purple", 
          format: "MM/DD/YYYY", 
          darkMode: this.isDarkMode
        })
      }).catch(err => {
        console.error('Failed to load datedreamer:', err);
      });
    }
  },
  beforeUnmount() {
    // Clean up the mutation observer
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    detectVuePressColorMode() {
      if (typeof window !== 'undefined' && window.document) {
        // Check if VuePress has applied dark mode class to the document
        const isDark = document.documentElement.classList.contains('dark') || 
                      document.documentElement.getAttribute('data-theme') === 'dark'
        
        if (this.isDarkMode !== isDark) {
          this.isDarkMode = isDark
          // Re-initialize the range calendar with the new dark mode setting
          this.reinitializeRangeCalendar()
        }
      }
    },
    reinitializeRangeCalendar() {
      // Clear the existing calendar
      if (this.$refs.range) {
        this.$refs.range.innerHTML = ''
      }
      
      // Re-create the range calendar with the new dark mode setting
      if(typeof window !== 'undefined' && window.document){
        import('datedreamer').then((datedreamer) => {
          new datedreamer.range({
            element: this.$refs.range,
            theme: "lite-purple", 
            format: "MM/DD/YYYY", 
            darkMode: this.isDarkMode
          })
        }).catch(err => {
          console.error('Failed to load datedreamer:', err);
        });
      }
    }
  }
}
</script>

<template>
  <div ref="range" id="range"></div>
</template>
