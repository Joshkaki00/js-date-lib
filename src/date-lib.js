class DateLib {
  constructor(date = new Date()) {
    // Ensure we're working with UTC dates to avoid timezone issues
    if (typeof date === 'string') {
      const [year, month, day] = date.split('-').map(Number);
      this.date = new Date(Date.UTC(year, month - 1, day));
    } else {
      this.date = new Date(date);
    }
  }

  // Get the current date
  getDate() {
    return this.date;
  }

  // Format the date as YYYY-MM-DD
  format() {
    const year = this.date.getUTCFullYear();
    const month = String(this.date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(this.date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Add days to the date
  addDays(days) {
    const newDate = new Date(this.date);
    newDate.setUTCDate(this.date.getUTCDate() + days);
    return new DateLib(newDate);
  }

  // Subtract days from the date
  subtractDays(days) {
    return this.addDays(-days);
  }

  // Get the difference in days between two dates
  diffInDays(otherDate) {
    const other = new Date(otherDate);
    const diffTime = Math.abs(this.date - other);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Check if the date is before another date
  isBefore(otherDate) {
    return this.date < new Date(otherDate);
  }

  // Check if the date is after another date
  isAfter(otherDate) {
    return this.date > new Date(otherDate);
  }

  // Check if the date is between two dates
  isBetween(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return this.date >= start && this.date <= end;
  }

  // Get the day of the week (0-6, where 0 is Sunday)
  getDayOfWeek() {
    return this.date.getUTCDay();
  }

  // Get the name of the day of the week
  getDayName() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[this.getDayOfWeek()];
  }

  // Get the month name
  getMonthName() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return months[this.date.getUTCMonth()];
  }
}

module.exports = DateLib; 