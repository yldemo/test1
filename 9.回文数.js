var isPalindrome = function (x) {
  // 1.当x为负数或10的整数时非回文数，排除
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  // 2.声明res用于存放逆转顺序后的整数，x2用于逆转顺序计算过程
  let res = 0
  let x2 = x
  // 3.遍历数组
  while (x2) {
    // 4.取余数，*10每次循环进位
    res = res * 10 + x2 % 10
    // 5.向下取整，x2前移一位
    x2 = Math.floor(x2 / 10)
  }
  // 6.返回布尔值
  return res === x
};