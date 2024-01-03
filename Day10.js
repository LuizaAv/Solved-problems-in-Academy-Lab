//1. Matrix Diagonal Sum  /  https://leetcode.com/problems/matrix-diagonal-sum/description/
//Տարբերակ 1

// function matrix(arr) {
//   let sum = 0;

// /**
//  * @param {number[][]} mat
//  * @return {number}
//  */
// var diagonalSum = function(mat) {
//   let sum = 0;

//   for (let i = 0; i < mat.length; ++i) {
//       sum += mat[i][i];
//       if(i !== mat.length - i -1){
//           sum += mat[i][mat.length - 1 -i]
//       }
//   }
//   return sum
// };

//Տարբերակ 2
// function matrix(array){
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//       sum += array[index][index];
//       sum += array[index][array.length - 1 - index];
//   }
//   let mid = Math.floor(array.length / 2)
  
//   if(array.length % 2 !== 0){
//     sum = sum - array[mid][mid]
//   }

//   return sum
// }


// console.log(matrix([
//     [1, 2, 15],
//     [9, 5, 8],
//     [1, 6, 9],]))

//2. Իրականցնել ֆունկցիա, որը կստանա քառակուսային մատրից և գլխավոր անկյունագծի համեմատ 
// կկատարի սիմետրիկ արտապատկերում (արտապատկերումը կատարել նույն մատրիցում) ։ Օրինակ՝
//   1  2  3                  1   4  7
//   4  5  6          ->      2  5  8
//   7  8  9                  3  6  9

// function matrix2(arr) {
//   for (let i = 0; i < arr.length; ++i) {
//       for (let j = i + 1; j < arr[i].length; ++j) {
//         [arr[i][j],arr[j][i]] = [arr[j][i], arr[i][j]]
//       }
//     }

//   return arr;
// }
// console.log(
//   matrix2([
//     [1, 2, 15],
//     [9, 5, 8],
//     [1, 6, 9],
//   ])
// );



//3. Իրականցնել ֆունկցիա, որը կստանա քառակուսային մատրից և օժանդակ անկյունագծի 
// համեմատ կկատարի սիմետրիկ արտապատկերում (արտապատկերումը կատարել նույն մատրիցում) ։ Օրինակ՝
// 1  2 3                    9  6  3
// 4 5 6          ->         8  5 2
// 7 8 9                     7  4  1

// function matrix3(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//       for(let j = 0; j < arr.length - 1 - i; ++j){
//           [arr[i][j], arr[arr.length - j -1][arr.length - i -1]] = [arr[arr.length - j -1][arr.length - i -1], arr[i][j]]
//       }
//   }
//   return arr;
// }

// console.log(
//   matrix3([
//     [1, 2, 15],
//     [9, 5, 8],
//     [1, 6, 9],
//   ])
// );
