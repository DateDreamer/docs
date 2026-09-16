# Options

Here are the configuration options available for each calendar component type.

## Calendar Component Options

### element
Sets where to insert the calendar to. Can be either a CSS selector string or an HTMLElement object.

**Type**: `Element | string`  
**Required**: Yes  
**Example**: 
```javascript
// Using CSS selector
new calendar({
    element: "#my-calendar"
});

// Using DOM element
const container = document.getElementById('my-calendar');
new calendar({
    element: container
});
```

### selectedDate
Sets the starting date for the calendar. Can be set to a date string, Date object, or null. If null, today's date will be selected by default.

**Type**: `Date | string | null`  
**Default**: `new Date()`  
**Example**: 
```javascript
// Using Date object
new calendar({
    element: "#my-calendar",
    selectedDate: new Date('2024-01-15')
});

// Using date string (requires format option)
new calendar({
    element: "#my-calendar",
    selectedDate: "01/15/2024",
    format: "MM/DD/YYYY"
});

// Using null (defaults to today)
new calendar({
    element: "#my-calendar",
    selectedDate: null
});
```

### theme
Sets the visual theme for the calendar.

**Type**: `'unstyled' | 'lite-purple'`  
**Default**: `'unstyled'`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    theme: "lite-purple"
});
```

* `unstyled`:
<ClientOnly>
<Calendar theme="unstyled" type="regular" />
</ClientOnly>

* `lite-purple`:
<ClientOnly>
<Calendar theme="lite-purple" type="regular" />
</ClientOnly>

### styles
Use this property to pass CSS styles that will be injected into the component's style tag.

**Type**: `string`  
**Default**: `''`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    styles: `
        .datedreamer__calendar {
            border: 2px solid #007bff;
            border-radius: 8px;
        }
        .datedreamer__calendar_day button {
            background-color: #f8f9fa;
        }
    `
});
```

### format
Use this to specify the input AND output format of the date. Please see the available formats from [DayJS](https://day.js.org/docs/en/display/format).

**Type**: `string`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    format: "DD/MM/YYYY"
});
```

Common formats:
- `'YYYY-MM-DD'` - 2024-01-15
- `'DD/MM/YYYY'` - 15/01/2024
- `'MM/DD/YYYY'` - 01/15/2024
- `'MMMM D, YYYY'` - January 15, 2024

### iconNext
Sets the next arrow icon. You can pass it either text or an SVG string.

**Type**: `string`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    iconNext: '<svg>...</svg>'
});
```

### iconPrev
Sets the previous arrow icon. You can pass it either text or an SVG string.

**Type**: `string`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    iconPrev: '<svg>...</svg>'
});
```

### hidePrevNav
Whether to hide the previous month navigation button.

**Type**: `boolean`  
**Default**: `false`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    hidePrevNav: true
});
```

### hideNextNav
Whether to hide the next month navigation button.

**Type**: `boolean`  
**Default**: `false`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    hideNextNav: true
});
```

### inputLabel
Sets the label of the date input element.

**Type**: `string`  
**Default**: `'Set a date'`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    inputLabel: "Reservation Date"
});
```

### inputPlaceholder
Sets the placeholder of the date input element.

**Type**: `string`  
**Default**: `'Enter a date'`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    inputPlaceholder: "Select a Reservation Date"
});
```

### hideInputs
Hides the input field and today button from the UI.

**Type**: `boolean`  
**Default**: `false`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    hideInputs: true
});
```

### darkMode
Enables dark mode styling for the calendar.

**Type**: `boolean`  
**Default**: `false`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    darkModeAuto: true,
    theme: "lite-purple"
});
```

### darkModeAuto
Automatically detects the user's system preference for dark mode and updates in real-time when the system setting changes.

**Type**: `boolean`  
**Default**: `false`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    darkModeAuto: true,
    theme: "lite-purple"
});
```

