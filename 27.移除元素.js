//方法一 原位删除
var removeElement = function (nums, val) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

//方法二 覆盖移除
var removeElement = function (nums, val) {
    //初始化下标
    let ans = 0
    //遍历nums数组中的每个值
    for (const num of nums) {
        //当值与val不相等时，把值赋值到nums[ans]覆盖原来的值，相等则不做任何操作
        if (num !== val) {
            nums[ans] = num
            //每次遇到不等的值时ans自增1
            ans++
        }
    }
    //最后返回数组的长度ans
    return ans
};

//方法三 交换移除
var removeElement = function (nums, val) {
    //声明数组长度为ans
    let ans = nums.length
    //遍历数组
    for (i = 0; i < ans;) {
        //当前值与val相等时，与数组末位交换值，ans长度-1，再次比较，直到找到不等的元素时i指针前移
        if (nums[i] === val) {
            nums[i] = nums[ans - 1]
            ans--
        } else {
            i++
        }
    }
    //最后返回长度ans
    return ans
};