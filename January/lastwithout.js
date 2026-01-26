let str = 'The Sky is bluewe ';

function count(str){    
    let n = str.length-1;
    while(n >=0){
        if(str[n] === ' '){
            n--;
        }else{
            break;
        }
    }

    let count = 0;
    while(n >=0){
        if(str[n] != ' '){
            count++;
            n--;
        }else{
            break;
        }
    }
    return count;
}

console.log(count(str))