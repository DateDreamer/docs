<script>
export default {
  props: {
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
    this.uniqueId = `calendar-constraints-${Math.random().toString(36).substr(2, 9)}`
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

    // Initialize calendar (datedreamer is loaded globally via script tag)
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

      const dd = window?.datedreamer;

      if (!dd?.calendar) {
        console.error('No calendar class available in datedreamer')
        return
      }

      // Demonstrate minDate, maxDate and disabledDates using the current month:
      // - minDate/maxDate restrict selection to the displayed month (nav is blocked at both ends)
      // - disabledDates disables all weekends via a predicate function
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();

      // Select the first weekday of the current month so the initial
      // selection is always valid for the constraints below.
      const selectedDate = new Date(year, month, 1);
      while (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
        selectedDate.setDate(selectedDate.getDate() + 1);
      }

      this.calendarInstance = new dd.calendar({
        element: this.$refs.calendar,
        theme: this.$props.theme,
        format: "MM/DD/YYYY",
        darkMode: this.isDarkMode,
        selectedDate: selectedDate,
        minDate: new Date(year, month, 1),
        maxDate: new Date(year, month + 1, 0),
        disabledDates: (date) => date.getDay() === 0 || date.getDay() === 6
      })
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
