let arr = ["Flower", "Flow", "Flew"];

function SubString(arr) {
  let x = 0;

  while (x < arr[0].length) {
    let ch = arr[0][x];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i][x] !== ch || x === arr[i].length) {
        return arr[i].substring(0, x);
      }
    }
    x++;
  }

  return arr[0];
}

console.log(SubString(arr));
