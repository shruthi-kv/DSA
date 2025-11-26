// let str = 'RLRRLLRLRL';
let str = 'LLLLRRRR';

function CountLeftRight(str){
    let Rcount = 0;
    let Lcount = 0;
    let result = 0;


    for(let i=0;i<str.length;i++){
        if(str[i]==='R'){
            Rcount++;
        }else{
            Lcount++;
        }

        if(Rcount === Lcount){
            result++;
            Rcount=0;
            Lcount =0;
        }
    }

    return result

}

console.log(CountLeftRight(str))