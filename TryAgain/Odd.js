let arr = [1,[2,[3,[8,10],4],5],6]

function flatten(arr){

    let res = [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res.push(...flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }

    return res;

}

console.log(flatten(arr))