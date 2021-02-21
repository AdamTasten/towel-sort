module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  if (matrix.toString() === "") return [];
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) matrix[i].reverse();
    for (let j = 0; j < matrix[i].length; j++) {
      arr.push(matrix[i][j]);
    }
  }
  return arr;
}