**Note**: When `darkModeAuto` is enabled, it takes precedence over the `darkMode` setting.

### hideOtherMonthDays
Whether to hide days from other months in the calendar view.

**Type**: `boolean`  
**Default**: `false`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    hideOtherMonthDays: true
});
```

### minDate
The earliest date that can be selected, inclusive. Days before this date are disabled, and the previous navigation button is disabled when the displayed month contains no selectable days. String values are parsed using the `format` option.

**Type**: `Date | string`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    minDate: new Date(2024, 0, 1)
});

// String value (requires format option)
new calendar({
    element: "#my-calendar",
    minDate: "01/01/2024",
    format: "MM/DD/YYYY"
});
```

### maxDate
The latest date that can be selected, inclusive. Days after this date are disabled, and the next navigation button is disabled when the displayed month contains no selectable days. String values are parsed using the `format` option.

**Type**: `Date | string`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    maxDate: new Date(2024, 11, 31)
});
```

### disabledDates
Disables specific dates. Can be an array of Date objects or strings (parsed with the `format` option), or a predicate function that receives a date and returns `true` for dates that should be disabled.

**Type**: `(Date | string)[] | ((date: Date) => boolean)`  
**Default**: `undefined`  
**Example**: 
```javascript
// Disable specific dates
new calendar({
    element: "#my-calendar",
    format: "MM/DD/YYYY",
    disabledDates: [new Date(2024, 0, 15), "01/16/2024"]
});

// Disable all weekends using a predicate
new calendar({
    element: "#my-calendar",
    disabledDates: (date) => date.getDay() === 0 || date.getDay() === 6
});
```

Attempting to select a constrained day (by clicking, typing in the input, or via `setDate`/`setDateToToday`) is rejected and an error message is displayed below the calendar.

**Live example** — a calendar restricted to the current month via `minDate`/`maxDate`, with all weekends disabled by a `disabledDates` predicate. Try clicking a grayed-out day, or navigating to an adjacent month:

<ClientOnly>
<CalendarConstraints />
</ClientOnly>

### rangeMode
Whether to enable range selection mode in the calendar.

**Type**: `boolean`  
**Default**: `false`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    rangeMode: true
});
```

### connector
Calendar connector for linking multiple calendars together.

**Type**: `CalendarConnector`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    connector: myCalendarConnector
});
```

## Event Handlers

### onChange
Callback function triggered when the selected date changes.

**Type**: `function`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    onChange: (event) => {
        console.log('Selected date:', event.detail);
        // Handle date change
    }
});
```

### onRender
Callback function triggered when the calendar is rendered.

**Type**: `function`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    onRender: (event) => {
        console.log('Calendar rendered:', event.detail.calendar);
        // Calendar is ready for interaction
    }
});
```

### onNextNav
Callback function triggered when navigating to the next month.

**Type**: `function`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    onNextNav: (event) => {
        console.log('Navigated to next month:', event.detail);
    }
});
```

### onPrevNav
Callback function triggered when navigating to the previous month.

**Type**: `function`  
**Default**: `undefined`  
**Example**: 
```javascript
new calendar({
    element: "#my-calendar",
    onPrevNav: (event) => {
        console.log('Navigated to previous month:', event.detail);
    }
});
```

## Range Calendar Specific Options

The date constraint options (`minDate`, `maxDate`, `disabledDates`) also apply to the range component. They are enforced on both inner calendars, and predefined ranges whose start or end date falls outside the constraints are ignored when clicked.

### predefinedRanges
Array of predefined range buttons to display for quick date range selection.

**Type**: `IPredefinedRange[]`  
**Default**: `undefined`  
**Example**: 
```javascript
new range({
    element: "#my-range-calendar",
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
        },
        {
            label: 'Last Month',
            getRange: () => {
                const now = new Date();
                const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
                const end = new Date(now.getFullYear(), now.getMonth(), 0);
                return { start, end };
            }
        }
    ]
});
```

