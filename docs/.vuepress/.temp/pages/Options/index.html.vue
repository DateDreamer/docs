<template><div><h1 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h1>
<p>Here are the configuration options available for each calendar component type.</p>
<h2 id="calendar-component-options" tabindex="-1"><a class="header-anchor" href="#calendar-component-options"><span>Calendar Component Options</span></a></h2>
<h3 id="element" tabindex="-1"><a class="header-anchor" href="#element"><span>element</span></a></h3>
<p>Sets where to insert the calendar to. Can be either a CSS selector string or an HTMLElement object.</p>
<p><strong>Type</strong>: <code v-pre>Element | string</code><br>
<strong>Required</strong>: Yes<br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// Using CSS selector</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Using DOM element</span></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'my-calendar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> container</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="selecteddate" tabindex="-1"><a class="header-anchor" href="#selecteddate"><span>selectedDate</span></a></h3>
<p>Sets the starting date for the calendar. Can be set to a date string, Date object, or null. If null, today's date will be selected by default.</p>
<p><strong>Type</strong>: <code v-pre>Date | string | null</code><br>
<strong>Default</strong>: <code v-pre>new Date()</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// Using Date object</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">selectedDate</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-01-15'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Using date string (requires format option)</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">selectedDate</span><span class="token operator">:</span> <span class="token string">"01/15/2024"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">"MM/DD/YYYY"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Using null (defaults to today)</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">selectedDate</span><span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>theme</span></a></h3>
<p>Sets the visual theme for the calendar.</p>
<p><strong>Type</strong>: <code v-pre>'unstyled' | 'lite-purple'</code><br>
<strong>Default</strong>: <code v-pre>'unstyled'</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"lite-purple"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>unstyled</code>:</li>
</ul>
<ClientOnly>
<Calendar theme="unstyled" type="regular" />
</ClientOnly>
<ul>
<li><code v-pre>lite-purple</code>:</li>
</ul>
<ClientOnly>
<Calendar theme="lite-purple" type="regular" />
</ClientOnly>
<h3 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>styles</span></a></h3>
<p>Use this property to pass CSS styles that will be injected into the component's style tag.</p>
<p><strong>Type</strong>: <code v-pre>string</code><br>
<strong>Default</strong>: <code v-pre>''</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">        .datedreamer__calendar {</span>
<span class="line">            border: 2px solid #007bff;</span>
<span class="line">            border-radius: 8px;</span>
<span class="line">        }</span>
<span class="line">        .datedreamer__calendar_day button {</span>
<span class="line">            background-color: #f8f9fa;</span>
<span class="line">        }</span>
<span class="line">    </span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="format" tabindex="-1"><a class="header-anchor" href="#format"><span>format</span></a></h3>
<p>Use this to specify the input AND output format of the date. Please see the available formats from <a href="https://day.js.org/docs/en/display/format" target="_blank" rel="noopener noreferrer">DayJS</a>.</p>
<p><strong>Type</strong>: <code v-pre>string</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">"DD/MM/YYYY"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Common formats:</p>
<ul>
<li><code v-pre>'YYYY-MM-DD'</code> - 2024-01-15</li>
<li><code v-pre>'DD/MM/YYYY'</code> - 15/01/2024</li>
<li><code v-pre>'MM/DD/YYYY'</code> - 01/15/2024</li>
<li><code v-pre>'MMMM D, YYYY'</code> - January 15, 2024</li>
</ul>
<h3 id="iconnext" tabindex="-1"><a class="header-anchor" href="#iconnext"><span>iconNext</span></a></h3>
<p>Sets the next arrow icon. You can pass it either text or an SVG string.</p>
<p><strong>Type</strong>: <code v-pre>string</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">iconNext</span><span class="token operator">:</span> <span class="token string">'&lt;svg>...&lt;/svg>'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iconprev" tabindex="-1"><a class="header-anchor" href="#iconprev"><span>iconPrev</span></a></h3>
<p>Sets the previous arrow icon. You can pass it either text or an SVG string.</p>
<p><strong>Type</strong>: <code v-pre>string</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">iconPrev</span><span class="token operator">:</span> <span class="token string">'&lt;svg>...&lt;/svg>'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hideprevnav" tabindex="-1"><a class="header-anchor" href="#hideprevnav"><span>hidePrevNav</span></a></h3>
<p>Whether to hide the previous month navigation button.</p>
<p><strong>Type</strong>: <code v-pre>boolean</code><br>
<strong>Default</strong>: <code v-pre>false</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hidePrevNav</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hidenextnav" tabindex="-1"><a class="header-anchor" href="#hidenextnav"><span>hideNextNav</span></a></h3>
<p>Whether to hide the next month navigation button.</p>
<p><strong>Type</strong>: <code v-pre>boolean</code><br>
<strong>Default</strong>: <code v-pre>false</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hideNextNav</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inputlabel" tabindex="-1"><a class="header-anchor" href="#inputlabel"><span>inputLabel</span></a></h3>
<p>Sets the label of the date input element.</p>
<p><strong>Type</strong>: <code v-pre>string</code><br>
<strong>Default</strong>: <code v-pre>'Set a date'</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">inputLabel</span><span class="token operator">:</span> <span class="token string">"Reservation Date"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inputplaceholder" tabindex="-1"><a class="header-anchor" href="#inputplaceholder"><span>inputPlaceholder</span></a></h3>
<p>Sets the placeholder of the date input element.</p>
<p><strong>Type</strong>: <code v-pre>string</code><br>
<strong>Default</strong>: <code v-pre>'Enter a date'</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">inputPlaceholder</span><span class="token operator">:</span> <span class="token string">"Select a Reservation Date"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hideinputs" tabindex="-1"><a class="header-anchor" href="#hideinputs"><span>hideInputs</span></a></h3>
<p>Hides the input field and today button from the UI.</p>
<p><strong>Type</strong>: <code v-pre>boolean</code><br>
<strong>Default</strong>: <code v-pre>false</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hideInputs</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="darkmode" tabindex="-1"><a class="header-anchor" href="#darkmode"><span>darkMode</span></a></h3>
<p>Enables dark mode styling for the calendar.</p>
<p><strong>Type</strong>: <code v-pre>boolean</code><br>
<strong>Default</strong>: <code v-pre>false</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">darkModeAuto</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"lite-purple"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="darkmodeauto" tabindex="-1"><a class="header-anchor" href="#darkmodeauto"><span>darkModeAuto</span></a></h3>
<p>Automatically detects the user's system preference for dark mode and updates in real-time when the system setting changes.</p>
<p><strong>Type</strong>: <code v-pre>boolean</code><br>
<strong>Default</strong>: <code v-pre>false</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">darkModeAuto</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"lite-purple"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong>: When <code v-pre>darkModeAuto</code> is enabled, it takes precedence over the <code v-pre>darkMode</code> setting.</p>
<h3 id="hideothermonthdays" tabindex="-1"><a class="header-anchor" href="#hideothermonthdays"><span>hideOtherMonthDays</span></a></h3>
<p>Whether to hide days from other months in the calendar view.</p>
<p><strong>Type</strong>: <code v-pre>boolean</code><br>
<strong>Default</strong>: <code v-pre>false</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hideOtherMonthDays</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rangemode" tabindex="-1"><a class="header-anchor" href="#rangemode"><span>rangeMode</span></a></h3>
<p>Whether to enable range selection mode in the calendar.</p>
<p><strong>Type</strong>: <code v-pre>boolean</code><br>
<strong>Default</strong>: <code v-pre>false</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rangeMode</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connector" tabindex="-1"><a class="header-anchor" href="#connector"><span>connector</span></a></h3>
<p>Calendar connector for linking multiple calendars together.</p>
<p><strong>Type</strong>: <code v-pre>CalendarConnector</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">connector</span><span class="token operator">:</span> myCalendarConnector</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="event-handlers" tabindex="-1"><a class="header-anchor" href="#event-handlers"><span>Event Handlers</span></a></h2>
<h3 id="onchange" tabindex="-1"><a class="header-anchor" href="#onchange"><span>onChange</span></a></h3>
<p>Callback function triggered when the selected date changes.</p>
<p><strong>Type</strong>: <code v-pre>function</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Selected date:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// Handle date change</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onrender" tabindex="-1"><a class="header-anchor" href="#onrender"><span>onRender</span></a></h3>
<p>Callback function triggered when the calendar is rendered.</p>
<p><strong>Type</strong>: <code v-pre>function</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onRender</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Calendar rendered:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>calendar<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// Calendar is ready for interaction</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onnextnav" tabindex="-1"><a class="header-anchor" href="#onnextnav"><span>onNextNav</span></a></h3>
<p>Callback function triggered when navigating to the next month.</p>
<p><strong>Type</strong>: <code v-pre>function</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onNextNav</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Navigated to next month:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onprevnav" tabindex="-1"><a class="header-anchor" href="#onprevnav"><span>onPrevNav</span></a></h3>
<p>Callback function triggered when navigating to the previous month.</p>
<p><strong>Type</strong>: <code v-pre>function</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onPrevNav</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Navigated to previous month:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="range-calendar-specific-options" tabindex="-1"><a class="header-anchor" href="#range-calendar-specific-options"><span>Range Calendar Specific Options</span></a></h2>
<h3 id="predefinedranges" tabindex="-1"><a class="header-anchor" href="#predefinedranges"><span>predefinedRanges</span></a></h3>
<p>Array of predefined range buttons to display for quick date range selection.</p>
<p><strong>Type</strong>: <code v-pre>IPredefinedRange[]</code><br>
<strong>Default</strong>: <code v-pre>undefined</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">new</span> <span class="token class-name">range</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-range-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"lite-purple"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">darkModeAuto</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">predefinedRanges</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Last 7 Days'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token function-variable function">getRange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                start<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>start<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> end <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'This Month'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token function-variable function">getRange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> end <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Last Month'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token function-variable function">getRange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> end <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ipredefinedrange-interface" tabindex="-1"><a class="header-anchor" href="#ipredefinedrange-interface"><span>IPredefinedRange Interface</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IPredefinedRange</span> <span class="token punctuation">{</span></span>
<span class="line">    label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function-variable function">getRange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> start<span class="token operator">:</span> Date<span class="token punctuation">;</span> end<span class="token operator">:</span> Date <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="calendar-methods" tabindex="-1"><a class="header-anchor" href="#calendar-methods"><span>Calendar Methods</span></a></h2>
<h3 id="setdate-date" tabindex="-1"><a class="header-anchor" href="#setdate-date"><span>setDate(date)</span></a></h3>
<p>Sets the selected date in the calendar.</p>
<p><strong>Parameters</strong>: <code v-pre>date: Date | string</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> myCalendar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"lite-purple"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">darkModeAuto</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">myCalendar<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-01-15'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">myCalendar<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token string">'2024-01-15'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setdatetotoday" tabindex="-1"><a class="header-anchor" href="#setdatetotoday"><span>setDateToToday()</span></a></h3>
<p>Sets the selected date to today.</p>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> myCalendar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"lite-purple"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">darkModeAuto</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">myCalendar<span class="token punctuation">.</span><span class="token function">setDateToToday</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setdisplayedmonthdate-date" tabindex="-1"><a class="header-anchor" href="#setdisplayedmonthdate-date"><span>setDisplayedMonthDate(date)</span></a></h3>
<p>Changes the displayed month without changing the selected date.</p>
<p><strong>Parameters</strong>: <code v-pre>date: Date</code><br>
<strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> myCalendar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">calendar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">"#my-calendar"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"lite-purple"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">darkModeAuto</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">myCalendar<span class="token punctuation">.</span><span class="token function">setDisplayedMonthDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2024-06-01'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-types" tabindex="-1"><a class="header-anchor" href="#component-types"><span>Component Types</span></a></h2>
<p>All the above options are available for:</p>
<ul>
<li><code v-pre>calendar</code> - Standalone calendar component</li>
<li><code v-pre>calendarToggle</code> - Toggle calendar component (same options as calendar)</li>
<li><code v-pre>range</code> - Range calendar component (includes predefinedRanges option)</li>
</ul>
</div></template>


