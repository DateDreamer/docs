# DateDreamer Docs — Agent Guidelines

## 🎯 What This Repo Is

This is a **VuePress documentation site** for the [`datedreamer`](https://npmjs.com/package/datedreamer) JavaScript calendar library. It's **not** the library source code itself.

- **Library**: [datedreamer](https://npmjs.com/package/datedreamer) (v0.5.2, published separately)
- **This repo**: Documentation-only with VuePress v2 + Vite bundler

## 🚀 Essential Commands

```bash
# Install dependencies
yarn install

# Start dev server (localhost:8080 by default)
yarn start

# Build production site → ./dist/
yarn build

# Fix yarn audit issues
yarn fix
```

## 📁 Directory Structure

```
docs/                    # VuePress source content
  /Getting Started/      # Installation & quickstart
  /Introduction/         # API reference
  /Options/              # Configuration options
  /Troubleshooting/      # Common issues & solutions
  .vuepress/             # VuePress config (read-only, generated artifacts in .temp/.cache)
dist/                    # Build output (gitignored)
```

## ⚠️ Key Gotchas

### 1. No Test/Lint Scripts
This repo **does not have** test or lint commands in `package.json`. Don't run:
- `yarn test` — doesn't exist
- `yarn lint` — doesn't exist  
- `yarn type-check` — doesn't exist

Only `start`, `build`, and `fix` scripts are valid.

### 2. VuePress Cache Cleanup
Before investigating build issues, clean cached outputs:
```bash
rm -rf docs/.vuepress/.cache/ docs/.vuepress/.temp/
```

### 3. Build Location
Production builds go to `./dist/`, which is gitignored. Don't commit `.vuepress/.cache` or `.vuepress/.temp`.

### 4. Element Selector Timing (Library Gotcha)
When writing examples for the calendar library:
- Always wrap in `DOMContentLoaded` if targeting document elements
- Verify element exists before initializing
- See `/Troubleshooting/README.md` section "Calendar Not Rendering"

## 🧪 Testing the Library Itself

This repo is docs-only. To test the actual DateDreamer library, check the upstream repo:
- GitHub: https://github.com/DateDreamer/datedreamer
- npm: https://www.npmjs.com/package/datedreamer

The library has 109+ Jest tests with jsdom environment (documented in parent README.md).

## 📦 Bundle Verification

Production build size check:
```bash
ls -lh dist/datedreamer.js
# Example: ~46KB UMD bundle
```

## 🔗 External Links (from navbar)

- GitHub repo: https://github.com/DateDreamer/datedreamer  
- npm package: https://www.npmjs.com/package/datedreamer
