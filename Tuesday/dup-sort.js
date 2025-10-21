let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];

function DuplicateArray(arr){
    let obj = {};
    let x =0;
    let unique = []

    for(let i =0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = true;
            arr[x] = arr[i];
            unique.push(arr[i])
            x=x+1;
        }
    }

    return unique;
}

console.log(DuplicateArray(arr))

