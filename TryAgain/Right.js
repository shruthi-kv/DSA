// let str = 'LLLLRRRR';
let str = 'RLRRLLRLRL';
function balanceString(str){
    let temp=0;
    let count=0;

    for(let i=0;i<str.length;i++){
        if(str[i] === 'R'){
            temp++;
        }else{
            temp--;
        }

        if(temp ===0){
            count++;
        }
    }

    return count;
}

console.log(balanceString(str))