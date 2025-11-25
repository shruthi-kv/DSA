let str = 'aeiaeia';

function sum2(str){
    let obj={};

    for(let i=0;i<str.length;i++){
        if(!obj[str[i]]){
            obj[str[i]] = 1;
        }else{
            obj[str[i]]++;
        }
    }
    let vowCount = 0;
    let conCount =0;

    for(let i=0;i<str.length;i++){
        if(['a','e','i','o','u'].includes(str[i])){
            if(obj[str[i]]> vowCount){
                vowCount = obj[str[i]];
            }

        }else{
            if(obj[str[i]]> conCount){
                conCount =obj[str[i]];
            }

        }
    }

    return conCount+vowCount;

}

console.log(sum2(str))