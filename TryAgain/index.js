let arr = ["abc", "bcbd", "aera", "erd"];
let x = "a";

function findIndex(arr, x) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    // if(arr[i].includes(x)){
    //     res.push(i)
    // }
    let str = arr[i].split("");

    for (let j = 0; j < str.length; j++) {
      if (str[j] === x) {
        res.push(i);
      }
      break;
    }
  }

  return res;
}

console.log(findIndex(arr, x));
