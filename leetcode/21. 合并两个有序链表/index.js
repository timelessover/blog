var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2
    if (l2 == null) return l1
    // 用对象模拟链表
    let temObj = {}
    // 值小的排在前
    if (l1.val <= l2.val) {
        temObj = l1
        temObj.next = mergeTwoLists(l1.next, l2)
    } else {
        temObj = l2
        temObj.next = mergeTwoLists(l2.next, l1)
    }
    return temObj
};


