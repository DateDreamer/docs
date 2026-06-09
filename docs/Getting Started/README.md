# Getting Started

There are several ways that you can install and use DateDreamer into your project depending on what package system you are using.

## Installation

#### Installing with NPM
```bash
npm install datedreamer
```

#### Installing with Yarn
```bash
yarn add datedreamer
```

#### Installing with CDNJS
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/datedreamer/0.4.2/datedreamer.min.js"></script>
```

<!-- ::: warning
You may encounter issues with SSR(Server Side Rendering) systems such as NextJS, Gatsby, NUXT due to the nature of this being a client-side component. We are currently working on adding support for SSR.
::: -->

## Usage

To import datedreamer on the page or component where you wish to use it, there are several ways in which this can be accomplished.

You can import the entire datedreamer library:

```javascript
import * as datedreamer from "datedreamer";
```

You can also import only the pieces which you will use:

```javascript
import { calendar, calendarToggle, range } from "datedreamer";
```

## Basic Examples

### Calendar with New API Features

#### Standalone Calendar with Controls

```html
<div id="my-calendar"></div>
```

```javascript
import { calendar } from 'datedreamer';

const myCalendar = new calendar({
    element: "#my-calendar", // Required
    selectedDate: new Date(),
    theme: "lite-purple",
    darkModeAuto: true
});
```

**Try the New API:**

```javascript
// Get current state
const selectedDate = myCalendar.getSelectedDate();
const monthName = myCalendar.getDisplayMonthName(); // "January"

// Control the calendar
myCalendar.disable();      // Prevent user interaction
myCalendar.enable();       // Re-enable interactions
myCalendar.focusInput();   // Focus date input field
myCalendar.clearSelection(); // Reset to today

// Navigate using helper methods
myCalendar.goToMonth(2024, 5);    // Jump to June 2024
myCalendar.jumpToStartOfMonth();   // First of current month
myCalendar.goToPrevWeek();         // Go back 7 days
```

### Calendar Toggle

Create a toggle calendar that shows/hides when an input is clicked:

```html
<div id="my-toggle-calendar"></div>
```

```javascript
import { calendarToggle } from 'datedreamer';

const toggleCalendar = new calendarToggle({
    element: "#my-toggle-calendar", // Required
    selectedDate: new Date(),
    theme: "lite-purple",
    darkModeAuto: true,
    inputLabel: "Select a date",
    inputPlaceholder: "Click to choose date"
});

// Close on Escape key (built-in accessibility)
toggleCalendar.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toggleCalendar.calendarWrapElement?.classList.remove('active');
    }
});
```

### Range Calendar

Create a range calendar for selecting date ranges:

```html
<div id="my-range-calendar"></div>
```

```javascript
import { range } from 'datedreamer';

const rangeCalendar = new range({
    element: "#my-range-calendar", // Required
    selectedDate: new Date(),
    theme: "lite-purple",
    darkModeAuto: true,
    predefinedRanges: [
        {
            label: 'Last 7 Days',
            getRange: () => {
                const end = new Date();
                const start = new Date();
                start.setDate(start.getDate() - 6);
                return { start, end };
            }
        },
        {
            label: 'This Month',
            getRange: () => {
                const now = new Date();
                const start = new Date(now.getFullYear(), now.getMonth(), 1);
                const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
                return { start, end };
            }
        }
    ]
});

// Get range selection
const isTodayInRange = rangeCalendar.calendar1?.isDateInRange(new Date());
```

## TypeScript Support

DateDreamer is written in TypeScript and includes type definitions:

```typescript
import { calendar, calendarToggle, range } from 'datedreamer';

const myCalendar: calendar = new calendar({
    element: '#calendar',
    selectedDate: new Date(),
    theme: 'lite-purple',
    darkModeAuto: true,
    onChange: (event) => {
        console.log('Selected date:', event.detail);
    }
});
```

## Working with Events

### onChange Event (Option or addEventListener)

**Using option callback:**
```javascript
const myCalendar = new calendar({
    element: '#calendar',
    onChange: (event) => {
        console.log('Selected date:', event.detail);
        // Handle date change
    }
});
```

**Using addEventListener (v2.0):**
```javascript
const myCalendar = new calendar({
    element: '#calendar'
});

// Listen to events after initialization
myCalendar.addEventListener(calendar.EVENT_CHANGE, (e) => {
    console.log('Selected date:', e.detail);
});

myCalendar.addEventListener(calendar.EVENT_NAVIGATE, (e) => {
    console.log('Navigated to:', new Date(e.detail.displayedMonthDate));
});

myCalendar.addEventListener(calendar.EVENT_RENDER, (e) => {
    console.log('Calendar rendered and ready');
});

// Remove listeners when needed
myCalendar.removeEventListener(calendar.EVENT_CHANGE, handler);
```

## Next Steps

Now that you have DateDreamer installed and running, you can:

1. Explore the [Options](/Options/) page to see all available configuration options
2. Customize the appearance with themes and custom styling
3. Add event handlers for date changes and user interactions
4. Implement advanced features like date ranges and predefined ranges

## Need Help?

If you encounter any issues during setup:

- Check the [Troubleshooting](/Troubleshooting/) guide for common problems and solutions
- Review the [Options](/Options/) page for configuration details
- Visit our [GitHub repository](https://github.com/DateDreamer/datedreamer) for the latest updates and community support