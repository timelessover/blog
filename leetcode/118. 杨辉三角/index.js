/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = []
    // 0的情况
    if(numRows === 0) return triangle
    // 1的情况
    triangle.push([1])
    // 2列以上
    for(let rowNum = 1;rowNum<numRows;rowNum++){
        let row = []
        // 上一列
        let prevRow = triangle[rowNum - 1]
        // 第一位为1
        row.push(1)
        // 中间为上一列相邻两数相加
        for (let j = 1; j < rowNum; j++) {
                row.push(triangle[rowNum - 1][j-1] + prevRow[j]);
            }
        // 最后一位为1
        row.push(1)
        triangle.push(row);
    }
    return triangle;
};

