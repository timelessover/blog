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
    // nk.next.next = nk
    // nk.next = null
    let root = reverseList(head.next)
    head.next.next = head
    head.next = null
    
    return root
};

var reverseList = function(head) {
    if(!head || !head.next) return head
    let prev = null
    let curr = head
    while(curr){
        // 必须保存起来
        let temp = curr.next
        curr.next = prev
        
        prev = curr
        curr = temp
    }
    return prev
};