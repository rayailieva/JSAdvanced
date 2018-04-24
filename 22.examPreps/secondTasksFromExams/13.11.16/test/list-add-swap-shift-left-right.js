let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe('createList tester', () => {
    let list;

    beforeEach(function () {
        list = createList();
    });

    it('should have add func', () => {
        list.add(5);
        list.add(true);
        list.add('pesho');
        list.add('gosho');
        expect(list.toString()).to.equal('5, true, pesho, gosho');
    });
    it('should have shiftLeft func', () => {
        list.add(5);
        list.add(true);
        list.add('pesho');
        list.add('gosho');
        list.shiftLeft();
        expect(list.toString()).to.equal('true, pesho, gosho, 5');
    });
    it('should have shiftRight func', () => {
        list.add(5);
        list.add(true);
        list.add('pesho');
        list.add('gosho');
        list.shiftRight();
        expect(list.toString()).to.equal('gosho, 5, true, pesho');
    });
    it('should have swap func', () => {
        list.add(5);
        list.add(true);
        list.add('pesho');
        list.add('gosho');
        list.swap(0, 2);
        expect(list.toString()).to.equal('pesho, true, 5, gosho');
    });
    it('should have swap func err', () => {
        list.add(5);
        list.add(true);
        list.add('pesho');
        list.add('gosho');
        list.swap(0, 0);
        expect(list.toString()).to.equal('5, true, pesho, gosho');
    });
    it('should have swap func err', () => {
        list.add(5);
        list.add(true);
        list.add('pesho');
        list.add('gosho');
        list.swap(0, 4);
        expect(list.toString()).to.equal('5, true, pesho, gosho');
    });
    it('should have swap func err', () => {
        list.add(5);
        list.add(true);
        list.add('pesho');
        list.add('gosho');
        list.swap(4, 1);
        expect(list.toString()).to.equal('5, true, pesho, gosho');
    });
    it('should have toString func', () => {
        list.add(5);
        list.add(true);
        list.add('pesho');
        list.add('gosho');
        expect(list.toString()).to.equal('5, true, pesho, gosho');
    });

});

