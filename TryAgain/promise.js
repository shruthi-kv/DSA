const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve("resolve1");
});
const promise2 = promise1.then((res) => {
  console.log(res);
});
console.log("promise1:", promise1);
console.log("promise2:", promise2);

// 1
// promise1: Promise{'resolve1'}
// 1
// promise2:resolve1
