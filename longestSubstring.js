// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
  // start of the current window
  let start = 0;
  // Tracks the maximum length of a valid substring
  let maxLen = 0;
  // Has map to store the last seen index of each character. A hash map where keys are characters and values are their most recent indices in the string.
  let usedChar = {};

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    //If we have seen this character and it's last seen position is within the current window
    if (usedChar[currentChar] !== undefined && usedChar[currentChar] >= start) {
      //If a duplicate is found, move the window's start to the index after the last occurrence of the duplicate character. This removes the duplicate and all characters before it from the window.
      start = usedChar[currentChar] + 1;
    }

    //update the last seen index of the current character
    usedChar[currentChar] = i;

    //Calculate the length of the current window, from start to i
    const windowLength = i - start + 1;
    // Updates maxLen if the current window is longer than the previous maximum
    maxLen = Math.max(maxLen, windowLength);
  }
  return maxLen;
};

//
