// Input → [5, 1, 4, 2, 8], k = 2
// Output → 5

let arr = [5, 1, 4, 2, 8];
let k=2;

function kthElement(arr,k){
    let n = arr.length;
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j+1]<arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(i=1){
            return arr[n-k]
        }
      
    }

}

console.log(kthElement(arr,k))