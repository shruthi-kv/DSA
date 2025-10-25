let arr = [0,1,1,1,0,0,0,0,1,1,1,1,0];


function countBits(arr){
    let count = 0;
    let maxCount = 0;


    for(let i=0;i<arr.length;i++){
        if(arr[i] === 1){
            count++;
        }else{
            maxCount = Math.max(count,maxCount)
            count = 1;
        }
    }

    return maxCount;
}

console.log(countBits(arr))