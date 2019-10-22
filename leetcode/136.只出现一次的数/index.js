var singleNumber = function(nums) {
    let lens = nums.length
    if(lens === 0) return 
    if(lens === 1) return nums[0]
    let hash = {}
    for(let i = 0;i<lens;i++){
        // 出现三次，就会出现问题了
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        }else{
            delete hash[nums[i]]
        }
    }
    return Number(Object.keys(hash))
};
