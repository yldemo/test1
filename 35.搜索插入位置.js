var searchInsert = function (nums, target) {
    //设定左右边界
    let left = 0
    let right = nums.length - 1
    //当left小于right时遍历数组
    while (left <= right) {
        //求出中间位，>>防止溢出
        let mid = ((right - left) >> 1) + left
        //当目标值值小于等于mid值时，说明目标位置在左半部分，调整右边界为mid-1
        if (target <= nums[mid]) {
            right = mid - 1
            //当目标值大于mid值时，说明目标位置在右半部分，调整左边界为mid+1
        } else {
            left = mid + 1
        }
    }
    return left
};
