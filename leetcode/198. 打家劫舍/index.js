//1.dp
//2.确定状态转移方程 dp(max) = dp(prev) + nums[i]
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let prevMax = 0
    let currMax = 0
    for(let i=0;i<nums.length;i++){
        // 上一轮的最大值保存起来
        let temp = currMax
        // 当前最大值为 max[2] = max[0] + nums[i] 与 max[1]作对比
        currMax = Math.max(prevMax + nums[i],currMax)
        prevMax = temp 
    }
    return currMax
};