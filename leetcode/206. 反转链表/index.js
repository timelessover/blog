// 1-2-3-4-5
// 2-1-3-4-5
// 3-2-1-4-5
// 4-3-2-1-5
// 5-4-3-2-1
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head
    
    let root = reverseList(head.next)
    head.next.next = head
    head.next = null
    
    return root
};

var reverseList = function(head) {
    if(!head || !head.next) return head;
    let ptr = head.next;
    head.next = null;
    while(ptr){
        let temp = ptr.next;
        ptr.next = head;
        head = ptr;
        ptr = temp;
    }
    return head;
};