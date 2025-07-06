<script>
export default {
  props: {
    type: String,
    theme: {type: String, default:"lite-purple"},
    darkMode: {type: Boolean, default: false}
  },
  data() {
    return {
      isDarkMode: false,
      calendarInstance: null,
      uniqueId: null
    }
  },
  created() {
    // Generate unique ID for this component instance
    this.uniqueId = `calendar-${Math.random().toString(36).substr(2, 9)}`
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
    
    // Initialize calendar
    this.initializeCalendar()
  },
  beforeUnmount() {
    // Clean up the mutation observer
    if (this.observer) {
      this.observer.disconnect()
    }
    
    // Clean up calendar instance
    this.destroyCalendar()
  },
  methods: {
    detectVuePressColorMode() {
      if (typeof window !== 'undefined' && window.document) {
        // Check if VuePress has applied dark mode class to the document
        const isDark = document.documentElement.classList.contains('dark') || 
                      document.documentElement.getAttribute('data-theme') === 'dark'
        
        if (this.isDarkMode !== isDark) {
          this.isDarkMode = isDark
          // Re-initialize the calendar with the new dark mode setting
          this.reinitializeCalendar()
        }
      }
    },
    initializeCalendar() {
      if (this.calendarInstance || !this.$refs.calendar) {
        return // Already initialized or ref not available
      }
      
      if(typeof window !== 'undefined' && window.document){
        import('datedreamer').then((datedreamer) => {
          if(this.$props.type == "regular"){
            this.calendarInstance = new datedreamer.calendar({
              element: this.$refs.calendar, 
              theme: this.$props.theme, 
              format: "MM/DD/YYYY", 
              darkMode: this.isDarkMode
            })
          }

          if(this.$props.type == "toggle") {
            this.calendarInstance = new datedreamer.calendarToggle({
              element: this.$refs.calendar, 
              theme: this.$props.theme, 
              format: "MM/DD/YYYY", 
              darkMode: this.isDarkMode
            })
          }
        }).catch(err => {
          console.error('Failed to load datedreamer:', err);
        });
      }
    },
    destroyCalendar() {
      if (this.calendarInstance) {
        // Clean up the calendar instance if it has a destroy method
        if (typeof this.calendarInstance.destroy === 'function') {
          this.calendarInstance.destroy()
        }
        this.calendarInstance = null
      }
      
      // Clear the calendar container
      if (this.$refs.calendar) {
        this.$refs.calendar.innerHTML = ''
      }
    },
    reinitializeCalendar() {
      // Only reinitialize if we already have an instance
      if (this.calendarInstance) {
        this.destroyCalendar()
        // Use nextTick to ensure DOM is updated before reinitializing
        this.$nextTick(() => {
          this.initializeCalendar()
        })
      }
    }
  }
}
</script>

<template>
  <div ref="calendar" :id="uniqueId" style="position: relative; z-index: 20"></div>
</template>
