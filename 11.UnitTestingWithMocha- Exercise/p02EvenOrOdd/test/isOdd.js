let expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("Even or Odd tester", () => {

    it('with a number parameter, should return undefined', () => {

        expect(isOddOrEven(3)).to.equal(undefined);

    });
    it('with an object parameter, should return undefined', () => {

        expect(isOddOrEven({name: 'pesho'})).to.equal(undefined);

    });
    it('should return even for strings with even length', () => {

        expect(isOddOrEven('cats')).to.equal("even");

    });
    it('should return odd for strings with odd length', () => {

        expect(isOddOrEven('cat')).to.equal("odd");

    });


});
