// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?
//

// This defines a function isPalindrome that takes an integer x as input and returns a boolean (true if is a palindrome, false otherwise)
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    // in other words, negative numbers can't be palindromes, and any numbers, other than 0 cannot be palindromes.
    return false;
  }

  // Initialize a variable to store the reversed digits of x. We'll build the reversed number digit by digit. Start with 0 as the base.
  let reversed = 0;

  // Process the digits of x to build reversed, but only adding them to reversed.
  while (x > reversed) {
    // This extracts the last digit. Remember the modulo operator gives the remainder when x is divided by 10. (12, 12 % 10 = 2)
    const lastDigit = x % 10;

    // Append lastDigit to reversed by shifting reversed left (multiplying by 10) and adding the new digit. (x = 12. reversed = 0, lastDigit = 2. reversed = 0 * 10 + 2 = 2. Now, reversed = 2)
    reversed = reversed * 10 + lastDigit;

    // Remove the last digit from x. This truncates the decimal to get the integer part. This effectively removes the last digit from x. (x/10 = 12/10 = 1.2. Math.floor(1.2) = 1. Now, x = 1)
    x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
};

console.log(isPalindrome(12));
