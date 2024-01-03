



//1. https://leetcode.com/problems/climbing-stairs/


// var climbStairs = function(n) {
//     let diffWays = 0;
//     let copy = n
//     if(n === 0){
//         diffWays = 0;
//         return diffWays
//     }else if(n === 1 || n === 2){
//         diffWays = n;
//         return diffWays
//     }

//     // return climbStairs(n-1)*climbStairs(n-2);

//     let startNum = 0;
//     let currentNum = 1;
//     let nextNum

//     let start = 0
//     while(start < copy){
//         nextNum = currentNum + startNum;
//         startNum = currentNum;
//         currentNum = nextNum;
//         start++
//     }

//     diffWays = nextNum;

//     return diffWays 
// };


//2. https://leetcode.com/problems/rotate-image/description/

// var rotate = function(matrix) {
    
//     for(let i = 0; i < matrix.length; ++i){
//         for(let j = i; j < matrix[i].length; ++j){
//             if(i !== j){
//                 [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
//             }
//         }    
//     }
//     for(let i = 0; i < matrix.length; ++i){
//         for(let j = 0; j < (matrix[i].length)/2; ++j){
//             let tmp = matrix[i][j]
//             matrix[i][j] = matrix[i][matrix.length-1-j];
//             matrix[i][matrix.length-1-j] =tmp;
//            // [matrix[i][j], matrix[i][matrix.length-1-j]] = [matrix[i][matrix.length - 1 -j],   matrix[i][j]]
//             //console.log(matrix[i][j])
//         }
//     }
    
//     return matrix
// };

//3.  https://leetcode.com/problems/pascals-triangle/

// var generate = function(numRows){
//     let array = [[]];

//     let start = 1;
//     let end = numRows;

//     while(start <= end){
//         let newArr = [];
//         newArr.length = start;
//         newArr[0] = 1;
//         newArr[newArr.length - 1] = 1;
//         for(let j = 1; j < newArr.length - 1; ++j){
//             newArr[j] = array[start - 1][j-1] + array[start - 1][j];
//         }
//         array.push(newArr)
//         ++start
//     }

//     return array.slice(1);
// };

//4.  https://leetcode.com/problems/single-element-in-a-sorted-array/description/

// var singleNonDuplicate = function(nums) {
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

//5. https://leetcode.com/problems/merge-intervals/description/

// var merge = function(intervals) {

//     if(intervals.length <= 1){
//         return intervals
//     }

//     intervals.sort((a,b) => a[0] - b[0])

//     let newArr = [];
//     newArr.push(intervals[0])
    
//     for(let i = 1; i < intervals.length; ++i){
//         let last = newArr.pop();
//         let current = intervals[i];
//         if(last[1] >= current[0]){
//             newArr.push([last[0], Math.max(last[1], current[1])])
//         }else{
//             newArr.push(last, current);
//         }
//     }

//     return newArr
// };
