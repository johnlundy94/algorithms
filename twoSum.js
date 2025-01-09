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

const nums = [3, 3];
const target = 6;
// Output: [0,1]

//We want to create a map instance and then set each nums[i] to the map. We want to then check if the nums[i] - target is equal to a number that we already have in our array. Return that number

var twoSum = function (nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i];
    }
    numsMap.set(nums[i], i);
  }
  return [];
};

console.log(twoSum(nums, target));
