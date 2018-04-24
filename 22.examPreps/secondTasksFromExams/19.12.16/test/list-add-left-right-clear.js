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

describe('makeList tester', ()=> {
    let list;

    beforeEach(function () {
        list = makeList();
    });

    it('should have addLeft func', () => {
       list.addLeft(2);
       list.addLeft('pesho');
       list.addLeft(5);
       expect(list.toString()).to.equal('5, pesho, 2');
    });
    it('should have addRight func', () => {
       list.addRight(5);
       list.addRight(true);
       list.addRight('pesho');
       expect(list.toString()).to.equal('5, true, pesho');
    });
    it('should have clear func', () => {
        list.addLeft(2);
        list.addLeft('pesho');
        list.addLeft(5);
        list.addRight(5);
        list.addRight(true);
        list.addRight('pesho');
        list.clear();
        expect(list.toString()).to.equal('');
    });
    it('should have toString func', () => {
        list.addLeft(2);
        list.addLeft('pesho');
        list.addLeft(5);
        list.addRight(5);
        list.addRight(true);
        list.addRight('pesho');
        expect(list.toString()).to.equal('5, pesho, 2, 5, true, pesho');
    });

});

