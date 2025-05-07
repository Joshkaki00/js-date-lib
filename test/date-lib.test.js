const DateLib = require('./date-lib');

describe('DateLib', () => {
  let dateLib;

  beforeEach(() => {
    // Set a fixed date for testing: 2024-03-15 (Friday)
    dateLib = new DateLib('2024-03-15');
  });

  describe('Constructor', () => {
    test('should create a new instance with current date', () => {
      const now = new DateLib();
      expect(now.getDate()).toBeInstanceOf(Date);
    });

    test('should create a new instance with Date object', () => {
      const date = new Date('2024-03-15');
      const instance = new DateLib(date);
      expect(instance.format()).toBe('2024-03-15');
    });

    test('should create a new instance with date string', () => {
      const instance = new DateLib('2024-03-15');
      expect(instance.format()).toBe('2024-03-15');
    });
  });

  describe('Date Formatting', () => {
    test('should format date as YYYY-MM-DD', () => {
      expect(dateLib.format()).toBe('2024-03-15');
    });

    test('should handle single digit months and days', () => {
      const date = new DateLib('2024-01-05');
      expect(date.format()).toBe('2024-01-05');
    });
  });

  describe('Date Manipulation', () => {
    test('should add days correctly', () => {
      const newDate = dateLib.addDays(5);
      expect(newDate.format()).toBe('2024-03-20');
    });

    test('should subtract days correctly', () => {
      const newDate = dateLib.subtractDays(5);
      expect(newDate.format()).toBe('2024-03-10');
    });

    test('should handle month boundaries when adding days', () => {
      const date = new DateLib('2024-03-31');
      const newDate = date.addDays(1);
      expect(newDate.format()).toBe('2024-04-01');
    });

    test('should handle month boundaries when subtracting days', () => {
      const date = new DateLib('2024-04-01');
      const newDate = date.subtractDays(1);
      expect(newDate.format()).toBe('2024-03-31');
    });

    test('should handle year boundaries when adding days', () => {
      const date = new DateLib('2024-12-31');
      const newDate = date.addDays(1);
      expect(newDate.format()).toBe('2025-01-01');
    });

    test('should handle year boundaries when subtracting days', () => {
      const date = new DateLib('2025-01-01');
      const newDate = date.subtractDays(1);
      expect(newDate.format()).toBe('2024-12-31');
    });
  });

  describe('Date Comparison', () => {
    test('should calculate difference in days', () => {
      const otherDate = new DateLib('2024-03-20');
      expect(dateLib.diffInDays(otherDate.getDate())).toBe(5);
    });

    test('should calculate difference in days with past date', () => {
      const otherDate = new DateLib('2024-03-10');
      expect(dateLib.diffInDays(otherDate.getDate())).toBe(5);
    });

    test('should check if date is before another date', () => {
      const futureDate = new DateLib('2024-03-20');
      expect(dateLib.isBefore(futureDate.getDate())).toBe(true);
    });

    test('should check if date is after another date', () => {
      const pastDate = new DateLib('2024-03-10');
      expect(dateLib.isAfter(pastDate.getDate())).toBe(true);
    });

    test('should check if date is between two dates', () => {
      const startDate = new DateLib('2024-03-10');
      const endDate = new DateLib('2024-03-20');
      expect(dateLib.isBetween(startDate.getDate(), endDate.getDate())).toBe(true);
    });

    test('should return false when date is not between two dates', () => {
      const startDate = new DateLib('2024-03-16');
      const endDate = new DateLib('2024-03-20');
      expect(dateLib.isBetween(startDate.getDate(), endDate.getDate())).toBe(false);
    });
  });

  describe('Date Information', () => {
    test('should get day of week', () => {
      expect(dateLib.getDayOfWeek()).toBe(5); // Friday
    });

    test('should get day name', () => {
      expect(dateLib.getDayName()).toBe('Friday');
    });

    test('should get month name', () => {
      expect(dateLib.getMonthName()).toBe('March');
    });

    test('should get correct day name for all days', () => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      days.forEach((day, index) => {
        const date = new DateLib('2024-03-10'); // Sunday
        const newDate = date.addDays(index);
        expect(newDate.getDayName()).toBe(day);
      });
    });

    test('should get correct month name for all months', () => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];
      months.forEach((month, index) => {
        const date = new DateLib(`2024-${String(index + 1).padStart(2, '0')}-01`);
        expect(date.getMonthName()).toBe(month);
      });
    });
  });
}); 