// Using CommonJS require
const DateLib = require('./dist/date-lib.cjs.js');

// Create a new date instance
const date = new DateLib('2024-03-15');

// Examples of using the library
console.log('Current date:', date.format());
console.log('Day of week:', date.getDayName());
console.log('Month:', date.getMonthName());

// Add 5 days
const futureDate = date.addDays(5);
console.log('Date after 5 days:', futureDate.format());

// Subtract 5 days
const pastDate = date.subtractDays(5);
console.log('Date before 5 days:', pastDate.format());

// Check if date is between two dates
const startDate = new DateLib('2024-03-10');
const endDate = new DateLib('2024-03-20');
console.log('Is date between 10th and 20th:', date.isBetween(startDate.getDate(), endDate.getDate()));

// Get difference in days
console.log('Days difference:', date.diffInDays(futureDate.getDate())); 