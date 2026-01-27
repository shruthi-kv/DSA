let jewel = "aB";
let stone = "ABAaabBB";

function jewelInStones(jew, stone) {
  let count = 0;

  for (let x = 0; x < stone.length; x++) {
    for (let y = 0; y < jew.length; y++) {
      if (stone[x] === jew[y]) {
        count++;
        break;
      }
    }
  }
  return count;
}

console.log(jewelInStones(jewel, stone));
