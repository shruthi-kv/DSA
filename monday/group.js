let arr = [3, 2 ,1 ,6 ,5, 4, 8 ,7];
let k=3

function groupRev(arr,k){

    for(let i=0;i<arr.length;i=i+k){
        let left = i;
        let right = Math.min(left + k - 1, arr.length-1 )

        while(left<right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

    }
     return arr;
}

console.log(groupRev(arr,k))