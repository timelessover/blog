/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null
    if (!l1 && l2) return l2
    if (l1 && !l2) return l1
    let list1 = l1
    let list2 = l2
    let head
    if (list1.val <= list2.val) {
        head = list1
        list1 = list1.next
    } else {
        head = list2
        list2 = list2.next
    }
    let head1 = head
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            head1.next = list1
            list1 = list1.next
        } else {
            head1.next = list2
            list2 = list2.next
        }
        head1 = head1.next
    }
    while(list1){
        head1.next = list1
        list1 = list1.next
        head1 = head1.next
    }
    while(list2){
        head1.next = list2
        list2 = list2.next
        head1 = head1.next
    }

    return head
};
