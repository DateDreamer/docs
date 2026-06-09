# DateDreamer

An easy to use lightweight JavaScript calendar library built with Web Components and TypeScript.

## ✨ Features

- 🪶 **Lightweight** - Small bundle size with minimal dependencies
- 🎨 **Customizable** - Themes, custom styling, and extensive configuration
- ♿ **Accessible** - WCAG 2.1 AA compliant with full keyboard navigation
- 🔧 **TypeScript** - Full TypeScript support with type definitions
- 🌙 **Dark Mode** - Both manual and automatic dark mode detection
- 📱 **Modern** - Built with Web Components for better compatibility

## 🚀 Quick Start

```bash
npm install datedreamer
```

### Basic Usage

```javascript
import { calendar } from 'datedreamer';

const myCalendar = new calendar({
    element: "#my-calendar",
    selectedDate: new Date(),
    theme: "lite-purple",
    darkModeAuto: true
});
```

## 📚 What's New - Latest Features (v2.0)

### 🔍 Getter Methods

Retrieve calendar state programmatically:

```javascript
// Get current selection
const selectedDate = myCalendar.getSelectedDate(); // Date | null
const displayedMonth = myCalendar.getDisplayMonth(); // Date
const year = myCalendar.getDisplayedYear(); // number
const monthName = myCalendar.getDisplayMonthName(); // "January"

// Check date state
const isTodaySelected = myCalendar.isSelected(today); // boolean
const isInRange = myCalendar.isDateInRange(someDate); // boolean (range mode)
```

### 🎮 Control Methods

Enable/disable and manage calendar interactions:

```javascript
// Disable/Enable
myCalendar.disable();  // Prevent user interaction
myCalendar.enable();   // Re-enable all interactions

// Focus Management
myCalendar.focusInput();      // Focus date input
myCalendar.focusFirstDay();   // Focus first day button
myCalendar.focusLastDay();    // Focus last day button

// Selection Management
myCalendar.clearSelection();       // Reset to today's date
myCalendar.resetSelection();       // Reset view to selected date
```

### 🗓️ Helper Navigation Methods

Navigate calendar using common patterns:

```javascript
// Navigate to specific month
myCalendar.goToMonth(2024, 5); // June 2024 (0-indexed months)

// Week navigation
myCalendar.goToPrevWeek();   // Go back 7 days from selected date
myCalendar.goToNextWeek();   // Go forward 7 days from selected date

// Month boundaries
myCalendar.jumpToStartOfMonth();    // Jump to 1st of month
myCalendar.jumpToEndOfMonth();      // Jump to last day of month

// Check if today is visible
myCalendar.isTodayVisible(); // true if today falls within displayed month
```

### 🎉 Event System

Listen to calendar events with addEventListener:

```javascript
const myCalendar = new calendar({
    element: '#calendar',
    onChange: (e) => console.log('Date changed:', e.detail)
});

// Listen for events
myCalendar.addEventListener(calendar.EVENT_CHANGE, (e) => {
    console.log('Selected date:', e.detail);
});

myCalendar.addEventListener(calendar.EVENT_NAVIGATE, (e) => {
    console.log('Navigated to:', new Date(e.detail.displayedMonthDate));
});

myCalendar.addEventListener(calendar.EVENT_RENDER, (e) => {
    console.log('Calendar rendered');
});
```

### 🔧 Utility Functions

Date manipulation helpers:

```javascript
import { Utils } from 'datedreamer';

// Date validation
Utils.isValidDate(date); // boolean

// Range checking
Utils.isInRange(start, end, date); // boolean

// Formatting
Utils.formatDate(date, 'MM/DD/YYYY'); // string

// Date comparison
Utils.isSameDay(date1, date2); // boolean

// Date manipulation
const tomorrow = Utils.addDays(date, 1);

// Week helpers
const weekNum = Utils.getWeekNumber(date);
const isWeekend = Utils.isWeekend(date);
const weekday = Utils.getWeekdayName(date); // "Monday"
const shortWeekday = Utils.getWeekdayShort(date); // "Mon"
```

## 📖 Full API Reference

For complete documentation including:

- All available methods and properties
- Configuration options
- Event system details
- Utilities module reference
- TypeScript types

See [docs/API.md](./docs/API.md) for comprehensive API reference.

## 🏗️ Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Lint and type check
yarn lint && yarn type-check
```

### Test Commands

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test:coverage

# Watch mode
yarn test:watch
```

## 🧪 Testing

- 109+ passing tests
- Jest + jsdom environment
- Mocks for `window.matchMedia` and observers
- Always clean up DOM after tests in new test files

## 📦 Bundle Info

```bash
# Check production bundle
ls -lh dist/datedreamer.js

# Production build size (example)
-rw-r--r-- 1 jorge jorge 46K Jun 8 dist/datedreamer.js
```

## 🔒 Security & Best Practices

- No secrets or keys in source code
- UMD bundle exports to global `window.datedreamer`
- Shadow DOM isolation for style encapsulation
- Accessible with ARIA attributes and keyboard navigation

## 📄 License

GPL-3.0 Licensed | Copyright © 2023-present DateDreamer