[Back to Table of Contents](../README.md)

# Date Object in JavaScript

The Date object enables working with dates and times. It provides methods for creating, reading, comparing, and formatting points in time.

---

## Date – Basics

The Date object stores a specific point in time. It can be created with the current date or with a custom value.

```js
let now = new Date(); // current date & time
let birthday = new Date("1990-05-15"); // date from string
let custom = new Date(2025, 5, 30, 12, 0); // year, month, day, hour, minute
```

---

## Timestamps

A timestamp is the number of milliseconds since 1/1/1970 (UTC). Timestamps are useful for comparing and calculating points in time.

```js
let ts = Date.now(); // current timestamp
let ts2 = now.getTime(); // timestamp from a Date object
```

Conversion between Date and timestamp:

```js
let dateFromTs = new Date(ts); // timestamp to Date
let tsFromDate = birthday.getTime(); // Date to timestamp
```

---

## Reading & Setting Date and Time

Getter methods read individual parts of the date, such as year, month, or hour. Setter methods change these values.

### Getter

```js
let d = new Date();
d.getFullYear(); // year, e.g. 2025
d.getMonth(); // month (0 = January)
d.getDate(); // day of month
d.getDay(); // weekday (0 = Sunday)
d.getHours(); // hour
d.getMinutes(); // minute
d.getSeconds(); // second
```

### Setter

Setter methods change specific parts of the date.

```js
d.setFullYear(2026); // set year
d.setMonth(11); // set month (December)
d.setDate(24); // set day
d.setHours(23); // set hour
d.setMinutes(59); // set minute
d.setSeconds(59); // set second
```

---

## Formatting Date and Time

The Date object provides various methods for displaying dates as text, either standardized or localized.

```js
d.toString(); // "Mon Jun 30 2025 12:00:00 GMT+0200"
d.toDateString(); // "Mon Jun 30 2025"
d.toTimeString(); // "12:00:00 GMT+0200"
d.toISOString(); // "2025-06-30T10:00:00.000Z"
d.toLocaleDateString(); // "6/30/2025" (locale dependent)
d.toLocaleTimeString(); // "12:00:00"
```

Formatting with options:

```js
d.toLocaleString("en", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}); // "Monday, June 30, 2025"
```

---

## Calculating & Comparing Time

Date objects can be used to calculate time spans and compare points in time.

### Calculating difference

```js
let start = new Date("2025-06-30T08:00:00Z");
let end = new Date("2025-06-30T10:30:00Z");
let diffMs = end - start; // difference in milliseconds
let diffMin = diffMs / 1000 / 60; // difference in minutes
```

### Comparison

```js
if (start < end) {
  console.log("Start is earlier");
}
```

---

## Useful Functions

Helper functions for common tasks with dates and times.

### Format date (dd.mm.yyyy)

```js
function formatDate(date) {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
formatDate(new Date()); // "30.06.2025"
```

### Days until a date

```js
function daysUntil(date) {
  let today = new Date();
  let diff = date.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
let vacation = new Date("2025-07-19");
console.log(`${daysUntil(vacation)} days until vacation`);
```

---

## Common Mistakes & Tips

- Months are zero-based: January = 0, December = 11.
- Comparing Date objects with `<`, `>`, `===` refers to the points in time, not the objects themselves.
- Pay attention to time zones: `toISOString()` returns UTC, local methods return local time.
- Setter methods like `setDate()` modify the Date object directly.

---

## Alternatives: Date Libraries

For more complex tasks, specialized libraries are available.

| Library   | Advantages               | Disadvantages   |
| --------- | ------------------------ | --------------- |
| Moment.js | Simple, many features    | Large, outdated |
| date-fns  | Modular, modern          | Fewer features  |
| Day.js    | Small, similar to Moment | Fewer plugins   |

---

## Summary

- The Date object is the basis for working with dates and times in JavaScript.
- Timestamps enable comparisons and calculations.
- Methods for reading, setting, and formatting are available.
- Libraries are useful for complex requirements.
- Time zones and month index are common sources of errors.
