





//1. Տրված թվի երկուական համակարգի ներկայացման մեջ հաշվել 1-երի քանակը։
// function checkOnes(n){
//     let sum = 0;
//     while(n!=0){
//         if(n & 1){
//             ++sum
//         }
//         n >>>= 1;
//     }
//     return sum
// }

// console.log(checkOnes(12))


//2. Ստուգել թվի 1 արժեքով բիթերի քանակը կենտ է, թե զույգ

// function check(n){
//     let sum = 0;
//     while(n!=0){
//         if(n & 1){
//             ++sum
//         }
//         n >>>= 1;
//     }

//     return sum % 2 === 0 ? "Even" : "Odd"
// }

// console.log(check(1))

//3. Գրել set(n,  i) ֆունկցիան, որը տրված n թվի i-րդ բիթը կդարձնի 1։

// function set(n, i){
//     return n | (1 << i)
// }

// console.log(set(5,2))

//4. Գրել reset(n, i), որը տրված n թվի i-րդ բիթը կդարձնի 0։

// function reset(n, i){
//     return ~(1 << i) & n
// }

// console.log(reset(5, 2))

//5. Գրել flip(n, i), որը տրված n թվի i-րդ բիթը  կշրջի, այսինքն 1-ը կդարձնի 0, 0-ն` 1:

//tarberak1
// function flip(n, i){
//     if(n & (1 >>> i)){
//         return n & (1 >>> i)
//     }else{
//         return ~(1 << i) & n
//     }
// }

// console.log(flip(5, 2))

//tarberak2

// function flip(n, i){
//     return (1 << i) ^ n
// }