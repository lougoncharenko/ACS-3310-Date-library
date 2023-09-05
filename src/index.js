class CustomDate {
  constructor(...args) {
    this._date = new Date(...args);
  }

  get dateNumber() {
    return this._date.toLocaleDateString();
  }

  get string() {
    return this._date.toString();
  }

  get year() {
    // getter starts with get
    return this._date.getFullYear(); // returns full year
  }

  get yr() {
    // getter starts with get
    return this._date.toLocaleDateString("en", { year: "2-digit" });
  }

  get month() {
    // getter starts with get
    return this.getMonthName(this._date.getMonth());
  }

  get mon() {
    // getter starts with get
    return this.getMonthName(this._date.getMonth(), true);
  }

  get day() {
    return this.getDayOfWeek(this._date.getDay())
  }

  get dy() {
    return this.getDayOfWeek(this._date.getDay(), true)
  }

  get date() {
    return this._date.getDate();
  }

  get hour() {
    return this._date.getHours();
  }

  get min() {
    return this._date.getMinutes();
  }

  get secs() {
    return this._date.getSeconds();
  }

  format(mask = 'Y-M-D H:I:S') {
    mask = mask.replace('Y', this.year);
    mask = mask.replace('y', this.yr);
    mask = mask.replace('M', this.month);
    mask = mask.replace('m', this.mon);
    mask = mask.replace('D', this.addNumberPadding(this.date));
    mask = mask.replace('d', this.addNumberPadding(this.date));
    mask = mask.replace('#', this.getDateWithOrdinalSuffix(this.date));
    mask = mask.replace('H', this.addNumberPadding(this.hour));
    mask = mask.replace('h', this.hour);
    mask = mask.replace('I', this.addNumberPadding(this.min));
    mask = mask.replace('i', this.min);
    mask = mask.replace('S', this.addNumberPadding(this.secs));
    mask = mask.replace('s', this.secs);

    return mask;
  }


   // helper functions
   
  addNumberPadding(number) {
    return number.toString().padStart(2, '0');
  }

  getDateWithOrdinalSuffix(day) {
    const suffixes = ['st', 'nd', 'rd'];
    const lastDigit = day % 10;
    const suffix = (lastDigit >= 1 && lastDigit <= 3 && day !== 11 && day !== 12 && day !== 13) ? suffixes[lastDigit - 1] : 'th';
    return day + suffix;
  }

  getMonthName(month, short = false) {
    const monthsFull = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthsShort = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return short ? monthsShort[month] : monthsFull[month];
  }

  getDayOfWeek(day, short = false) {
    const daysOfWeekFull = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const daysOfWeekShort = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return short ? daysOfWeekShort[day] : daysOfWeekFull[day];
  }

}

// const a = new CustomDate(); // no parameters
// const b = new CustomDate("January 1, 1970"); // with a string
// const c = new CustomDate(2001, 4, 12, 16, 45); // with year, month, date, hours, mins
// const d = new CustomDate(new Date()); // with another date object
// const e = new CustomDate("9/26/1965");

const customDate = new CustomDate(2023, 8, 2, 15, 30, 45);
const d = new CustomDate(2017, 0, 2, 3, 4, 5)
console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S'))
module.exports.CustomDate = CustomDate;
