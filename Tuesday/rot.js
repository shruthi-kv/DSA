let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];
let k=2

function rev(arr, i,j){
    console.log(arr,"+--inp")
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] =temp;
        i++;
        j--;
    }
    console.log(arr)
    return arr;
}


function rotateArray(arr,k){
    k = k%(arr.length);
    if(k<0){
        k=k+arr.length
    }
    
    rev(arr,0,k-1);
    rev(arr,k,arr.length-1);
    rev(arr, 0, arr.length-1)

    return arr
}

console.log(rotateArray(arr,k))