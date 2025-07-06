import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/datedreamer/dist/datedreamer.js
var require_datedreamer = __commonJS({
  "node_modules/datedreamer/dist/datedreamer.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.datedreamer = t() : e.datedreamer = t();
    }(exports, () => (() => {
      var e = { 35: function(e2, t2, n2) {
        "use strict";
        var a2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.calendar = void 0;
        const r = n2(770), d = a2(n2(353)), o = a2(n2(445)), i = n2(300), s = n2(205);
        d.default.extend(o.default);
        class l extends HTMLElement {
          constructor(e3) {
            super(), this.calendarElement = null, this.headerElement = null, this.inputsElement = null, this.errorsElement = null, this.inputLabel = "Set a date", this.inputPlaceholder = "Enter a date", this.hideInputs = false, this.darkMode = false, this.darkModeAuto = false, this.hideOtherMonthDays = false, this.errors = [], this.daysElement = null, this.selectedDate = /* @__PURE__ */ new Date(), this.displayedMonthDate = /* @__PURE__ */ new Date(), this.theme = "unstyled", this.styles = "", this.goToPrevMonth = () => {
              (0, s.goToPrevMonth)(this);
            }, this.goToNextMonth = () => {
              (0, s.goToNextMonth)(this);
            }, this.handleDayKeyDown = (e4) => {
              (0, s.handleDayKeyDown)(this, e4);
            }, this.setSelectedDay = (e4) => {
              (0, s.setSelectedDay)(this, e4);
            }, this.setDateToToday = () => {
              (0, s.setDateToToday)(this);
            }, this.dateInputChanged = (e4) => {
              (0, s.dateInputChanged)(this, e4);
            }, this.element = e3.element, e3.format && (this.format = e3.format), e3.theme && (this.theme = e3.theme), e3.styles && (this.styles = e3.styles), e3.iconNext && (this.iconNext = e3.iconNext), e3.iconPrev && (this.iconPrev = e3.iconPrev), e3.inputLabel && (this.inputLabel = e3.inputLabel), e3.inputPlaceholder && (this.inputPlaceholder = e3.inputPlaceholder), e3.hidePrevNav && (this.hidePrevNav = e3.hidePrevNav), e3.hideNextNav && (this.hideNextNav = e3.hideNextNav), e3.hideInputs && (this.hideInputs = e3.hideInputs), void 0 !== e3.darkMode && (this.darkMode = e3.darkMode), e3.darkModeAuto && (this.darkModeAuto = e3.darkModeAuto), e3.rangeMode && (this.rangeMode = e3.rangeMode), e3.connector && (this.connector = e3.connector, this.connector.calendars.push(this)), e3.hideOtherMonthDays && (this.hideOtherMonthDays = e3.hideOtherMonthDays), "string" == typeof e3.selectedDate ? this.selectedDate = (0, d.default)(e3.selectedDate, e3.format).toDate() : "object" == typeof e3.selectedDate && (this.selectedDate = e3.selectedDate), this.attachShadow({ mode: "open" }), this.onChange = e3.onChange, this.onRender = e3.onRender, this.onNextNav = e3.onNextNav, this.onPrevNav = e3.onPrevNav, this.displayedMonthDate = new Date(this.selectedDate), this.init();
          }
          init() {
            var e3, t3, n3, a3;
            if (null == this.element) throw new Error("No element was provided to calendar. Initializing aborted");
            const d2 = this.getDarkModeSetting(), o2 = (0, r.calendarRoot)(this.theme, this.styles, d2);
            this.insertCalendarIntoSelector(o2), this.headerElement = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.querySelector(".datedreamer__calendar_header"), this.daysElement = null === (t3 = this.shadowRoot) || void 0 === t3 ? void 0 : t3.querySelector(".datedreamer__calendar_days"), this.inputsElement = null === (n3 = this.shadowRoot) || void 0 === n3 ? void 0 : n3.querySelector(".datedreamer__calendar_inputs"), this.errorsElement = null === (a3 = this.shadowRoot) || void 0 === a3 ? void 0 : a3.querySelector(".datedreamer__calendar_errors"), (0, i.generateHeader)(this), (0, i.generateInputs)(this), (0, i.generateDays)(this), this.setupDarkModeListener(), this.onRenderCallback();
          }
          getDarkModeSetting() {
            return this.darkModeAuto ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches : this.darkMode || false;
          }
          setupDarkModeListener() {
            this.darkModeAuto && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
              this.updateDarkMode();
            });
          }
          updateDarkMode() {
            var e3;
            const t3 = this.getDarkModeSetting(), n3 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.querySelector(".datedreamer__calendar");
            n3 && (t3 ? n3.classList.add("dark") : n3.classList.remove("dark"));
          }
          insertCalendarIntoSelector(e3) {
            let t3;
            if ("string" == typeof this.element ? t3 = document.querySelector(this.element) : "object" == typeof this.element && (t3 = this.element), !t3) throw new Error(`Could not find ${this.element} in DOM.`);
            this.shadowRoot && (this.shadowRoot.innerHTML = e3), t3.append(this);
          }
          onRenderCallback() {
            (0, s.onRenderCallback)(this);
          }
          setDisplayedMonthDate(e3) {
            this.displayedMonthDate = e3, this.rebuildCalendar();
          }
          rebuildCalendar(e3 = true, t3 = false) {
            this.daysElement && (this.daysElement.innerHTML = ""), this.headerElement && (this.headerElement.innerHTML = ""), (0, i.generateErrors)(this), t3 ? (0, i.generateDays)(this, t3) : (0, i.generateDays)(this), (0, i.generateHeader)(this), e3 && (this.inputsElement && (this.inputsElement.innerHTML = ""), (0, i.generateInputs)(this));
          }
          setDate(e3) {
            "string" == typeof e3 ? this.selectedDate = new Date(e3) : "object" == typeof e3 && (this.selectedDate = e3), this.displayedMonthDate = this.selectedDate, this.rebuildCalendar(), this.dateChangedCallback(this.selectedDate);
          }
          dateChangedCallback(e3) {
            (0, s.dateChangedCallback)(this, e3);
          }
        }
        t2.calendar = l, customElements.define("datedreamer-calendar", l);
      }, 167: (e2, t2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.calendarStyles = void 0, t2.calendarStyles = "\n    .datedreamer__calendar {\n        box-shadow: none;\n    }\n    .datedreamer-range.dark {\n        box-shadow: none;\n    }\n";
      }, 174: (e2, t2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.default = class {
          constructor() {
            this.calendars = new Array(), this.startDate = null, this.endDate = null, this.pickingEndDate = null;
          }
          rebuildAllCalendars() {
            this.calendars.forEach((e3) => {
              e3.rebuildCalendar();
            });
          }
        };
      }, 205: function(e2, t2, n2) {
        "use strict";
        var a2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.goToPrevMonth = o, t2.goToNextMonth = i, t2.handleDayKeyDown = function(e3, t3) {
          var n3, a3, r2, d2, l2, c, h, u, p, m;
          const f = t3.target, _ = parseInt(f.innerText);
          switch (new Date(e3.displayedMonthDate).setDate(_), t3.key) {
            case "ArrowLeft":
              if (t3.preventDefault(), _ > 1) {
                const e4 = null === (a3 = null === (n3 = f.parentElement) || void 0 === n3 ? void 0 : n3.previousElementSibling) || void 0 === a3 ? void 0 : a3.querySelector("button");
                e4 && !e4.disabled && e4.focus();
              } else o(e3);
              break;
            case "ArrowRight":
              if (t3.preventDefault(), _ < new Date(e3.displayedMonthDate.getFullYear(), e3.displayedMonthDate.getMonth() + 1, 0).getDate()) {
                const e4 = null === (d2 = null === (r2 = f.parentElement) || void 0 === r2 ? void 0 : r2.nextElementSibling) || void 0 === d2 ? void 0 : d2.querySelector("button");
                e4 && !e4.disabled && e4.focus();
              } else i(e3);
              break;
            case "ArrowUp":
              if (t3.preventDefault(), _ > 7) {
                const t4 = _ - 7, n4 = null === (c = null === (l2 = e3.daysElement) || void 0 === l2 ? void 0 : l2.children[t4 + e3.daysElement.children.length - e3.daysElement.children.length + t4 - 1]) || void 0 === c ? void 0 : c.querySelector("button");
                n4 && !n4.disabled && n4.focus();
              } else o(e3);
              break;
            case "ArrowDown":
              if (t3.preventDefault(), _ + 7 <= new Date(e3.displayedMonthDate.getFullYear(), e3.displayedMonthDate.getMonth() + 1, 0).getDate()) {
                const t4 = _ + 7, n4 = null === (u = null === (h = e3.daysElement) || void 0 === h ? void 0 : h.children[t4 + e3.daysElement.children.length - e3.daysElement.children.length + t4 - 1]) || void 0 === u ? void 0 : u.querySelector("button");
                n4 && !n4.disabled && n4.focus();
              } else i(e3);
              break;
            case "Enter":
            case " ":
              t3.preventDefault(), s(e3, _);
              break;
            case "Home": {
              t3.preventDefault();
              const n4 = null === (p = e3.daysElement) || void 0 === p ? void 0 : p.querySelector("button:not([disabled])");
              n4 && n4.focus();
              break;
            }
            case "End": {
              t3.preventDefault();
              const n4 = null === (m = e3.daysElement) || void 0 === m ? void 0 : m.querySelectorAll("button:not([disabled])");
              n4 && n4.length > 0 && n4[n4.length - 1].focus();
              break;
            }
          }
        }, t2.setSelectedDay = s, t2.dateInputChanged = function(e3, t3) {
          if (t3 instanceof KeyboardEvent && "Tab" === t3.code) return;
          const n3 = (0, r.default)(t3.target.value, e3.format).toDate();
          isNaN(n3.getUTCMilliseconds()) ? (e3.errors.push({ type: "input-error", message: "The entered date is invalid" }), (0, d.generateErrors)(e3)) : (e3.selectedDate = n3, e3.displayedMonthDate = new Date(n3), e3.rebuildCalendar(false), l(e3, e3.selectedDate));
        }, t2.setDateToToday = function(e3) {
          e3.selectedDate = /* @__PURE__ */ new Date(), e3.displayedMonthDate = /* @__PURE__ */ new Date(), e3.rebuildCalendar(), l(e3, e3.selectedDate);
        }, t2.dateChangedCallback = l, t2.onRenderCallback = function(e3) {
          if (e3.onRender) {
            const t3 = new CustomEvent("onRender", { detail: { calendar: e3.calendarElement } });
            e3.onRender(t3);
          }
        };
        const r = a2(n2(353)), d = n2(300);
        function o(e3) {
          const t3 = new Date(e3.displayedMonthDate);
          if (t3.setMonth(t3.getMonth() - 1), e3.displayedMonthDate = t3, e3.rebuildCalendar(true, "last"), e3.onPrevNav) {
            const t4 = new CustomEvent("onPrevNav", { detail: { displayedMonthDate: e3.displayedMonthDate, calendar: e3.calendarElement } });
            e3.onPrevNav(t4);
          }
        }
        function i(e3) {
          const t3 = new Date(e3.displayedMonthDate);
          if (t3.setMonth(t3.getMonth() + 1), e3.displayedMonthDate = t3, e3.rebuildCalendar(true, "first"), e3.onNextNav) {
            const t4 = new CustomEvent("onNextNav", { detail: { displayedMonthDate: e3.displayedMonthDate, calendar: e3.calendarElement } });
            e3.onNextNav(t4);
          }
        }
        function s(e3, t3) {
          const n3 = new Date(e3.displayedMonthDate);
          if (n3.setDate(t3), e3.rangeMode) {
            if (e3.connector) {
              if (null !== e3.connector.startDate && null !== e3.connector.endDate && (e3.connector.startDate = null, e3.connector.endDate = null, e3.connector.rebuildAllCalendars()), null == e3.connector.startDate ? e3.connector.startDate = new Date(n3) : null == e3.connector.endDate && (e3.connector.endDate = new Date(n3)), null !== e3.connector.startDate && null !== e3.connector.endDate && e3.connector.startDate > e3.connector.endDate) {
                const t4 = e3.connector.startDate;
                e3.connector.startDate = e3.connector.endDate, e3.connector.endDate = t4;
              }
              e3.connector.dateChangedCallback && e3.connector.dateChangedCallback(new CustomEvent("dateChanged")), e3.connector.rebuildAllCalendars();
            }
          } else e3.selectedDate = new Date(n3), e3.rebuildCalendar(), l(e3, e3.selectedDate);
        }
        function l(e3, t3) {
          if (e3.onChange) {
            const n3 = new CustomEvent("onChange", { detail: (0, r.default)(t3).format(e3.format) });
            e3.onChange(n3);
          }
        }
      }, 300: function(e2, t2, n2) {
        "use strict";
        var a2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.generateHeader = function(e3) {
          var t3, n3, a3;
          if (!e3.hidePrevNav) {
            const n4 = document.createElement("button");
            n4.classList.add("datedreamer__calendar_prev"), n4.innerHTML = e3.iconPrev ? e3.iconPrev : d.leftChevron, n4.setAttribute("aria-label", "Previous"), n4.addEventListener("click", () => e3.goToPrevMonth()), null === (t3 = e3.headerElement) || void 0 === t3 || t3.append(n4);
          }
          const r2 = document.createElement("span");
          if (r2.classList.add("datedreamer__calendar_title"), r2.innerText = `${d.monthNames[e3.displayedMonthDate.getMonth()]} ${e3.displayedMonthDate.getFullYear()}`, null === (n3 = e3.headerElement) || void 0 === n3 || n3.append(r2), !e3.hideNextNav) {
            const t4 = document.createElement("button");
            t4.classList.add("datedreamer__calendar_next"), t4.innerHTML = e3.iconNext ? e3.iconNext : d.rightChevron, t4.setAttribute("aria-label", "Next"), t4.addEventListener("click", () => e3.goToNextMonth()), null === (a3 = e3.headerElement) || void 0 === a3 || a3.append(t4);
          }
        }, t2.generateInputs = function(e3) {
          var t3;
          if (e3.hideInputs) return;
          const n3 = document.createElement("label");
          n3.setAttribute("for", "date-input"), n3.textContent = e3.inputLabel;
          const a3 = document.createElement("div");
          a3.classList.add("datedreamer__calendar__inputs-wrap");
          const d2 = document.createElement("input");
          d2.id = "date-input", d2.placeholder = e3.inputPlaceholder, d2.value = (0, r.default)(e3.selectedDate).format(e3.format), d2.addEventListener("keyup", (t4) => e3.dateInputChanged(t4)), d2.setAttribute("title", "Set a date");
          const o = document.createElement("button");
          o.innerText = "Today", o.addEventListener("click", () => e3.setDateToToday()), a3.append(d2, o), null === (t3 = e3.inputsElement) || void 0 === t3 || t3.append(n3, a3);
        }, t2.generateErrors = function(e3) {
          var t3;
          const n3 = null === (t3 = e3.inputsElement) || void 0 === t3 ? void 0 : t3.querySelector("input");
          n3 && n3.classList.remove("error"), e3.errorsElement && (e3.errorsElement.innerHTML = ""), e3.errors.forEach(({ type: t4, message: a3 }) => {
            var r2;
            const d2 = document.createElement("span");
            d2.innerText = a3, "input-error" == t4 && n3 && n3.classList.add("error"), null === (r2 = e3.errorsElement) || void 0 === r2 || r2.append(d2);
          }), e3.errors = [];
        }, t2.generateDays = function(e3, t3 = false) {
          var n3, a3, r2, o, i, s, l, c;
          const h = e3.selectedDate.getDate(), u = e3.displayedMonthDate.getMonth(), p = e3.displayedMonthDate.getFullYear(), m = new Date(p, u + 1, 0).getDate(), f = new Date(p, u, 1), _ = new Date(p, u, m), g = d.weekdays.indexOf(f.toString().split(" ")[0]), v = 6 - d.weekdays.indexOf(_.toString().split(" ")[0]);
          for (let d2 = 1; d2 <= g + m + v; d2++) if (d2 > g && d2 <= g + m) {
            const l2 = document.createElement("div");
            l2.classList.add("datedreamer__calendar_day");
            const c2 = document.createElement("button");
            if (c2.addEventListener("click", () => e3.setSelectedDay(d2 - g)), c2.addEventListener("keydown", (t4) => e3.handleDayKeyDown(t4)), c2.innerText = (d2 - g).toString(), c2.setAttribute("type", "button"), e3.rangeMode) {
              e3.displayedMonthDate.getMonth() == (null === (a3 = null === (n3 = e3.connector) || void 0 === n3 ? void 0 : n3.startDate) || void 0 === a3 ? void 0 : a3.getMonth()) && e3.displayedMonthDate.getFullYear() == e3.connector.startDate.getFullYear() && d2 - g == e3.connector.startDate.getDate() && l2.classList.add("active"), e3.displayedMonthDate.getMonth() == (null === (o = null === (r2 = e3.connector) || void 0 === r2 ? void 0 : r2.endDate) || void 0 === o ? void 0 : o.getMonth()) && e3.displayedMonthDate.getFullYear() == e3.connector.endDate.getFullYear() && d2 - g == e3.connector.endDate.getDate() && l2.classList.add("active");
              const t4 = new Date(e3.displayedMonthDate);
              if (t4.setDate(d2 - g), (null === (i = e3.connector) || void 0 === i ? void 0 : i.startDate) && e3.connector.endDate) {
                const n4 = e3.connector.startDate, a4 = e3.connector.endDate;
                (n4 < t4 && a4 > t4 || t4.getMonth() === n4.getMonth() && t4.getFullYear() === n4.getFullYear() && t4 >= n4 && t4 < a4 || t4.getMonth() === a4.getMonth() && t4.getFullYear() === a4.getFullYear() && t4 <= a4 && t4 > n4 || t4 > n4 && t4 < a4) && l2.classList.add("highlight");
              }
            } else d2 == g + h && e3.displayedMonthDate.getMonth() == e3.selectedDate.getMonth() && e3.displayedMonthDate.getFullYear() == e3.selectedDate.getFullYear() && l2.classList.add("active");
            l2.append(c2), null === (s = e3.daysElement) || void 0 === s || s.append(l2), t3 ? ("first" === t3 && d2 === g + 1 || "last" === t3 && d2 === g + m) && c2.focus() : d2 == g + h && e3.displayedMonthDate.getMonth() == e3.selectedDate.getMonth() && e3.displayedMonthDate.getFullYear() == e3.selectedDate.getFullYear() && c2.focus();
          } else if (d2 <= g) {
            const t4 = document.createElement("div");
            if (t4.classList.add("datedreamer__calendar_day", "disabled"), !e3.hideOtherMonthDays) {
              const e4 = document.createElement("button");
              e4.innerText = new Date(p, u, 0 - (g - d2)).getDate().toString(), e4.setAttribute("disabled", "true"), e4.setAttribute("type", "button"), t4.append(e4);
            }
            null === (l = e3.daysElement) || void 0 === l || l.append(t4);
          } else if (d2 > g + m) {
            const t4 = d2 - (g + v + m) + v, n4 = document.createElement("div");
            if (n4.classList.add("datedreamer__calendar_day", "disabled"), !e3.hideOtherMonthDays) {
              const e4 = document.createElement("button");
              e4.innerText = new Date(p, u + 1, t4).getDate().toString(), e4.setAttribute("disabled", "true"), e4.setAttribute("type", "button"), n4.append(e4);
            }
            null === (c = e3.daysElement) || void 0 === c || c.append(n4);
          }
        };
        const r = a2(n2(353)), d = n2(770);
      }, 353: function(e2) {
        e2.exports = function() {
          "use strict";
          var e3 = 6e4, t2 = 36e5, n2 = "millisecond", a2 = "second", r = "minute", d = "hour", o = "day", i = "week", s = "month", l = "quarter", c = "year", h = "date", u = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, f = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(e4) {
            var t3 = ["th", "st", "nd", "rd"], n3 = e4 % 100;
            return "[" + e4 + (t3[(n3 - 20) % 10] || t3[n3] || t3[0]) + "]";
          } }, _ = function(e4, t3, n3) {
            var a3 = String(e4);
            return !a3 || a3.length >= t3 ? e4 : "" + Array(t3 + 1 - a3.length).join(n3) + e4;
          }, g = { s: _, z: function(e4) {
            var t3 = -e4.utcOffset(), n3 = Math.abs(t3), a3 = Math.floor(n3 / 60), r2 = n3 % 60;
            return (t3 <= 0 ? "+" : "-") + _(a3, 2, "0") + ":" + _(r2, 2, "0");
          }, m: function e4(t3, n3) {
            if (t3.date() < n3.date()) return -e4(n3, t3);
            var a3 = 12 * (n3.year() - t3.year()) + (n3.month() - t3.month()), r2 = t3.clone().add(a3, s), d2 = n3 - r2 < 0, o2 = t3.clone().add(a3 + (d2 ? -1 : 1), s);
            return +(-(a3 + (n3 - r2) / (d2 ? r2 - o2 : o2 - r2)) || 0);
          }, a: function(e4) {
            return e4 < 0 ? Math.ceil(e4) || 0 : Math.floor(e4);
          }, p: function(e4) {
            return { M: s, y: c, w: i, d: o, D: h, h: d, m: r, s: a2, ms: n2, Q: l }[e4] || String(e4 || "").toLowerCase().replace(/s$/, "");
          }, u: function(e4) {
            return void 0 === e4;
          } }, v = "en", y = {};
          y[v] = f;
          var D = "$isDayjsObject", b = function(e4) {
            return e4 instanceof x || !(!e4 || !e4[D]);
          }, M = function e4(t3, n3, a3) {
            var r2;
            if (!t3) return v;
            if ("string" == typeof t3) {
              var d2 = t3.toLowerCase();
              y[d2] && (r2 = d2), n3 && (y[d2] = n3, r2 = d2);
              var o2 = t3.split("-");
              if (!r2 && o2.length > 1) return e4(o2[0]);
            } else {
              var i2 = t3.name;
              y[i2] = t3, r2 = i2;
            }
            return !a3 && r2 && (v = r2), r2 || !a3 && v;
          }, w = function(e4, t3) {
            if (b(e4)) return e4.clone();
            var n3 = "object" == typeof t3 ? t3 : {};
            return n3.date = e4, n3.args = arguments, new x(n3);
          }, k = g;
          k.l = M, k.i = b, k.w = function(e4, t3) {
            return w(e4, { locale: t3.$L, utc: t3.$u, x: t3.$x, $offset: t3.$offset });
          };
          var x = function() {
            function f2(e4) {
              this.$L = M(e4.locale, null, true), this.parse(e4), this.$x = this.$x || e4.x || {}, this[D] = true;
            }
            var _2 = f2.prototype;
            return _2.parse = function(e4) {
              this.$d = function(e5) {
                var t3 = e5.date, n3 = e5.utc;
                if (null === t3) return /* @__PURE__ */ new Date(NaN);
                if (k.u(t3)) return /* @__PURE__ */ new Date();
                if (t3 instanceof Date) return new Date(t3);
                if ("string" == typeof t3 && !/Z$/i.test(t3)) {
                  var a3 = t3.match(p);
                  if (a3) {
                    var r2 = a3[2] - 1 || 0, d2 = (a3[7] || "0").substring(0, 3);
                    return n3 ? new Date(Date.UTC(a3[1], r2, a3[3] || 1, a3[4] || 0, a3[5] || 0, a3[6] || 0, d2)) : new Date(a3[1], r2, a3[3] || 1, a3[4] || 0, a3[5] || 0, a3[6] || 0, d2);
                  }
                }
                return new Date(t3);
              }(e4), this.init();
            }, _2.init = function() {
              var e4 = this.$d;
              this.$y = e4.getFullYear(), this.$M = e4.getMonth(), this.$D = e4.getDate(), this.$W = e4.getDay(), this.$H = e4.getHours(), this.$m = e4.getMinutes(), this.$s = e4.getSeconds(), this.$ms = e4.getMilliseconds();
            }, _2.$utils = function() {
              return k;
            }, _2.isValid = function() {
              return !(this.$d.toString() === u);
            }, _2.isSame = function(e4, t3) {
              var n3 = w(e4);
              return this.startOf(t3) <= n3 && n3 <= this.endOf(t3);
            }, _2.isAfter = function(e4, t3) {
              return w(e4) < this.startOf(t3);
            }, _2.isBefore = function(e4, t3) {
              return this.endOf(t3) < w(e4);
            }, _2.$g = function(e4, t3, n3) {
              return k.u(e4) ? this[t3] : this.set(n3, e4);
            }, _2.unix = function() {
              return Math.floor(this.valueOf() / 1e3);
            }, _2.valueOf = function() {
              return this.$d.getTime();
            }, _2.startOf = function(e4, t3) {
              var n3 = this, l2 = !!k.u(t3) || t3, u2 = k.p(e4), p2 = function(e5, t4) {
                var a3 = k.w(n3.$u ? Date.UTC(n3.$y, t4, e5) : new Date(n3.$y, t4, e5), n3);
                return l2 ? a3 : a3.endOf(o);
              }, m2 = function(e5, t4) {
                return k.w(n3.toDate()[e5].apply(n3.toDate("s"), (l2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t4)), n3);
              }, f3 = this.$W, _3 = this.$M, g2 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
              switch (u2) {
                case c:
                  return l2 ? p2(1, 0) : p2(31, 11);
                case s:
                  return l2 ? p2(1, _3) : p2(0, _3 + 1);
                case i:
                  var y2 = this.$locale().weekStart || 0, D2 = (f3 < y2 ? f3 + 7 : f3) - y2;
                  return p2(l2 ? g2 - D2 : g2 + (6 - D2), _3);
                case o:
                case h:
                  return m2(v2 + "Hours", 0);
                case d:
                  return m2(v2 + "Minutes", 1);
                case r:
                  return m2(v2 + "Seconds", 2);
                case a2:
                  return m2(v2 + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }, _2.endOf = function(e4) {
              return this.startOf(e4, false);
            }, _2.$set = function(e4, t3) {
              var i2, l2 = k.p(e4), u2 = "set" + (this.$u ? "UTC" : ""), p2 = (i2 = {}, i2[o] = u2 + "Date", i2[h] = u2 + "Date", i2[s] = u2 + "Month", i2[c] = u2 + "FullYear", i2[d] = u2 + "Hours", i2[r] = u2 + "Minutes", i2[a2] = u2 + "Seconds", i2[n2] = u2 + "Milliseconds", i2)[l2], m2 = l2 === o ? this.$D + (t3 - this.$W) : t3;
              if (l2 === s || l2 === c) {
                var f3 = this.clone().set(h, 1);
                f3.$d[p2](m2), f3.init(), this.$d = f3.set(h, Math.min(this.$D, f3.daysInMonth())).$d;
              } else p2 && this.$d[p2](m2);
              return this.init(), this;
            }, _2.set = function(e4, t3) {
              return this.clone().$set(e4, t3);
            }, _2.get = function(e4) {
              return this[k.p(e4)]();
            }, _2.add = function(n3, l2) {
              var h2, u2 = this;
              n3 = Number(n3);
              var p2 = k.p(l2), m2 = function(e4) {
                var t3 = w(u2);
                return k.w(t3.date(t3.date() + Math.round(e4 * n3)), u2);
              };
              if (p2 === s) return this.set(s, this.$M + n3);
              if (p2 === c) return this.set(c, this.$y + n3);
              if (p2 === o) return m2(1);
              if (p2 === i) return m2(7);
              var f3 = (h2 = {}, h2[r] = e3, h2[d] = t2, h2[a2] = 1e3, h2)[p2] || 1, _3 = this.$d.getTime() + n3 * f3;
              return k.w(_3, this);
            }, _2.subtract = function(e4, t3) {
              return this.add(-1 * e4, t3);
            }, _2.format = function(e4) {
              var t3 = this, n3 = this.$locale();
              if (!this.isValid()) return n3.invalidDate || u;
              var a3 = e4 || "YYYY-MM-DDTHH:mm:ssZ", r2 = k.z(this), d2 = this.$H, o2 = this.$m, i2 = this.$M, s2 = n3.weekdays, l2 = n3.months, c2 = n3.meridiem, h2 = function(e5, n4, r3, d3) {
                return e5 && (e5[n4] || e5(t3, a3)) || r3[n4].slice(0, d3);
              }, p2 = function(e5) {
                return k.s(d2 % 12 || 12, e5, "0");
              }, f3 = c2 || function(e5, t4, n4) {
                var a4 = e5 < 12 ? "AM" : "PM";
                return n4 ? a4.toLowerCase() : a4;
              };
              return a3.replace(m, function(e5, a4) {
                return a4 || function(e6) {
                  switch (e6) {
                    case "YY":
                      return String(t3.$y).slice(-2);
                    case "YYYY":
                      return k.s(t3.$y, 4, "0");
                    case "M":
                      return i2 + 1;
                    case "MM":
                      return k.s(i2 + 1, 2, "0");
                    case "MMM":
                      return h2(n3.monthsShort, i2, l2, 3);
                    case "MMMM":
                      return h2(l2, i2);
                    case "D":
                      return t3.$D;
                    case "DD":
                      return k.s(t3.$D, 2, "0");
                    case "d":
                      return String(t3.$W);
                    case "dd":
                      return h2(n3.weekdaysMin, t3.$W, s2, 2);
                    case "ddd":
                      return h2(n3.weekdaysShort, t3.$W, s2, 3);
                    case "dddd":
                      return s2[t3.$W];
                    case "H":
                      return String(d2);
                    case "HH":
                      return k.s(d2, 2, "0");
                    case "h":
                      return p2(1);
                    case "hh":
                      return p2(2);
                    case "a":
                      return f3(d2, o2, true);
                    case "A":
                      return f3(d2, o2, false);
                    case "m":
                      return String(o2);
                    case "mm":
                      return k.s(o2, 2, "0");
                    case "s":
                      return String(t3.$s);
                    case "ss":
                      return k.s(t3.$s, 2, "0");
                    case "SSS":
                      return k.s(t3.$ms, 3, "0");
                    case "Z":
                      return r2;
                  }
                  return null;
                }(e5) || r2.replace(":", "");
              });
            }, _2.utcOffset = function() {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }, _2.diff = function(n3, h2, u2) {
              var p2, m2 = this, f3 = k.p(h2), _3 = w(n3), g2 = (_3.utcOffset() - this.utcOffset()) * e3, v2 = this - _3, y2 = function() {
                return k.m(m2, _3);
              };
              switch (f3) {
                case c:
                  p2 = y2() / 12;
                  break;
                case s:
                  p2 = y2();
                  break;
                case l:
                  p2 = y2() / 3;
                  break;
                case i:
                  p2 = (v2 - g2) / 6048e5;
                  break;
                case o:
                  p2 = (v2 - g2) / 864e5;
                  break;
                case d:
                  p2 = v2 / t2;
                  break;
                case r:
                  p2 = v2 / e3;
                  break;
                case a2:
                  p2 = v2 / 1e3;
                  break;
                default:
                  p2 = v2;
              }
              return u2 ? p2 : k.a(p2);
            }, _2.daysInMonth = function() {
              return this.endOf(s).$D;
            }, _2.$locale = function() {
              return y[this.$L];
            }, _2.locale = function(e4, t3) {
              if (!e4) return this.$L;
              var n3 = this.clone(), a3 = M(e4, t3, true);
              return a3 && (n3.$L = a3), n3;
            }, _2.clone = function() {
              return k.w(this.$d, this);
            }, _2.toDate = function() {
              return new Date(this.valueOf());
            }, _2.toJSON = function() {
              return this.isValid() ? this.toISOString() : null;
            }, _2.toISOString = function() {
              return this.$d.toISOString();
            }, _2.toString = function() {
              return this.$d.toUTCString();
            }, f2;
          }(), E = x.prototype;
          return w.prototype = E, [["$ms", n2], ["$s", a2], ["$m", r], ["$H", d], ["$W", o], ["$M", s], ["$y", c], ["$D", h]].forEach(function(e4) {
            E[e4[1]] = function(t3) {
              return this.$g(t3, e4[0], e4[1]);
            };
          }), w.extend = function(e4, t3) {
            return e4.$i || (e4(t3, x, w), e4.$i = true), w;
          }, w.locale = M, w.isDayjs = b, w.unix = function(e4) {
            return w(1e3 * e4);
          }, w.en = y[v], w.Ls = y, w.p = {}, w;
        }();
      }, 412: function(e2, t2, n2) {
        "use strict";
        var a2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.calendarToggle = void 0;
        const r = n2(35), d = n2(770), o = a2(n2(353)), i = a2(n2(445));
        o.default.extend(i.default);
        class s extends HTMLElement {
          constructor(e3) {
            super(), this.inputPlaceholder = "Enter a date", this.options = e3, this.element = e3.element, this.attachShadow({ mode: "open" }), this.init();
          }
          init() {
            if (null == this.element) throw new Error("No element was provided to calendarToggle. Initializing aborted");
            this.generateTemplate(), document.addEventListener("click", (e3) => {
              var t3;
              this === e3.target || this.contains(e3.target) || null === (t3 = this.calendarWrapElement) || void 0 === t3 || t3.classList.remove("active");
            });
          }
          getDarkModeSetting() {
            return this.options.darkModeAuto ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches : this.options.darkMode || false;
          }
          generateTemplate() {
            var e3, t3;
            let n3;
            n3 = "string" == typeof this.options.selectedDate || "object" == typeof this.options.selectedDate ? (0, o.default)(this.options.selectedDate, this.options.format).format(this.options.format) : (0, o.default)().format(this.options.format);
            const a3 = this.getDarkModeSetting(), r2 = (0, d.calendarToggleRoot)(this.options.theme, this.options.styles, this.inputPlaceholder, n3, a3);
            let i2;
            if ("string" == typeof this.element ? i2 = document.querySelector(this.element) : "object" == typeof this.element && (i2 = this.element), !i2) throw new Error(`Could not find ${this.element} in DOM.`);
            {
              this.shadowRoot && (this.shadowRoot.innerHTML = r2), i2.append(this);
              const n4 = null === (e3 = this.shadowRoot) || void 0 === e3 ? void 0 : e3.querySelector(".datedreamer__calendar-toggle__calendar"), a4 = null === (t3 = this.shadowRoot) || void 0 === t3 ? void 0 : t3.querySelector("#date-input");
              n4 && (this.calendarWrapElement = n4), a4 && (this.inputElement = a4, this.inputElement.addEventListener("focus", () => {
                var e4;
                null === (e4 = this.calendarWrapElement) || void 0 === e4 || e4.classList.add("active");
              })), this.generateCalendar();
            }
          }
          generateCalendar() {
            const e3 = new r.calendar(Object.assign(Object.assign({}, this.options), { element: this.calendarWrapElement || "", hideInputs: true, onChange: (e4) => this.dateChangedHandler(e4) }));
            this.calendarElement = e3;
          }
          dateChangedHandler(e3) {
            var t3;
            this.inputElement.value = e3.detail, null === (t3 = this.calendarWrapElement) || void 0 === t3 || t3.classList.remove("active"), this.options.onChange && this.options.onChange(e3);
          }
        }
        t2.calendarToggle = s, customElements.define("datedreamer-calendar-toggle", s);
      }, 445: function(e2) {
        e2.exports = function() {
          "use strict";
          var e3 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t2 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d/, a2 = /\d\d/, r = /\d\d?/, d = /\d*[^-_:/,()\s\d]+/, o = {}, i = function(e4) {
            return (e4 = +e4) + (e4 > 68 ? 1900 : 2e3);
          }, s = function(e4) {
            return function(t3) {
              this[e4] = +t3;
            };
          }, l = [/[+-]\d\d:?(\d\d)?|Z/, function(e4) {
            (this.zone || (this.zone = {})).offset = function(e5) {
              if (!e5) return 0;
              if ("Z" === e5) return 0;
              var t3 = e5.match(/([+-]|\d\d)/g), n3 = 60 * t3[1] + (+t3[2] || 0);
              return 0 === n3 ? 0 : "+" === t3[0] ? -n3 : n3;
            }(e4);
          }], c = function(e4) {
            var t3 = o[e4];
            return t3 && (t3.indexOf ? t3 : t3.s.concat(t3.f));
          }, h = function(e4, t3) {
            var n3, a3 = o.meridiem;
            if (a3) {
              for (var r2 = 1; r2 <= 24; r2 += 1) if (e4.indexOf(a3(r2, 0, t3)) > -1) {
                n3 = r2 > 12;
                break;
              }
            } else n3 = e4 === (t3 ? "pm" : "PM");
            return n3;
          }, u = { A: [d, function(e4) {
            this.afternoon = h(e4, false);
          }], a: [d, function(e4) {
            this.afternoon = h(e4, true);
          }], Q: [n2, function(e4) {
            this.month = 3 * (e4 - 1) + 1;
          }], S: [n2, function(e4) {
            this.milliseconds = 100 * +e4;
          }], SS: [a2, function(e4) {
            this.milliseconds = 10 * +e4;
          }], SSS: [/\d{3}/, function(e4) {
            this.milliseconds = +e4;
          }], s: [r, s("seconds")], ss: [r, s("seconds")], m: [r, s("minutes")], mm: [r, s("minutes")], H: [r, s("hours")], h: [r, s("hours")], HH: [r, s("hours")], hh: [r, s("hours")], D: [r, s("day")], DD: [a2, s("day")], Do: [d, function(e4) {
            var t3 = o.ordinal, n3 = e4.match(/\d+/);
            if (this.day = n3[0], t3) for (var a3 = 1; a3 <= 31; a3 += 1) t3(a3).replace(/\[|\]/g, "") === e4 && (this.day = a3);
          }], w: [r, s("week")], ww: [a2, s("week")], M: [r, s("month")], MM: [a2, s("month")], MMM: [d, function(e4) {
            var t3 = c("months"), n3 = (c("monthsShort") || t3.map(function(e5) {
              return e5.slice(0, 3);
            })).indexOf(e4) + 1;
            if (n3 < 1) throw new Error();
            this.month = n3 % 12 || n3;
          }], MMMM: [d, function(e4) {
            var t3 = c("months").indexOf(e4) + 1;
            if (t3 < 1) throw new Error();
            this.month = t3 % 12 || t3;
          }], Y: [/[+-]?\d+/, s("year")], YY: [a2, function(e4) {
            this.year = i(e4);
          }], YYYY: [/\d{4}/, s("year")], Z: l, ZZ: l };
          function p(n3) {
            var a3, r2;
            a3 = n3, r2 = o && o.formats;
            for (var d2 = (n3 = a3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t3, n4, a4) {
              var d3 = a4 && a4.toUpperCase();
              return n4 || r2[a4] || e3[a4] || r2[d3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e4, t4, n5) {
                return t4 || n5.slice(1);
              });
            })).match(t2), i2 = d2.length, s2 = 0; s2 < i2; s2 += 1) {
              var l2 = d2[s2], c2 = u[l2], h2 = c2 && c2[0], p2 = c2 && c2[1];
              d2[s2] = p2 ? { regex: h2, parser: p2 } : l2.replace(/^\[|\]$/g, "");
            }
            return function(e4) {
              for (var t3 = {}, n4 = 0, a4 = 0; n4 < i2; n4 += 1) {
                var r3 = d2[n4];
                if ("string" == typeof r3) a4 += r3.length;
                else {
                  var o2 = r3.regex, s3 = r3.parser, l3 = e4.slice(a4), c3 = o2.exec(l3)[0];
                  s3.call(t3, c3), e4 = e4.replace(c3, "");
                }
              }
              return function(e5) {
                var t4 = e5.afternoon;
                if (void 0 !== t4) {
                  var n5 = e5.hours;
                  t4 ? n5 < 12 && (e5.hours += 12) : 12 === n5 && (e5.hours = 0), delete e5.afternoon;
                }
              }(t3), t3;
            };
          }
          return function(e4, t3, n3) {
            n3.p.customParseFormat = true, e4 && e4.parseTwoDigitYear && (i = e4.parseTwoDigitYear);
            var a3 = t3.prototype, r2 = a3.parse;
            a3.parse = function(e5) {
              var t4 = e5.date, a4 = e5.utc, d2 = e5.args;
              this.$u = a4;
              var i2 = d2[1];
              if ("string" == typeof i2) {
                var s2 = true === d2[2], l2 = true === d2[3], c2 = s2 || l2, h2 = d2[2];
                l2 && (h2 = d2[2]), o = this.$locale(), !s2 && h2 && (o = n3.Ls[h2]), this.$d = function(e6, t5, n4, a5) {
                  try {
                    if (["x", "X"].indexOf(t5) > -1) return new Date(("X" === t5 ? 1e3 : 1) * e6);
                    var r3 = p(t5)(e6), d3 = r3.year, o2 = r3.month, i3 = r3.day, s3 = r3.hours, l3 = r3.minutes, c3 = r3.seconds, h3 = r3.milliseconds, u3 = r3.zone, m2 = r3.week, f2 = /* @__PURE__ */ new Date(), _ = i3 || (d3 || o2 ? 1 : f2.getDate()), g = d3 || f2.getFullYear(), v = 0;
                    d3 && !o2 || (v = o2 > 0 ? o2 - 1 : f2.getMonth());
                    var y, D = s3 || 0, b = l3 || 0, M = c3 || 0, w = h3 || 0;
                    return u3 ? new Date(Date.UTC(g, v, _, D, b, M, w + 60 * u3.offset * 1e3)) : n4 ? new Date(Date.UTC(g, v, _, D, b, M, w)) : (y = new Date(g, v, _, D, b, M, w), m2 && (y = a5(y).week(m2).toDate()), y);
                  } catch (e7) {
                    return /* @__PURE__ */ new Date("");
                  }
                }(t4, i2, a4, n3), this.init(), h2 && true !== h2 && (this.$L = this.locale(h2).$L), c2 && t4 != this.format(i2) && (this.$d = /* @__PURE__ */ new Date("")), o = {};
              } else if (i2 instanceof Array) for (var u2 = i2.length, m = 1; m <= u2; m += 1) {
                d2[1] = i2[m - 1];
                var f = n3.apply(this, d2);
                if (f.isValid()) {
                  this.$d = f.$d, this.$L = f.$L, this.init();
                  break;
                }
                m === u2 && (this.$d = /* @__PURE__ */ new Date(""));
              }
              else r2.call(this, e5);
            };
          };
        }();
      }, 704: function(e2, t2, n2) {
        "use strict";
        var a2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.range = void 0;
        const r = a2(n2(353)), d = n2(167), o = n2(35), i = a2(n2(174));
        class s extends HTMLElement {
          constructor(e3) {
            super(), this.calendar1DisplayedDate = /* @__PURE__ */ new Date(), this.calendar2DisplayedDate = /* @__PURE__ */ new Date(), this.handleDateChange = () => {
              var e4, t3;
              if (this.onChange) {
                const n3 = new CustomEvent("onChange", { detail: { startDate: (0, r.default)(null === (e4 = this.connector) || void 0 === e4 ? void 0 : e4.startDate).format(this.format), endDate: (0, r.default)(null === (t3 = this.connector) || void 0 === t3 ? void 0 : t3.endDate).format(this.format) } });
                this.onChange(n3);
              }
            }, this.element = e3.element, this.connector = new i.default(), this.styles = e3.styles, this.format = e3.format, this.iconPrev = e3.iconPrev, this.iconNext = e3.iconNext, this.onChange = e3.onChange, this.onRender = e3.onRender, this.theme = e3.theme, this.darkMode = e3.darkMode, this.darkModeAuto = e3.darkModeAuto, this.predefinedRanges = e3.predefinedRanges, this.connector && (this.connector.dateChangedCallback = this.handleDateChange), this.init();
          }
          handlePredefinedRangeClick(e3) {
            const { start: t3, end: n3 } = e3.getRange();
            this.connector && (this.connector.startDate = new Date(t3), this.connector.endDate = new Date(n3), this.calendar1DisplayedDate = new Date(t3), this.calendar1DisplayedDate.setDate(1), this.calendar2DisplayedDate = new Date(n3), this.calendar2DisplayedDate.setDate(1), t3.getMonth() !== n3.getMonth() || t3.getFullYear() !== n3.getFullYear() ? (this.calendar2DisplayedDate = new Date(n3), this.calendar2DisplayedDate.setDate(1)) : (this.calendar2DisplayedDate = new Date(t3), this.calendar2DisplayedDate.setMonth(this.calendar2DisplayedDate.getMonth() + 1), this.calendar2DisplayedDate.setDate(1)), this.resetViewedDated(), this.connector.rebuildAllCalendars(), this.connector.dateChangedCallback && this.connector.dateChangedCallback(new CustomEvent("dateChanged")));
          }
          getDarkModeSetting() {
            return this.darkModeAuto ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches : this.darkMode || false;
          }
          setupDarkModeListener(e3) {
            this.darkModeAuto && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
              this.updateDarkMode(e3);
            });
          }
          updateDarkMode(e3) {
            this.getDarkModeSetting() ? e3.classList.add("dark") : e3.classList.remove("dark");
          }
          init() {
            this.addStyles(), this.calendar1DisplayedDate.setDate(1), this.calendar2DisplayedDate.setDate(1), this.calendar2DisplayedDate.setMonth(this.calendar2DisplayedDate.getMonth() + 1);
            const e3 = document.createElement("div");
            if (e3.classList.add("datedreamer-range"), this.getDarkModeSetting() && e3.classList.add("dark"), this.setupDarkModeListener(e3), this.predefinedRanges && this.predefinedRanges.length > 0) {
              const t4 = document.createElement("div");
              t4.classList.add("datedreamer-range-sidebar"), this.predefinedRanges.forEach((e4) => {
                const n4 = document.createElement("button");
                n4.classList.add("datedreamer-range-button"), n4.textContent = e4.label, n4.type = "button", n4.addEventListener("click", () => this.handlePredefinedRangeClick(e4)), t4.appendChild(n4);
              }), e3.appendChild(t4);
            }
            const t3 = document.createElement("div");
            t3.classList.add("datedreamer-range-calendars");
            const n3 = document.createElement("div"), a3 = document.createElement("div");
            if (t3.append(n3, a3), e3.append(t3), this.calendar1 = new o.calendar({ element: n3, theme: this.theme, format: this.format, hideInputs: true, hideNextNav: true, styles: d.calendarStyles, iconPrev: this.iconPrev, onPrevNav: (e4) => this.prevHandler(e4), rangeMode: true, hideOtherMonthDays: true, connector: this.connector, darkMode: this.darkMode, darkModeAuto: this.darkModeAuto }), this.calendar2 = new o.calendar({ element: a3, theme: this.theme, format: this.format, hideInputs: true, hidePrevNav: true, styles: d.calendarStyles, iconNext: this.iconNext, onNextNav: (e4) => this.nextHandler(e4), rangeMode: true, hideOtherMonthDays: true, connector: this.connector, darkMode: this.darkMode, darkModeAuto: this.darkModeAuto }), this.calendar2.setDisplayedMonthDate(this.calendar2DisplayedDate), this.append(e3), "string" == typeof this.element) {
              const e4 = document.querySelector(this.element);
              e4 && e4.append(this);
            } else "object" == typeof this.element && this.element.append(this);
            if (this.onRender) {
              const e4 = new CustomEvent("onRender");
              this.onRender(e4);
            }
          }
          addStyles() {
            const e3 = `
            .datedreamer-range {
                display: inline-flex;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
                transition: background-color 0.3s ease;
            }

            .datedreamer-range.dark {
                background: #1a1a1a;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 30%), 0 4px 6px -4px rgb(0 0 0 / 30%);
            }

            .datedreamer-range-sidebar {
                display: flex;
                flex-direction: column;
                gap: 6px;
                padding: 12px;
                background: #f9f9f9;
                border-right: 1px solid #e5e5e5;
                min-width: 130px;
            }

            .datedreamer-range.dark .datedreamer-range-sidebar {
                background: #2a2a2a;
                border-right: 1px solid #404040;
            }

            .datedreamer-range-button {
                padding: 6px 10px;
                border: 1px solid #d1d5db;
                border-radius: 4px;
                background: white;
                color: #374151;
                font-size: 12px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
                text-align: left;
            }

            .datedreamer-range-button:hover {
                background: #f3f4f6;
                border-color: #9ca3af;
            }

            .datedreamer-range-button:active {
                background: #e5e7eb;
                transform: translateY(1px);
            }

            .datedreamer-range.dark .datedreamer-range-button {
                background: #374151;
                color: #f9fafb;
                border-color: #4b5563;
            }

            .datedreamer-range.dark .datedreamer-range-button:hover {
                background: #4b5563;
                border-color: #6b7280;
            }

            .datedreamer-range.dark .datedreamer-range-button:active {
                background: #374151;
            }

            .datedreamer-range-calendars {
                display: flex;
            }
            ${this.styles ? this.styles : ""}
        `, t3 = document.createElement("style");
            t3.innerHTML = e3, this.append(t3);
          }
          prevHandler(e3) {
            this.calendar1DisplayedDate = e3.detail, this.calendar2DisplayedDate.setMonth(this.calendar2DisplayedDate.getMonth() - 1), this.resetViewedDated();
          }
          nextHandler(e3) {
            this.calendar2DisplayedDate = e3.detail, this.calendar1DisplayedDate.setMonth(this.calendar1DisplayedDate.getMonth() + 1), this.resetViewedDated();
          }
          resetViewedDated() {
            var e3, t3;
            null === (e3 = this.calendar1) || void 0 === e3 || e3.setDisplayedMonthDate(this.calendar1DisplayedDate), null === (t3 = this.calendar2) || void 0 === t3 || t3.setDisplayedMonthDate(this.calendar2DisplayedDate);
          }
        }
        t2.range = s, customElements.define("datedreamer-range", s);
      }, 770: (e2, t2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.litePurple = t2.unstyledTheme = t2.rightChevron = t2.leftChevron = t2.weekdays = t2.monthNames = void 0, t2.calendarRoot = function(e3, n2 = "", a2) {
          return `
  <style>
      ${t2.unstyledTheme}
      ${"lite-purple" == e3 ? t2.litePurple : ""}
      
      ${n2}
  </style>
  <div class="datedreamer__calendar ${a2 ? "dark" : ""}">
      <div class="datedreamer__calendar_header"></div>
  
      <div class="datedreamer__calendar_inputs"></div>
      <div class="datedreamer__calendar_errors"></div>
  
      <div class="datedreamer__calendar_days-wrap">
          <div class="datedreamer__calendar_days-header">
              <div class="datedreamer__calendar_day datedreamer__calendar_day-header">Su</div>    
              <div class="datedreamer__calendar_day datedreamer__calendar_day-header">Mo</div>
              <div class="datedreamer__calendar_day datedreamer__calendar_day-header">Tu</div>
              <div class="datedreamer__calendar_day datedreamer__calendar_day-header">We</div>
              <div class="datedreamer__calendar_day datedreamer__calendar_day-header">Th</div>
              <div class="datedreamer__calendar_day datedreamer__calendar_day-header">Fr</div>
              <div class="datedreamer__calendar_day datedreamer__calendar_day-header">Sat</div>
          </div>
  
          <div class="datedreamer__calendar_days"></div>
      </div>
  </div>
  `;
        }, t2.calendarToggleRoot = function(e3, t3 = "", n2, a2, r) {
          return `
    <style>
        .datedreamer__calendar-toggle {
            position: relative;
        }
        .datedreamer__calendar-toggle__calendar {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
        }

        .datedreamer__calendar-toggle__calendar.active {
            display: block;
        }

        ${"lite-purple" == e3 ? "\n        .datedreamer__calendar-toggle__input input {\n            font-weight: 500;\n            border-radius: 4px;\n            border: 1px solid #e9e8ec;\n            font-size: 12px;\n            background: white;\n            display: block;\n            padding: 4px 4px 4px 8px;\n            margin-right: 8px;\n            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;\n        }\n        \n        .datedreamer__calendar-toggle.dark .datedreamer__calendar-toggle__input input {\n            background: #2d3748;\n            border: 1px solid #4a5568;\n            color: #fff;\n        }\n        " : ""}

        ${t3}
    </style>
    <div class="datedreamer__calendar-toggle ${r ? "dark" : ""}">
        <div class="datedreamer__calendar-toggle__input">
            <input id="date-input" placeholder="${n2}" value="${a2}" readonly/>
        </div>

        <div class="datedreamer__calendar-toggle__calendar"></div>
    </div>
  `;
        }, t2.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], t2.weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], t2.leftChevron = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>', t2.rightChevron = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>', t2.unstyledTheme = "\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');\n\n.datedreamer__calendar {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: 'Roboto', sans-serif;\n    width: 100%;\n    max-width: 240px;\n    padding: 14px;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    background: #fff;\n    z-index: 0;\n    position: relative;\n    box-sizing: border-box;\n    transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n.datedreamer__calendar.dark {\n  background: #1a1a1a;\n  box-shadow: none;\n}\n\n.datedreamer__calendar_header {\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.datedreamer__calendar_prev,.datedreamer__calendar_next {\n    background: none;\n    border: none;\n    width: 16px;\n    height: 16px;\n    text-align: center;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:#2d3436;\n    transition: color 0.2s ease;\n}\n\n.datedreamer__calendar_prev:hover,.datedreamer__calendar_next:hover {\n    color: #007bff;\n}\n\n.dark .datedreamer__calendar_prev:hover,.dark .datedreamer__calendar_next:hover {\n    color: #60a5fa;\n}\n\n.dark .datedreamer__calendar_prev, .dark .datedreamer__calendar_next {\n  color: #fff;\n}\n\n.datedreamer__calendar_prev svg, .datedreamer__calendar_next svg {\n    transform: scale(2.875);\n}\n\n.dark .datedreamer__calendar_prev svg, .dark .datedreamer__calendar_next svg {\n  fill: #fff;\n}\n\n.datedreamer__calendar_title {\n    width: 100%;\n    display: block;\n    flex-grow: 1;\n    text-align: center;\n    color: #2d3436;\n    font-weight: 600;\n    font-size: 0.875rem;\n}\n\n.dark .datedreamer__calendar_title {\n  color: #fff;\n}\n\n.datedreamer__calendar_inputs {\n    margin-top: 12px;\n}\n\n.datedreamer__calendar_inputs label {\n  width: 100%;\n  text-align: left !important;\n  display: block;\n}\n\n.dark .datedreamer__calendar_inputs label {\n  color: #fff;\n}\n\n.datedreamer__calendar__inputs-wrap {\n  display: flex;\n}\n\n.datedreamer__calendar_inputs input {\n  width: 100%;\n}\n\n.datedreamer__calendar_inputs input.error {\n   border: 2px solid #d63031;\n}\n\n.datedreamer__calendar_errors {\n  margin: 8px 0;\n  color: #d63031;\n}\n\n.datedreamer__calendar_days, .datedreamer__calendar_days-header {\n    margin-top: 12px;\n    display: grid;\n    grid-template-columns: repeat(7,1fr);\n    text-align: center;\n}\n\n.datedreamer__calendar_days-header {\n  color: #2d3436;\n  font-size: 1rem;\n}\n\n.dark .datedreamer__calendar_days-header {\n  color: #fff;\n}\n\n.datedreamer__calendar_day {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n\n.datedreamer__calendar_day button {\n    display: block;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    transition: background-color 0.2s ease, color 0.2s ease;\n}\n\n.datedreamer__calendar_day button:hover:not(:disabled) {\n    background-color: #f0f0f0;\n}\n\n.dark .datedreamer__calendar_day button:hover:not(:disabled) {\n    background-color: #2d3748;\n}\n\n.datedreamer__calendar_day.active button {\n    background: blue;\n    color: white;\n}\n\n.datedreamer__calendar_day.highlight button {\n  background: #236bb9;\n  color: white;\n}\n", t2.litePurple = '\n.datedreamer__calendar {\n  border-radius: 8px;\n}\n\n.datedreamer__calendar_prev svg, .datedreamer__calendar_next svg {\n  transform: scale(2);\n}\n\n.datedreamer__calendar_title {\n  font-size: 12px;\n}\n\n.datedreamer__calendar_inputs input, .datedreamer__calendar_inputs button {\n  font-weight: 500;\n  border-radius: 4px;\n  border: 1px solid #e9e8ec;\n  font-size: 12px;\n  background: white;\n}\n\n.datedreamer__calendar_inputs label {\n  font-size: 12px;\n  text-align: left !important;\n  display: block;\n}\n\n.datedreamer__calendar_inputs input {\n  flex-grow: 1;\n  width: calc(100% - 8px);\n  display: block;\n  padding: 4px 4px 4px 8px;\n  margin-right: 8px;\n}\n\n.dark .datedreamer__calendar_inputs input {\n  background: #2d3748;\n  border: 1px solid #4a5568;\n  color: #fff;\n}\n\n.datedreamer__calendar_inputs button {\n  padding: 6px 12px;\n  display: inline-block;\n  cursor: pointer;\n  color: black;\n}\n\n.dark .datedreamer__calendar_inputs button {\n  background: #2d3748;\n  border: 1px solid #4a5568;\n  color: #fff;\n}\n\n.dark .datedreamer__calendar_inputs button:hover {\n  background: #4a5568;\n}\n\n.datedreamer__calendar_errors {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.datedreamer__calendar_day-header.datedreamer__calendar_day {\n  font-size: 12px;\n}\n\n.datedreamer__calendar_days {\n  margin-top: 8px;\n}\n\n.datedreamer__calendar_days .datedreamer__calendar_day {\n  margin: 2px;\n}\n\n.datedreamer__calendar_days .datedreamer__calendar_day.disabled button{\n  color: #767676;\n  cursor: default;\n  font-weight: normal;\n}\n\n.dark .datedreamer__calendar_days .datedreamer__calendar_day.disabled button {\n  color: #555;\n}\n\n.datedreamer__calendar_days .datedreamer__calendar_day.active, .datedreamer__calendar_days .datedreamer__calendar_day.highlight {\n  position: relative;\n}\n\n.datedreamer__calendar_day.highlight:before{\n  content: "";\n  width: 100%;\n  height: 100%;\n  background: #BFA9F3;\n  position: absolute;\n  display: block;\n  z-index: -1;\n  top: 50%;\n  right: 0;\n  left: 0;\n  transform: translateY(-50%);\n}\n\n\n.datedreamer__calendar_days .datedreamer__calendar_day.active:before {\n  content: "";\n  width: 100%;\n  height: 100%;\n  background: #7d56da;\n  border-radius: 2px;\n  position: absolute;\n  display: block;\n  z-index: -1;\n  top: 50%;\n  right: 0;\n  left: 0;\n  transform: translateY(-50%);\n}\n\n.datedreamer__calendar_days .datedreamer__calendar_day button {\n  background: transparent;\n  border: none;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n\n.datedreamer__calendar_days .datedreamer__calendar_day.active button {\n  color: #fff;\n}\n\n.dark .datedreamer__calendar_days .datedreamer__calendar_day button {\n  color: #ecf0f1;\n}\n\n.dark .datedreamer__calendar_days .datedreamer__calendar_day button:hover:not(:disabled) {\n  background-color: #4a5568;\n  border-radius: 4px;\n}\n\n.dark .datedreamer__calendar_days .datedreamer__calendar_day.active button:hover {\n  background-color: #7d56da;\n}\n\n.dark .datedreamer__calendar_days .datedreamer__calendar_day.highlight button:hover {\n  background-color: #BFA9F3;\n}\n';
      } }, t = {};
      function n(a2) {
        var r = t[a2];
        if (void 0 !== r) return r.exports;
        var d = t[a2] = { exports: {} };
        return e[a2].call(d.exports, d, d.exports, n), d.exports;
      }
      var a = {};
      return (() => {
        "use strict";
        var e2 = a;
        Object.defineProperty(e2, "__esModule", { value: true }), e2.range = e2.calendarToggle = e2.calendar = void 0;
        const t2 = n(412);
        Object.defineProperty(e2, "calendarToggle", { enumerable: true, get: function() {
          return t2.calendarToggle;
        } });
        const r = n(35);
        Object.defineProperty(e2, "calendar", { enumerable: true, get: function() {
          return r.calendar;
        } });
        const d = n(704);
        Object.defineProperty(e2, "range", { enumerable: true, get: function() {
          return d.range;
        } });
      })(), a;
    })());
  }
});
export default require_datedreamer();
//# sourceMappingURL=datedreamer.js.map
