let arr= [1, 2, 3, 4, 5];


function rev(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function wavArray(arr){
    for(let i=0;i<arr.length-1;i=i+2){
        rev(arr,i,i+1)
    }

    return arr;
}

console.log(wavArray(arr))