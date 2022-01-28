const isItShabbat = require('../src/shared/is-it-shabbat')
describe('Is-it-shabbat-suite', () => {
    it('should export a function', function () {
        expect(typeof isItShabbat).toEqual('function')
    });
    it('should return false for Sunday Jan23rd', async function () {
        const sunday8AM = new Date('23 Jan 2022 00:00:00 GMT')
        expect(await isItShabbat(sunday8AM)).toBeFalsy()
    });
})
