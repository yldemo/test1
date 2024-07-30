var isValid = function (s) {
  //如果字符串长度为奇数一定无法成对闭合，直接返回false
  if (s.length % 2 === 1) return false
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  //初始化空栈用于存放遍历字符串
  const st = []
  //遍历s中的每个字符
  for (let ch of s) {
    if (pairs.has(ch)) {
      //当哈希表中能找到相应右括号时，如果栈为空或者栈顶元素不是对应的左括号则返回false
      if (!st.length || st[st.length - 1] !== pairs.get(ch)) {
        return false
      }
      // 弹出栈顶元素，因为找到匹配的左括号
      st.pop()
    } else {
      // 当前字符是左括号，入栈
      st.push(ch)
    }
  }
  // 遍历结束后，如果栈为空，说明所有的括号都匹配
  return st.length === 0
};