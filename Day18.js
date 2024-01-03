




//1. n թվանշան ունեցող բնական թիվը կոչվում է Արմսթրոնգի թիվ, եթե նրա թվանշանների n աստիճանների գումարը 
//հավասար է այդ թվին (օրինակ՝ 153=1^3 +5^3 +3^3 ): Ներմուծել թիվ, արտածել YES եթե այն հանդիսանում է 
//Արմսթրոնգի թիվ, և NO հակառակ դեպքում։

// function pow(n, m){
//     if(m === 1){ return n}
//     return n * pow(n, m = m - 1)
// }

// function amstrongNumber(n) {
//     let quantity = 0;
//     let copy = n;
//     let anotherCopy = n

//     while(copy !== 0) {
//         let remainder = copy % 10;
//         copy = (copy - remainder) / 10;
//         ++quantity
//     }
    
//     let sum = 0;
//     while(n !== 0){
//         let remainder = n % 10;
//         n = (n - remainder) / 10;
//         sum += pow(remainder, quantity)
//     }

//     return sum === anotherCopy ? "Yes" : "No"
// }

// console.log(amstrongNumber(153))


//2. Գրել ֆունկցիա, որը որպես արգումենտ կստանա բնական թիվ 
//և կստուգի թիվը երկուսի աստիճան է թե ոչ: O(1) space and time complexity.

// let isPowerOfTwo = function(n) {
//     if((n>0) && ((n - 1) & n )=== 0){
//         return true
//     }
//     return false
// };


//3.Գրեք ֆունկցիա, որը կստանա թիվ որպես արգումենտ և կվերադարձնի true, 
//եթե փոխանցված թիվը, ինչ որ թվի քառակուսի է, հակառակ դեպքում՝ false:

// function square(n) {
//     let start = 2;
//     let copy = n;
//     while(start <= copy / 2){
//         if(start**2 === n){
//             return "true"
//         }
//         ++start
//     }
//     return "false"
// }

// console.log(square(60))

//4. Մուտքագրել երեք բնական թվեր՝ a, b և c։ Հաշվել այդ կողմերով եռանկյան մակերեսը Հերոնի բանաձևով։

// function heron(a, b, c){
//     let p = (a + b + c) / 2;
//     let result = Math.sqrt(p * ((p - a) * (p - b) * (p - c)))
    
//     return result
// }

// console.log(heron(10,15,10))

//5. Տրված է X և a բնական թվեր։ Իրականացնել ֆունկցիա, որը կհաշվի X թվի լոգարիթմը a հիմքով։

// function log (x, a) {
//     let logResult
//     let start
//     if(x === a){
//         logResult = 1;
//         return logResult
//     }else if(x >= a){
//         let part = a
//         start = a
//         while(start <= x / 2){
//             if(part**start === x){
//                 return start
//             }
//             ++start
//         }
//     }

//     return start /2
// }

// console.log(log(7, 2))

//6. Հաշվել քառակուսային արտահայտության արմատները

//2aX**2 + bX - c = 0;
 
// function discriminant(a,b,c) {
//     let D = b**2 - 4 * a * c;
//     let x1, x2
//     if(D < 0){
//         return "There is no solve"
//     }else if(D === 1){
//         x1 = -b / (2 * a)
//     }else{
//         x1 = (-b + Math.sqrt(D)) / (2 * a);
//         x2 =  (-b - Math.sqrt(D)) / (2 * a)
//     }

//     return `${x1}, ${x2}`
// }

// console.log(discriminant(5,6,1))

//7. Հաշվել տրված թվի արմատը՝ sqrt(N)։

// function sqrtCount(n) {
//         let i = 1
//         for(; i*i < n; ++i){

//         }
//         if(i * i === n){
//             return i
//         }else if(i * i > n){
//             return i - 0.5
//         }
        
// }

// console.log(sqrtCount(81))

