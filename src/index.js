
class CustomDate {
    constructor(...args) {
        this._date = new Date(...args)
    }

    get date() {
        return this._date.toLocaleDateString()
    }

    get string() {
        return this._date.toString()
    }

    get year() { // getter starts with get
		return this._date.getFullYear() // returns full year
	}

    get yr() { // getter starts with get
        return this._date.toLocaleDateString('en', {year: '2-digit'})
	}

    get month() { // getter starts with get
        const months = ['January','February','March','April','May','June', 'July','August','September','October','November','December']
        return months[this._date.getMonth()]
	}

    get mon() { // getter starts with get
        const months = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
        return months[this._date.getMonth()]
	}

    get day() {

    }

    get dy() {

    }
}

const a = new CustomDate() // no parameters
const b = new CustomDate('January 1, 1970') // with a string
const c = new CustomDate(2001, 4, 12, 16, 45) // with year, month, date, hours, mins
const d = new CustomDate(new Date()) // with another date object
const e = new CustomDate('9/26/1965') 
console.log(a.year, a.yr)
console.log(b.year, b.yr)
console.log(c.year, c.yr)
console.log(d.year, d.yr)
console.log(e.year, e.yr)

module.exports.CustomDate = CustomDate;
