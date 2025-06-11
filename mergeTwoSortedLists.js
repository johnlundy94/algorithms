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

var mergeTwoLists = function (list1, list2) {
  // Create a dummy nose to serve as the start of the merged list
  let dummyHead = new ListNode(0);
  // remember that nodes are objects. When you create a ListNode class you are creating in this instance {val: 0, next: null} these are just standard properties
  let current = dummyHead;

  while (list1 !== null && list2 !== null) {
    let val1 = list1.val;
    let val2 = list2.val;

    if (val2 > val1) {
      // Point current's next to the smaller node
      current.next = list1;
      // advance list1
      list1 = list1.next;
    } else {
      // Otherwise point to list2
      current.next = list2;
      // Advance list2
      list2 = list2.next;
    }
    // move current forward
    current = current.next;
  }

  // at least one list is now null.
  // Attach the remaining part of the non-empty list.
  current.next = list1 !== null ? list1 : list2;

  // Return the merged list, skipping the dummy node.
  return dummyHead.next;
};
