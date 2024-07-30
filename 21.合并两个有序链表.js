//方法一：递归
var mergeTwoLists = function (l1, l2) {
  //声明虚拟头节点
  let head = new ListNode(0);
  //初始化指针
  let i = head;
  //当l1和l2其一为空时直接返回另一个链表
  if (l1 === null) return l2
  if (l2 === null) return l1
  //当l1和l2都不为空时比较值进行递归合并
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    i.next = l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    i.next = l2
  }
  //返回合并后的链表的头节点
  return head.next
}

//方法二：迭代
var mergeTwoLists = function (l1, l2) {
  //声明虚拟头节点
  let head = new ListNode(0);
  //初始化指针
  let i = head;

  //当l1和l2不为空时遍历
  while (l1 !== null && l2 !== null) {
    //l1的值小于l2时，将l1节点合并在当前节点末尾
    if (l1.val <= l2.val) {
      i.next = l1
      //l1指针前移
      l1 = l1.next
      //l2的值小于l1时，将l2节点合并在当前节点末尾

    } else {
      i.next = l2
      //l2指针前移
      l2 = l2.next
    }
    //将i指针移动到新链表的最后一个节点
    i = i.next
  }
  //合并非空链表剩余的节点
  i.next = l1 === null ? l2 : l1
  //返回合并后的链表的头节点
  return head.next
}