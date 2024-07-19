// 方法一：双指针法
var moveZeroes = function (nums) {
  // 1.声明慢指针
  let slow = 0
  // 2.声明快指针，遍历数组
  for (let fast = 0; fast < nums.length; fast++) {
    // 3.如果快指针元素不为0，则交换快慢指针元素，并将慢指针后移一位
    if (nums[fast] !== 0) {
      // 此处运用了解构赋值的方法[a,b]=[b,a],即交换两个变量的值
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
  }
}

// 方法二：遍历增删
var moveZeroes = function (nums) {
  // 1.题干规定数组长度大于等于1，当数组长度为一时不需要调整顺序，直接返回
  if (nums.length === 1) return nums
  // 2.声明一个指针，指向数组第一个元素
  for (let i = 0; i < nums.length; i++) {
    // 3.删除零元素，在末尾补0
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      // 4.更改指针和数组长度，避开补0的位置
      i--
      nums.length--
    }
  }
}