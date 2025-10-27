let arr = [4,3,3];

function freq(arr){
    let obj= {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]] ++;
        }
    }
   
    return Object.keys(obj).find((k)=> obj[k]===1);
}

console.log(freq(arr))