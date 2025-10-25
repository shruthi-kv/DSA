let arr = [4, 0, 2,1,5];

function missing(arr){
    let min = arr[0];
    let missing = 0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }

    let max = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }

    for(let i = min ;i<=max;i++){
        if(!arr.includes(i)){
            missing = i;
        }
    }
    

    return missing
}

console.log(missing(arr))