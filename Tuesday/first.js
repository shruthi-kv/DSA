let arr = [1, 2, 2, 3, 4, 7, 3, 5, 8, 4, 5, 5];

function larg(arr){
    let lar = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>lar){
            lar = arr[i]
        }
    }

    return lar;
}

console.log(larg(arr))