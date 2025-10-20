// let arr =[1,2,3,4,5,6]
// let k=1;

// function rotate(arr,k){
//     let temp = arr[0];
//     let x=0;

//     for(let i= k; i<arr.length;i++){
//         arr[x] = arr[i]
//         x=x+1
//     }

//     arr[x] = temp;

//     return arr;
// }

// console.log(rotate(arr,k))



// let arr =[1,2,3,4,5,6]
// let k=1;

// function rotate(arr,k){
//     let temp = arr[0];
//     for(let i=1;i<arr.length;i++){
//         arr[i-1] = arr[i];
//     }
//     arr[arr.length-1] = temp;

//     return arr;
// }

// console.log(rotate(arr,k))




let arr =[1,2,3,4,5,6]
let k=3;

function rotateOne(arr){
    let temp = arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = temp;

    return arr;
}


function rotateByKtimes(arr,k){
    k = k%(arr.length);
    if(k<0){
        k =k+(arr.length)
    }

    for(let i = 0; i < k;i++){
        rotateOne(arr)
    }
    return arr;
}



console.log(rotateByKtimes(arr,k))