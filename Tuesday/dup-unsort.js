let arr = [1, 2, 2, 3, 4, 7,  8];

function sortedArray(arr){
    let x =0;
    let uni = []

    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[x]){
            x = x+1;
            uni.push(arr[i])
            arr[x] = arr[i];
        
        }
    }

    return uni;

}

console.log(sortedArray(arr))