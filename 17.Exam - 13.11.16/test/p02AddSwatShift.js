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

describe('createList testing', () => {

    let list;
    beforeEach(function () {
        list = createList();
    });

    it('should add item', () =>{
        list.add(2);
        list.add(3);
        list.add('pesho');
        expect(list.toString()).to.equal('2, 3, pesho');
    });
    it('should shiftleft', () => {
        list.add(2);
        list.add(3);
        list.add(4);
        list.add('pesho');
        list.shiftLeft();
        expect(list.toString()).to.equal('3, 4, pesho, 2');

    });
    it('should shiftRight', () => {
        list.add(2);
        list.add(3);
        list.add(4);
        list.add('pesho');
        list.shiftRight();
        expect(list.toString()).to.equal('pesho, 2, 3, 4');

    });
    it('should swap', () => {
        list.add(1);
        list.add(2);
        list.swap(0,1);
        expect(list.toString()).to.equal('2, 1');

    });
    it('should swap', () => {
        list.add(1);
        list.add(2);
        expect(list.swap(-1, 1)).to.equal(false);

    });
    it('should swap', () => {
        list.add(1);
        list.add(2);
        expect(list.swap(0, 2)).to.equal(false);

    });
    it('should swap', () => {
        list.add(1);
        list.add(2);
        expect(list.swap(1, -1)).to.equal(false);

    });
    it('should swap', () => {
        list.add(1);
        list.add(2);
        expect(list.swap(5, 1)).to.equal(false);

    });
    it('should swap', () => {
        list.add(1);
        list.add(2);
        expect(list.swap(1, 1)).to.equal(false);

    });

});
