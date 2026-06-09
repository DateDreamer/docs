# Introduction

DateDreamer is a lightweight, customizable JavaScript calendar library built with Web Components and TypeScript. It provides a simple yet powerful solution for date selection with extensive customization options and modern features.

## Overview

The need for a simple yet very extensible calendar came after testing other calendars that did not meet our needs. They were either too clunky or very hard to configure, or were missing some required configuration options such as overriding the calendar itself with our own styles.

DateDreamer addresses these issues by providing:
- **Three main components**: standalone calendar, toggle calendar, and range calendar
- **Extensive customization**: themes, custom styling, and configuration options
- **Modern architecture**: built with Web Components and TypeScript
- **Accessibility**: WCAG 2.1 AA compliant
- **Lightweight**: minimal dependencies and small bundle size

## Components

### Calendar
The main calendar component that provides date selection functionality with full customization options.

<ClientOnly>
    <Calendar type="regular" />
</ClientOnly>

### Calendar Toggle
A calendar that shows/hides when an input is clicked, perfect for form inputs and date pickers.
<ClientOnly>
    <Calendar type="toggle" />
</ClientOnly>

### Range Calendar
A specialized calendar component for selecting date ranges with support for predefined ranges.

<ClientOnly>
    <Range />
</ClientOnly>

## Features

### Core Features
- ✅ **Web Components**: Built with modern Web Components for better compatibility
- ✅ **TypeScript Support**: Full TypeScript support with type definitions included
- ✅ **Multiple Themes**: Unstyled and lite-purple themes with custom styling support
- ✅ **Dark Mode**: Both manual and automatic dark mode detection
- ✅ **Date Formatting**: Flexible date formatting using DayJS
- ✅ **Range Selection**: Built-in support for date range selection
- ✅ **Predefined Ranges**: Quick access buttons for common date ranges
- ✅ **Custom Icons**: Support for custom navigation icons
- ✅ **Events & Callbacks**: onChange, onRender, and navigation event callbacks

### current New Features ✨

Retrieve calendar state at any time:
```javascript
// Get current selection
const selectedDate = myCalendar.getSelectedDate(); // Date | null
const displayedMonth = myCalendar.getDisplayMonth(); // Date
const year = myCalendar.getDisplayedYear(); // number (e.g., 2024)
const monthName = myCalendar.getDisplayMonthName(); // "January"

// Check date state
const isTodaySelected = myCalendar.isSelected(today); // boolean
const isInRange = myCalendar.isDateInRange(someDate); // boolean (range mode)
```

Full programmatic control:
- **Enable/disable**: `disable()` / `enable()`
- **Focus management**: `focusInput()`, `focusFirstDay()`, `focusLastDay()`
- **Selection clearing**: `clearSelection()` resets to today
- **Reset selection**: `resetSelection()` matches view to selected date

Navigate using common patterns:
- Navigate to specific months, jump to week boundaries, start/end of month
- ⌨️ **Enhanced Accessibility**: ARIA attributes on all interactive elements, Escape key support
- 🎉 **Event System**: AddEventListener support with EVENT_CHANGE, EVENT_NAVIGATE, EVENT_RENDER events
- 🔧 **Utility Functions**: Date validation, formatting, range checking, week helpers

### Accessibility Features
- ✅ **WCAG 2.1 AA Compliant**: Every element tested for accessibility standards
- ✅ **ARIA Attributes**: All interactive elements properly labeled with ARIA
- ✅ **Keyboard Navigation**: Full keyboard support including Arrow keys and Escape
- ✅ **Screen Reader Support**: Proper labels and roles for assistive technologies
- ✅ **Focus Management**: Logical tab order with focus indicators

<br/>

## Browser Support

DateDreamer supports all modern browsers that support Web Components:
- Chrome 67+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## Frequently Asked Questions

### Why choose DateDreamer over other calendar libraries?

