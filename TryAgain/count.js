let str = "  ";

function countLastWord(str){
    let n = str.length-1;
    let count = 0;

    while(n>=0){
        if(str[n] === ' '){
            n--;
        }else{
            break;
        }
    }

    while(n>=0){
        if(str[n] != ' '){
            count++;
            n--;
        }else{
            break;
        }
    }

    return count;
    

}

console.log(countLastWord(str))