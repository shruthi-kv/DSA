let str = "The sky is blue3  ";

function count(str){

    let n=str.length-1;
    let count = 0;

    while(n>=0){
        if(str[n] != ' '){
            count++;
        }else if(str[n] === ' ' && count>0){
            break;
        }   
        n--;
    }
    return count;
}

console.log(count(str))