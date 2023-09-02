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
    const months = [
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
    return months[this._date.getMonth()];
  }

  get mon() {
    // getter starts with get
    const months = [
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
    return months[this._date.getMonth()];
  }

  get day() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeekNumber = this._date.getDay();
    return daysOfWeek[dayOfWeekNumber];
  }

  get dy() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayOfWeekNumber = this._date.getDay();
    return daysOfWeek[dayOfWeekNumber];
  }

  get date() {
    return this._date.getDate()
  }

  get hour() {
    return this._date.getHours()
  }

  get min() {
    return this._date.getMinutes()
  }

  get secs() {
    return this._date.getSeconds()
  }
  
}

const a = new CustomDate(); // no parameters
const b = new CustomDate("January 1, 1970"); // with a string
const c = new CustomDate(2001, 4, 12, 16, 45); // with year, month, date, hours, mins
const d = new CustomDate(new Date()); // with another date object
const e = new CustomDate("9/26/1965");
console.log(a.date);
console.log(b.day, b.dy);
console.log(c.day, c.dy);
console.log(d.day, d.dy);
console.log(e.day, e.dy);

module.exports.CustomDate = CustomDate;
