const needle = require('needle')
const dayjs = require('dayjs')
const {GET_SHABBAT_AT_LONDON_URI} = require("../constants/apis");


let endTime, startTime;

async function fetchTimes() {
    const {body} = await needle('GET', GET_SHABBAT_AT_LONDON_URI, {json: true})
    body.items.forEach(entry => {
        if (entry.title.includes('Candle lighting')) {
            startTime = new Date(entry.date)
        } else if (entry.title.includes('Havdala')) {
            endTime = new Date(entry.date)
        }
    })
}

async function isItShabbat(dateToCheck = Date()) {
    if (!(endTime && startTime)) {
        await fetchTimes();
    }

    const now = new Date(Date.parse(dateToCheck));
    // Get our utc offset
    const offset = now.getTimezoneOffset() / 60; // offset is minutes, translate into hours

    console.log(offset);
    const startTimeAtReader = dayjs(startTime)//.add(offset, 'hours')
    const endTimeAtReader = dayjs(endTime)//.add(offset, 'hours')

    // get shabbat times at utc+0
    // TODO: how do we calculate? do we do the same like here?
    //https://github.com/yehiel9523/shabbatPackage/blob/main/package/isShabbat.mjs
    console.log({startTimeAtReader, endTimeAtReader});
    return true
}


module.exports = isItShabbat
