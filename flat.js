


let flat = [1,2,[3,4,5],4,[[4]]];
let res = [];
function flatter(arr){

    for(let i=0;i<arr.length;i++){

        if(Array.isArray(arr[i])){
            flat.concat(flatter(arr[i]))
        }else{
            res.push(arr[i])
        }
    }

    return res;
}
console.log(flatter(flat))

console.log("hello")