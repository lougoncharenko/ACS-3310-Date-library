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
  
  get formatMonth() {
    return this._date.getMonth()+1
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

  format(mask = 'M D Y') {
    let formattedDate = '';
    let buffer = '';

    for (let i = 0; i < mask.length; i++) {
      const char = mask[i];

      if (char === 'Y') {
        buffer += this.year;
      } else if (char === 'y') {
        buffer += this.yr;
      } else if (char === 'M') {
        buffer += this.month;
      } else if (char === 'm') {
        buffer += this.mon
      } else if (char === 'D') {
        buffer += this.addNumberPadding(this.date);
      } else if (char === 'd') {
        buffer += this.date;
      } else if (char === '#') {
        buffer += this.getDateWithOrdinalSuffix(this.date);
      } else if (char === 'H') {
        buffer += this.addNumberPadding(this.hour);
      } else if (char === 'h') {
        buffer += this.hour;
      } else if (char === 'I') {
        buffer += this.addNumberPadding(this.min);
      } else if (char === 'i') {
        buffer += this.min;
      } else if (char === 'S') {
        buffer += this.addNumberPadding(this.secs);
      } else if (char === 's') {
        buffer += this.secs;
      } else {
        buffer += char;
      }

      // Check the next character, if it's not the same format character, add the buffer to the formatted date
      if (mask[i + 1] !== char) {
        formattedDate += buffer;
        buffer = '';
      }
    }

    return formattedDate;
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

module.exports.CustomDate = CustomDate;
