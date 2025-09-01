let arr = [2,5,4,1,3,2];

function sorting(arr){
    let sort = [];
    let min = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i];
            sort.push(arr[i])
        }
    }

    return sort;
}

console.log(sorting(arr))