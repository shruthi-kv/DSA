// let str = 'successes';
let str = 'aeiaeia';
function sum(str){

    let vow = {};
    let con = {};

    for(let i=0;i<str.length;i++){
        if(['a','e','i','o','u'].includes(str[i])){
            if(!vow[str[i]]){
                vow[str[i]] = 1;
            }else{
                vow[str[i]]++;
            }
        }else{
            if(!con[str[i]]){
                con[str[i]] = 1;
            }else{
                con[str[i]]++;
            }
        }
    }
    let a = Math.max(...Object.values(vow),0);
    let b = Math.max(...Object.values(con),0);
    return a+b;
}

console.log(sum(str))