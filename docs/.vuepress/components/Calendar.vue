<script>
export default {
  props: {
    type: String,
    theme: {type: String, default:"lite-purple"},
    darkMode: {type: Boolean, default: false}
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
        if(this.$props.type == "regular"){
          new datedreamer.calendar({
            element: this.$refs.calendar, 
            theme: this.$props.theme, 
            format: "MM/DD/YYYY", 
            darkMode: this.isDarkMode
          })
        }

        if(this.$props.type == "toggle") {
          new datedreamer.calendarToggle({
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
          // Re-initialize the calendar with the new dark mode setting
          this.reinitializeCalendar()
        }
      }
    },
    reinitializeCalendar() {
      // Clear the existing calendar
      if (this.$refs.calendar) {
        this.$refs.calendar.innerHTML = ''
      }
      
      // Re-create the calendar with the new dark mode setting
      if(typeof window !== 'undefined' && window.document){
        import('datedreamer').then((datedreamer) => {
          if(this.$props.type == "regular"){
            new datedreamer.calendar({
              element: this.$refs.calendar, 
              theme: this.$props.theme, 
              format: "MM/DD/YYYY", 
              darkMode: this.isDarkMode
            })
          }

          if(this.$props.type == "toggle") {
            new datedreamer.calendarToggle({
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
    }
  }
}
</script>

<template>
  <div ref="calendar" id="calendar" style="position: relative; z-index: 20"></div>
</template>
