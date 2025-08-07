// write a function to search an element in an array and return index , if the element is not present return -1;

const arr = [1, 7, 5, 9, 3, 5, 55, 6, 7, 88, 9, 33, 5];

function SearchElement(n) {
    
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }

  return -1;
}

console.log(SearchElement(9));
