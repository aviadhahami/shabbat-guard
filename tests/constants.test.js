const {GET_SHABBAT_AT_LONDON_URI} = require('../src/constants/apis.js')
describe("Constants test suite", () => {
    it('should get a url', function () {
        const url = new URL(GET_SHABBAT_AT_LONDON_URI)
        expect(url.hostname).toEqual('www.hebcal.com')
        expect(url.searchParams.get('city')).toEqual('GB-London') // the only thing we actually care
    });
})
