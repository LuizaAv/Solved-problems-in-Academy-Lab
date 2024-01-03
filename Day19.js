
//1. Գտնել A{x₁, y₁} և B{x₂, y₂} ծայրակետերով AB հատվածի միջնակետի կոորդինատները։


// let A = {"x1": 5, "y1": 10};
// let B = {"x2": 15, "y2": 12};
// function first(a, b){
//     let x = (a.x1 + a.y1) / 2;
//     let y = (b.x2 + b.y2) / 2;

//     let arr = [x, y];
//     return arr
// }

// console.log(first(A,B))

//2. Գտնել A{x₁, y₁} և B{x₂, y₂} ծայրակետերով AB հատվածի երկարությունը։

// let A = {"x1": 5, "y1": 10};
// let B = {"x2": 15, "y2": 12};

// function second(a, b){
//     let result = Math.sqrt((a.x1 - b.x2)**2  + (a.y1 - b.y2)**2);
//     return result
// }

// console.log(second(A,B))

//3. Գտնել a{x, y} վեկտորի երկարությունը։

// let A = {"x": 5, "y": 10};

// function third(a){
//     let result = Math.sqrt(a.x + a.y);
//     return  result;
// }

// console.log(third(A))

//4. Գտնել a{x₁, y₁} և b{x₂, y₂} վեկտորների կազմած անկյան կոսինուսը:

// let A = {"x": 5, "y": 10};
// let B = {"x": 15, "y": 12};

// function forth(a,b){
//     let res = (a.x * b.x + a.y * b.y) / Math.sqrt(a.x**2 + a.y**2) * Math.sqrt(b.x**2 + b.y**2)
//     return res
// }

//console.log(forth(A,B))

//5. Գտնել a{x₁, y₁} և b{x₂, y₂} վեկտորների սկալյար արտադրյալը։
// let A = {"x": 5, "y": 10};
// let B = {"x": 15, "y": 12};

// function fifth(a,b){
//     let res = third(a) * third(b) //* forth(a,b)

//     return res
//  }

//  console.log(fifth(A,B))


//6.  https://leetcode.com/problems/fizz-buzz/description/

// let fizzBuzz = function(n) {
//     let newArray = [];
//     for(let i = 1; i < n; ++i){
//         if(i % 3 !== 0 && i % 5 !== 0){
//             newArray.push(`${i}`)
//         }else if(i % 3 === 0 && i % 5 === 0){
//             newArray.push("FizzBuzz")
//         }else if(i % 3 === 0){
//             newArray.push("Fizz")
//         }else if(i % 5 === 0){
//             newArray.push("Buzz")
//         }
//     }  
//     return newArray
//   };

//   console.log(fizzBuzz(15))

//7.  https://leetcode.com/problems/sum-multiples/description/

// let sumOfMultiples = function(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; ++i){
//         if(i % 3 === 0 || i % 5 === 0 || i % 7 ===0 ){
//             sum += i
//         }
//     }
//     return sum
// };

// console.log(sumOfMultiples(12))

//8.  https://leetcode.com/problems/missing-number/description/

// let missingNumber = function(nums) {
//     let sum = (nums.length * (nums.length + 1)) / 2;
//     let forSum = 0;
//     for(let i = 0; i < nums.length; ++i){
//         forSum += nums[i];
//     }

//     return sum - forSum
// };

// console.log(missingNumber([0,1,5,2,4,3]))

//9. https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

//let countDigits = function(num) {
//     let quantity = 0;
//     let copy = num;

//     while(copy !=0){
//       let remainder = copy % 10;
//       copy = (copy - remainder)/10;
//       if(num % remainder === 0){
//           ++quantity
//       }
//     }

//     return quantity
// };

//10. https://leetcode.com/problems/smallest-even-multiple/description/

// let smallestEvenMultiple = function(n) {
//     if(n % 2 === 0){
//         return n
//     }else{
//         return n * 2
//     }
// };

//11. https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

// let findGCD = function(nums) {
//     let min = nums[0];
//     let max = nums[0];

//     for(let i = 1; i < nums.length; ++i){
//         if(min > nums[i]){
//             min = nums[i]
//         }

//         if(max < nums[i]){
//             max = nums[i]
//         }
//     }

//     let start = min;
//     while(start != 0){
//         if(min % start === 0 && max % start ===0){
//             return start
//         }
//         --start
//     }
// };

//12. https://leetcode.com/problems/plus-one/description/

// let plusOne = function(digits) {
//     for(let i = digits.length - 1; i >= 0; --i){
//         if(digits[i] < 9){
//           digits[i] += 1
//           return digits
//       }else{
//           digits[i] = 0 
//       }
//     }
//     digits.unshift(1)
//     return digits
// };


//13.Գրել ֆունկցիա, որը որպես արգումենտ կստանա 2 մատրից և
// կկատարի մատրիցներ բազմապատկում, վերադարձնել ստացված արդյունքը։

// function matrix(first, second){
//     let newMatrix = []
//     for(let i = 0; i < first.length; ++i){
//         newMatrix[i] = []
//         for(let j = 0; j < second[i].length; ++j){
//             let sum = 0;
//             for(let k = 0; k < first[0].length; ++k){
//                 sum += first[i][k] * second[k][j]
//             }
//             newMatrix[i][j] = sum;
//         }
//     }

//     return newMatrix
// }

// let a = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let b = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(matrix(a, b))