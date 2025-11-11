let arr = [ 1,3,5,6,8,3,1];

function freq(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }
    }
    return obj;

}
const result = freq(arr);
console.log(result)