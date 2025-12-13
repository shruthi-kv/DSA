let t = 'paper';
let s = 'title';


var isIsomorphic = function(s, t) {
    let mapStoT = {};
    let mapTotoS = {};

    for(let i=0;i<s.length;i++){
         if(!mapStoT[s[i]] && !mapTotoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTotoS[t[i]] = s[i];
         }else if(mapTotoS[t[i]] !== s[i]){
            return false;
         }else if(mapStoT[s[i]] !== t[i]){
            return false;
         }
    }
    return true;
   
};

console.log(isIsomorphic(s,t))