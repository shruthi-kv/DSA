let arr =[1,2,3,4,5,6,3,6,9,2,5,7,2,6,3];

let k=2;

function getRotate(arr){
    let freq ={};

    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]] = freq[arr[i]] + 1;
        }else{
            freq[arr[i]] = 1;
        }
    }
    return freq;
}

console.log(getRotate(arr))