DateDreamer was built to address common pain points with existing calendar libraries:
- **Lightweight**: No heavy dependencies or bloated code
- **Customizable**: Easy to style and configure without fighting the library
- **Modern**: Built with current web standards (Web Components, TypeScript)
- **Accessible**: WCAG 2.1 AA compliant out of the box

### What's new in current?

current brings comprehensive API controls that make it easier to work with DateDreamer:

```javascript
// Get current selection and view
const selectedDate = myCalendar.getSelectedDate(); // Date | null
const displayedMonth = myCalendar.getDisplayMonth(); // Date object
const year = myCalendar.getDisplayedYear(); // number (e.g., 2024)
const monthName = myCalendar.getDisplayMonthName(); // "January"

// Check date state and selection
const isTodaySelected = myCalendar.isSelected(today); // boolean
const isInRange = myCalendar.isDateInRange(someDate); // boolean (range mode)
```

- **Enable/disable interaction**: `disable()` / `enable()`
- **Focus management**: `focusInput()`, `focusFirstDay()`, `focusLastDay()`
- **Selection clearing**: `clearSelection()` - resets to today's date and triggers onChange
- **Reset selection view**: `resetSelection()` - matches display to selected date

```javascript
myCalendar.goToMonth(2024, 5);    // June 2024
myCalendar.jumpToStartOfMonth();   // First of current month
myCalendar.jumpToEndOfMonth();     // Last day of current month
myCalendar.goToPrevWeek();         // Go back 7 days from selected date
myCalendar.goToNextWeek();         // Go forward 7 days
```

```javascript
// Listen to calendar events with addEventListener
myCalendar.addEventListener(calendar.EVENT_CHANGE, (e) => {
    console.log('Date changed:', e.detail);
});

myCalendar.addEventListener(calendar.EVENT_NAVIGATE, (e) => {
    console.log('Navigated to:', new Date(e.detail.displayedMonthDate));
});

myCalendar.addEventListener(calendar.EVENT_RENDER, (e) => {
    console.log('Calendar rendered');
});
```

```javascript
import { Utils } from 'datedreamer';

Utils.isValidDate(date);          // Validate date
Utils.isInRange(start, end, date);// Check if in range
Utils.formatDate(date, fmt);      // Format dates
Utils.addDays(date, 7);           // Add days to date
Utils.getWeekNumber(date);        // Get ISO week number
Utils.isWeekend(date);            // Check weekend
Utils.getWeekdayName(date);       // Get weekday name
```

### Can I use DateDreamer with my framework?

Yes! DateDreamer is built with Web Components, making it compatible with:
- React
- Vue
- Angular
- Svelte
- Vanilla JavaScript
- Any framework that supports Web Components

### Is DateDreamer free to use?

DateDreamer is open source and licensed under GPL-3.0. You can use it freely in your projects.

### How do I customize the appearance?

You have several options:
1. Use the built-in themes (`unstyled`, `lite-purple`)
2. Inject custom CSS through the `styles` option
3. Override CSS custom properties for theme customization
4. Start with `unstyled` theme and build your own styles

### Does DateDreamer work with TypeScript?

Yes! DateDreamer is written in TypeScript and includes full type definitions:
- Exported types for all interfaces and options
- Type-safe event handlers with proper typing
- IntelliSense support in VSCode and other editors
```typescript
import { calendar, Utils } from 'datedreamer';

// Get typed autocomplete
const selected = myCalendar.getSelectedDate(); // Date | null
const isValid = Utils.isValidDate(myDate);    // boolean
```

### Can I listen to calendar events with addEventListener?

Yes! current adds full event listener support:
```javascript
myCalendar.addEventListener(calendar.EVENT_CHANGE, (e) => {
  console.log('Date changed:', e.detail);
});

myCalendar.addEventListener(calendar.EVENT_NAVIGATE, (e) => {
  console.log('Navigated to:', new Date(e.detail.displayedMonthDate));
});
```

### What accessibility features are available?

- ARIA labels on all interactive elements (previous/next buttons, day cells)
- Escape key support to close toggle calendars
- Full keyboard navigation with logical tab order
- Screen reader friendly with proper role attributes