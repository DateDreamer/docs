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

## Component Types

All the above options are available for:
- `calendar` - Standalone calendar component
- `calendarToggle` - Toggle calendar component (same options as calendar)
- `range` - Range calendar component (includes predefinedRanges option)

