const HEB_CAL_URI = 'https://www.hebcal.com/shabbat'
const HEB_CAL_CONFIG = {
    cfg: 'json',
    m: 0,
    leyning: 'off',
    city: 'GB-London'
}

const GET_SHABBAT_AT_LONDON_URI = HEB_CAL_URI
    + '/?'
    + Object
        .entries(HEB_CAL_CONFIG)
        .reduce((acc, [key, value], index) =>
            acc + `${key}=${value}${index + 1 < Object.entries(HEB_CAL_CONFIG).length ? '&' : ''}`, '')


module.exports.GET_SHABBAT_AT_LONDON_URI = GET_SHABBAT_AT_LONDON_URI
