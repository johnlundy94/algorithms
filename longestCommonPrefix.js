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
//Here we are first stating that if the strs length is 0 then we return an empty string as instructed. Then we declare a variable with the name of prefix and set it to an empty string and another variable that is set to the first string in the array. After, we run a for loop that iterates through the first string setting each character to a variable called char. Then we run an inner for loop that runs while the outer for loop is running so that we can then run a check asking if the index of the first string is past the length of the other strings, or, the
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = "";
  let firstString = strs[0];

  for (let i = 0; i < firstString.length; i++) {
    let char = firstString[i];

    for (let j = 0; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }

  return prefix;
};

console.log(longestCommonPrefix(strs));
