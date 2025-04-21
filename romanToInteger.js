// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//We are just adding, with the need of handling the edge cases for when I is before V ir X, X is before L and C, or C is before D and M. We could have a local number variable and take each letter, match it to the according number and the add it to the num variable.
// 1000 M
// 900 C
// 1900 M
// 1890 X
// 1990 C
// 1989 I
// 1994 V

// Defines the input string s as "III", which should convert to 3.
const s = "III";

// Defines a function romanToInt that takes a string s (the Roman Numeral) and returns an integer.
var romanToInt = function (s) {
  // This is a hash map to map Roman numeral symbols to their integer values. This allows quick lookup of symbol's value.
  const numMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // Initializes a variable num to store the running total of the integer value. As we process each character, we'll add or subtract values to num to build the final result.
  let num = 0;

  // For loop iterating through the roman numeral.
  for (let i = 0; i < s.length; i++) {
    // Gets the integer value of the current Roman numeral symbol.
    const currentVal = numMap[s[i]];

    // Gets the integer value of the next Roman numeral (if it exists) or 0.
    const nextVal = numMap[s[i + 1]] || 0;

    // Determines whether to add or subtract the current symbol's value based on its relationship with the next symbol.
    if (currentVal < nextVal) {
      num -= currentVal;
    } else {
      num += currentVal;
    }
  }

  // We are returning the num variables assigned integer after the for loop is checked
  return num;
};

console.log(romanToInt(s));
