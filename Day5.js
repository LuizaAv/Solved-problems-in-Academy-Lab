//1.Իրականացնել բինար որոնման ալգորիթմը զանգվածի համար իտերատիվ տարբերակով։ Iterative
// function binarySearch(arr, elem){
//     let start = 0;
//     let end = arr.length - 1;

//     while(start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if(arr[mid] === elem) {
//             return mid;
//         }else if(arr[mid] > elem){
//             end = mid-1;
//         }else{
//             start = mid+1;
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1,2,3,4], 2))

//Իրականացնել բինար որոնման ալգորիթմը զանգվածի համար իտերատիվ տարբերակով։ // recursive

// function binarRec(arr, elem, start = 0, end = arr.length -1) {
//     let mid = Math.floor(start + (end - start)/2);
//     if(start > end) return - 1;
//     if(arr[mid] === elem) return mid;
//     if(arr[mid] > elem) return binarRec(arr, elem, start, mid-1);
//     if(arr[mid] < elem) return binarRec(arr, elem, mid +1, end)
// }

// console.log(binarRec([1,2,3,4,5], 4))

//2.Իրականացնել ֆունկցիա, որը ունի հետևյալ տեսքը power ( num, exp); 
//Ֆունկցիան վերադարձնում է num ամբողջ թվի exp աստիճանի արժեքը։

// function power(num,exp) {
//     let start = 1;
//     let mul = 1;
//     while(start <= exp){
//         mul *= num
//         start++;
//     }

//     return mul
// }

// console.log(power(5,3))

//3. Իրականացնել ֆունկցիա, որը ընդունում է 
//զանգված որպես արգումենտ և ստանում է այդ զանգվածի շրջված տարբերակը, նույն զանգվածի մեջ։

// function reverse(arr) {
//     for(let i = 0; i < Math.floor(arr.length / 2); i++) {
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 -i];
//         arr[arr.length - 1 -i] = temp
//     }

//     return arr
// }

// console.log(reverse([1,5,6,7,8]))

//4. Հայտարարել փոփոխական վերագրել թվային արժեք, տպել թվի թվանշանները 
//առանձին առանձին էկրանին։ Օրինակ՝ մուտքագրված 5479 թվի համար տպել 5, 4, 7, 9։

// function digits(num) {
//     let copy = num;
//     let reversedNum = 0;
    
//     while(copy !== 0){
//         reversedNum = reversedNum * 10 + copy % 10;
//         console.log(reversedNum)
//         copy = (copy - (copy % 10))/10
//     }

//     while( reversedNum !== 0) {
//         let remainder = reversedNum % 10;
//         console.log(remainder)
//         reversedNum = (reversedNum - (reversedNum % 10))/10
//     }
// }

// console.log(digits(123))


//5. Հայտարարել փոփոխական վերագրել թվային արժեք, փոխակերպել թիվը երկուական համակարգի թվի և տպել արդյունքը։

// function toBinaryNum(num) {
//     let copy = num;
//     let binar = 0;
//     let i = 1;
//     while(copy !== 0){
//         let remainder = copy % 2;
//         binar = binar + remainder * i;
//         i = i * 10
//         copy = (copy - remainder) / 2;
//     }

//     return binar;
// }

// console.log(toBinaryNum(16))
