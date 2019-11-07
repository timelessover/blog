/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    let countArr = []
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        }else{
            hash[nums[i]]++
        }
    }
    for(key in hash){
        countArr.push(hash[key])
    }
    for(let j = 0;j<countArr.length-1;j++){
        for(let i = 0;i<countArr.length-1-i;i++){
            if(countArr[i]<countArr[i-1]){
                [countArr[i-1],countArr[i]] = [countArr[i],countArr[i-1]]
            }
        }
    }
    let result = []
    while(k){
        if(countArr[countArr.length]>countArr[countArr.length]){
            
        }
        countArr.length--
        k--
    }
    
};
topKFrequent([1,1,1,2,2,3],2)