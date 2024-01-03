
//1.Իրականացնել Array.prototype.every()) մեթոդը։

// Array.prototype.every = function(cb) {
//     for(let i = 0; i < this.length; ++i){
//         if(!(cb(this[i], i , this))){
//             return false
//         }
//     }

//     return true
// }

// let arr = [1,5,8,0,4]
// console.log(arr.every((item) => item > -1))


//2. Իրականացնել Array.prototype.reverse() մեթոդը։

// Array.prototype.reverse = function(){
//     for(let i = 0; i < (this.length) / 2; ++i){
//         let tmp = this[i];
//         this[i] = this[this.length - 1 - i];
//         this[this.length - 1 - i] = tmp
//     }

//     return this;
// }

// let arr = [1,5,2,3,6];
// console.log(arr.reverse());

//3. Իրականացնել Array.prototype.unshift() մեթոդը։

// Array.prototype.unshift = function(...args) {
//     let initialLength = this.length
//     this.length = this.length + args.length;
//     let j = 0;
//     for(let i = this.length - 1; i >= args.length - 1; --i) {
//         this[i] = this[initialLength - 1 - j];
//         ++j
//     }

//     for(let i = 0; i < args.length; ++i) {
//         this[i] = args[i]
//     }

//     return this.length
// }

// let array = [1,5,6,2,5,8];
// console.log(array.unshift(1,2,6,7))

//4. Իրականացնել Array.prototype.findLast() մեթոդը։

// Array.prototype.findLast = function(cb) {
//     for(let i = this.length - 1; i >= 0; --i) {
//         if(cb(this[i])){
//             return this[i]
//         }
//     }
// }

// let array = [1,2,3];
// console.log(array.findLast((item) => item < 3))

//5. Իրականացնել Array.prototype.indexOf() մեթոդը։

// Array.prototype.indexOf1 = function(elem, fromIndex) {
//     let start = 0;
//     if(fromIndex){
//         start = fromIndex
//     }

//     for(let i = 0; i < this.length; ++i) {
//         if(elem === this[i]) {
//             return i;
//         }
//     }
//     return - 1
// }

// let array = [1,2,3,5,3,6,8];
// console.log(array.indexOf(3, 3)

//6.  Իրականացնել Array.prototype.push() մեթոդը։

//Array.prototype.push = function(...args) {
//     let initialLength = this.length;
//     this.length += args.length;
//     let j = 0
//     for(let i = initialLength; i < this.length; ++i) {
//         this[i] = args[j];
//         ++j;
//     }

//     return this.length
// }

// let array = [1,2,3,4,5];
// console.log(array.push(1,2))

//7.  Իրականացնել Array.prototype.shift() մեթոդը։

// Array.prototype.shift = function shift(){
//     let firtElem = this[0]
//     for(let i = 0; i < this.length; ++i) {
//         this[i] = this[i+1]
//     }
//     --this.length;

//     return this
// }

// let array = [1,2,3,4,5];
// array.shift()
// console.log(array)

//8. Array.prototype.map = function(cb) {
//     let newArray = [];
//     for(let i = 0; i < this.length; i++) {
//         let res = cb(this[i], i, this);
//         newArray.push(res);
//     }
//     return newArray;
// };

// let array = [1,2,3];
// let newArr = array.map((item) => item*item);
// console.log(newArr)

//9. Իրականացնել Array.prototype.some() մեթոդը։

// Array.prototype.some = function(cb) {
//     for(let i = 0; i < this.length; ++i) {
//         if(cb(this[i], this)){
//             return true
//         }
//     }
//     return false;
// }

// let array = [1,2,3,45];
// console.log(array.some((item) => item > 46))


//10. Իրականացնել Array.prototype.find() մեթոդը։

// Array.prototype.find = function (cb) {
//     for(let i = 0; i < this.length; ++i) {
//         if(cb(this[i], i, this)){
//             return this[i];
//         }
//     }
// }

