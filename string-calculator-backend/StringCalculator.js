class StringCalculator {
    add(numbers) {
        if (numbers === '') return 0;
        numbers = numbers.replace(/\\n/g, '\n');
        // Check for custom delimiter
        if (numbers.startsWith('//')) {
            const delimiterLineEnd = numbers.indexOf("\n");
            const delimiterLine = numbers.slice(2, delimiterLineEnd);  // Extract the delimiter
            const delimiter = delimiterLine.slice(0, delimiterLine.length);  // Handle custom delimiter length

            // Get the numbers part after the newline
            const numbersPart = numbers.slice(delimiterLineEnd + 1);

            // Use the delimiter to split the numbers
            const numArray = numbersPart.split(delimiter).map(Number);

            // Check for negative numbers and throw an error if any exist
            const negatives = numArray.filter(num => num < 0);
            if (negatives.length > 0) {
                throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
            }

            // Return the sum of the numbers
            return numArray.reduce((sum, num) => sum + num, 0);
        }

        // Split numbers using the delimiter and parse them to integers
        else {
            // If no custom delimiter, split by commas (default behavior)
            const numArray = numbers.split(',').map(Number);

            // Check for negative numbers and throw an error if any exist
            const negatives = numArray.filter(num => num < 0);
            if (negatives.length > 0) {
                throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
            }

            // Return the sum of the numbers
            return numArray.reduce((sum, num) => sum + num, 0);
        }
    }

}
module.exports = StringCalculator; 
