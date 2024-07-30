function twoSum(nums, target) {
   // 1.初始化哈希表
   let hush = {}
   // 2.遍历数组
   for (let i = 0; i < nums.length; i++) {
      if (hash[target - nums[i]] !== undefined) {
         return [i, hash[target - nums[i]]]
      }
      // 3.未在哈希表找到匹配项，把当前元素存入哈希表
      hush[nums[i]] = i
   }
   // 4.没有符合条件的下标，返回空数组
   return {}
}

