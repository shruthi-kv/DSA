let str = "A man, a plan, a canal: Panama";

function twoP(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (!str[i].match([/a-z0-9/i])) {
      i++;
    } else if (str[j].match([/a-z0-9/i])) {
      j--;
    } else if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(twoP(str));
