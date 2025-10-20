let arr = [0,1,1,1,1,0,0,0,0,1,1,1,1,1,1];

function conseBits(arr){
    let maxCount = 0;
    let count = 1;

    for(let i=1;i<arr.length;i++){
        if(arr[i] === arr[i-1]){
            count = count+1;
        }else{
            // maxCount = Math.max(maxCount, count)
            count = 1;
        }
    }

    // return Math.max(count, maxCount)
    return count;
}

console.log(conseBits(arr))