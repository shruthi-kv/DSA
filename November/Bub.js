let arr = [5, 1, 4, 2, 8];

function bubSort(arr){
    let n =arr.length-1;

    for(let i=0;i<n;i++){
        let isASwapped = false;
        for(let j=0;j<n-i;j++){
            if(arr[j+1]<arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isASwapped = true;
            }
        }
        if(!isASwapped) break;
    }
    return arr;
}

console.log(bubSort(arr))