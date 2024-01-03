

//Իրականացնել quick sort ալգորիթմը

//Տարբերակ 1 ռեկուրսիվ

//quick sort recursive

// function devide(arr){
//     if(arr.length < 2) {return arr}

//     let remember = arr.pop();

//     let array1 = [];
//     let array2 = [];

//     for(let key in arr){
//         if(arr[key] >= remember){
//             array2.push(arr[key])
//         }else{
//             array1.push(arr[key])
//         }
//     }

//     return devide(array1).concat([remember], devide(array2))
// }
// console.log(devide([1,2,5,8,6, 0, 3]))

//Տարբերակ 2 իտերատիվ

// function pivotRet(arr, start, end){
//     let i = start - 1;
//     let j = start;
//     let pivot = arr[end]
//     while(j < end){
//         if(arr[j] < pivot){
//             ++i;
//             [arr[j], arr[i]] = [arr[i], arr[j]]
//         }
//         ++j
//     }

//     ++i;
//     [arr[i], arr[end]] = [arr[end], arr[i]]
//     return i
// }

// function quickSort(arr, start= 0, end = arr.length - 1){
//     let pivot = pivotRet(arr, start, end)
//     quickSort(arr, start, pivot - 1)
//     quickSort(arr, pivot + 1, end)
// }

// console.log(quickSort([2,1,5,3,4]))
