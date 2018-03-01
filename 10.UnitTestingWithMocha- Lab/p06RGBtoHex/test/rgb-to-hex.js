let expect = require('chai').expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('Rgb to Hex', () => {

    describe('General tests', () => [

        it('should be a function', () => {

            expect(typeof rgbToHexColor).to.equal('function');

        }),
        it('should take three parameters', () => {

            expect(rgbToHexColor.length).to.equal(3);

        })
    ]);

    describe('Valid values tests', () => [

        it("should return #FF9EAA for (255, 158, 170)", () => {
            expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
        }),

        it("should return #0C0D0E for (12, 13, 14)", () => {
            expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
        }),

        it("should return #000000 for (0, 0, 0)", () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        }),

        it("should return #FFFFFF for (255, 255, 255)", () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        }),
    ]);

    describe("Invalid input tests", () => [
        it("should return undefined for (-1, 10, 10)", () => {
            expect(rgbToHexColor(-1, 10, 10)).to.equal(undefined);
        }),

        it("should return undefined for (10, -1, 10)", () => {
            expect(rgbToHexColor(10, -1, 10)).to.equal(undefined);
        }),

        it("should return undefined for (10, 10, -1)", () => {
            expect(rgbToHexColor(10, 10, -1)).to.equal(undefined);
        }),

        it("should return undefined for (256, 10, 10)", () => {
            expect(rgbToHexColor(256, 10, 10)).to.equal(undefined);
        }),

        it("should return undefined for (10, 256, 10)", () => {
            expect(rgbToHexColor(10, 256, 10)).to.equal(undefined);
        }),

        it("should return undefined for (10, 10, 256)", () => {
            expect(rgbToHexColor(10, 10, 256)).to.equal(undefined);
        }),

        it("should return undefined for (3.14, 10, 256) ", () => {
            expect(rgbToHexColor(3.14, 10, 256)).to.equal(undefined);
        }),

        it("should return undefined for (10, 2.71, 256) ", () => {
            expect(rgbToHexColor(10, 2.71, 256)).to.equal(undefined);
        }),

        it("should return undefined for (10, 10, 1.61) ", () => {
            expect(rgbToHexColor(10, 10, 1.61)).to.equal(undefined);
        }),

        it("should return undefined for ('10', 10, 256)", () => {
            expect(rgbToHexColor('10', 10, 256)).to.equal(undefined);
        }),

        it("should return undefined for (10, [], 256)", () => {
            expect(rgbToHexColor(10, [], 256)).to.equal(undefined);
        }),

        it("should return undefined for (10, 10, {})", () => {
            expect(rgbToHexColor(10, 10, {})).to.equal(undefined);
        }),
    ]);

});