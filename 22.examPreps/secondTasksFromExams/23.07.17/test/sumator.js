let expect = require('chai').expect;

class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

describe('Sumator tester', () => {
    let sumator;

    beforeEach(function() {
        sumator = new Sumator();
    });

    it('should have all functions', () => {
       expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
    });

    it('must add items of any type', () => {
       sumator.add(5);
       sumator.add('pesho');
       sumator.add(false);
       expect(sumator.toString()).to.equal("5, pesho, false");
    });

    it('must sum only the numbers', () => {
        sumator.add(5);
        sumator.add('pesho');
        sumator.add(5);
        sumator.sumNums();
        expect(sumator.toString()).to.equal('10');
    });

    it('must sum only the numbers or return 0', () => {
        sumator.add('pesho');
        sumator.add('gosho');
        sumator.add('tosho');
        expect(sumator.sumNums()).to.equal(0);
    });

    it('must remove by filter', () => {
        sumator.add('pesho');
        sumator.add('gosho');
        sumator.add(5);
        sumator.removeByFilter(Number);
        expect(sumator.toString()).to.equal('pesho, gosho');
    });

    it('must have working toString function', () => {
        sumator.add('pesho');
        sumator.add('gosho');
        sumator.add(5);
        sumator.add(false);
        expect(sumator.toString()).to.equal('pesho, gosho, 5');
    });

    it('must return empty', () => {
        expect(sumator.toString()).to.equal('(empty)');
    });
});