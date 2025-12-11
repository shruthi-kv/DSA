let str1 = 'anagram';
let str2 = 'nagaram';

function isAnagram(str1,str2){
    console.log(str1.split('').sort().join(''))
    
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(isAnagram(str1,str2))