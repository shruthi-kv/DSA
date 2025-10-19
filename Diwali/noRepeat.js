//print the length of unique array
// print the unique array
//print the freq of each element

let arr = [2,2,3,3,3,8];

function uniqueLength(arr){
    let obj ={ };
    let x = 0;


    for(let i=0; i<arr.length ;i++){
        if(obj[arr[i]]){
            obj[arr[i]] = obj[arr[i]]+1;
        }else{
            obj[arr[i]] = 1;
        }
      
    }
    return obj;
}
console.log(uniqueLength(arr))
