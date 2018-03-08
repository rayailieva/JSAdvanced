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

describe('sumator tester', () => {

    let list;

    beforeEach(function() {
        list = new Sumator();
    });

    it("should have all of the functions in it's prototype", () => {
        expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
    });

    it("should be able to add all kinds of elements", () => {
        list.add(2);
        list.add('pesho');
        list.add(true);
        list.add({name: 'gosho'});
    });
    it('should sum numbers from the data', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.sumNums()).to.equal(6);
    });
    it('should sum only the numbers in data', () => {
        list.add(1);
        list.add(2);
        list.add('pesho');
        list.add(1);
        list.add(true);
        list.add(3);
        list.add({name: 'gosho'});
        expect(list.sumNums()).to.equal(7);
    });
    it('should return 0 if the data is empty when the sum is called', () => {
        list.add('peshop');
        list.add('valio');
        list.add({name: 'gosho'});
        list.add(true);
        expect(list.sumNums()).to.equal(0);
    });
    it('should have a working remove function', () => {
        list.add('peshop');
        list.add('valio');
        list.add(2);
        list.add(3);
        list.removeByFilter(Number);
        expect(list.toString()).to.equal('peshop, valio');
    });
    it('should have a working toString function', () => {
        list.add('peshop');
        list.add('valio');
        list.add(2);
        list.add(3);
        expect(list.toString()).to.equal('peshop, valio, 2, 3');
    });
    it('should return empty if data is empty', () => {
        expect(list.toString()).to.equal('(empty)');
    });
});