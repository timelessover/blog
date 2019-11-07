/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    for(let i=0; i<nums.length; i++) {
        if(hash[nums[i]]) {
            hash[nums[i]] ++;
        } else {
            hash[nums[i]] = 1;
        }
    }
    // 对象变为[[key,value]]数组
    let sortHash = Object.entries(hash).sort((a,b)=> b[1] - a[1])
    let result = []
    for(let i=0;i<k;i++){
        result.push(sortHash[i][0])
    }
    return result
};