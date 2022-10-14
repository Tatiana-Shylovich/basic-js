const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = matrix.map(e => e.map(e => e = 0));
  const value = (row, col) => {
    let result;
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length) {
      result = matrix[row][col] ? 1 : 0;
      return result;
    } else {
      result = 0;
      return result;
    };
  };
  for (let row = 0; row < matrix.length; row++) {
    for (let col= 0; col < matrix[row].length; col++) {
      newMatrix[row][col] =
      value(row - 1, col - 1) +
      value(row, col - 1) +
      value(row - 1, col + 1) +
      value(row - 1, col) +
      value(row + 1, col + 1) +
      value(row + 1, col) +
      value(row, col + 1) +
      value(row + 1, col - 1);
   };    
  };
  return newMatrix;
}

module.exports = {
  minesweeper
};
