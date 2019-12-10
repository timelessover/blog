var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;

    if (nums.length === 1) return new TreeNode(nums[0]);
    // var mid = nums.length / 2;
    //注意此处需要用到parseInt()函数将结果转化为整数
    var mid = Math.floor(nums.length / 2);

    var root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;

};