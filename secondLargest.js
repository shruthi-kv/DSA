// Return 2nd Largest element in an array
// corner cases : 
// If arr is empty or less than 2 elements
// if duplicate element are present in array

const arr = [1, 7, 5, 9, 3, 5, 6, 7, 88, 88, 33, 5];

function SecondLargest(arr) {
  let First_Largest = -Infinity;
  let Second_Largest = -Infinity;

  if(arr.length<2){
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > First_Largest) {
      Second_Largest = First_Largest;
      First_Largest = arr[i];
    } else if (arr[i] > Second_Largest && arr[i] != First_Largest) {
      Second_Largest = arr[i];
    }
  }
  return Second_Largest;
}

console.log(SecondLargest(arr));
