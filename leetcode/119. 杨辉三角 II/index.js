/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let triangle = []
    triangle.push([1])
    if (rowIndex === 0) return triangle

    for (let i = 1; i <= rowIndex; i++) {
        let currRow = []
        let prevRow = triangle[i - 1]
        currRow.push(1)
        for (let j = 1; j < i; j++) {
            currRow.push(prevRow[j - 1] + prevRow[j])
        }
        currRow.push(1)
        triangle.push(currRow)
    }
    return triangle[rowIndex]
};