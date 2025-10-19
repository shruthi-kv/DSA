let arr = [2,8,3,5,2,4,2,4,2,5];

function removeDupl(arr){
    const obj = {};
    let x = 0;
    let uniqueArray =[]

    for(let i=0; i<arr.length ;i++){
        count = 0;
        if(!obj[arr[i]]){
            obj[arr[i]] = true
            arr[x] = arr[i];
            uniqueArray[x] = arr[i]
            x = x+1;

        }
         
    }
    console.log(uniqueArray)
  return x;
}

console.log(removeDupl(arr))

