
let arr = [2,2,3,3,3,8];

function RemoveDuplicates(arr){

    let x =0;

    for(let i=0;i<arr.length;i++){

        if(arr[i] > arr[x]){
            x=x+1;
            arr[x] = arr[i]
        }
        console.log(arr)

    }
    


    return x+1;

}

console.log(RemoveDuplicates(arr))

