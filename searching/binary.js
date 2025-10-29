let arr = [5];

function binary(arr,num){
    let left = 0;
    let right = arr.length-1;

    while(right>=left){
        let middle = Math.floor((right + left) /2);

        if(arr[middle] === num){
            return middle;
        }else if(num > arr[middle]){
            left = middle +1;
        }else{
            right = middle-1
        }
    }
    return -1;
}

console.log(binary(arr,5))