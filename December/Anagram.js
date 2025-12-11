let str1 = 'anagram';
let str2 = 'nagaram';

function isAnagram(str1,str2){
    let obj={};

    for(let i=0;i<str1.length;i++){
        if(!obj[str1[i]]){
            obj[str1[i]] = 1;
        }else{
            obj[str1[i]]++;
        }
    }

    for(let i=0;i<str2.length;i++){
        if(!obj[str2[i]] || obj[str2[i]]<0){
            return false;
        }else{
            obj[str1[i]]--;
        }
    }

    return true;



}

console.log(isAnagram(str1,str2))