# Options
Here are the options which can be passed on to each calendar type.

## Calendars

### element
Sets where to insert the calendar to. Can be either a CSS selector string or an HTMLElement object.

Type: `string` | `HTMLElement`


### selectedDate
Sets the starting date for the calendar. Can be set to a date string, Date object, or null. If null, todays date will be selected by default. If a string is passed, the format option should also be passed in order for the calendar to know the format of the selectedDate that you are passing.

**If the selectedDate string option is passed, you should also pass the `format` option to the calendar know what type of format you are inputting the date in.**

Type: `string` | `Date`<br>
Default: Todays date<br>
Example: 
```javascript
// Using date as string
new datedreamer.calendar({
    element: "#my-calendar",
    selectedDate: "01/15/2023",
    format: "MM/DD/YYYY"
})

// Using Date object
const todaysDate = new Date();
new datedreamer.calendar({
    element: "#my-calendar",
    selectedDate: todaysDate,
    format: "MM/DD/YYYY"
})
```


### format
Use this to specify the input AND output format of the date. Please see the available formats from [DayJS](https://day.js.org/docs/en/display/format).

Type: `string`<br>
Example: `DD/MM/YYYY`


### iconNext
Sets the next arrow icon. You can pass it either text or an svg.

Type: `string`<br>
Example: `<svg>...</svg>`


### iconPrev
Sets the previous arrow icon. You can pass it either text or an svg.

Type: `string`<br>
Example: `<svg>...</svg>`


### inputLabel
Sets the label of the date input element.

Type: `string`<br>
Default: `Set a date`<br>
Example: `Reservation Date`


### inputPlaceholder
Sets the placeholder of the date input element.

Type: `string`<br>
Default: `Enter a date`<br>
Example: `Select a Reservation Date`

### hideInputs
Hides the input and today button from the UI.
Type: `boolean`<br>
Default: `false`

### onChange
Use this to provide a callback function that the calendar will call when the date is changed. The callback function will receive a `CustomEvent` argument that will include the chosen date inside the detail property.

Type: `function`<br>
Default: `undefined`<br>
Example: <br>
```javascript
new datedreamer.calendar({
    ...,
    onChange: (e) => {
        // Get Date object from event
        console.log(e.detail);
    }
})
```

### onRender
Use this to provide a callback function that the calendar will call when the calendar is rendered. The callback function will receive a `CustomEvent` argument that will include a `calendar` property inside of the event `detail` property.

Type: `function`<br>
Default: `undefined`<br>
Example: <br>
```javascript
new datedreamer.calendar({
    ...,
    onRender: (e) => {
        // Calendar has rendered
        console.log(e.detail.calendar);
    }
})
```

### theme
Sets the style template to use.

Type: `unstyled`|`lite-purple`<br>
Default: `unstyled`<br>
Example: <br>
* `unstyled`:
<ClientOnly>
<Calendar theme="unstyled" type="regular" />
</ClientOnly>

* `lite-purple`:
<ClientOnly>
<Calendar theme="lite-purple" type="regular" />
</ClientOnly>

### styles
Use this property to pass css styles that will be passed into the components style tag.


```javascript
new datedreamer.calendar({
    ...,
    styles: `
        button {
            color: blue
        }
    `
})
```