
function RemoveElement(arr, val){
    let x=0;

    for(let i=0; i<arr.length;i++){
        if(arr[i]!= val){
            arr[x] = arr[i];
            x = x+1;
        }

    }
    console.log("unque -----", arr)
    return x;
}


// console.log(RemoveElement([3,2,2,3], 3))
console.log(RemoveElement([0,1,2,2,3,0,4,2], 2))

console.log("-------")


function removeDuplicates(arr) {
  // your code here
  let seen = {};
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      arr[x] = arr[i];
      x = x + 1;
    }

  }
      console.log(arr)
}
removeDuplicates([1, 2, 2, 3, 4, 4])