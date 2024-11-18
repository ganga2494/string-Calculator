class StringCalculator {
    add(numbers) {
      if (numbers === '') return 0;
      return numbers.split(',').reduce((sum, num) => sum + parseInt(num, 10), 0);

    }

  }
module.exports = StringCalculator; 
