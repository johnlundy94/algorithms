// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input:
let s = "([])";

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Lets see if we can solve this using a Map.
// Declare a Map object
// Iterate through s
// Declare an if statement check
// if s[i] = ) && Map.has("(") return true
// if s[i] = ] && Map.has("[") return true
// if s[i] = } && Map.has("{") return true
// Inside the if statement's return statement we want to then return true
// Then declare outside the if statement to Map.set(s[i], i)
// Outside the for loop return false if no solution was found
var isValid = function (s) {
  const parenMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if ((s[i] = ")" && parenMap.has("("))) {
      return true;
    } else if ((s[i] = "]" && parenMap.has("["))) {
      return true;
    } else if ((s[i] = "}" && parenMap.has("{"))) {
      return true;
    }
    parenMap.set(s[i], i);
  }
  return false;
};

console.log(isValid(s));
