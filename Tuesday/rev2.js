let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];


function reverse(arr){
    let rev = [];

    for(let i=arr.length-1;i>=0;i--){
        rev.push(arr[i])
    }

    return rev;
}

console.log(reverse(arr))