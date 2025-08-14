// . Remove duplicates without extra space (order not important)

// Input: [4,5,4,2,3,2,1]

// Output: [4,5,2,3,1] (order can change)

let arr = [1,1,2,2,4,7]
function removeDuplicates(arr){

    let seen ={};
    let x=0;

    for(let i=0; i<arr.length;i++){
        if(!seen[arr[i]]){
            seen[arr[i]] = true;
            arr[x] = arr[i];
            x=x+1
        }
    }
    console.log(arr.slice(0,x))
    return x;

}

console.log(removeDuplicates(arr))