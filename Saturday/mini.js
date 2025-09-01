let arr = [2,5,4,3,2];

function minNumber(arr){
    let min = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }

    return min;
}

console.log(minNumber(arr))