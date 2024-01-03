
//1․Գրել ֆունկցիա, որը կստանա n թիվ և m թվանշան։ Եթե n թվի թվանշանների մեջ կա m թիվը 
//վերադարձնել true, հակառակ դեպքում false;

// function check1(n, m){
    
//     if(n < 10 && n === m){
//         return true
//     }else if(n >= 10){
//         while(n !== 0){
//             let remainder = n % 10;
//             n = (n - remainder) / 10;
//             if(remainder === m) {
//                 return true
//             }
//         }
//     }

//     return false;
// }

// console.log(check1(9, 8))


//2. Գրել ֆունկցիա, որը կստանա n թիվ և m թվանշան։ Եթե n թվի թվանշանների մեջ չկա 
//m թիվը վերադարձնել true, հակառակ դեպքում false;

// function check2(n, m){
//     if(n < 10 && n === m){
//         return false
//     }else if(n >= 10){
//         while(n !== 0){
//             let remainder = n % 10;
//             n = (n - remainder) / 10;
//             if(remainder === m) {
//                 return false
//             }
//         }
//     }

//     return true
// }

// console.log(check2(5, 5))


//3. Գրել ֆունկցիա, որը կստանա n թիվ։ Եթե n թվի թվանշանները դասավորված են 
//աճման կարգով, վերադարձնել true, հակառակ դեպքում false;

// function check3(n){
//     let num
//     while(n !== 0){
//         let remainder = n % 10;
//         n = (n - remainder) / 10;
//         if(num !== undefined && remainder > num){
//             return false
//         }
//         num = remainder;
//     }

//     return true
// }

// console.log(check3(120))


//4.  Գրել ֆունկցիա, որը կստանա n թիվ։ Եթե n թվի թվանշանները նվազման կարգով 
//չեն դասավորված, վերադարձնել true, հակառակ դեպքում false;

// function check4(n) {
//     let num;
//     while(n !== 0){
//         let remainder = n % 10;
//         n = (n - remainder) / 10;
//         if(num !== undefined && remainder > num) {
//             return false
//         }
//         num = remainder
//     }

//     return true
// }

// console.log(check4(122))

//5. Գրել ֆունկցիա, որը կստանա n և m ամբողջ տիպի թվեր։ Եթե n թվի թվանշանների գումարը
// հավասար է  m թվին վերադարձնել true, հակառակ դեպքում false;

// function check5(n, m){
//     let sum = 0;

//     while(n !== 0){
//         let remainder = n % 10;
//         n = (n - remainder) / 10;
//         sum += remainder
//     }

//     if(sum === m){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(check5(123,0))

//6. Տրված են երեք բնական թվեր՝ a, b և c։ Օգտվելով Պյութագորասի թեորեմից, ստուգել արդյոք նշված երկարություններով 
//կողերով եռանկյունը ուղղանկյուն եռանկյուն է։

// function check6(){
//     let a = 3;
//     let b = 4;
//     let c = 5;

//     if((a**2 + b**2 === c**2) || (a**2 + c**2 === b**2) || b**2 + c**2 === a**2){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(check6())

//7. Գրել ֆունկցիա, որը ստանում է a և b թվերը(որտեղ a-ն ուղղանկյուն եռանկյան դիմացի էջն է, իսկ  b-ն ուղղանկյուն 
//եռանկյան կից էջը) հաշվել և վերադարձնել կից էջով և ներքնաձիգով կազմած անկյան սինուսը(sin)

// function sin(a, b){
//     let c = Math.sqrt(a**2 + b**2)
//     let sinL = a / c 

//     return sinL
// }

// console.log(sin(3,4))

//8. Գրել ֆունկցիա, որը ստանում է a և b թվերը(որտեղ a-ն ուղղանկյուն եռանկյան դիմացի էջն է, իսկ  b-ն ուղղանկյուն 
//եռանկյան կից էջը) հաշվել և վերադարձնել կից էջով և ներքնաձիգով կազմած անկյան կոսինուսը(cos)

// function cos(a, b){
//     let c = Math.sqrt(a**2 + b**2)
//     let cosL = b / c

//     return cosL
// }

// console.log(cos(3,4))

//9. Գրել ֆունկցիա, որը ստանում է a և b թվերը(որտեղ a-ն ուղղանկյուն եռանկյան դիմացի էջն է, իսկ  b-ն ուղղանկյուն 
//եռանկյան կից էջը) հաշվել և վերադարձնել կից էջով և ներքնաձիգով կազմած անկյան տանգենսը(tg)

// function tg(a, b){
//     let tgL = a / b
//     return tgL
// }

// console.log(tg(3, 4))

//10. Գրել ֆունկցիա, որը ստանում է a և b թվերը(որտեղ a-ն ուղղանկյուն եռանկյան դիմացի էջն է, իսկ  b-ն ուղղանկյուն
// եռանկյան կից էջը) հաշվել և վերադարձնել կից էջով և ներքնաձիգով կազմած անկյան կոտանգենսը(ctg)

// function ctg(a, b){
//     let ctgL = b / a
//     return ctgL;
// }

// console.log(ctg(3,4))

//12. Մուտքագրել երկու բնական թիվ` n և x և հաշվել հետևյալ գումարը։

// function factorial(n){
//     let res = 1;
//     for(let i = 1; i <= n; ++i){
//         res *= i;
//     }
//     return res;
// }

// function pow(n, m){
//     if(m === 1){ return n}
//     return n * pow(n, m = m - 1)
// }

// function countSum(n, x){
//     let sum = 0;

//     for (let i = 1; i <= n; ++i) {
//         sum += pow(-1, i) * (pow(x, i+1)/ factorial(3*i) + pow(2, i+1))
//     }

//     return sum
// }

// console.log(countSum(2,3))

//13. Գրել ֆունկցիա, որը կստանա n թիվ։ Եթե n թվի թվանշանները կազմում են թվաբանական պրոգրեսիա 
//վերադարձնել true, հակառակ դեպքում false;

// function check7(n){
//     let digits = [];
//     while(n !== 0){
//         let remainder = n % 10;
//         n = (n - remainder) / 10;
//         digits.push(remainder)
//     }

//     digits = digits.reverse();
//     let dif = digits[1] - digits[0];

//     for(let i = 1; i < digits.length - 1; ++i) {
//         if(digits[i+1] - digits[i] !== dif){
//             return false
//         }
//     }

//     return  true
// }

// console.log(check7(246815))

//14. Գրել ֆունկցիա, որը կստանա n թիվ։ Եթե n թվի թվանշանները կազմում են երկրաչափական պրոգրեսիա 
//վերադարձնել true, հակառակ դեպքում false;

// function check8(n) {
//     let digits = [];
//     while(n !== 0){
//         let remainder = n % 10;
//         n = (n - remainder) / 10;
//         digits.push(remainder)
//     }

//     digits = digits.reverse();

//     let dif = digits[1] / digits[0];
//     for (let i = 1; i < digits.length - 1; ++i) {
//         if(digits[i+1] / digits[i] !== dif){
//             return false
//         }
//     }

//     return true
// }

// console.log(check8(36))


