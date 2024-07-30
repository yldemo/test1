var detectCycle = function (head) {
  if (!head || !head.next) return null
  //初始化快慢指针
  let slow = head, fast = head
  //当fast和fastnext不为空的时候
  while (fast && fast.next) {
    //慢指针走一步
    slow = slow.next
    //快指针走两步
    fast = fast.next.next
    //第一次相遇的时候 a=c
    if (fast === slow) {
      //head指针和fast指针每次循环各移动一步，直到两个指针相遇返回入口
      while (fast !== head) {
        fast = fast.next
        head = head.next
      }
      return fast
    }
  }
  return null
};