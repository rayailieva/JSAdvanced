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

    it('must have all properties', () => {
        expect(PaymentPackage.prototype.hasOwnProperty('name')).to.equal(true);
        expect(PaymentPackage.prototype.hasOwnProperty('value')).to.equal(true);
        expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.equal(true);
        expect(PaymentPackage.prototype.hasOwnProperty('active')).to.equal(true);
        expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.equal(true);
    });

    it('Test with invalid params', function () {
        expect(() => new PaymentPackage()).to.throw();
        expect(() => new PaymentPackage(3,6,6)).to.throw();
        expect(() => new PaymentPackage({},'str',3)).to.throw();
    });

    it('must be throw errors when requirements are not met', () => {
        let payment = new PaymentPackage('book', 5);
       it('must have valid name', () => {
           expect(payment('', 5)).to.throw();
           expect(payment(4, 5)).to.throw();
           expect(payment(true, 5)).to.throw();
           expect(payment({age:54}, 5)).to.throw();
       });
        it('must have valid value', () => {
            expect(payment('pesho', -2)).to.throw();
            expect(payment('pesho', 'gosho')).to.throw();
            expect(payment('pesho', true)).to.throw();
            expect(payment('pesho', {age:54})).to.throw();
        });
        it('must have valid VAT', () => {
            expect(payment.VAT = -3).to.throw();
            expect(payment.VAT = 'pesho').to.throw();
            expect(payment.VAT = false).to.throw();
            expect(payment.VAT = {name:'gosho'}).to.throw();
        });
        it('must have valid active', () => {
            expect(payment.VAT = -3).to.throw();
            expect(payment.VAT = 'pesho').to.throw();
            expect(payment.VAT = 5).to.throw();
            expect(payment.VAT = {name:'gosho'}).to.throw();
        });
        it('must be initialized with 2 parameters', () => {
            expect(payment('')).to.throw();
        });
    });

    it('must have toString func', () => {
        let pay = new PaymentPackage('test', 2);

        pay.active = true;
        expect(pay.toString()).to.be.equal('Package: test\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4');

        pay.active = false;
        expect(pay.toString()).to.be.equal('Package: test (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4');
    });


});
