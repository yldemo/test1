var reverseKGroup = function (head, k) {
    //当k小于等于1或者链组为空时，不需要翻转，直接返回
    if (k <= 1 || !head) return head
    //初始化计数变量count和当前变量cur
    let count = 1
    let cur = head
    //当count小于k或cur.next不为null时遍历计算第一段链表是否满足长度k
    while (count < k && cur.next) {
        cur = cur.next
        count++
    }
    //当满足长度k的时候对链表进行翻转递归
    if (count === k) {
        let end = cur
        cur = head
        let pre = null
        //逐步翻转直到pre指向end
        while (pre !== end) {
            const temp = cur.next
            cur.next = pre
            pre = cur
            cur = temp
        }
        //递归处理后续链表
        head.next = reverseKGroup(cur, k)
        //返回新的头节点
        return pre
    } else {
        //如果不满足k直接返回head不进行翻转
        return head
    }
};