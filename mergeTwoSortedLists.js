// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

//Create a dummy head for the new linked list
// While loop that iterates while list1 and list2 are not null
// Define the value of each node so let val1 = list1.val and let val2 = list2.val
// the only iteration that we need to check if either value is larger than the other is on the second iteration. There are no edge cases where this might be different. Also, we need to figure out how to move two list values to the dummy head list. Maybe assign it do the dummyHead.val? Where we got too here: If val2 > val1 dummyHead.push(val1) else dummyHead.push(val1) and dummyHead.push(val2)
// Return dummyHead

var mergeTwoLists = function (list1, list2) {};
