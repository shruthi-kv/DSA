// let s = "(()) ((())())";
// // ()(())()

let s = "(()())(())";
// ()(())()

function RemoveDup(s) {
  let stack = [];
  let res = "";
  s = s.split("");
  

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        res = res + s[i];
      }
    } else {
      if (stack.length > 1) {
        res = res + s[i];
      }
      stack.pop();
    }
  }

  return res;
}
console.log(RemoveDup(s));
