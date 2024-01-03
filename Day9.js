
//1. Իրականացնել ռեկուրսիվ ֆունկցիա, որը ստանում է զանգված և վերադարձնում զանգվածի ամենափոքր էլեմենտը։

// function minRec(arr, min = arr[0], i = 1){
//     if(i >= arr.length) {
//       return min
//     }
//     if(min > arr[i]) { min = arr[i]}
//     return minRec(arr, min, i = i+1)
// }

// console.log(minRec([1,5,2,7,0]))

//2. Իրականացնել ռեկուրսիվ ֆունկցիա, որը ունի հետևյալ տեսքը power (num, exp);
//Ֆունկցիան վերադարձնում է num ամբողջ թվի exp աստիճանի արժեքը։

// function power(num, exp) {
//     if(exp === 1){
//         return  num;
//     }

//     return num * power(num, exp = exp - 1)
// }

// console.log(power(5,3))

//3. Գրել ֆունկցիա, որը կվերադարձնի NxM (N քանակությամբ տող և M քանակությամբ սյուն)
//չափանի մատրիցի էլեմենտների միջին թվաբանականը։

// function matrix(arr) {
//     let sum = 0
//     let quantity = 0;
//     for(let i = 0; i < arr.length; ++i) {
//         for( let j = 0; j < arr[i].length; ++j) {
//             sum += arr[i][j]
//             ++quantity;
//         }
//     }

//     let avg = sum / quantity;
//     return avg
// }

// console.log(matrix([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]))

//4. Իրականացնել ֆունկցիա, որը կստանա NxM (N քանակությամբ տող և M քանակությամբ սյուն) չափանի մատրից և կվերադարձնի միաչափ զանգված, որը կպարունակի մատրիցի յուրաքանչյուր տողի մեծագույն էլեմենտի արժեքը։ Այսինքն միաչափ զանգվածի i ինդեքսի էլեմենտի արժեքը հավասար
//է լինելու մատրիցի i ինդեքսի տակ գտնվող տողի (միաչափ զանգվածի) մեծագույն արժեքին։

// function matrix1 (arr) {
//     let maxArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//         let min = arr[i][0];
//         for(let j = 0; j < arr[i].length; ++j) {
//             if(min > arr[i][j]){
//               min = arr[i][j]
//             }
//         }
//         maxArr.push(min)
//     }

//     return maxArr;
// }

// console.log(matrix1([
//                       [1,2,3],
//                       [9,5,6],
//                       [15,8,9]
//                     ]))

//5. Գրել ֆունկցիա, որը կստանա 2 մատրից և կստուգի արդյոք այդ մատրիցները իրար հավասար են։

// function matrix2(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; ++i) {
//       if (arr1[i].length === arr2[i].length) {
//         for (let j = 0; j < arr1[i].length; ++j) {
//           if(arr1[i][j] !== arr2[i][j]){
//             return false
//           }
//         }
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }

//   return true;
// }

// console.log(matrix2([
//                       [1,2,3],
//                       [9,5,6],
//                       [15,8,9],
//                     ], [
//                         [5,2,3],
//                         [9,5,6],
//                         [15,8,10]
//                       ]))

//6.Գրել ռեկուրսիվ ֆունկցիա, որը որպես արգումենտ կստանա տող և կստուգի տողը palindrome է, թե ոչ։

// function polindromeRec (str, i = 0) {
//     if (str[i] !== str[str.length - 1 -i]) {
//         return false;
//     }

//     if(i > str.length / 2) {
//         return true;
//     }

//     return polindromeRec(str, i = i + 1)
// }

// console.log(polindromeRec("abahaba"))

//7. Գրել  ֆունկցիա, որը կստուգի արդյոք մատրիցը՝ գլխավոր անկյունագծի նկատմամբ սիմետրիկ է:

// function matrix3(arr) {
//   for (let i = 0; i < arr.length - 1; i = i+1) {
//     if (arr.length === arr[i].length) {
//       for (let j = i+1; j < arr[i].length; ++j) {
//         if (arr[i][j] !== arr[j][i]) {
//           return false;
//         }
//       }
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(
//   matrix3([
//     [1, 9, 15],
//     [9, 5, 8],
//     [15, 8, 9],
//   ])
// );

