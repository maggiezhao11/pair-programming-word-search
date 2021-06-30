const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transposition(letters).map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (k of verticalJoin) {
      if (k.includes(word)) return true;
    }
    return false;
  };
  
  const transposition = function(matrix) {
    let result = [];
    let newArray = [];
    //let row - i - matrix.length
    //let columns - j - matrix[0].length
    if (matrix === []) {
        throw new Error('name is empty');
    }
    for (let column = 0; column < matrix[0].length; column++) {
      for (let row = 0; row < matrix.length; row++) {
        newArray.push(matrix[row][column]);
      }
      result.push(newArray);
    }
    
    return result;
  };
    
  module.exports = wordSearch;
  