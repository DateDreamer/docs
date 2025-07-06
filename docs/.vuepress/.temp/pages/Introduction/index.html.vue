<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h1>
<p>DateDreamer is a lightweight, customizable JavaScript calendar library built with Web Components and TypeScript. It provides a simple yet powerful solution for date selection with extensive customization options and modern features.</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>The need for a simple yet very extensible calendar came after testing other calendars that did not meet our needs. They were either too clunky or very hard to configure, or were missing some required configuration options such as overriding the calendar itself with our own styles.</p>
<p>DateDreamer addresses these issues by providing:</p>
<ul>
<li><strong>Three main components</strong>: standalone calendar, toggle calendar, and range calendar</li>
<li><strong>Extensive customization</strong>: themes, custom styling, and configuration options</li>
<li><strong>Modern architecture</strong>: built with Web Components and TypeScript</li>
<li><strong>Accessibility</strong>: WCAG 2.1 AA compliant</li>
<li><strong>Lightweight</strong>: minimal dependencies and small bundle size</li>
</ul>
<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2>
<h3 id="calendar" tabindex="-1"><a class="header-anchor" href="#calendar"><span>Calendar</span></a></h3>
<p>The main calendar component that provides date selection functionality with full customization options.</p>
<h3 id="calendar-toggle" tabindex="-1"><a class="header-anchor" href="#calendar-toggle"><span>Calendar Toggle</span></a></h3>
<p>A calendar that shows/hides when an input is clicked, perfect for form inputs and date pickers.</p>
<h3 id="range-calendar" tabindex="-1"><a class="header-anchor" href="#range-calendar"><span>Range Calendar</span></a></h3>
<p>A specialized calendar component for selecting date ranges with support for predefined ranges.</p>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2>
<ul>
<li>✅ <strong>Web Components</strong>: Built with modern Web Components for better compatibility</li>
<li>✅ <strong>TypeScript Support</strong>: Full TypeScript support with type definitions included</li>
<li>✅ <strong>Multiple Themes</strong>: Unstyled and lite-purple themes with custom styling support</li>
<li>✅ <strong>Dark Mode</strong>: Both manual and automatic dark mode detection</li>
<li>✅ <strong>Date Formatting</strong>: Flexible date formatting using DayJS</li>
<li>✅ <strong>Range Selection</strong>: Built-in support for date range selection</li>
<li>✅ <strong>Predefined Ranges</strong>: Quick access buttons for common date ranges</li>
<li>✅ <strong>Custom Icons</strong>: Support for custom navigation icons</li>
<li>✅ <strong>Events &amp; Callbacks</strong>: onChange, onRender, and navigation event callbacks</li>
<li>✅ <strong>Accessibility</strong>: WCAG 2.1 AA compliant with full keyboard navigation</li>
<li>✅ <strong>Browser Support</strong>: Compatible with all modern browsers</li>
<li>✅ <strong>Lightweight</strong>: Small bundle size with minimal dependencies</li>
</ul>
<h2 id="calendar-examples" tabindex="-1"><a class="header-anchor" href="#calendar-examples"><span>Calendar Examples</span></a></h2>
<h3 id="calendar-1" tabindex="-1"><a class="header-anchor" href="#calendar-1"><span>Calendar</span></a></h3>
<br />
<ClientOnly>
<Calendar type="regular" />
</ClientOnly>
<br/>
<h3 id="calendar-toggle-1" tabindex="-1"><a class="header-anchor" href="#calendar-toggle-1"><span>Calendar Toggle</span></a></h3>
<br />
<ClientOnly>
<Calendar type="toggle" />
</ClientOnly>
<h3 id="calendar-range" tabindex="-1"><a class="header-anchor" href="#calendar-range"><span>Calendar Range</span></a></h3>
<br />
<ClientOnly>
<Range />
</ClientOnly>
<h2 id="browser-support" tabindex="-1"><a class="header-anchor" href="#browser-support"><span>Browser Support</span></a></h2>
<p>DateDreamer supports all modern browsers that support Web Components:</p>
<ul>
<li>Chrome 67+</li>
<li>Firefox 63+</li>
<li>Safari 10.1+</li>
<li>Edge 79+</li>
</ul>
</div></template>


