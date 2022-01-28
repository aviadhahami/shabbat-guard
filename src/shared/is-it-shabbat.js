function isItShabbat() {
    const now = Date();
    // Get our utc offset
    const offset = now.getTimezoneOffset() / 60 ; // offset is minutes, translate into hours

    // get shabbat times at utc+0

}


module.exports = isItShabbat;
