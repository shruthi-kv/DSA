let arr = [0,0,1,2,2,4,5];

function removeDuplicates(arr){
    let x = 0;

    for(let i=0; i<arr.length;i++){
        if(arr[i]> arr[x]){
            x=x+1;
            arr[x] = arr[i]
        }
    }

    return arr;
}

console.log(removeDuplicates(arr))