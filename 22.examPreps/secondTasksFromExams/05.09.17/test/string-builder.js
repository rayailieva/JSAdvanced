let expect = require('chai').expect;

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for(let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

describe('StringBuilder tester', () => {

    let builder;

    beforeEach(function() {
        builder = new StringBuilder();
    });

    it('must not throw error when with string', () => {
        let initParam = () => builder = new StringBuilder('hello');
        expect(initParam).to.not.throw();
    });

    it('invalid constructor parameter', function () {
        let willThrow = () => builder = new StringBuilder(5);
        expect(willThrow).to.throw();
    });

    it('must have all the functions', () => {
        expect(StringBuilder.prototype.hasOwnProperty('append')).to.equal(true);
        expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.equal(true);
        expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.equal(true);
        expect(StringBuilder.prototype.hasOwnProperty('remove')).to.equal(true);
        expect(StringBuilder.prototype.hasOwnProperty('toString')).to.equal(true);
    });

    it('must append strings', () => {
      builder.append('pesho');
      builder.append('gosho');
      expect(builder.toString()).to.equal('peshogosho')
    });

    it('must prepend strings', () => {
       builder.prepend('gosho');
       builder.prepend('pesho');
       expect(builder.toString()).to.equal('peshogosho')
    });

    it('must insert at given index', () => {
        builder.prepend('gosho');
        builder.append('gosho');
        builder.insertAt('valio', 1);
        expect(builder.toString()).to.equal('gvaliooshogosho')
    });

    it('must remove at given index', () => {
        builder.prepend('gosho');
        builder.append('gosho');
        builder.insertAt('valio', 1);
        builder.remove(1,5);
        expect(builder.toString()).to.equal('goshogosho');
    });

    it('must stringify the input', () => {
        builder.prepend('gosho');
        builder.append('gosho');
        builder.insertAt('valio', 1);
        builder.remove(1,5);
        expect(builder.toString()).to.equal('goshogosho');
    });

    it('must throw errors', () => {
       expect(() => builder.append(5)).to.throw('Argument must be string');
       expect(() => builder.prepend(5)).to.throw('Argument must be string');
       expect(() => builder.insertAt(5,5)).to.throw('Argument must be string');
       expect(() => builder.insertAt(5, 'pesho')).to.throw('Argument must be string');
    });
});
