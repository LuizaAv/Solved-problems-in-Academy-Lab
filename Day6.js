//1.Գրել ռեկուրսիվ ֆունկցիա, որը ստանում է n բնական թիվ և տպում է n-ից 0 թվերը։

// function print(n) {
//     if(n <0){
//         return n;
//     }
//     console.log(n)
//     return print(n-1)
// }

// print(10)

//2. Գրել ռեկուրսիվ ֆունկցիա, որը ստանում է n բնական թիվ և տպում է 0-ից n թվերը։

// function print(n) {
//     if(n <= 0){
//         console.log(n)
//         return n;
//     }
//     print(n-1);
//     console.log(n)
// }

// print(10)

//3. Գրել ռեկուրսիվ ֆունկցիա, որը ստանում է ամբողջ թվային զանգված և տպում է զանգվածի էլեմենտները էկրանին։

// function print(arr, i = 0){
//     if(i === arr.length){
//         return;
//     }
//     console.log(arr[i])
//     print(arr, i = i+1)
// }

// print([1,2,3,4])

//4.Իրականացնել ռեկուրսիվ ֆունկցիա, որն ընդունում է թիվ և վերադարձնում նրա թվանշանների գումարը:

// function sum(num, summary = 0 ) {
//     if(num <= 0){
//         return summary
//     }
//     let remainder = num % 10;
//     num = (num - remainder) / 10;
//     summary += remainder
//     return sum(num, summary)
// }

// console.log(sum(155))


//5. Իրականացնել ռեկուրսիվ ֆունկցիա, որը հաշվում է երկու թվերի ամենամեծ ընդհանուր բաժանարարը։
//tarberak 1
// function foo(num1, num2, div = 1, maxDiv = 1){
//     if(min = num1 > num2 ? num2 : num1);
//     if(div > min) {
//         return maxDiv;
//     }

//     if(num1 % div === 0 && num2 % div === 0){
//          maxDiv = div;
//     }

//     return foo(num1, num2, ++div, maxDiv)
// }

// console.log(foo(11,110))

//tarberak 2
// function foo(a, b){
//     if(a === 0){
//         return b;
//     }
//     return foo(b % a, a)
// }

// console.log(foo(240, 120))

//6. Իրականացնել բինար որոնման ալգորիթմը զանգվածի համար ռեկուրսիվ տարբերակներով։

// function binarySearch(arr, elem, start = 0, end = arr.length - 1) {
//     let mid =  Math.floor((start + end)/2)
//     if(start > end) {
//         return -1;
//     }
//     if( arr[mid] === elem) {
//         return mid
//     }
//     if(arr[mid] > elem) return binarySearch(arr, elem, start, end = end - 1)
//     if(arr[mid] < elem) return binarySearch(arr, elem, start = start + 1, end)
// }

// console.log(binarySearch([1,5,6,10,15], 0))

//7.Իրականացնել ռեկուրսիվ ֆունկցիա, որը ստանում է ամբողջ թվային պարամետր և վերադարձնում է n-րդ Ֆիբոնաչիի թիվը։

// function fib(n) {
//     if(n < 2){
//         return n
//     }
//     return fib(n-1) + fib(n - 2)
// }

// console.log(fib(5))
