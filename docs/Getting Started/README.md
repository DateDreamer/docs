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

#### Installing with a CDN (unpkg)
```html
<script src="https://unpkg.com/datedreamer@0.5.5/dist/datedreamer.js"></script>
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

// The toggle closes itself on Escape key press or outside click (built in)
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

### Event Callbacks

Events are delivered through option callbacks passed at construction:

```javascript
const myCalendar = new calendar({
    element: '#calendar',
    onChange: (event) => {
        // event.detail: formatted date string (e.g. "01/15/2024")
        console.log('Selected date:', event.detail);
    },
    onRender: (event) => {
        // Fires after the calendar is rendered
        console.log('Calendar ready');
    },
    onNextNav: (event) => {
        // event.detail.displayedMonthDate: Date of the newly displayed month
        console.log('Navigated forward to:', event.detail.displayedMonthDate);
    },
    onPrevNav: (event) => {
        console.log('Navigated back to:', event.detail.displayedMonthDate);
    }
});
```

> **Note:** DateDreamer does not dispatch DOM CustomEvents on the calendar element, so `addEventListener` on the instance will never receive these events. Pass the callbacks in the options object instead.

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