const {vanilla} = require("../index");
describe('Vanilla test suite', function () {
    it('Assert export as function', function () {
        expect(typeof vanilla === "function").toBeTruthy()
    });
});
