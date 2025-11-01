let arr = [3, 2, 1];

function countSwap(arr){

    let count = 0;
    for(let i=0;i<arr.length-1;i++ ){
        for(let j=0;j<(arr.length)-i-1;j++){
            if(arr[j+1]<arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                count++;
            }
        }
    }
    return count;
}

console.log(countSwap(arr))