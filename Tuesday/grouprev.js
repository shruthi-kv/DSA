let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];
let k = 3;


function groupRev(arr, k) {
  for (let i = 0; i < arr.length; i = i + k) {

    let left = i;
    let right = Math.min(left + k - 1, arr.length-1);

        console.log(left,right)

    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    
  }
  return arr;
}

console.log(groupRev(arr,k));
