class StringCalculator {
    add(numbers) {
      if (numbers === '') return 0;
      let delimiter = /[\n,]/; // Default delimiters: comma and newline

      // Check for custom delimiter
      if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEnd));
        numbers = numbers.substring(delimiterEnd + 1);
      }
  
      // Split numbers using the delimiter and parse them to integers
      const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
  
      // Collect all negative numbers
      const negatives = numArray.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
      }
  
      // Sum all numbers, ignoring numbers > 1000
      return numArray.reduce((sum, num) => sum + (num <= 1000 ? num : 0), 0);
    }

  }
module.exports = StringCalculator; 
