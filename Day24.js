



//1. Իրականացնել merge sort ալգորիթմը

// function merge(arr, start, end, mid){
//     let tmp = [];
//     let ind = 0;
//     let s1 = start;
//     let s2 = mid + 1;
//     let e1 = mid;
//     let e2 = end;

//     while(s1 <= e1 && s2 <= e2){
//         if(arr[s1] > arr[s2]){
//             tmp[ind++] = arr[s2++];
//         }else{
//             tmp[ind++] = arr[s1++];   
//         }
//     }

//     while(s1 <= e1){
//         tmp[ind++] = arr[s1++]
//     }

//     while(s2 <= e2){
//         tmp[ind++] = arr[s2++]
//     }

//     for(let i = 0; i < ind;++i){
//         arr[start + i] = tmp[i]
//         console.log(start)
//     }

// }

// function merge_sort(arr, start = 0, end = arr.length - 1){
//     if(start >= end){return }
//     let mid = Math.floor((start + end)/2)
//     merge_sort(arr, start, mid);
//     merge_sort(arr, mid + 1, end);
//     merge(arr, start, end, mid)
//     return arr
// }

// console.log(merge_sort([1,2,5,3,2,4,7]))

//2․ Իրականացնել selection sort ալգորիթմը

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; ++i) {
//     let minIndex = i;
//     for(let j = i + 1; j < arr.length; ++j){
//         if(arr[minIndex] > arr[j]){
//             minIndex = j
//         }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// }


// console.log(selectionSort([2,1,3,5,2,4,7]))