#### IPredefinedRange Interface
```typescript
interface IPredefinedRange {
    label: string;
    getRange: () => { start: Date; end: Date };
}
```

## Calendar Methods

### setDate(date)
Sets the selected date in the calendar.

**Parameters**: `date: Date | string`  
**Example**: 
```javascript
const myCalendar = new calendar({
    element: "#my-calendar",
    theme: "lite-purple",
    darkModeAuto: true
});

myCalendar.setDate(new Date('2024-01-15'));
myCalendar.setDate('2024-01-15');
```

### setDateToToday()
Sets the selected date to today.

**Example**: 
```javascript
const myCalendar = new calendar({
    element: "#my-calendar",
    theme: "lite-purple",
    darkModeAuto: true
});

myCalendar.setDateToToday();
```

### setDisplayedMonthDate(date)
Changes the displayed month without changing the selected date.

**Parameters**: `date: Date`  
**Example**: 
```javascript
const myCalendar = new calendar({
    element: "#my-calendar",
    theme: "lite-purple",
    darkModeAuto: true
});

myCalendar.setDisplayedMonthDate(new Date('2024-06-01'));
```

---

## Control Methods and API

### Getter Methods

#### getSelectedDate(): Date | null

Get the currently selected date.

```javascript
const selected = myCalendar.getSelectedDate(); // Date object or null
console.log(selected?.getDate()); // 15
```

#### getDisplayMonth(): Date

Get the currently displayed month.

```javascript
const displayedMonth = myCalendar.getDisplayMonth();
console.log(displayedMonth.getFullYear(), displayedMonth.getMonth()); // 2024, 0
```

#### getDisplayedYear(): number

Get the year of the displayed month.

```javascript
const year = myCalendar.getDisplayedYear(); // 2024
```

#### getDisplayMonthName(): string

Get the full name of the displayed month.

```javascript
console.log(myCalendar.getDisplayMonthName()); // "January"
// Returns: "January", "February", etc.
```

#### isSelected(date: Date): boolean

Check if a date is currently selected.

```javascript
const today = new Date();
const isTodaySelected = myCalendar.isSelected(today); // true/false
```

#### getIsInRangeMode(): boolean

Get whether the calendar is in range mode (range calendars only).

#### isDateInRange(date: Date): boolean

Check if a date falls within the selected range (range mode only; always `false` for single-date calendars).

```javascript
const d = new Date(2024, 0, 15);
const inRange = myCalendar.isDateInRange(d); // true/false
```

#### isDateSelectable(date: Date): boolean

Check whether a date can be selected, taking into account the `minDate`, `maxDate`, and `disabledDates` options.

```javascript
const selectable = myCalendar.isDateSelectable(new Date(2024, 0, 15)); // true/false
```

#### isDisabledDate(date: Date): boolean

Check whether a date is disabled via the `disabledDates` option.

```javascript
const disabled = myCalendar.isDisabledDate(new Date(2024, 0, 15)); // true/false
```

### Control Methods

#### disable(): void

Disable user interaction with the calendar.

```javascript
myCalendar.disable(); // Prevent clicks, keyboard navigation
// Later...
myCalendar.enable(); // Re-enable interactions
```

#### focusInput(): void

Focus the date input field.

```javascript
myCalendar.focusInput(); // Focuses date input
myCalendar.focusFirstDay(); // Focus first day button
myCalendar.focusLastDay();  // Focus last day button
```

#### clearSelection(): void

Reset selection to today's date and rebuild calendar.

```javascript
myCalendar.clearSelection(); // Resets to today's date
// Also triggers onChange callback with new selection
```

#### resetSelection(): void

Reset the displayed month to match the selected date.

```javascript
myCalendar.resetSelection(); // Display matches selected date again
```

### Helper Navigation Methods

#### goToMonth(year: number, month: number): void

Navigate to a specific month (month is 0-indexed: 0 = January).

