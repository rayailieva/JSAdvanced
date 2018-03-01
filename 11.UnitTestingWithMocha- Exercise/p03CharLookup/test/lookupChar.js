let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Char lookup tester', () => {

    it('input type of first parameter should be a string', () => {

        expect(lookupChar({name: 'Gosho'}, 0)).to.equal(undefined);

    });
    it('input type of first parameter should be a string', () => {

        expect(lookupChar(2,0)).to.equal(undefined);

    });
    it('input type of second parameter should be a number', () => {

        expect(lookupChar('yes', 'yes')).to.equal(undefined);

    });
    it('input type of second parameter should be a number', () => {

        expect(lookupChar('yes', {age: 'fifteen'})).to.equal(undefined);

    });
    it('input type of second parameter should be a number', () => {

        expect(lookupChar('yes', 3.14)).to.equal(undefined);

    });

    it('the index should be a valid value', () => {

        expect(lookupChar('pesho', -1)).to.equal('Incorrect index');
    });
    it('the index should be a valid value', () => {

        expect(lookupChar('pesho', 5)).to.equal('Incorrect index');
    });
    it('the index should be a valid value', () => {

        expect(lookupChar('pesho', 8)).to.equal('Incorrect index');
    });

    it('valid input should return result', () => {

        expect(lookupChar('berry', 2)).to.equal('r');
    })

});

