let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];

function freqCount(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }

  return obj;
}

console.log(freqCount(arr));
