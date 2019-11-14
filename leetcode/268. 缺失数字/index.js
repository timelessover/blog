/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let lens = nums.length
    let sum = 0
    let rest = 0
    for(let i=0;i<lens+1;i++){
        sum += i 
    }
    for(let j=0;j<lens;j++){
        rest += nums[j] 
    }
    return sum - rest 
};