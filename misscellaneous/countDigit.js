let n = 457;

function countDigit(n) {
  let count = 0;

  //what is number is 0
  if (n === 0) return 1;

  //handling -ve numbers
  n = Math.abs(n);

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

console.log(countDigit(n));
