let arr = ["abc", "bcbd", "aera", "erd"];
let x = "a";

function findIndex(arr, x) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    // if(arr[i].includes(x)){
    //     res.push(i)
    // }
    // let str = arr[i].split("");

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === x) { // arr[0][2]
        res.push(i);
      }
      break;
    }
  }

  return res;
}

console.log(findIndex(arr, x));
