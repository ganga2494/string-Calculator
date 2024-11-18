const StringCalculator = require('./StringCalculator');
describe('StringCalculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new StringCalculator();
    });
  
    it('should return 0 for an empty string', () => {
      expect(calculator.add("")).toBe(0);
    });
  });