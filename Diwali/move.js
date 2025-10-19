// nput: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

let arr = [1, 2, 0, 4, 3, 0, 0, 0,8,5,9]

function moveZeros(arr){
    let x =0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] != 0){
            arr[x] = arr[i];
            x = x+1;
        }
    }

    for(let i = x; i <arr.length;i++){
        arr[i] = 0
    }

    return arr;
}

console.log(moveZeros(arr))