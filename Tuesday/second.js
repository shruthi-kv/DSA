let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];

function secondLargest(arr) {
  let first, second;

  if (arr[0] > arr[1]) {
    first = arr[0];
    second = arr[1];
  } else {
    first = arr[1];
    second = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > first) {
        second =first;
        first = arr[i]

    } else if (arr[i] > second) {
        second = arr[i];
    }
  }

  return second;
}

console.log(secondLargest(arr))
