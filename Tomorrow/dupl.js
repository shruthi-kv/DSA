let arr = [ 1,3,5,6,8,3,1];

function dup(arr){
    let obj = {};
    let res= [];

    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            res.push(arr[i]);
            obj[arr[i]] = true

        }
    }
    return res;

}

console.log(dup(arr))