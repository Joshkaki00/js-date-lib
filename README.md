# JavaScript Date Library

A simple and powerful JavaScript date manipulation library that provides an easy-to-use interface for common date operations.

## Installation

```bash
npm install js-date-library
```

## Usage

### CommonJS (Node.js)
```javascript
const DateLib = require('js-date-library');
```

### ES Modules
```javascript
import DateLib from 'js-date-library';
```

### Browser (UMD)
```html
<script src="https://unpkg.com/js-date-library"></script>
<script>
  const date = new DateLib();
</script>
```

### Examples

```javascript
// Create a new instance with current date
const date = new DateLib();

// Or with a specific date
const specificDate = new DateLib('2024-03-15');

// Format date as YYYY-MM-DD
console.log(date.format()); // e.g., "2024-03-15"

// Add days
const futureDate = date.addDays(5);

// Subtract days
const pastDate = date.subtractDays(5);

// Get difference in days
const daysDiff = date.diffInDays(otherDate);

// Check date relationships
const isBefore = date.isBefore(otherDate);
const isAfter = date.isAfter(otherDate);
const isBetween = date.isBetween(startDate, endDate);

// Get day and month information
const dayOfWeek = date.getDayOfWeek(); // 0-6 (Sunday-Saturday)
const dayName = date.getDayName(); // e.g., "Friday"
const monthName = date.getMonthName(); // e.g., "March"
```

## API Reference

### Constructor
- `new DateLib(date?)` - Creates a new instance with optional date parameter

### Methods
- `getDate()` - Returns the underlying Date object
- `format()` - Returns date in YYYY-MM-DD format
- `addDays(days)` - Adds specified number of days
- `subtractDays(days)` - Subtracts specified number of days
- `diffInDays(otherDate)` - Calculates difference in days between dates
- `isBefore(otherDate)` - Checks if date is before another date
- `isAfter(otherDate)` - Checks if date is after another date
- `isBetween(startDate, endDate)` - Checks if date is between two dates
- `getDayOfWeek()` - Returns day of week (0-6)
- `getDayName()` - Returns name of day
- `getMonthName()` - Returns name of month

## Development

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build the library
npm run build

# Build in watch mode
npm run build:watch
```

## Build Output

The library is built in multiple formats:
- `dist/date-lib.cjs.js` - CommonJS format (Node.js)
- `dist/date-lib.esm.js` - ES Modules format
- `dist/date-lib.umd.js` - UMD format (Browser)
- `dist/date-lib.min.js` - Minified UMD format (Browser)

## License

MIT - Feel free to use 