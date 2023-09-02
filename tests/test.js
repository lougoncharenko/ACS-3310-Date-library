const { CustomDate } = require("../src/index");

describe("CustomDate", () => {
  // Test case for initializing with no arguments
  it("should initialize with the current date and time when no arguments are provided", () => {
    const currentDate = new Date();
    const customDate = new CustomDate();
    expect(customDate.date).toBe(currentDate.toLocaleDateString());
  });

  // Test case for initializing with a date string
  it("should initialize with the provided date string", () => {
    const dateString = "January 1, 1970";
    const customDate = new CustomDate(dateString);
    expect(customDate.date).toBe(new Date(dateString).toLocaleDateString());
  });

  // Test case for initializing with year, month, date, hours, mins
  it("should initialize with the provided year, month, date, hours, mins", () => {
    const newDate = new Date(2001, 4, 12, 16, 45);
    const customDate = new CustomDate(2001, 4, 12, 16, 45);
    expect(customDate.date).toBe(newDate.toLocaleDateString());
  });

  // Test case for initializing with another date object
  it("should initialize with another date object", () => {
    const newDate = new Date(new Date());
    const customDate = new CustomDate(new Date());
    expect(customDate.date).toBe(newDate.toLocaleDateString());
  });

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
