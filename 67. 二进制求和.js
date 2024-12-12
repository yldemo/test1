var addBinary = function (a, b) {
   //初始化进位和结果字符串
   let carry = 0
   let ans = ""
   //从后往前遍历
   for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
      //初始化sum为进位值
      let sum = carry
      //// 如果 a、b还有剩余的位，转换为数字后加到 sum
      sum += i >= 0 ? parseInt(a[i]) : 0
      sum += j >= 0 ? parseInt(b[j]) : 0
      //把求和的2的余数添加到结果字符串
      ans = ans + (sum % 2)
      //更新进位
      carry = Math.floor(sum / 2)
   }
   //如果循环完毕后还存在进位则添加到结果字符串
   ans += carry === 1 ? carry : "";
   //拆分、反转、连接字符串
   return ans.split('').reverse().join('')
};