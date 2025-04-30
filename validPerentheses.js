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
let s = "([{}])";

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Defines a function isValid that takes a string s as input and returns a boolean.
var isValid = function (s) {
  // Creation of a Map object that maps each closing bracket to its corresponding open bracket. Keep in mind that we can take advantage of Map's key value pairing by finding the closing brackets opening pair.
  const parenMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  // initializes an empty array stack to store open brackets in the order they appear. This is last in first out LIFO. This way we can make sure that the brackets are closed in the correct order
  const stack = [];
  // iterating through the s string
  for (let i = 0; i < s.length; i++) {
    // checks if the current character is an open bracket
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      // if the previous check returns true then we push the open bracket to the stack array
      stack.push(s[i]);
      // handling the case where the character is a closing bracket
    } else {
      // Checks if the closing bracket is valid
      if (
        // The stack is empty, meaning  that there is no opening bracket matching the current closing bracket that is being checked
        stack.length === 0 ||
        // The most recent open bracket (top of stack), doesn't match the expected open bracket for the current closing bracket. Remember that the .get() method returns the key for that character that we are checking. Being that the closing brackets are set as the values in the Map we get back the corresponding opening bracket in parenMap.get(s[i])
        stack[stack.length - 1] !== parenMap.get(s[i])
      ) {
        // returns false if the closing bracket is invalid
        return false;
      }
      // Removes the top open bracket from the stack after a valid match. This allows us to then take out the opening brackets that were .push() into stack
      stack.pop();
    }
  }
  // after we .pop() the original opening brackets we are able to then check if there is any bracket remaining in stack. If there is a remaining bracket this will return false, yet if it is empty it will return true
  return stack.length === 0;
};

console.log(isValid(s));
