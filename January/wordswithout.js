let arr = ['leet','code'];
let str = 'e';

function WordsChar(arr,str){
    let res = [];

    for(let i=0;i<arr.length;i++){

       for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] === str){
                res.push(i);
                break;
            }
       }
    }
    return res;
}

console.log(WordsChar(arr,str))