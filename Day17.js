



// 1. Ստուգելկատարյալ թիվ է թե ոչ։ 
//Կատարյալ է այն թիվը, որի բոլոր բաժանարարների գումարը հավասար է այդ թվին

// function check(n){
//     let sum = 0
//     let start = 1;
//     let copy = n
//     while(start <= copy/2){
//         if(copy % start === 0){
//             sum += start
//         }
//         ++start
//     }

//     return sum === n ? n : 0
// }

// for(let i = 0; i < 10000; ++i){
//     let res = check(i);
//     if(res !== 0){
//         console.log(res)
//     }
// }

// console.log(check(15))

//2. Գտնել n-րդ պարզ թիվը
//2,3,5,7,11,13,17,19,23 

// function isPrime(n){

//     let start = 2;
//     while(start <= n/2){
//         if(n % start === 0){
//             return false
//         }
//         ++start
//     }

//     return true
// }

// function nthPrime(n){
//     let num = 0;
    
//     for(let i = 1; i <= 1000000; ++i){
//         isPrime(i) ? ++num : null
//         if(n === num){
//             return i
//         }
//     }
// }
// console.log(nthPrime(5))