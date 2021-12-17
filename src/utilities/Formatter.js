
export class Formatter {
    static getDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    static ToLongDate(date) {
        const d = new Date(date)//date= yyyy-MM-dd
        if (this.isValidDate(d)) {
            const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasım", "Aralık"]
            let dateValues = date.split('-')
            console.log(dateValues)
            return (dateValues[2] +" "+ months[parseInt(dateValues[1])] + " " + dateValues[0])
        }
        return undefined
    }

    static isValidDate(d) {
        return d instanceof Date && !isNaN(d);
    }


    static CreditCardNumber(value) {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4))
        }
        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    }

}