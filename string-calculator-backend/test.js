const StringCalculator = require('./StringCalculator');
describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(calculator.add("1")).toBe(1);
    });
    test('should return the sum of two comma-separated numbers', () => {
        expect(calculator.add("1,2")).toBe(3);
    });
    test('should handle multiple comma-separated numbers', () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    });
    test('should handle newlines as delimiters', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });
    test('should support custom delimiters', () => {
        expect(calculator.add("//;\n1;2;3")).toBe(6);
    });
    test('should throw an exception for negative numbers', () => {
        expect(() => calculator.add("1,-2,3")).toThrowError("Negative numbers not allowed: -2");
    });
    test('should throw an exception for multiple negative numbers', () => {
        expect(() => calculator.add('1,-2,-3,-4')).toThrowError('Negative numbers not allowed: -2, -3, -4');
      });

});