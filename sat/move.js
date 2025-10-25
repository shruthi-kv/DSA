let arr = [0,1,1,1,0,0,0,0,1,1,1,1,0];

function moveZeros(arr){
    let x = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] !=0){
            arr[x] = arr[i];
            x = x+1;
        }
    }

    for(let i = x+1;i<arr.length;i++){
        arr[i] = 0;
    }

    return arr;
}

console.log(moveZeros(arr))