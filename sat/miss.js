let arr = [4, 0, 2,1,5];

function missingNumber(arr){
    arr = arr.sort((a,b)=> a-b);
    console.log(arr)
    for(let i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1] + 1){
            return arr[i-1] + 1
        }
    }
    
}

console.log(missingNumber(arr))