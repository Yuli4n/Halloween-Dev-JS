function findSafestPath(dream) {
    const matrix = [].concat(dream)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if(i === 0 && j === 0){
                continue;
            }
            else if(i === 0){
                matrix[i][j] += matrix[i][j-1];
            }
            else if(j === 0){
                matrix[i][j] += matrix[i-1][j];
            }
            else{
            let minimum = Infinity;
            if(matrix[i-1][j] < minimum) minimum = matrix[i-1][j];
            if(matrix[i][j-1] < minimum) minimum = matrix[i][j-1];
            matrix[i][j] += minimum
        }
        }
    }
    //console.log(matrix);
  return matrix[matrix.length-1][matrix[0].length-1]
}

const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]
  
const bestPath = findSafestPath(dream)
console.log(bestPath)
