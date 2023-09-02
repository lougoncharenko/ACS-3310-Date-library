const {CustomDate} = require('../src/index');

describe('CustomDate', () => {
    // Test case for initializing with no arguments
    it('should initialize with the current date and time when no arguments are provided', () => {
        const currentDate = new Date();
        const customDate = new CustomDate();
        expect(customDate.date).toBe(currentDate.toLocaleDateString());
      });

    // Test case for initializing with a date string
    it('should initialize with the provided date string', () => {
        const dateString = 'January 1, 1970';
        const customDate = new CustomDate(dateString);
        expect(customDate.date).toBe(new Date(dateString).toLocaleDateString());
    });

     // Test case for initializing with year, month, date, hours, mins
     it('should initialize with the provided year, month, date, hours, mins', () => {
        const newDate = new Date(2001, 4, 12, 16, 45)
        const customDate = new CustomDate(2001, 4, 12, 16, 45);
        expect(customDate.date).toBe(newDate.toLocaleDateString());
    });

    // Test case for initializing with another date object
    it('should initialize with another date object', () => {
        const newDate = new Date(new Date())
        const customDate = new CustomDate(new Date());
        expect(customDate.date).toBe(newDate.toLocaleDateString());
    });
});