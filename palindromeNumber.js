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
    // This extracts the last digit. Remember the modulo operator gives the remainder when x is divided by 10. (1221, 1221 % 10 = 1)
    const lastDigit = x % 10;

    // Append lastDigit to reversed by shifting reversed left (multiplying by 10) and adding the new digit. (x = 122. reversed = 1, lastDigit = 2. reversed = 1 * 10 + 2 = 12. Now, reversed = 12)
    reversed = reversed * 10 + lastDigit;

    // Remove the last digit from x. This truncates the decimal to get the integer part. This effectively removes the last digit from x. (x/10 = 1221/10 = 122.1. Math.floor(12.2) = 12. Now, x = 12)
    x = Math.floor(x / 10);
  }
  // Checks if the number is a palindrome by comparing the remaining x with reversed or an odd reversed number. x === Math.floor(reversed / 10) is taking an odd reversed ending of the original x and taking off the last digit (eg. 121, reversed at the end of the while loop is going to be 12. Yet 12 does not equal 1 so we need to check that the number after the remainder is equal to x)
  return x === reversed || x === Math.floor(reversed / 10);
};

console.log(isPalindrome(1221));
