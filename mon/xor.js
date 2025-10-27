let arr = [4,3,3];

function xor(arr){
    let xor= 0;
    for(let i=0;i<arr.length;i++){
        xor = xor ^ arr[i]
    }

    return xor;
}

console.log(xor(arr))