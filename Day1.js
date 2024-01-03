



    // 1. Գտնել զանգվածի մեծագույն արեքը
    // let arr = [1,2,3]

    // let max = arr[0];
    // for (let i = 1; i < arr.length; ++i) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    // }

    // console.log(max); 

    //2. Գտնել զանգվածի փոքրագույն արժեքը
    // let arr = [1,2,3];
    // let min = arr[0];
    // for (let i = 1; i < arr.length; ++i) {
    //     if ( arr[i] < min) {
    //         min = arr[i];
    //     }
    // }

    // console.log(min);

    //3. Գտնելմեծագույն արժեքի ինդեքսը
    
    // let arr = [1,2,3]

    // let max = arr[0];
    // let index = 0
    // for (let i = 1; i < arr.length; ++i) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //         index = i;
    //     }
    // }

    //console.log(index)

    //4. Գտնել փոքրագույն արժեքի ինդեքսը
    // let arr = [1,2,3];

    // let min = arr[0];
    // let index = 0;

    // for (let i = 1; i < arr.length; ++i) {
    //     if (arr[i] < min) {
    //         min = arr[i];
    //         index = i;
    //     }
    // }

    // console.log(index);

    //5. Վերադարձնել մեծագույն և փոքրագույն արժեքների գումարը

    // let arr = [1,5,2,3];
    // let max = arr[0];
    // let min = arr[0];

    // for (let i = 0; i < arr.length; ++i) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    //     if (arr[i] < min){
    //         min = arr[i];
    //     }
    // }

    // let sum = min + max;
    // console.log(sum)

    //6․ Տպել զանգվածի յուրաքանչյուր անդամի կրկնապատիկը
    // let arr = [1,2,3,4,5];
    // let res = 1;

    // for ( let i = 0; i < arr.length; i++) {
    //     res *= arr[i];
    // }

    // console.log(res)

    //7.Զանգվածի յուրաքանչյուր էլեմենտ բաժանել զանգվածի երկարությանը
    // let arr = [5,1,7];

    // let newArr = [];

    // for (let i = 0; i < arr.length; ++i) {
    //     newArr.push(arr[i] / arr.length)
    // }

    // console.log(newArr)

    //8․Տպել 2 զանգվածների համապատասխան էլեմենտների գումարը
    // let arr = [1,2,3];
    // let arr1 = [3,4,5];

    // if(arr.length === arr1.length) {
    //     for( let i = 0; i < arr.length; ++i) {
    //         console.log(arr[i] + arr1[i]);
    //     }
    // }


    //9. Տպել զանգվածում  եղած պարզ թվերի քանակը
    
    let arr = [5,6,10,9,7];
    let count = 0;

    for( let i = 0; i < arr.length; ++i){
        let check = true;
        for(let j = 2; j < arr[i]; j++){
            if(arr[i] % j === 0){
                check = false;
                break;
            }
        }
        if(check) {
            count++
        }
    }

    console.log(count)