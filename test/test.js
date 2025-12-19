let arr2 = [1,4,7,[6,36],7,8];

function flattenArray(arr){
    let res = [];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res.push(...flattenArray(arr[i]))
        }else{
            res.push(arr[i])
        }
    }

    return res;
}

console.log(flattenArray(arr))



let arr1 = [1,0,2,43,6,12,3,0,2,8,0];

function MoveZeroes(arr){
    let res = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            res.push(arr[i])
        }
    }

    for(let i= res.length;i<arr.length;i++){
        res[i] =0;
    }

    return res;
}

console.log(MoveZeroes(arr))




let arr3 = [1,0,2,43,6,12,3,0,2,8,0];

function Freq(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        }else{
            obj[arr[i]] = obj[arr[i]]+1;
        }
    }

    return obj;
}

console.log(Freq(arr))


let arr = [1,0,2,43,6,12,3,0,2,8,0];

function Largest(arr){

    let lar = arr[0];
    let sec = arr[1]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>lar && arr[i]>sec){
            sec = lar;
            lar = arr[i]
        }else if(arr[i]> sec){
            sec = arr[i]
        }
    }
    return [lar,sec];
}

console.log(Largest(arr))