let arr = [1, [2, 2, 3], [4, 4], 4, [5], 5];


function flat(arr){
    let f = [];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            f.push(...flat(arr[i]))
            
        }else{
            f.push(arr[i])
        }
    }

    return f;
}

console.log(flat(arr))