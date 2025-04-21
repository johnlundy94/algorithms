// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Defining input
const nums = [3, 3];
const target = 6;
// Output: [0,1]

// Declares a function twoSum that takes two parameters, the nums array and the target sum, the function will then return an array of two indices.
var twoSum = function (nums, target) {
  // Creates a Map objects to store numbers from nums as keys and their indices as values. A Map object allows for O(1) because you are able to pass through it one time. Keys will be the numbers and the values will be their indices.
  const numsMap = new Map();

  // Iterates through the array nums. Each iteration processes one number and checks if its complement exists in numsMap.
  for (let i = 0; i < nums.length; i++) {
    // Calculates the complement, or the number needed to reach target when added to nums[i]. Keep in mind that complement is a query we use to check if a number we need exists in numsMap.
    const complement = target - nums[i];

    // This checks if the complement exists as a key in numsMap.
    if (numsMap.has(complement)) {
      // This returns the indeces of the two numbers that sum to target. numsMap.get(complement) retrieves the index j where complement was stored, or in other words in is retrieving the index of the number (key) that was previously stored in numsMap using set(). i is the current index. This sets up the return to be [j, i]
      return [numsMap.get(complement), i];
    }
    // Stores the current number and its index in numsMap for future complement checks.
    numsMap.set(nums[i], i);
  }
  // returns an array if no solution was found.
  return [];
};

console.log(twoSum(nums, target));

// .has(key) checks if a key exists.
// .get(key) Retrieves the value associated with a key.
// .set(key, value) Adds or updates a key-value pair in the Map.
