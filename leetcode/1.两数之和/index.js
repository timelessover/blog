
var twoSum = function (nums, target) {
    let lens = nums.length
    let result;
    for (let i = 0; i < lens; i++) {
        for (let j = 0; j < lens; j++) {
            result = target - nums[i]
            if (i !== j && result === nums[j]) {
                return [i, j]
            }
        }
    }
};

var twoSum = function (nums, target) {
    let numsObj = {}
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        let match = target - current
        if (match in numsObj) {
            return [i, numsObj[match]]
        }
        numsObj[current] = i
    }
}