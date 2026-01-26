let str = 'Hello World';

function lastChar(str){
     str = str.trim();
    let res = str.split(' ');
    let word = res[res.length-1]
    return word.length;
    
    let count = 0;
    for(let i=0;i<word.length;i++){
        count++;
    }

    return count;
}

console.log(lastChar(str))