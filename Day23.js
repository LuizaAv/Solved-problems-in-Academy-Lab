
//1. Bubble sort

// function bubble(arr){
//     for(let i = 0; i < arr.length - 1; ++i){
//         let check = false
//         for(let j = 0; j < arr.length - 1 - i; ++j){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
//                 check = true
//             }
//         }
//         if(!check){
//             return arr
//         }
//     }
//     return arr
// }

// console.log(bubble([4,2,5,8,9,8,1]))

//2. Insertion sort

// function insertion(arr){    
//     for(let i = 1; i < arr.length; ++i){
//         let j = i - 1
//         let key = arr[i];
//         while(j >= 0  && arr[j] > key){
//             arr[j+1] = arr[j]
//             --j
//         }
//         arr[j+1] = key
//     }
//     return arr
// }

// console.log(insertion([2,5,3,6]))