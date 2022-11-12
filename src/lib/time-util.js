/**
 * converts the given date into UTC timezone date format and removes the time.
 * @param {Date} date 
 * @returns UTC Date in JSON string format.
 */
export function toUTCDate(date = new Date()) {
    date = new Date(date);
    return new Date(Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
    )).toJSON();
}

/**
 * converts the given date into UTC timezone date format. This method preserves both the date and time.
 * @param {Date} date 
 * @returns UTC Date in JSON string format.
 */
 export function toUTCDateTime(date = new Date()) {
    date = new Date(date);
    date = new Date(Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    ));
    return new Date((date.getTime() - (new Date()).getTimezoneOffset() * 60000)).toJSON();
}

/**
 * converts the given UTC date into the local timezone date format.
 * @param {Date} date 
 * @returns Date in UTC string format.
 */
 export function fromUTCDate(date = new Date()) {
    date = new Date(date);
    return new Date((date.getTime() + (new Date()).getTimezoneOffset() * 60000));
}