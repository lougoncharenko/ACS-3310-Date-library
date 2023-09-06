const { CustomDate } = require("../src/index");

describe("CustomDate", () => {
  describe("Initializing Custom Date", () => {
    // Test case for initializing with no arguments
    it("should initialize with the current date and time when no arguments are provided", () => {
      const currentDate = new Date();
      const customDate = new CustomDate();
      expect(customDate.dateNumber).toBe(currentDate.toLocaleDateString());
    });

    // Test case for initializing with a date string
    it("should initialize with the provided date string", () => {
      const dateString = "January 1, 1970";
      const customDate = new CustomDate(dateString);
      expect(customDate.dateNumber).toBe(
        new Date(dateString).toLocaleDateString()
      );
    });

    // Test case for initializing with year, month, date, hours, mins
    it("should initialize with the provided year, month, date, hours, mins", () => {
      const newDate = new Date(2001, 4, 12, 16, 45);
      const customDate = new CustomDate(2001, 4, 12, 16, 45);
      expect(customDate.dateNumber).toBe(newDate.toLocaleDateString());
    });

    // Test case for initializing with another date object
    it("should initialize with another date object", () => {
      const newDate = new Date(new Date());
      const customDate = new CustomDate(new Date());
      expect(customDate.dateNumber).toBe(newDate.toLocaleDateString());
    });
  });

  describe("Year() and yr()", () => {
    // Test case for getting the year with year, month, date
    it("should return the correct year with year, month, date", () => {
      const customDate = new CustomDate(2023, 8, 2);
      expect(customDate.year).toBe(2023);
    });

    // Test case for getting the year with date string
    it("should return the correct year with date string", () => {
      const customDate = new CustomDate("January 1, 1970");
      expect(customDate.year).toBe(1970);
    });

    // Test case for getting the year in a 2-digit format
    it("should return the correct 2-digit year", () => {
      const customDate = new CustomDate(2023, 8, 2);
      expect(customDate.yr).toBe("23");
    });

    // Test case for getting the year with date string
    it("should return the correct year with date string", () => {
      const customDate = new CustomDate("January 1, 1970");
      expect(customDate.yr).toBe("70");
    });
  });

  describe("Month() and Mon()", () => {
    // Test case for getting the month
    it("should return the correct month", () => {
      const customDate = new CustomDate(2023, 8, 2);
      expect(customDate.month).toBe("September");
    });

    // Test case for getting the month
    it("should return the correct month when provide date string", () => {
      const customDate = new CustomDate("January 1, 1970");
      expect(customDate.month).toBe("January");
    });

    // Test case for getting the abbreviated month
    it("should return the correct abbreviated month", () => {
      const customDate = new CustomDate(2023, 8, 2);
      expect(customDate.mon).toBe("Sep");
    });

    // Test case for getting the abbreviated month
    it("should return the correct abbreviated month when provide date string", () => {
      const customDate = new CustomDate("January 1, 1970");
      expect(customDate.mon).toBe("Jan");
    });
  });

  describe("Day() and Dy()", () => {
    // Test case for getting the day of the week
    it("should return the correct day of the week", () => {
      const customDate = new CustomDate(2023, 8, 2);
      expect(customDate.day).toBe("Saturday");
    });

    // Test case for getting the day of the week
    it("should return the correct day of the week when provide date string", () => {
      const customDate = new CustomDate("January 1, 1970");
      expect(customDate.day).toBe("Thursday");
    });

    // Test case for getting the abbreviated day of the week
    it("should return the correct abbreviated day of the week", () => {
      const customDate = new CustomDate(2023, 8, 2);
      expect(customDate.dy).toBe("Sat");
    });

    // Test case for getting the abbreviatedday of the week
    it("should return the correct abbreviated day of the week when provide date string", () => {
      const customDate = new CustomDate("January 1, 1970");
      expect(customDate.dy).toBe("Thur");
    });
  });

  describe("Month() and Mon()", () => {
    // Test case for getting the date
    it("should return the correct date", () => {
      const customDate = new CustomDate(2023, 8, 2);
      expect(customDate.date).toBe(2);
    });

    // Test case for getting the date with date string
    it("should return the correct date when provided date string", () => {
      const customDate = new CustomDate("January 1, 1970");
      expect(customDate.date).toBe(1);
    });

    // Test case for getting the date
    it("should return the correct date", () => {
      const customDate = new CustomDate(2023, 8, 2, 15, 30, 45);
      expect(customDate.date).toBe(2);
    });
  });

  describe("Hour(), Min() and Sec()", () => {
    // Test case for getting the hour
    it("should return the correct hour", () => {
      const customDate = new CustomDate(2023, 8, 2, 15, 30, 45);
      expect(customDate.hour).toBe(15);
    });

    // Test case for getting the minutes
    it("should return the correct minutes", () => {
      const customDate = new CustomDate(2023, 8, 2, 15, 30, 45);
      expect(customDate.min).toBe(30);
    });

    // Test case for getting the seconds
    it("should return the correct seconds", () => {
      const customDate = new CustomDate(2023, 8, 2, 15, 30, 45);
      expect(customDate.secs).toBe(45);
    });
  });

  describe("format()", () => {
    it("should format date using default format (M D Y)", () => {
      const customDate = new CustomDate(2023, 8, 2, 15, 30, 45);
      const formattedDate = customDate.format();
      expect(formattedDate).toBe("September 02 2023");
    });

    it("should format date with 7/m/d", () => {
      const customDate = new CustomDate(2023, 8, 2, 15, 30, 45);
      const formattedDate = customDate.format("y/m/d");
      expect(formattedDate).toBe("23/Sep/2");
    });

    it("should format date padded hours, minutes and seconds", () => {
      const customDate = new CustomDate(2017, 0, 2, 3, 4, 5);
      const formattedDate = customDate.format("H:I:S");
      expect(formattedDate).toBe("03:04:05");
    });

    it("should format date un-padded hours, minutes and seconds)", () => {
      const customDate = new CustomDate(2017, 0, 2, 3, 4, 5);
      const formattedDate = customDate.format("h:i:s");
      expect(formattedDate).toBe("3:4:5");
    });

    it("should format date with full month", () => {
      const customDate = new CustomDate(2023, 8, 2, 15, 30, 45);
      const formattedDate = customDate.format("Y-M-D h:I:S");
      expect(formattedDate).toBe("2023-September-02 15:30:45");
    });

    it("should format date with ordinal suffix: st", () => {
      const customDate = new CustomDate("January 1, 1970");
      const formattedDate = customDate.format("# m Y");
      expect(formattedDate).toBe("1st Jan 1970");
    });
  });
  describe("when()", () => {
    it('should return "Just now" for the current date', () => {
      const currentDate = new CustomDate();
      const when = currentDate.when();
      expect(when).toBe("This date is happening now");
    });

    it('should return "X days ago" for a date 4 days ago', () => {
      const fiveMinutesAgo = new CustomDate(2023, 8, 2); // 5 minutes ago
      const when = fiveMinutesAgo.when();
      expect(when).toBe("This date occurred 3 days ago");
    });

    it('should return "Tomorrow" for a date 1 day from now', () => {
      const tomorrow = new CustomDate(
        new Date().setDate(new Date().getDate() + 1)
      ); // 1 day from now
      const when = tomorrow.when();
      expect(when).toBe("This date will occur in 1 day");
    });

    it('should return "Yesterday" for a date 1 day ago', () => {
      const yesterday = new CustomDate(
        new Date().setDate(new Date().getDate() - 1)
      ); // 1 day ago
      const when = yesterday.when();
      expect(when).toBe("This date occurred 1 day ago");
    });

    it('should return "This date will occur in X days" for a future date', () => {
      // Create a date 5 days from now
      const futureDate = new CustomDate(
        new Date().setDate(new Date().getDate() + 5)
      ); // 5 days from now
      const when = futureDate.when();
      expect(when).toBe("This date will occur in 5 days");
    });

    it('should return "This date occurred X minutes ago" for a date in the past', () => {
      // Create a date 30 minutes ago
      const pastDate = new CustomDate(new Date() - 30 * 60 * 1000); // 30 minutes ago
      const when = pastDate.when();
      expect(when).toBe("This date occurred 30 minutes ago");
    });
  });
});
