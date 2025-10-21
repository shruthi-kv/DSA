let arr = [0,1,1,1,0,0,0,0,1,1,1,1,0];

function maxOnes(arr){
    let maxCount = 0;
    let count = 1;

    for(let i = 1 ; i<arr.length;i++){
        if(arr[i] === arr[i-1]){
            count ++;
        }else{
            maxCount = Math.max(maxCount,count)

            count =1;
        }
    }
    return maxCount = Math.max(maxCount,count);
}

console.log(maxOnes(arr))