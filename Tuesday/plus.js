let arr = [1,5,7];

function plus(arr){

    let string = '';

    for(let i=0;i<arr.length;i++){
        let rem = arr[i]%10;
           console.log(rem)
        string = string+rem;
    }
 
    return Number(string)+1
}

console.log(plus(arr))