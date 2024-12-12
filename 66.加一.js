//方法一：判断是否为9
var plusOne = function (digits) {
  //获取数组长度
  let n = digits.length
  //从后往前遍历数组
  for (let i = n - 1; i >= 0; i--) {
    //元素为9时继续循环，当找到不等于9的元素时，值+1
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1
      //第一个非9元素之后的元素全部赋0
      for (let j = i + 1; j < n; j++) {
        digits[j] = 0
      }
      //返回数组
      return digits
    }
  }
  //当元素全为9时，新建数组并全部赋值0
  const ans = new Array(n + 1).fill(0)
  //第一个元素设为1
  ans[0] = 1
  return ans
};

//方法二：判断是否为0
var plusOne = function (digits) {
  //获取数组长度
  let n = digits.length
  //从后往前遍历
  for (let i = n - 1; i >= 0; i--) {
    //取余
    digits[i] = (digits[i] + 1) % 10
    //当余数不为0（也就是没有进位时），直接返回结果，反之继续循环
    if (digits[i] !== 0) {
      return digits
    }
  }
  //当+1后都为0，需扩展数组，并设置第一位为1
  const ans = new Array(n + 1).fill(0)
  ans[0] = 1
  return ans
};

