<script>
export default {
  data() {
    return {
      isDarkMode: false,
      calendarInstance: null,
      uniqueId: null,
      options: {
        type: 'calendar',
        theme: 'lite-purple',
        darkMode: 'auto',
        minDate: 'none',
        maxDate: 'none',
        disabledDates: 'none',
        predefinedRanges: false
      }
    }
  },
  computed: {
    resolvedDarkMode() {
      if (this.options.darkMode === 'on') return true;
      if (this.options.darkMode === 'off') return false;
      return this.isDarkMode
    },
    configSnippet() {
      const { className, options: built } = this.buildOptions();
      const lines = [`new ${className}({`, `    element: "#my-calendar",`];
      lines.push(`    theme: "${this.options.theme}",`);
      lines.push(`    format: "MM/DD/YYYY",`);
      lines.push(`    darkMode: ${built.darkMode},`);
      if (built.minDate) {
        lines.push(`    minDate: ${this.formatDateForSnippet(built.minDate)},`);
      }
      if (built.maxDate) {
        lines.push(`    maxDate: ${this.formatDateForSnippet(built.maxDate)},`);
      }
      if (built.disabledDates) {
        lines.push(`    disabledDates: (date) => date.getDay() === 0 || date.getDay() === 6,`);
      }
      if (built.predefinedRanges) {
        lines.push(`    predefinedRanges: [`);
        built.predefinedRanges.forEach((r, i) => {
          const { start, end } = r.getRange();
          lines.push(
            `        { label: "${r.label}", getRange: () => ({ start: ${this.formatDateForSnippet(start)}, end: ${this.formatDateForSnippet(end)} }) },`
          );
          if (i < built.predefinedRanges.length - 1) lines.push('');
        });
        lines.push(`    ],`);
      }
      lines.push('})');
      return lines.join('\n');
    }
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.reinitializeCalendar();
      }
    }
  },
  created() {
    // Generate unique ID for this component instance
    this.uniqueId = `playground-${Math.random().toString(36).substr(2, 9)}`
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
          // Only reinitialize when following the site theme
          if (this.options.darkMode === 'auto') {
            this.reinitializeCalendar()
          }
        }
      }
    },
    addDays(date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
    buildOptions() {
      const dd = window?.datedreamer;
      let CalClass;
      let className;

      if (this.options.type === 'toggle' && dd?.calendarToggle) {
        CalClass = dd.calendarToggle;
        className = 'calendarToggle';
      } else if (this.options.type === 'range' && dd?.range) {
        CalClass = dd.range;
        className = 'range';
      } else {
        CalClass = dd?.calendar;
        className = 'calendar';
      }

      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();

      const options = {
        theme: this.options.theme,
        format: 'MM/DD/YYYY',
        darkMode: this.resolvedDarkMode
      };

      if (this.options.minDate === 'month-start') {
        options.minDate = new Date(year, month, 1);
      } else if (this.options.minDate === 'today-minus-5') {
        options.minDate = this.addDays(now, -5);
      }

      if (this.options.maxDate === 'month-end') {
        options.maxDate = new Date(year, month + 1, 0);
      } else if (this.options.maxDate === 'today-plus-10') {
        options.maxDate = this.addDays(now, 10);
      }

      if (this.options.disabledDates === 'weekends') {
        options.disabledDates = (date) => date.getDay() === 0 || date.getDay() === 6;
      }

      if (this.options.type === 'range' && this.options.predefinedRanges) {
        options.predefinedRanges = [
          {
            label: 'Last 7 Days',
            getRange: () => ({ start: this.addDays(now, -6), end: now })
          },
          {
            label: 'This Month',
            getRange: () => ({ start: new Date(year, month, 1), end: new Date(year, month + 1, 0) })
          }
        ];
      }

      return { CalClass, className, options };
    },
    formatDateForSnippet(date) {
      return `new Date(${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()})`;
    },
    initializeCalendar() {
      if (this.calendarInstance || !this.$refs.calendar) {
        return // Already initialized or ref not available
      }

      const { CalClass, options } = this.buildOptions();

      if (!CalClass) {
        console.error('No calendar class available in datedreamer')
        return
      }

      this.calendarInstance = new CalClass({
        element: this.$refs.calendar,
        ...options
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
  <div class="playground">
    <div class="playground-controls">
      <label>
        Component type
        <select v-model="options.type">
          <option value="calendar">calendar</option>
          <option value="toggle">calendarToggle</option>
          <option value="range">range</option>
        </select>
      </label>
      <label>
        Theme
        <select v-model="options.theme">
          <option value="lite-purple">lite-purple</option>
          <option value="unstyled">unstyled</option>
        </select>
      </label>
      <label>
        Dark mode
        <select v-model="options.darkMode">
          <option value="auto">Follow site theme</option>
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>
      </label>
      <label>
        minDate
        <select v-model="options.minDate">
          <option value="none">None</option>
          <option value="month-start">Start of current month</option>
          <option value="today-minus-5">Today − 5 days</option>
        </select>
      </label>
      <label>
        maxDate
        <select v-model="options.maxDate">
          <option value="none">None</option>
          <option value="month-end">End of current month</option>
          <option value="today-plus-10">Today + 10 days</option>
        </select>
      </label>
      <label>
        disabledDates
        <select v-model="options.disabledDates">
          <option value="none">None</option>
          <option value="weekends">Weekends (predicate)</option>
        </select>
      </label>
      <label v-if="options.type === 'range'" class="playground-checkbox">
        <input type="checkbox" v-model="options.predefinedRanges" />
        predefinedRanges
      </label>
    </div>
    <div ref="calendar" :id="uniqueId" class="playground-preview"></div>
    <pre class="playground-snippet"><code>{{ configSnippet }}</code></pre>
  </div>
</template>

<style>
.playground {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color-scheme: light;
}
.playground-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}
.playground-controls label {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  color: var(--vp-c-text-mute);
}
.playground-controls select {
  margin-top: 4px;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text);
  font-size: 0.9rem;
}
.playground-checkbox {
  flex-direction: row !important;
  align-items: center;
  gap: 8px;
}
.playground-preview {
  position: relative;
  z-index: 20;
}
.playground-snippet {
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  font-size: 0.85rem;
  overflow-x: auto;
}

[data-theme='dark'] .playground {
  color-scheme: dark;
}
</style>
