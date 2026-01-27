let arr = ['leet','cod'];
let str = 'e';

function WordsChar(arr,str){
    let res = [];

    for(let i=0;i<arr.length;i++){
        //arr[i] = 'leet';

        if(arr[i].includes(str)){
            res.push(i)
        }
    }
    return res;
}

console.log(WordsChar(arr,str))