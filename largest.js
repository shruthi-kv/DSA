const arr = [1,4,7,3,7,3,8,3,7,,9,4,7];

function Largest(arr){
    let largest = -Infinity;

    for(let i =0 ; i<arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    return largest;
}

console.log(Largest(arr))