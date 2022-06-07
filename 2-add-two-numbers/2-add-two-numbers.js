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

function insertVal(node, val) {
    node.next = new ListNode();
    node = node.next;
    node.val = val;
}

var addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let cursor = head;
    let carryVal = 0;
    
    while (l1 || l2 || carryVal) {
        let l1Val = l1?.val || 0;
        let l2Val = l2?.val || 0;
        let sum = l1Val + l2Val + carryVal;
        if (sum > 9) {
            carryVal = 1;
            sum -= 10;
        } else {
            carryVal = 0;
        }
        insertVal(cursor, sum);
        cursor = cursor.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return head.next;
};