```javascript
// Go to June 2024
myCalendar.goToMonth(2024, 5); // June is month index 5
```

#### goToPrevWeek(): void

Navigate back one week from the selected date.

```javascript
myCalendar.goToPrevWeek(); // Go back 7 days from selected date
```

#### goToNextWeek(): void

Navigate forward one week from the selected date.

```javascript
myCalendar.goToNextWeek(); // Go forward 7 days
```

#### jumpToStartOfMonth(): void

Jump to the first day of the displayed month.

```javascript
myCalendar.jumpToStartOfMonth(); // Jump to 1st of current month
```

#### jumpToEndOfMonth(): void

Jump to the last day of the displayed month.

```javascript
myCalendar.jumpToEndOfMonth(); // Jump to last day of month
```

#### isTodayVisible(): boolean

Check if today's date is visible in the current calendar view.

```javascript
const isTodayInView = myCalendar.isTodayVisible(); // true/false
```

### Event System

Events are delivered through option callbacks passed at construction:

```javascript
const myCalendar = new calendar({
    element: '#calendar',
    onChange: (event) => {
        // event.detail: formatted date string
        console.log('Date changed:', event.detail);
    },
    onRender: (event) => {
        // Fires after the calendar is rendered
        console.log('Calendar rendered');
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

### Utility Functions

Import and use utility functions for date operations:

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

## Component Types

## Component Types

All the above options are available for:
- `calendar` - Standalone calendar component
- `calendarToggle` - Toggle calendar component (same options as calendar)
- `range` - Range calendar component (includes predefinedRanges option)

## Performance Tips

### Optimizing Large Applications

When using DateDreamer in large applications, consider these best practices:

#### 1. Use Lazy Loading
```javascript
// Load DateDreamer only when needed
const loadCalendar = async () => {
    const { calendar } = await import('datedreamer');
    return new calendar({
        element: "#my-calendar",
        theme: "lite-purple"
    });
};
```

#### 2. Minimize Style Injection
```javascript
// ❌ Avoid injecting large CSS strings repeatedly
const heavyStyles = `/* hundreds of lines of CSS */`;

// ✅ Better - use external CSS or smaller, targeted styles
const myCalendar = new calendar({
    element: "#my-calendar",
    theme: "unstyled", // Start with unstyled
    styles: `
        .datedreamer__calendar {
            font-family: inherit;
        }
    `
});
```

#### 3. Event Handler Optimization
```javascript
// ❌ Avoid heavy operations in event handlers
const myCalendar = new calendar({
    element: "#my-calendar",
    onChange: (event) => {
        // Heavy DOM manipulation or API calls
        updateEntirePageLayout();
        fetchDataFromMultipleAPIs();
    }
});

// ✅ Better - debounce or throttle expensive operations
const myCalendar = new calendar({
    element: "#my-calendar",
    onChange: debounce((event) => {
        handleDateChange(event.detail);
    }, 300)
});

```

#### 4. Memory Management
```javascript
// Clean up instances when components are unmounted
const myCalendar = new calendar({
    element: "#my-calendar",
    theme: "lite-purple"
});

// Later, when removing the component, remove the calendar element from the DOM
myCalendar.remove();
```

### Bundle Size Optimization

```javascript
// ✅ Import only what you need
import { calendar } from 'datedreamer';

// ❌ Avoid importing everything
import * as datedreamer from 'datedreamer';
```

## Best Practices

1. **Initialize after DOM is ready**: Always ensure the target element exists
2. **Use appropriate themes**: Start with `unstyled` for full customization
3. **Handle errors gracefully**: Check for element existence before initialization
4. **Optimize for your use case**: Use `calendar` for simple date selection, `range` for date ranges
5. **Consider accessibility**: Test with screen readers and keyboard navigation

For more detailed troubleshooting, see the [Troubleshooting](/Troubleshooting/) guide.

