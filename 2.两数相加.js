var addTwoNumbers = function (l1, l2) {
  //初始化进位标志
  let carry = 0
  //创建虚拟链表头节点，l3将用于存放结果链表
  let l3 = new ListNode(0)
  //让结果指针指向结果链表的头节点
  let res = l3

  //当存在进位标志或者l1 l2链表未遍历完时，继续循环
  while (carry || l1 || l2) {
    //获取l1 l2链表当前节点值
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    //计算和并加上进位
    let sum = val1 + val2 + carry
    //当节点值之和大于10时进位1，反之则进位0
    carry = sum >= 10 ? 1 : 0
    // 创建新节点，值为当前位和除以10的余数，并将其连接到结果链表
    l3.next = new ListNode(sum % 10)
    //移动指针到新节点
    l3 = l3.next
    // 如果l1不为空，则移动到l1的下一个节点
    if (l1 !== null) l1 = l1.next
    // 如果l2不为空，则移动到l1的下一个节点
    if (l2 !== null) l2 = l2.next
  }
  // 返回结果链表的头节点的下一个节点
  return res.next
};