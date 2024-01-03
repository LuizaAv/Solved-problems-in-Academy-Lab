

//1. https://leetcode.com/problems/single-number-iii/

// var singleNumber = function(nums) {
//     let obj = {};
//     for(let i = 0; i < nums.length; ++i){
//         if(obj[nums[i]]){
//             ++obj[nums[i]];
//         }else{
//             obj[nums[i]] = 1
//         }
//     }

//     let arr = [];
//     for(let key in obj){
//         if(obj[key] === 1){
//             arr.push(key)
//         }
//     }
    
//     return arr
// };

//2. https://leetcode.com/problems/single-number-ii/

// var singleNumber = function(nums) {
//     let obj = {};
//     for(let i = 0; i < nums.length; ++i){
//         if(obj[nums[i]]){
//             ++obj[nums[i]]
//         }else{
//             obj[nums[i]] = 1
//         }
//     }


//     for(let key in obj){
//         if(obj[key] === 1){
//             return +key
//         }
//     }
//     return -1
// };


//3. https://leetcode.com/problems/single-number/

// var singleNumber = function(nums) {
//     let res1= nums[0]
    
//     for(let i = 1; i < nums.length; ++i){
//         res1 ^= nums[i];
//     }
//     return res1
// };

