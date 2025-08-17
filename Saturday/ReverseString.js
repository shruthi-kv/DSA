
const ReverseString = (arr) =>{
    let revArr = [];

    for(let i = arr.length-1;i>=0;i--){
        revArr.push(arr[i])
    }
    return revArr;
}

console.log(ReverseString(['h','e','l','l','o']))


console.log("----------")


function RevString(arr){
    let x =0;
    for(let i=0;i< Math.floor(arr.length/2);i++){
       let temp = arr[i];
       arr[i] = arr[arr.length-1-i];
       arr[arr.length-1-i] = temp

    }
    return arr;
}

console.log(RevString(['h','e','l','l','o']))