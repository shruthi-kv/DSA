let arr = [20,42,6,25,30,88];

function reverseArray(arr){

    let revArray = [];

    for(let i=arr.length-1;i>=0;i--){
 
        revArray.push(arr[i])
    }

    return revArray;
}

console.log(reverseArray(arr))