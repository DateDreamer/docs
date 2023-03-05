# Getting Started

There are several ways that you can install and use DateDreamer into your project depending on what package system you are using.

## Install

#### Installing with CDNJS
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/datedreamer/0.2.1/datedreamer.min.js"></script>
```

#### Installing with NPM
```bash
npm install datedreamer
```

#### Installing with Yarn
```bash
yarn add datedreamer
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
import {calendar} from "datedreamer";
```

To render it, you will need to create a datedreamer calendar instance in which you will pass it a div which we'll inject the calendar into.

The element property can be either a CSS selector or a DOM element object.

#### Calendar

```html
<div id="my-calendar"></div>
```

```javascript
new datedreamer.calendar({
    element: "#my-calendar", // Required
    theme: "lite-purple",
    // ...other options
})
```

#### Calendar Toggle
```html
<div id="my-calendar"></div>
```

```javascript
new datedreamer.calendarToggle({
    element: "#my-calendar", // Required
    theme: "lite-purple",
    // ...other options
})
```

#### Calendar Range
```html
<div id="my-calendar"></div>
```

```javascript
new datedreamer.range({
    element: "#my-calendar", // Required
    theme: "lite-purple",
    // ...other options
})
```