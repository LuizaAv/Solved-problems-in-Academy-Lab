//1.Իրականացնել Array.prototype.map()) մեթոդը։


// Array.prototype.map = function(cb) {
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

//2. Իրականացնել Array.prototype.find() մեթոդը։

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

//3. Իրականացնել Array.prototype.filter() մեթոդը:

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

//4. Իրականացնել Array.prototype.forEach() մեթոդը։

// Array.prototype.forEach1 = function(cb) {
//     for(let i = 0; i < this.length; ++i){
//         cb(this[i], i , this)
//     }
// }

// let array = [1,2,3];
// array.forEach1((item) => console.log(item + 1));

//5. Իրականացնել Array.prototype.sort() մեթոդը։

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

//6.Իրականացնել Array.prototype.every() մեթոդը։

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

//7. Իրականացնել Array.prototype.reverse() մեթոդը։

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

//8. Իրականացնել Array.prototype.unshift() մեթոդը։

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

//     return this
// }

// let array = [1,5,6,2,5,8];
// console.log(array.unshift(1,2,6,7))

//9.Իրականացնել Array.prototype.findLast() մեթոդը։

// Array.prototype.findLast = function(cb) {
//     for(let i = this.length - 1; i >= 0; --i) {
//         if(cb(this[i])){
//             return this[i]
//         }
//     }
// }

// let array = [1,2,3];
// console.log(array.findLast((item) => item < 3))

//10. Իրականացնել Array.prototype.indexOf() մեթոդը։

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
// console.log(array.indexOf(3, 3))

//11.  Իրականացնել Array.prototype.push() մեթոդը։

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


//12. Իրականացնել Array.prototype.shift() մեթոդը։

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
