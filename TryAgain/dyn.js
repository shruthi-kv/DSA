let str = "abcdefghijk";
let k = 3;

function reverseStringtwo(str, k) {
  let a = str.split("");

  for (let i = 0; i < a.length; i = i + 2 * k) {
    // 0 abc
    //6 ghi

    for (let j = 0; j < Math.floor(k / 2); j++) {
      let temp = a[j + i];
      a[j + i] = a[k - 1 - j + i];
      a[k - 1 - j + i] = temp;
    }
  }

  return a.join("");
}

console.log(reverseStringtwo(str, k));

// let str = "abcdefghijk";
// let k = 3;

// function reverseStringtwo(str, k) {
//     let a = str.split('');

//     for (let i = 0; i < str.length; i += 2 * k) {
//         let end = Math.min(i + k - 1, a.length - 1);

//         for (let j = 0; j < Math.floor((end - i + 1) / 2); j++) {
//             let left = i + j;
//             let right = end - j;

//             let temp = a[left];
//             a[left] = a[right];
//             a[right] = temp;
//         }
//     }

//     return a.join('');
// }

// console.log(reverseStringtwo(str, k));
