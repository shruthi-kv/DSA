let arr = [1,2,4,3,1,1,3,4]; //9

function odd(n){

    let isOdd = arr[n]%2 !=0;
    if(n===0){
        if(isOdd) return arr[n];
        else return 0;
    }

    if(isOdd){
        return arr[n]+odd(n-1);
    }else{
        return 0 + odd(n-1)
    }
}

console.log(odd(arr.length-1))
