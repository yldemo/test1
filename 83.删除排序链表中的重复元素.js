var deleteDuplicates = function (head) {
    //链表为空则直接返回
    if (head === null) return head
    //初始化指针指向head
    let cur = head
    while (cur.next) {
        if (cur.val === cur.next.val) {
            //当前值和下一个相等时，跳过下一个节点，将cur.next指向下下个节点
            cur.next = cur.next.next
            //当前值和下一个不相等时，指针移动到下一个节点
        } else {
            cur = cur.next
        }
    }
    // 返回处理后的链表头节点
    return head
};