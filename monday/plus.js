let arr =[9,9,9];

function plus(arr){
    let string = '';

    for(let i=0; i<arr.length;i++){
        res = arr[i]%10;
        string = string +res;
    }


    return Number(string) +1;
}

console.log(plus(arr))

console.log(124/10)