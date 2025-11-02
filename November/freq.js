let arr = [1,4,5,21,1,4,5,2,54];

function freq(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++
        }
    }
    return obj
}

console.log(freq(arr))