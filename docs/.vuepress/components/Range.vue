<script>
export default {
  props: {
  },
  data() {
    return {
      isDarkMode: false,
      rangeInstance: null,
      uniqueId: null
    }
  },
  created() {
    // Generate unique ID for this component instance
    this.uniqueId = `range-${Math.random().toString(36).substr(2, 9)}`
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
    
    // Initialize range calendar
    this.initializeRangeCalendar()
  },
  beforeUnmount() {
    // Clean up the mutation observer
    if (this.observer) {
      this.observer.disconnect()
    }
    
    // Clean up range calendar instance
    this.destroyRangeCalendar()
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
    initializeRangeCalendar() {
      if (this.rangeInstance || !this.$refs.range) {
        return // Already initialized or ref not available
      }
      
      if(typeof window !== 'undefined' && window.document){
        import('datedreamer').then((datedreamer) => {
          this.rangeInstance = new datedreamer.range({
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
    destroyRangeCalendar() {
      if (this.rangeInstance) {
        // Clean up the range calendar instance if it has a destroy method
        if (typeof this.rangeInstance.destroy === 'function') {
          this.rangeInstance.destroy()
        }
        this.rangeInstance = null
      }
      
      // Clear the range calendar container
      if (this.$refs.range) {
        this.$refs.range.innerHTML = ''
      }
    },
    reinitializeRangeCalendar() {
      // Only reinitialize if we already have an instance
      if (this.rangeInstance) {
        this.destroyRangeCalendar()
        // Use nextTick to ensure DOM is updated before reinitializing
        this.$nextTick(() => {
          this.initializeRangeCalendar()
        })
      }
    }
  }
}
</script>

<template>
  <div ref="range" :id="uniqueId"></div>
</template>
