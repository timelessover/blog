const mySqrt = function (x) {
    if (x === 0) return 0
    //  1次方判断
    if (x < 4) return 1
    for (let i = 1; i < x; i++) {
        let sqar = i * i
        if (x === sqar) return i
        // 比目标值大的返回上一个 i
        if (sqar > x) return i - 1
    }
};

const BinarySearch = (arr, t) => {
    let min = 0
    let max = arr.length - 1
    let mid;
    while (min <= max) {
        mid = Math.floor((max + min) / 2)
        if (nums[mid] < t) {
            max = mid + 1
        } else if (nums[mid] > t) {
            min = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

const mySqrt = (x) => {
    let left = 0
    let right = x
    let mid;
    while (left <= right) {
        mid = Math.floor((right - left) / 2)
        let sqrt = x / mid
        if (sqrt > mid) {
            left = mid + 1
        } else if (mid < sqrt) {
            right = mid - 1
        } else {
            return sqrt
        }
    }
    return right
}