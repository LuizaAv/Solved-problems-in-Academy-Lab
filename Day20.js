//1. https://leetcode.com/problems/happy-number/description/

// function check(num){
//     let sum = 0
//     let copy = num
//     while(copy !== 0){
//         let remainder = copy % 10;
//         copy = (copy - remainder) / 10;
//         sum += remainder**2;
//     }
//     return sum
// }

// function isHappy(num){
//     let sum = check(num)
    
//     if(sum === 1){ return true}
//     if(sum > 1 && sum < 10){return false}
//     return isHappy(sum)
    
// }

// console.log(isHappy(2))

//2. https://leetcode.com/problems/palindrome-number/submissions/

// function isPalindrome(numToString) {
//     if(numToString < 0){
//         return false
//     }

//     let copy = numToString;
//     let reversedNum = 0
//     while(copy !== 0){
//         let remainder = copy % 10;
//         reversedNum = reversedNum * 10 + remainder
//         copy = (copy - remainder) / 10;
//     }

//     return reversedNum === numToString ? true : false
// };

// console.log(isPalindrome(121))


//3. https://leetcode.com/problems/power-of-two/

// var isPowerOfTwo = function(n) {
//     if((n>0) && ((n - 1) & n )=== 0){
//         return true
//     }
//     return false
// };

//4. https://leetcode.com/problems/count-operations-to-obtain-zero/description/

// var countOperations = function(num1, num2) {
//     let quantity = 0;
//     if(num1 < 0 || num2 < 0){
//         return quantity
//     }
 
//     while(num1 !== 0 && num2 !== 0){
//         ++quantity
//         if(num1 >= num2){
//             num1 = num1 - num2
//         }else if(num1 < num2){
//             num2 = num2 - num1
//         }
//     }
//     return quantity
//  };

//  console.log(countOperations(15,16))

//5. https://leetcode.com/problems/power-of-three/

// var isPowerOfThree = function(num) {
//     while(num > 1){
//         num = num / 3
//     }
      
//     return num === 1
// };