let arr = [12,0,9];

function moveZeros(arr){
    let x = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[x] = arr[i];
            x = x+1;
        }
    }

    for(let i = x;i<arr.length;i++){
        arr[i] = 0;
    }

    return arr;
}

console.log(moveZeros(arr))