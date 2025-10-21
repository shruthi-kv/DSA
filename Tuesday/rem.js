let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];
let ele = 5;

function removeEle(arr, ele){
    let x = 0;
    let uni = []

    for(let i=0;i<arr.length;i++){
        if(arr[i] != ele){
            uni.push(arr[i])
            arr[x] = arr[i];
            x = x+1;
     
        }
    }

    return x;
}

console.log(removeEle(arr,ele))