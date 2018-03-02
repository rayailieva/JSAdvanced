class Stringer{

    constructor(string, length){

        this.innerString = string;
        this.innerLength = length;
    }

    increase(n) {
        this.innerLength += n;
    }

    decrease(n) {
        this.innerLength -= n;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        }

        return this.innerString;
    }

}