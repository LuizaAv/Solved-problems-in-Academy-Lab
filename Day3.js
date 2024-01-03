//1. Գրել ծրագիր, որը կտպի զանգվածի կենտ էլեմենտների քանակը։
// let quantity = 0;
// let arr = [1,2,3,4,];
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] % 2 === 1){
//         quantity++;
//     };   
// }
// console.log(quantity)

//2.Հայտարարել զանգված։ Զանգվածում էլեմենտները դասավորել հակառակ հերթականությամբ և տպել էկրանին։
// let array = [1,2,3,4,5];
// for (let index = 0; index < array.length / 2; index++) {
//     let temp = array[index];
//     array[index] = array[array.length - 1 - index];
//     array[array.length - 1 - index] = temp
    
// }

// console.log(array)

//3.Հայտարարել զանգված և տպել զանգվածի ամենամեծ և ամենափոքր տարրերի ինդեքսների տարբերությունը:
// let array= [1,2,3,10,4,5,6];
// let min = array[0];
// let max = array[0];
// let maxIndex = 0;
// let minIndex = 0;

// for (let index = 1; index < array.length; index++) {
//     if(array[index] < min){
//         min = array[index];
//         minIndex = index
//     }
    
//     if(array[index] > max){
//         max = array[index];
//         maxIndex = index
//     }
// }

// let diff = maxIndex - minIndex;
// console.log(diff)

//4. Հայտարարել տարբեր չափի, երկու ամբողջ թվային զանգվածներ և տպել՝ զանգվածների գումարը՝ օգտագործելով մի for:

// let arr1 = [1,2,3,4];
// let arr2 = [1,2,3];

// // let length1 = arr1.length;
// // let length2 = arr2.length;

// // let sum = 0;
// // for(let i = 0; i < (length1 < length2 ? length2 : length1); i++){
// //     if(i < length1){
// //         sum += arr1[i];
// //     }
// //     if(i < length2){
// //         sum += arr2[i];
// //     }
// // }

// // console.log(sum)

//5.Հայտարարել նույն չափի, երկու ամբողջ թվային զանգվածներ և տպել՝ զանգվածները օգտագործելով մի for( օր՝ 
//  	let arr1 = [1, 2, 3];
//  	let arr2 = [4, 5, 6]
//      output:
//  	1 2 3 4 5 6 ):

// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8];
// let j = 0;
// for(let i = 0; i < arr1.length + arr2.length; i++) {
//     if(i < arr1.length) {
//         console.log(arr1[i])
//     }
//     if(i >= arr1.length){
//         console.log(arr2[j]);
//         j++
//     }
// }


// //6. Հայտարարել տարբեր չափի, երկու ամբողջ թվային զանգվածներ և տպել զանգվածները հակառակ հետթականությամբ օգտագործելով մի for( օր՝ 
//  	let arr1 = [1, 2, 3];
//  	let arr2 = [4, 5, 6]
//      output:
//  	3 2 1 6 5 4 ):

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let length1 = arr1.length;
// let length2 = arr2.length;
// let length = length1 + length2;


// for (let i = 0; i < length; i++) {
//     if(i < arr1.length){
//         console.log(arr1[arr1.length - 1 - i])
//     }else{
//         console.log(arr2[arr2.length + arr1.length - 1 -i])
//     }
// }

//7.Գրել ֆունկցիա, որը կստանա ջերմաստիճան արտահայտված Ֆարենհայթով։ Ֆարենհայթից ջերմաստիճանը 
//փոխարկեք Ցելսիուսի, օգտագործելով ֆունկցիա:

//Բանաձև Ֆարենհայթը = (Ցելսիուս * 9/5) + 32

// function cToF(c) {
//     return ((c) * 9/5) + 32
// }

// console.log(cToF(30))