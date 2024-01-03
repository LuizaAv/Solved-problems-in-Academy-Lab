



//1. https://leetcode.com/problems/single-number/solutions/

// var singleNumber = function(nums) {
//     let res1= nums[0]
    
//     for(let i = 1; i < nums.length; ++i){
//         res1 ^= nums[i];
//     }
//     return res1
// };


//2. https://leetcode.com/problems/counting-bits/ 

// var countBits = function(n) {
//     let newArr = []
//     for(let i = 0; i <= n; ++i){
//         let count = 0;
//         let num = i
//         while(num !== 0){
//             if(num & 1){
//                 ++count
//             }
//             num >>>= 1;
//         }
//         newArr.push(count)
//     }

//     return newArr
// };


//3. https://leetcode.com/problems/number-complement/

 
// var findComplement = function(num) {
//     let copy = num;
//     let i = 0;

//     while(copy !== 0){
//        num ^= (1 << i);
//        copy >>= 1;
//        ++i
//     }

//     return num;
// };

//4. https://leetcode.com/problems/binary-number-with-alternating-bits/

// var hasAlternatingBits = function(n) {
//     while(n > 0){
//         if((n & 1) === ((n >> 1) & 1)){
//             return false
//         }
//         n >>>= 1
//     }   
//     return true
// }


//5. Կատարել swap գործողոթյուն թվի i և j բիթերը տեղափոխելու համար

// function swap(n, i, j){
//     let indexI = (n >> i) & 1;
//     let indexJ = (n >> j) & 1;

//     if(indexI !== indexJ){
//         n ^= (1 << i);
//         n ^= (1 << j);
//     }

//     return n
// }

// console.log(swap(9, 0,2))

//6. https://leetcode.com/problems/reverse-bits/

// var reverseBits = function(n) {
//     let res = 0
//         for(let i=31; i >= 0; --i){
//         res = (res << 1) | (n & 1)
//         n >>= 1
//     }
//     return res >>>= 0
// };