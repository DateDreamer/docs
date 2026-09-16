# Troubleshooting

This guide covers common issues and solutions when using DateDreamer.

## Common Issues

### Calendar Not Rendering

**Problem**: Calendar element is not showing up on the page.

**Solutions**:
1. **Check element selector**: Ensure the element exists in the DOM before initializing
```javascript
// ❌ Bad - element might not exist yet
import { calendar } from 'datedreamer';
const myCalendar = new calendar({ element: "#my-calendar" });

// ✅ Good - wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const myCalendar = new calendar({ element: "#my-calendar" });
});
```

2. **Verify element exists**: Check that your target element is present
```javascript
const element = document.getElementById('my-calendar');
if (!element) {
    console.error('Calendar container not found');
    return;
}
```

### TypeScript Compilation Errors

**Problem**: TypeScript shows module not found errors.

**Solutions**:
1. **Check import paths**: Ensure you're importing from the correct module
```typescript
// ✅ Correct import
import { calendar } from 'datedreamer';

// ❌ Incorrect
import { calendar } from 'date-dreamer';
```

2. **Verify type resolution**: DateDreamer ships its own TypeScript definitions (there is no separate `@types` package). Make sure the library is installed and your `tsconfig.json` uses `"moduleResolution": "node"`:
```bash
npm install datedreamer
```

### Date Format Issues

**Problem**: Selected dates are not displaying in the expected format.

**Solutions**:
1. **Set format option**: Specify the format you want
```javascript
const myCalendar = new calendar({
    element: "#my-calendar",
    format: "DD/MM/YYYY" // European format
});
```

2. **Check locale**: Ensure your date format matches your locale requirements
```javascript
// US format
format: "MM/DD/YYYY"

// European format  
format: "DD/MM/YYYY"

// ISO format
format: "YYYY-MM-DD"
```

### Styling Issues

**Problem**: Calendar doesn't match your application's design.

**Solutions**:
1. **Use custom styles**: Inject your own CSS
```javascript
const myCalendar = new calendar({
    element: "#my-calendar",
    theme: "unstyled", // Start with unstyled
    styles: `
        .datedreamer__calendar {
            font-family: your-font-family;
            border: 1px solid #your-color;
        }
    `
});
```

2. **Style from inside the shadow DOM**: The calendar renders inside a shadow root, so page-level CSS cannot reach it. Use the `styles` option to inject custom CSS:
```javascript
const myCalendar = new calendar({
    element: "#my-calendar",
    theme: "lite-purple",
    styles: `
        .datedreamer__calendar {
            border-radius: 8px;
            font-family: your-font-family;
        }
    `
});
```

### SSR (Server-Side Rendering) Issues

**Problem**: Calendar not working with Next.js, Nuxt, or other SSR frameworks.

**Solutions**:
1. **Dynamic imports**: Load DateDreamer only on the client side
```javascript
// Next.js example
import dynamic from 'next/dynamic';

const Calendar = dynamic(
    () => import('../components/Calendar'),
    { ssr: false }
);
```

2. **Check for window object**: Ensure you're in a browser environment
```javascript
if (typeof window !== 'undefined') {
    import('datedreamer').then(({ calendar }) => {
        new calendar({ element: "#my-calendar" });
    });
}
```

### Event Handling Issues

**Problem**: onChange or other events are not firing.

**Solutions**:
1. **Check event syntax**: Ensure proper event handler setup
```javascript
// ✅ Correct
const myCalendar = new calendar({
    element: "#my-calendar",
    onChange: (event) => {
        console.log('Date changed:', event.detail);
    }
});

// ❌ Incorrect - missing event parameter
onChange: () => {
    console.log('Date changed:', this.selectedDate); // 'this' context issues
}
```

2. **Verify event names**: Use the correct callback option names
```javascript
// Available event callbacks (passed as options)
onChange: (event) => { /* date selection */ },
onRender: (event) => { /* calendar rendered */ },
onNextNav: (event) => { /* navigated to next month */ },
onPrevNav: (event) => { /* navigated to previous month */ }
```

## Performance Considerations

### Multiple Calendar Instances

If you have multiple calendars on the same page:

```javascript
// ✅ Good - separate instances
const cal1 = new calendar({ element: "#calendar1" });
const cal2 = new calendar({ element: "#calendar2" });

// ❌ Avoid - reusing same instance
const cal = new calendar({ element: "#calendar1" });
// Don't try to reinitialize the same instance
```

### Memory Cleanup

Clean up calendar instances when removing from DOM:

```javascript
// Remove the calendar element from the DOM when your component unmounts
myCalendar.remove();
```

## Getting Help

If you're still experiencing issues:

1. **Check the console**: Look for error messages in your browser's developer tools
2. **Verify versions**: Ensure you're using compatible versions of DateDreamer and your framework
3. **Create a minimal example**: Isolate the problem in a simple test case
4. **Search existing issues**: Check the [GitHub issues](https://github.com/DateDreamer/datedreamer/issues) for similar problems
5. **Ask for help**: Create a new issue with your code example and error messages

## Browser Compatibility

DateDreamer requires modern browser features. If you need to support older browsers:

- **Chrome**: 67+
- **Firefox**: 63+  
- **Safari**: 10.1+
- **Edge**: 79+

For older browsers, consider using a polyfill for Web Components. 