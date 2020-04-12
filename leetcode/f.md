

#### [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

难度简单948收藏分享切换为英文关注反馈

将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

**示例：**

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```



题解：需要创建一个亚节点来进行保存结果，需要注意的是需要临时变量来接收亚节点，不然就会被覆盖。

```javascript
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
var mergeTwoLists = function(l1, l2) {
    const preHead = new ListNode()
    // 一个变量保存状态
    let prev = preHead
    
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    prev.next = l1 === null ? l2 : l1
    
    return preHead.next
};
```

