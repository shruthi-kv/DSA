let arr = [5,3,2,0,1];

function rec(n){

    if(n === 0) return arr[0];

    return arr[n] + rec(n-1)
    
}

console.log(rec(arr.length-1))