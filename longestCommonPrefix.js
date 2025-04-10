// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input:
let strs = ["flower", "flow", "flight"];
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
var longestCommonPrefix = function (strs) {
  // Edge case to test, if there is no input in array in the strs value, we return an empty string.
  if (strs.length === 0) return "";

  // This initializes the string as we build it
  let prefix = "";
  // This assigns the first string in the array to firstString
  let firstString = strs[0];

  // We are iterating over each letter in the first string
  for (let i = 0; i < firstString.length; i++) {
    // Here we are grabbing the current character iteration and assigning it to char
    let char = firstString[i];

    // This now starts a nested loop that loops over all the strings in the strs array
    for (let j = 0; j < strs.length; j++) {
      // First we check if the outer loop has exceeded the other string's length or if the current character at position i does not match the current char value then we return the prefix ending the loop.
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }
    // Here we add the char value to the prefix value string if the checks are met.
    prefix += char;
  }
  // We are returning the prefix value. Keep in mind that the reason this return prefix is here with the inner loop return prefix, is because we want the edge case where if the first string's characters match all the other characters in the strings, such as strs = ["flow", "flowing", "flowed"]
  return prefix;
};

console.log(longestCommonPrefix(strs));
