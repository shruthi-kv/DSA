
function BinaryToDecimal(str){
    let deci =0;
    let power = 0;

    for(let i=str.length-1;i>=0;i--){
        if(str[i] === "1"){
            deci = deci + Math.pow(2,power);
        }
        power = power +1;
    }

    return deci

}

console.log(BinaryToDecimal('101'))
console.log("----------");

function frequency(arr){
    let seen ={};



    for(let i = 0 ;i<arr.length;i++){
        console.log(arr[i])
        let count = 0;
        if(! seen[arr[i]]){
            seen[arr[i]] = count + 1;
        }else{
            seen[arr[i]] =  seen[arr[i]] +1;
        }
        console.log(seen)
    }

    return seen;

}

console.log(frequency([2,0,0,1,2,4]))