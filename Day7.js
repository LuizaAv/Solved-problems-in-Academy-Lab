//1. Գրել տրված թվի ֆակտորիալը հաշվող ռեկուրսիվ ֆունկցիա։
//tarberak 1
// function fac(num){
//     if(num === 1  || num === 0) {
//         return 1
//     }

//     return num * fac(num -1)
// }

// console.log(fac(5))

//tarberak 2
// function fac(num, step = num){
//     if(step === 2){return 2}
//     return step * fac(num, --step)
// }
// console.log(fac(5))


//2. Իրականացնել բինար որոնման ալգորիթմը զանգվածի համար ռեկուրսիվ տարբերակով։

// function binarySearch(arr, elem, start = 0, end = arr.length - 1) {
//     let mid = Math.floor((start+end)/2)
//     if(start > end) { return -1}
//     if(arr[mid] === elem) {return mid}
//     if(arr[mid] > elem) {return binarySearch(arr,elem, start, end = mid - 1)}
//     if(arr[mid] < elem) {return binarySearch(arr, elem, start = mid +1, end)}
// }

// console.log(binarySearch([1,5,7,8], 10))

//3.Իրականացնել ռեկուրսիվ ֆունկցիա, որը ստանում է N թիվ և վերադարձնում այդ թվի երկուական համակարգում ներկայացումը։

//tarberak 1
// function recBinary(num){
//     if(num <= 0){ return ""}
//     return recBinary(Math.floor(num / 2)) + num % 2
// }
// console.log(recBinary(16))

//tarberak 2
// function foo(num, result = ""){
//     if(num === 0){
//         return result
//     }

//     return foo(Math.floor(num/2)) + num % 2
// }

// console.log(foo(16))


// 4. Իրականացնել ռեկուրսիվ ֆունկցիա, որը ստանում է թիվ և վերադարձնում թվի թվանշանների արտադրյալը։
//tarberak 1
// function rec(num) {
//     if(num < 10){return 1}

//     return rec(Math.floor(num / 10)) * (num  % 10)
// }

// console.log(rec(125))

//tarberak 2
// function foo(num, result = 1){
//     if(num === 0){return result}
//     result = result * (num % 10)
//     return foo(Math.floor(num / 10), result)
// }

// console.log(foo(256))

// 5.Իրականացնել ռեկուրսիվ ֆունկցիա, որը կստանա տող և կվերադարձնի տողի երկարությունը։

// function foo(str, i = 0){
//     if(i >= str.length){return i}
//     return foo(str, ++i)
// }

// console.log(foo("agagahs46"))

//6. Իրականացնել ռեկուրսիվ ֆունկցիա, որը ստանում է տող և վերադարձնում տողում առաջին հանդիպած մեծատառը։
// function foo(char){
//     if(char >= "A" && char <= "Z"){
//         return true
//     }
//     return false
// }
// function rec(str, i = 0){
//     if(i >= str.length) {return false}
//     if(foo(str[i])){
//         return str[i]
//     }

//     return rec(str, ++i)
// }

// console.log(rec("hsgY"))
