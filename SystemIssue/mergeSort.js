let arr = [8,4,5,6,9,1,3,6];

function mergeSort(arr){
    if(arr.length <=1) return arr;

    let middle = Math.floor((arr.length)/2);
  
    
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));

    return sort(left,right);
}

function sort(left,right){
    let arr = [];
    let x = 0;
    let y=0;

    for(let i =0;i<(left.length + right.length);i++){
        if((left[x]<right[y] && x < left.length) || y>=right.length){
            arr.push(left[x]);
            x++;
        }else{
            arr.push(right[y]);
            y++;
        }
    }
    return arr;

}

console.log(mergeSort(arr))