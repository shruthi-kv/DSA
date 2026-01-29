let str = "successes";

function CountVowelCons(str) {
  str = str.trim();
  str = str.split("");
  let vow = {};
  let con = {}

  for (let i = 0; i < str.length; i++) {
   
      if (["a", "e", "i", "o", "u"].includes(str[i])) {
         if (!vow[str[i]]) {
            vow[str[i]]=1;
         }else{
            vow[str[i]]++;
         }
      }else{
        if (!con[str[i]]) {
            con[str[i]]=1;
         }else{
            con[str[i]]++;
         }
      }
   
  }
  let v = Math.max(...Object.values(vow),0);
  let c = Math.max(...Object.values(con),0)
  return v+c;
}

console.log(CountVowelCons(str));
