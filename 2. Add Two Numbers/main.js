const sumTwoListNodes = (l1, l2, l3, carry = 0) => {
    if (!l1 && !l2 && !carry) return;

    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    l3.val = parseInt(sum % 10);
    carry = parseInt(sum / 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    if (l1 || l2 || carry) {
        let newNode = new ListNode();
        l3.next = newNode;
        l3 = l3.next;
    }

    return sumTwoListNodes(l1, l2, l3, carry);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l3 = new ListNode();
    sumTwoListNodes(l1, l2, l3);

    return l3;
};
