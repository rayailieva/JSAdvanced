let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('Math Enforcer tester', () => {

    describe('addFive func', () => {

        it('should accept a number as parameter', () => {

            expect(mathEnforcer.addFive('gosho')).to.equal(undefined);

        });
        it('should accept a number as parameter', () => {

            expect(mathEnforcer.addFive({name: 'gosho'})).to.equal(undefined);

        });
        it('should return the num with added 5', () => {

            expect(mathEnforcer.addFive(10)).to.equal(15);

        });
        it('should work with negative numbers', () => {

            expect(mathEnforcer.addFive(-5)).to.equal(0);

        });
        it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });

    });

    describe('substactTen func', () => {

        it('should accept a number as parameter', () => {

            expect(mathEnforcer.subtractTen('gosho')).to.equal(undefined);

        });
        it('should accept a number as parameter', () => {

            expect(mathEnforcer.subtractTen({name: 'gosho'})).to.equal(undefined);

        });

        it('should return the num with 10 subtracted', () => {

            expect(mathEnforcer.subtractTen(20)).to.equal(10);

        });
        it('should work with negative numbers', () => {

            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);

        });
        it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        });

    });

    describe('sum', () => {

        it('first input parameter should be a number', () => {
            expect(mathEnforcer.sum('gosho', 2)).to.equal(undefined);

        });
        it('first input parameter should be a number', () => {
            expect(mathEnforcer.sum({name: 'gosho'}, 2)).to.equal(undefined);

        });
        it('second input parameter should be a number', () => {
            expect(mathEnforcer.sum(2, 'alabala')).to.equal(undefined);

        });
        it('second input parameter should be a number', () => {
            expect(mathEnforcer.sum(2, {name: 'alabala'})).to.equal(undefined);

        });
        it('must return the numbers sum if the input type is valid', () => {
           expect(mathEnforcer.sum(2, 3)).to.equal(5);

        });
        it('must return the numbers sum if the input type is valid', () => {
            expect(mathEnforcer.sum(-2, 3)).to.equal(1);

        });
        it('must return the numbers sum if the input type is valid', () => {
            expect(mathEnforcer.sum(2, -3)).to.equal(-1);

        });
        it("should return correct result for integer parameters", function () {
            expect(mathEnforcer.sum(5, -3)).to.be.equal(2);
        });
        it("should return correct result for floating point parameters", function () {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
        });

    });

});
