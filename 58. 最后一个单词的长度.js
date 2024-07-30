var lengthOfLastWord = function (s) {
  //初始化i指针为字符串最后一个位置
  let i = s.length - 1;
  //初始化count为0后面用于计算字符串长度
  let count = 0;
  //忽略字符串末尾的空格
  while (s[i] === " ") {
    i--
  }
  //循环遍历字符串，直到遇到第一个单词的开头开始统计长度
  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }
  return count;
};