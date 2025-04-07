// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

// We are defining a function that takes in two linked lists. Each node has a .val and a .next
var addTwoNumbers = function (l1, l2) {
  // We use a dummy head node so that we don't have to write separate logic for the first node in the result list. Think of this like a placeholder to simplify appending new nodes.
  let dummyHead = new ListNode(0);
  // This keeps track of the current position in the new linked list we're building. It starts at the dummy node.
  let current = dummyHead;
  // This is to store the carry over value when the sum of the two digits is >_ 10
  let carry = 0;

  // This loop continues as long as there is still something left in l1, or something left in l2 or there's a leftover carry
  while (l1 !== null || l2 !== null || carry > 0) {
    // We're pulling out the .val from each node. If a list is already done (null), we treat its value as 0. Remember that these are ternary operators (condition ? value_if_true : value_if_false)
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;

    // We're adding digit from l1 to digit from l2 plus any leftover carry from last time
    let sum = val1 + val2 + carry;
    // If sum is 14, we carry 1 for the next round.
    carry = Math.floor(sum / 10);
    // The digit to store in the new list is just sum % 10. E.g., if sum =14, we store 4.
    current.next = new ListNode(sum % 10);

    // Advance the current pointer so the next digit can be added at the end
    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return dummyHead.next;
};

addTwoNumbers();
console.log(addTwoNumbers());
