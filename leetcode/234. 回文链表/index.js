/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head == null || head.next == null) {
        return true;
    }
    let slow = head
    let fast = head
    let pre = head
    let prepre = null
    while (fast != null && fast.next != null) {
        pre = slow;
        // 中点位置
        slow = slow.next;
        fast = fast.next.next;
        pre.next = prepre;
        prepre = pre;
    }
    if (fast != null) {
        slow = slow.next;
    }
    // 后半段反转
    while (pre != null && slow != null) {
        if (pre.val != slow.val) {
            return false;
        }
        pre = pre.next;
        slow = slow.next;
    }
    return true;
};

var isPalindrome = function(head) {
    var temp = []
    if(head) {
       temp.push(head.val)
        while(head.next) {
            head = head.next
            temp.push(head.val)
          }
        while(temp.length >= 2) {
          if(temp.shift() !== temp.pop()) {
             return false
          } 
        }
    }
    return true
};

