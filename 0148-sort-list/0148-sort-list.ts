
function mergeSort(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    // Find the middle of the list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Split the list into two halves
    prev!.next = null;

    // Recursively sort the two halves
    const left = mergeSort(head);
    const right = mergeSort(slow);

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode();
    let current: ListNode | null = dummy;

    while (left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    if (left) {
        current.next = left;
    } else {
        current.next = right;
    }

    return dummy.next;
}

function sortList(head: ListNode | null): ListNode | null {
    if (head === null) return head;
    return mergeSort(head);
};