let expect = require('chai').expect;

function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

describe('makeList tester', () => {
    let list = {};
    beforeEach(function () {
        list = makeList();
    });

    it("should contain all properties", function () {
        expect(list.addLeft).to.exist;
        expect(list.clear).to.exist;
        expect(list.toString).to.exist;
    });

    it('should hold items of any type with addLeft', () => {
       list.addLeft(1);
       list.addLeft('pesho');
       list.addLeft(2);
       expect(list.toString()).to.equal('2, pesho, 1');
    });

    it('should hold items of any type with addRight', () => {
        list.addRight(1);
        list.addRight('gosho');
        list.addRight(2);
        expect(list.toString()).to.equal('1, gosho, 2');

    });
    it('should hold items of any type with add', () => {
        list.addRight(1);
        list.addLeft('gosho');
        list.addRight(2);
        list.addLeft(3);
        expect(list.toString()).to.equal('3, gosho, 1, 2');

    });

    it('should remove all elements with clear', () => {
        list.addRight(1);
        list.addLeft('gosho');
        list.addRight(2);
        list.clear();
        expect(list.toString()).to.equal('');

    });

});