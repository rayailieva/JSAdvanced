let expect = require('chai').expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


describe('isSymmetric', function () {

    describe('General tests', () => [

        it('should be a function', function () {

            expect(typeof isSymmetric).to.equal('function');
        }),

    it('should have an array as input', function () {

        expect(isSymmetric({})).to.be.false;
    })
    ]);


    describe('Value tests', () => [

        it('should return true for [1, 2, 3, 3, 2, 1]', () => {

            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;

        }),

        it('should return false for [1, 2, 3, 3, 2, 5]', () => {

           expect(isSymmetric([1, 2, 3, 3, 2, 5])).to.be.false;
        }),
        it('should return true for [1, 2, 3, 2, 1]', () => {

            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        }),
        it('should return false for [1, 2, 3, 2, 5]', () => {

            expect(isSymmetric([1, 2, 3, 2, 5])).to.be.false;
        }),
        it('should return true for [1]', () => {

            expect(isSymmetric([1])).to.be.true;

        }),
        it('should return false for [1, 2]', () => {

            expect(isSymmetric([1,2])).to.be.false;

        }),
        it("should return true for [5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5]", () => {
            expect(isSymmetric([5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5])).to.be.true;
        }),

        it("should return false for [5, 'hi', {b:5}, new Date(), {a:5}, 'hi', 5]", () => {
            expect(isSymmetric([5, 'hi', {b:5}, new Date(), {a:5}, 'hi', 5])).to.be.false;
        })

    ])
});




