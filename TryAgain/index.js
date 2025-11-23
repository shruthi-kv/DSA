let arr = ['abc','bcbd','aera','erd'];
let x = 'a';

function findIndex(arr,x){
    let res = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i].includes(x)){
            res.push(i)
        }
    }

    return res;

}

console.log(findIndex(arr,x))