let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function GroupAnagram(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      freqArr[index] = freqArr[index] + 1;
    }
    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + "#" + freqArr[k];
    }

    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }
  return [...Object.values(map)];
}
console.log(GroupAnagram(strs));
