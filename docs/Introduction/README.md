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

- ✅ **Web Components**: Built with modern Web Components for better compatibility
- ✅ **TypeScript Support**: Full TypeScript support with type definitions included
- ✅ **Multiple Themes**: Unstyled and lite-purple themes with custom styling support
- ✅ **Dark Mode**: Both manual and automatic dark mode detection
- ✅ **Date Formatting**: Flexible date formatting using DayJS
- ✅ **Range Selection**: Built-in support for date range selection
- ✅ **Predefined Ranges**: Quick access buttons for common date ranges
- ✅ **Custom Icons**: Support for custom navigation icons
- ✅ **Events & Callbacks**: onChange, onRender, and navigation event callbacks
- ✅ **Accessibility**: WCAG 2.1 AA compliant with full keyboard navigation
- ✅ **Browser Support**: Compatible with all modern browsers
- ✅ **Lightweight**: Small bundle size with minimal dependencies

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

Yes! DateDreamer is written in TypeScript and includes full type definitions. You'll get autocomplete and type checking out of the box.