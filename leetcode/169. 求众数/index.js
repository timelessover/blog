/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let lens = nums.length
    let hash = {}
    for(let i=0;i<lens;i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        }else{
            hash[nums[i]]++
        }
    }
    for(key in hash){
        if(hash[key]>lens/2){
            return key
        }
    }
};