let expect = require('chai').expect;

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe('PaymentPackage tester', () => {

   it('must have all accessors', () => {
       expect(PaymentPackage.prototype.hasOwnProperty('name')).to.equal(true);
       expect(PaymentPackage.prototype.hasOwnProperty('value')).to.equal(true);
       expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.equal(true);
       expect(PaymentPackage.prototype.hasOwnProperty('active')).to.equal(true);
       expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.equal(true);
   });
   it('must have valid name', () => {
       let payment = new PaymentPackage('test', 2);
       expect(() => payment.name = 3).to.throw();
       expect(() => payment.name = '').to.throw();
       expect(() => payment.name = false).to.throw();
       expect(() => payment.name = {name:'gosho'}).to.throw();
   });
    it('must have valid value', () => {
        let payment = new PaymentPackage('test', 2);
        expect(() => payment.value = -3).to.throw();
        expect(() => payment.value = 'pesho').to.throw();
        expect(() => payment.value = false).to.throw();
        expect(() => payment.value = {name:'gosho'}).to.throw();
    });
    it('must have valid VAT', () => {
        let payment = new PaymentPackage('test', 2);
        expect(() => payment.VAT = -3).to.throw();
        expect(() => payment.VAT = 'pesho').to.throw();
        expect(() => payment.VAT = false).to.throw();
        expect(() => payment.VAT = {name:'gosho'}).to.throw();
    });
    it('must have valid active', () => {
        let payment = new PaymentPackage('test', 2);
        expect(() => payment.active = -3).to.throw();
        expect(() => payment.active = 'pesho').to.throw();
        expect(() => payment.active = 5).to.throw();
        expect(() => payment.active = {name:'gosho'}).to.throw();
    });
    it('must be instantiated with two valid parameters', () => {
        let payment = new PaymentPackage('test', 2);
        expect(() => payment('test')).to.throw();
        expect(() => payment(2)).to.throw();
        expect(() => payment()).to.throw();
        expect(() => payment('test', 'test')).to.throw();
        expect(() => payment('test', 3, 3)).to.throw();
        expect(() => payment(3, 'test')).to.throw();
        expect(() => payment('test', {name:'k'})).to.throw();
        expect(() => payment('test', false)).to.throw();
        expect(() => payment({name:'k'}, 2)).to.throw();
        expect(() => payment(false, 2)).to.throw();
    });
    it('must have working toString func', () => {
        let payment = new PaymentPackage('test', 2);

        payment.active = true;
        expect(payment.toString()).to.equal('Package: test\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4');

        payment.active = false;
        expect(payment.toString()).to.equal('Package: test (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4')
    });

});