//1․ Տպել զանգվածի էլեմենտները հակառակ հերթականությամբ
// let arr = [1,2,3]

// for(let i = arr.length-1; i >= 0; i--){
//     console.log(arr[i])
// }

//2․ Գտնել էլեմենտների միջին թվաբանականը 

// let arr = [1,2,3,4,5];
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum+= arr[i]
// }

// let avg = sum / arr.length
// console.log(avg)


//3. զանգվածից հեռացնել բոլոր 0, գորողությունը կատարել նույն զանգվածում, փոքրացնել զանգվածի երկարությունը
// let arr = [1,2,0,5,0];
// let j = arr.length - 1;
// for(let i = arr.length; i >=0; i--){
//     if(arr[i] === 0){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         arr.length = arr.length - 1;
//         j--;
//     }
// }
// // console.log(arr)

// // 4․ գրել ֆունցկիա, որը ստանում է զանգված, և ստուգում ուղարկված թիվը կա զանգվածում թե ոչ

// function foo(arr, num) {
//     for(let i = 0; i < arr.length; ++i){
//         if(arr[i] === num){
//             return "Num is exist"
//         }
//     }
//     return "Num isnt exist"
// }

// console.log(foo([1,2,3], 1))


//5․ Ստուգել և դուրս բերել զանգվածի թվերը

//let arr = ['h', '5', " *"]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 1 === 0){
//         console.log(arr[i])
//     }
// }


//6․ Հայտարարել սիմվոլների զանգված  և հեռացնել կրկնվող նիշերը զանգվածից:
// let arr = ['d', 'a', 'b', 'c', 'a', 'b', 'b'];
// let newArr = [];

// for(let i = 0; i < arr.length; i++){
//     let boo = true;
//     for(let j = 0; j < newArr.length; j++){
        
//         if(arr[i] === newArr[j]){
//             boo = false;
//             break;
//         } 
//     }
//     if(boo) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)

//7. Տեղերով փոխել տրված իրական թվերի հաջորդականության առաջին և 
//վերջին բացասական տարրերը (համարել, որ հաջորդականությունում կա առնվազն մեկ բացասական թիվ):

// function swapNum(arr){
//     let firstIndex;
//     let lastIndex; 
//     let j = arr.length - 1
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0 && firstIndex === undefined){
//             firstIndex = i
//         }

//         if(arr[j] < 0 && lastIndex === undefined){
//             lastIndex = j
//         }
//         j--
//     }
//     lastIndex === firstIndex ? null : [arr[firstIndex], arr[lastIndex]] = [arr[lastIndex], arr[firstIndex]]
//     return arr
// }

// console.log(swapNum([1,-4,2,3]))

//8. Գրել ֆունկցիա, որը ստանում է զանգված եւ ինդեքսի համար։ Ֆունկցիան հեռացնում է 
//զանգվածի տրված ինդեքսով տարրը եւ վերադարձնում նոր զանգվածը որպես արդյունք։

// function deleteElement(arr, index){
//     [arr[index], arr[arr.length - 1]] = [arr[arr.length-1], arr[index]];
//     arr.length = arr.length - 1;
//     return arr
// }

// console.log(deleteElement([1,2,3,4,5,6], 4))

//9. Հայտարարել սիմվոլների զանգված և զանգվածում փոքրատառերը վերածել մեծատառի։

// function toUpperCase(arr){
//     for (let i = 0; i < arr.length; ++i) {
//         if(arr[i] >= 'a' && arr[i] <= 'z'){
//             arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 32)
//         }
//     }

//     return arr
// }

// console.log(toUpperCase(['a', 'H', 'b']))