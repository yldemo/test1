// 方法一：sort
var merge = function (nums1, m, nums2, n) {
  // 1.删除0元素，并将nums2元素合并到nums1数组
  nums1.splice(m, nums1.length - m, ...nums2)
  // 2.排序
  nums1.sort((a, b) => a - b)
};

// 方法二：双指针
var merge = function (nums1, m, nums2, n) {
  // 1.初始化指针i,j,tail
  let i = m - 1
  let j = n - 1
  let tail = m + n - 1
  var cur
  //  2.遍历两个数组，将所有元素合并到nums1数组中
  while (i >= 0 || j >= 0) {
    if (i === -1) {
      cur = nums2[j]
    } else if (j === -1) {
      cur = nums1[i]
    } else if (nums1[i] > nums2[j]) {
      cur = nums1[i]
      i--
    } else {
      cur = nums2[j]
      j--
    }
    nums1[tail] = cur
    tail--
  }
};