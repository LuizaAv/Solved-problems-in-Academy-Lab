// let arr = [
//     [1, 2, 3],
//     [2, 3, 4],
//     [5, 6, 7]
// ]

//1. Հայտարարել քառակուսային մատրից և տպել էկրանին նրա տարրերը։

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; ++j) {
//         console.log(arr[i][j])
//     }
// }

//2. Իրականացնել ֆունկցիա, որը ստանում է քառակուսային մատրից։ Ֆունկցիան մատրիցի 
//զույգ ինդեքսով տողերի էլեմենտները փոխարինում է 0-ներով և վերադարձնում։

// function matrix(arr){
//     for (let i = 0; i < arr.length; i = i+2) {
//         let j = 0
//         while(j < arr.length){
//             arr[i][j] = 0;
//             j++;
//         }
//     }
//     return arr;
// }
// console.log(matrix(arr))

//3․ Իրականացնել ֆունկցիա, որը հաշվում և վերադարձնում է քառակուսային մատրիցի գլխավոր անկյունագծի տարրերի գումարը։
// function matrix1(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i][i]
//     }
//     return sum;
// }

//  console.log(matrix1(arr))

//4. Իրականացնել ֆունկցիա,որը հաշվում և վերադարձնում է քառակուսային մատրիցի օժանդակ անկյունագծի տարրերի գումարը։
// function matrix2(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i][arr.length-1-i]
//     }
//     return sum
// }

// console.log(matrix2(arr))

//5․ Իրականացնել ֆունկցիա, որը հաշվում և վերադարձնում է քառակուսային մատրիցի գլխավոր 
//անկյունագծից վերև գտնվող տարրերի գումարը անկյունագծի էլեմենտները ներառյալ։

//     function matrix3(arr){
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr[i].length; ++j) {
//                 sum += arr[i][j]
//         }
//     }
//     return sum
// }

// console.log(matrix3(arr))

//6. Իրականացնել ծրագիր, որը քառակուսային մատրիցի օժանդակ անկյունագծից վերև կհաշվի բոլոր էլեմենտների գումարը։
// function matrix4(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < arr[i].length - 1 -i; ++j) {
//             sum += arr[i][j]
//         }
//     }

//     return sum;
// }

// console.log(matrix4(arr))

//7.  Իրականացնել ծրագիր, որը քառակուսային մատրիցի օժանդակ անկյունագծից ներքև կհաշվի բոլոր էլեմենտների գումարը։

// function matrix5(arr){
//     let sum = 0;   //i = 1 j = 2 //i = 2  j = 1  i = 2 j =2
//     for ( let i = arr.length - 1; i >= 0; --i) {
//         for (let j = arr.length - 1; j > arr.length - 1 -i; --j) {
//             sum += arr[i][j];
//         }
//     }

//     return sum
// }

// console.log(matrix5(arr))

//8. Իրականացնել ֆունկցիա, որը քառակուսային մատրիցի 
//գլխավոր և օժանդակ անկյունագծի էլեմենտների արժեքները տեղերով կփոխի։

// function matrix6(arr){
//     for (let i = 0; i < arr.length; ++i) {
//         [arr[i][i], arr[i][arr.length - 1 - i]] = [arr[i][arr.length - 1 - i], arr[i][i]]
//     }

//     return arr
// }

// console.log(matrix6(arr))

//9. Գրել ֆունկցիա, որը կվերադարձնի NxM (N քանակությամբ տող և M քանակությամբ սյուն) չափանի մատրիցի մեծագույն արժեքը։

// function matrix7(arr) {
//     let max = arr[0][0]
//     for (let i = 0; i < arr.length; ++i){
//         for( let j = 0; j < arr[i].length; ++j) {
//             if(max < arr[i][j]){
//                 max = arr[i][j]
//             }
//         }
//     }

//     return max;
// }

// console.log(matrix7(arr))

//10. Գրել ֆունկցիա, որը կգտնի NxM (N քանակությամբ տող և M քանակությամբ սյուն) 
//չափանի մատրիցի փոքրագույն արժեքի ինդեքսները և կտպի էկրանին։

// function matrix8(arr) {
//     let min = arr[0][0];
//     let indexI = 0;
//     let indexJ = 0;

//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < arr[i].length; ++j) {
//             if (min > arr[i][j]) {
//                 min = arr[i][j]
//                 indexI = i;
//                 indexJ = j;
//             }
//         }
//     }

//     console.log(indexI)
//     console.log(indexJ)
// }

// console.log(matrix8(arr))

//11. Գրել  ֆունկցիա, որը կգտնի NxM մատրիցում զույգ և կենտ տարրերի քանակը և կտպի էկրանին:

// function matrix9(arr) {
//     let even = 0;
//     let odd = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < arr[i].length; ++j) {
//             if (arr[i][j] % 2 === 0) {
//                 ++even;
//             } else {
//                 ++odd;
//             }
//         }
//     }

//     console.log(even);
//     console.log(odd);
// }

// console.log(matrix9(arr))