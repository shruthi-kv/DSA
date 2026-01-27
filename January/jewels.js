let jewel = "aB";
let stone = "AB";

function jewelInStones(jew, stone) {
  let count = 0;

  let jset = new Set();

  for (let i = 0; i < jew.length; i++) {
    jset.add(jew[i]);
  }
  for (let j = 0; j < stone.length; j++) {
    if (jset.has(stone[j])) {
      count++;
    }
  }
  return count;
}

console.log(jewelInStones(jewel, stone));
