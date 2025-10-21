let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];




function waveArray(arr){

    for(let i=0;i<arr.length;i=i+2){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

console.log(waveArray(arr))