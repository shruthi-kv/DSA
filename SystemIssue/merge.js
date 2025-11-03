let arr1 = [1,3,5,7];
let arr2 = [2,4,8,9];

function mergeSort(arr1,arr2){
    let res =[];
    let x=0;
    let y=0;
    let len = (arr1.length) + (arr2.length)

    for(let i=0;i<len;i++){
        
        if((arr1[x]<arr2[y] && x < arr1.length) || y>=arr2.length){
            res.push(arr1[x])
            x++;
        }else{
            res.push(arr2[y])
            y++;
        }
    }
    return res;
}

console.log(mergeSort(arr1,arr2))