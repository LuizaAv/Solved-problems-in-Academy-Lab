//1. Իրականացնել ֆունկցիա, որը ստանում է ամբողջ թվային պարամետր և վերադարձնում է n-րդ Ֆիբոնաչիի թիվը։

// function fib(num) {
//     if(num === 0) {
//         return num;
//     }
//     if(num === 1 || num === 2){
//         return 1;
//     }

//     let firtsNum = 0;
//     let currentNum = 1;

//     let start = 2;
//     while(start !== num) {
//         let nextNum = firtsNum + currentNum;
//         firtsNum = currentNum;
//         currentNum = nextNum;
//         start++
//     }

//     return currentNum
// }

// console.log(fib(5))

//2. Table of a Number: Գրել ֆունկցիա, որը կտպի տրված թվի բազմապատկման աղյուսակը։

// function mulNumber(num){
//     let start = 1;
//     while(start <= 10){
//         console.log(`${start} * ${num} = ${start * num}`)
//         start++
//     }
// }

// mulNumber(10)

//3. Գրել տրված թվի ֆակտորիալը հաշվող իտերատիվ ֆունկցիա։

// function fac (num) {
//     let result = 1;

//     while(num !== 0){
//         result *= num;
//         num--
//     }
//     return result
// }

// console.log(fac(5))

//4. Իրականացնել ֆունկցիա, որը ստուգում է՝ թիվը պարզ է, թե ոչ։ Պարզ է համարվում այն թիվը, որը առանց մնացորդ կարող է բաժանվել ինքը իր վրա և մեկի վրա (մեկը պարզ թիվ չէ)։

// function prime(num) {
//     if(num === 1){
//         return `${num} isn't prime`
//     }else if(num === 2){
//         return `${num} is prime`
//     }
//     let start = 2
//     while(start < num / 2){
//         if(num % start === 0){
//             return `${num} isn't prime`
//         }
//         start++
//     }

//     return `${num} is prime`
// }

// console.log(prime(10))

//5. Գրել ֆունկցիա, որը մուտքագրում է տողերի զանգված և վերադարձնում նոր զանգված, որը պարունակում է միայն 3-ից ավելի կամ հավասար տողեր:

// function moreThanThree(arr){
//     let newArr = []
//     for(let i = 0; i < arr.length; ++i){
//         if(arr[i].length >= 3){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(moreThanThree(["abcd", 'ab', 'cd', 'name']))

//6. Գրել ֆունկցիա, որը ստանում է զանգված և վերադարձնում true, եթե զանգվածում կա գոնե մեկ տարր, որը բաժանվում է 3-ի և 5-ի:Հակառակ դեպքում վերադարձնում է false:

// function check(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 5 === 0 && arr[i] % 3 === 0){
//             return true
//         }
//     }

//     return false
// }

// console.log(check([1,2,5]))

//7.Գրել ֆունկցիա, որն ընդունում է ամբողջ թվերի զանգվածը որպես մուտքագրում և վերադարձնում է նոր զանգված, որի բոլոր զույգ թվերը հանված են:

// function checkForOdds(arr){
//     let newArr = [];
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] % 2 === 1){
//                 newArr.push(arr[i])
//             }
//         }
//     return newArr
// }

// console.log(checkForOdds([1,5,2,6,9,4]))

//8. Իրականացնել  ֆունկցիա, որը վերադարձնում է՝ 1, եթե ֆունկցային փոխանցված ամբողջ թիվը կարող է արտահայտվել երկու պարզ թվերի գումարով, հակառակ դեպքում ֆունկցիան կվերադարձնի՝ 0:

// function primesSum(num){
//     if(num === 1 || num === 2){
//         return 0
//     }

//     let start = 2;
//     while(start < num / 2){
//         if(isPrime(start) && isPrime(num - start)){
//             return 1
//         }
//         start++
//     }
//     return 0;
// }

// function isPrime(num){
//     if(num === 1){
//         return false
//     }else if(num === 2){
//         return true
//     }
//     let start = 2
//     while(start < num / 2){
//         if(num % start === 0){
//             return false
//         }
//         start++
//     }

//     return true
// }

// console.log(primesSum(3))

//9. Գրել ֆունկցիա, որը վերադարձնում է զանգվածի այն տարրերը, որոնց տիպը 'number' է և որոնց արժեքը 2-ից մեծ է:

// function checkForNumbers(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 1 !== NaN && arr[i] > 2){
//             console.log(arr[i])
//         }
//     }
// }

// checkForNumbers(['a', 1 , 5 , 7, 'j'])