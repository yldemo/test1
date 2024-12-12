// 方法一：双指针法：
var reverseList = function (head) {
  if (!head || !head.next) return head
  let pre = null
  let temp = null
  let cur = head
  while (cur) {
    // 暂存cur的下一个节点
    let temp = cur.next
    // 反转指针
    cur.next = pre
    // 移动指针
    pre = cur
    cur = temp
  }
  // 返回新的头节点
  return pre
}

// 方法二：递归法：
var reverse = function (pre, head) {
  // 规定结束条件
  if (!head) return pre
  // 暂存节点
  const temp = head.next
  // 反转指针
  head.next = pre
  // 递归调用
  return reverse(head, temp)
}
// 反转链表主函数
var reverseList = function (head) {
  return reverse(null, head)
}