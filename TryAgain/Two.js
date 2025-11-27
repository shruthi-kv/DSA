// let str = "abcdefg";
let str = "abcd";

function reverseStringTwo(str) {
    let a = str.split('')

  for (let i = 0; i < a.length; i = i+4) {
    if (a[i + 1]) {
      let temp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = temp;

    } else {
      break;
    }

  }

  return a.join('');
}

console.log(reverseStringTwo(str));
