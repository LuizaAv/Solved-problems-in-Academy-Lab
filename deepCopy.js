
// function deepcopy(obj) {
//     // if (obj === null || typeof obj !== 'object' || typeof obj === 'function') {
//         if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }
//     let copy = Array.isArray(obj) ? [] : {};
//     for (let key in Object.getOwnPropertyDescriptors(obj)) {
//         if (typeof obj[key] === "object") {
//             copy[key] = deepcopy(obj[key]);
//         } else {
//             Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
//         }
//     }
//     return copy;
// }



function deepCopy(obj){
//     let copy = Array.isArray(obj) ? [] : {};

//     let allDescriptor = Object.getOwnPropertyDescriptors(obj)

//     for(let key in allDescriptor){
//         if(typeof(allDescriptor[key].value ) === "object"){
//             Object.defineProperty(copy, key, {
//                 value: deepCopy(allDescriptor[key].value),
//                 enumerable: allDescriptor[key].enumerable,
//                 writable:allDescriptor[key].writable,
//                 configurable: allDescriptor[key].configurable
//             })
//         }else if(typeof(allDescriptor[key]) === "function"){
//             Object.defineProperty(copy, key, {
//                 value: (new Function(`return ${allDescriptor[key].value.toString()}`))(),
//                 enumerable: allDescriptor[key].enumerable,
//                 writable:allDescriptor[key].writable,
//                 configurable: allDescriptor[key].configurable
//             })
//         }
//     }
// }

// // let obj = {
// //     name: "Luiza",
// //     meth(){
// //         console.log(hello)
// //     },
// //     surname: "jhh"
// // }

// //     console.log(Object.getOwnPropertyDescriptors(obj))


// // function deepCopy(obj){
// //     let copy = Array.isArray(obj) ? [] : {};

// //     for(let key in obj){
// //         if(typeof(obj[key]) === "object"){
// //             copy[key] = deepCopy(obj[key])
// //         }else if(typeof(obj[key] === "function")){
// //             copy[key] = (new Function("return " + obj[key].toString()))()
// //         }else{
// //             copy[key] = obj[key]
// //         }
// //     }

// //     return copy
// // }

// function copy(obj1){
//     if(obj1 === null || typeof(obj1) !== "object"){
//         return obj1
//     }

//     let newObj = Array.isArray(obj1) ? [] : {};
//     let properties = Reflect.ownKeys(obj1);
//     let descriptors = Object.getOwnPropertyDescriptors(obj1);

//     properties.forEach((key) => {
//         if(typeof(obj1[key]) === "object"){
//             Object.defineProperty(newObj, key, {
//                 value: copy(descriptors[key].value),
//                 enumerable: descriptors[key].enumerable,
//                 writable: descriptors[key].writable,
//                 configurable: descriptors[key].configurable
//             })
//         }else if(typeof(obj1[key]) === "function"){
//             Object.defineProperty(newObj, key, {
//                 value: (new Function('return ' + descriptors[key].value.toString()))(),
//                 writable: descriptors[key].writable,
//                 enumerable: descriptors[key].enumerable,
//                 configurable: descriptors[key].configurable
//             })
//         }else{
//             Object.defineProperty(newObj, key, {
//                 value: descriptors[key].value,
//                 writable: descriptors[key].writable,
//                 enumerable: descriptors[key].enumerable,
//                 configurable: descriptors[key].configurable
//             })
//         }
//     })
//     return newObj
// }


// function deepCopy(obj) {
//     let newObj = Array.isArray(obj) ? [] : {};

//     for(let key in obj){
//         //console.log(key)
//         if(typeof(obj[key]) === "object"){
//             newObj[key] = deepCopy(obj[key])
//         }else if(typeof(obj[key]) === "function"){
//             newObj[key] = (new Function("return " + obj[key].toString()))();
//         }else{
//             newObj[key] = obj[key]
//         }
//     }

//     return newObj
// }

// function clone(input) {
//     if(input === null || typeof(input) !== "object") {
//         return input;
//     }

//     const initialValue = Array.isArray(input) ? [] : {};

//     return Object.keys(input).reduce((acc, key) => {
//         acc[key] = clone(input[key]);
//         return acc;
//     }, initialValue)
// }


// function clone(input) {
//     if (input === null || typeof input !== "object") {
//         return input;
//     }
//     const initialValue = Array.isArray(input) ? [] : {};

//     return Reflect.ownKeys(input).reduce((acc, key) => {
//         acc[key] = clone(input[key]);
//         return acc;
//     }, initialValue);
// }

