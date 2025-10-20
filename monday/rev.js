const arr = [12,5,6,2,4,567,45,3346];

function rev(arr){

    let i=0;
    let j=arr.length-1;

    while(i<=j){
        let temp = arr[i];
        arr[i] =arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;

}

console.log(rev(arr))