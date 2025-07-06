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

```javascript
import { calendar } from 'datedreamer';

const myCalendar = new calendar({
    element: "#my-calendar",
    selectedDate: new Date(),
    theme: "lite-purple",
    darkModeAuto: true
});
```

## 📖 Documentation

Visit our [comprehensive documentation](https://datedreamer.github.io/docs/) for detailed guides and examples.

## 🏗️ Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## 📄 License

GPL-3.0 Licensed | Copyright © 2023-present DateDreamer