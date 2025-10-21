let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];

function reverse(arr){
    let i =0;
    let j=arr.length-1;

    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}

console.log(reverse(arr))