// let array = [1,2,3];
// let it = array.find((item) => item > 2);
// console.log(it)

//11. Իրականացնել Array.prototype.concat() մեթոդը։

// Array.prototype.concat1 = function (...args) {
//     let newArray = [];

//     for(let i = 0; i < this.length; ++i){
//         newArray[i] = this[i]
//     }

//     let j = 0;
//     let elem = this.length 

//     for(let i = 0; i < args.length; ++i) {
//         while(args[i][j]){
//             newArray[elem] = args[i][j];
//             ++elem;
//             ++j;
//         }
//         j = 0;
//         elem += args[i].length - 2
//     }

//     return newArray
// }

// let array = [1,2,3,4,5]
//console.log(array.concat1([8,9], [5,6,7]))

//12. Իրականացնել Array.prototype.findIndex() մեթոդը:

// Array.prototype.findIndex = function(cb){
//     for (let i = 0; i < this.length; ++i) {
//         if(cb(this[i])){
//             return i;
//         }
//     }

//     return -1;
// }

// let array = [1,2,5,63,2];

// console.log(array.findIndex((item) => item > 63))

//13. Իրականացնել Array.prototype.filter() մեթոդը:

// Array.prototype.filter = function(cb) {
//     let copy = [];
//     for(let i = 0; i < this.length; ++i) {
//         if(cb(this[i], i, this)){
//             copy.push(this[i]);
//         }
//     }

//     return copy
// }

// let array = [1,2,3];
// let newArr = array.filter((item) => item > 1);
// console.log(newArr)

//14.  Իրականացնել Array.prototype.at() մեթոդը:

//tarberak 1
// Array.prototype.at = function (index) {
//     if(index >= 0){
//         return this[index];
//     }else{
//         return this[this.length + index]
//     }
// }

//tarberak 2

// Array.prototype.at = function(index){
//     if(index >= 0){
//         for(let i = 0; i < this.length; ++i){
//             if(i === index){
//                 return this[i]
//             }
//         }
//     }else{
//         let j = -1;
//         for(let i = - 1; i > -this.length; --i){
//             ++j
//             if(i === index){
//                 return this[this.length - 1 - j]
//             }
//         }
//     }
// }

// let array = [4,2,5,8,9];
// console.log(array.at(-2))

//15.Իրականացնել Array.prototype.forEach() մեթոդը։

// Array.prototype.forEach1 = function(cb) {
//     for(let i = 0; i < this.length; ++i){
//         cb(this[i], i , this)
//     }
// }

// let array = [1,2,3];
// array.forEach1((item) => console.log(item + 1));

//16.Իրականացնել Array.prototype.sort() մեթոդը։

// Array.prototype.sort = function (cb) {
    //     let length = this.length;
    
    //     let cmp = (a, b) => {
    //         if(a < b) { return -1}
    //         else if( a > b) { return 1}
    //         else { return 0}
    //     }
    
    //     for (let i = 0; i < this.length - 1; ++i) {
    //         for(let j = 0; j < this.length - 1 - i; ++j) {
    //             if(cmp(this[j], this[j+1]) > 0){
    //                 [this[j],this[j+1]] = [this[j+1], this[j]]
    //             }
    //         }
    //     }
    
    //     return this
    // }
    
    // let arr = [5,2,1,4];
    //console.log(arr.sort())
    
    //17. Իրականացնել Array.prototype.reduce() մեթոդը։

    // Array.prototype.reduce = function(cb, initialValue){
    //     let accumulator = initialValue ? initialValue : this[0];
    //     for(let i = initialValue ? 0 : 1; i < this.length; ++i){
    //         accumulator = cb(accumulator, this[i], i, this)
    //     }
    //     return accumulator
    // }

    // let array = [8,2,2,3];
    // console.log(array.reduce((acc, current) => acc + current, 1))

    // const sumWithInitial = array1.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     initialValue,
    //   );