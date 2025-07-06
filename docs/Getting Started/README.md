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
<script src="https://cdnjs.cloudflare.com/ajax/libs/datedreamer/0.4.0/datedreamer.min.js"></script>
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

### Calendar

Create a basic calendar that renders in a container element:

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

### onChange Event

Listen for date changes:

```javascript
const myCalendar = new calendar({
    element: '#calendar',
    onChange: (event) => {
        console.log('Selected date:', event.detail);
        // Handle date change
    }
});
```

### onRender Event

Execute code when the calendar is rendered:

```javascript
const myCalendar = new calendar({
    element: '#calendar',
    onRender: (event) => {
        console.log('Calendar rendered:', event.detail.calendar);
        // Calendar is ready for interaction
    }
});
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