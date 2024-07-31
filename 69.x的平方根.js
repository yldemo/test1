var mySqrt = function (x) {
  //初始化左右边界
  let left = 0
  let right = x
  while (left <= right) {
    //找出中间点
    let mid = ((right - left) >> 1) + left
    //如果mid的平方小于x，说明平方根在[mid + 1, right]之间
    if (x > mid * mid) {
      left = mid + 1
      //如果mid的平方大于x，说明平方根在[left, mid - 1]之间
    } else {
      right = mid - 1
    }
  }
  // 最后检查left的平方是否大于x，如果大于，则返回left - 1，否则返回left
  return left * left > x ? left - 1 : left
};