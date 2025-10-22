let arr1 = [1,2,3,0];
let m =3; 
let n=1;
let arr2 = [2];

function mergeSortedArray(arr1,arr2,m,n){
    let carray = arr1.slice(0,m)
    let x = 0;
    let y=0;

    for(let i=0;i<m+n;i++){

        if( y>=n ||  (x<m && carray[x] < arr2[y])){
            arr1[i] = carray[x];
            x++;
        }else{
            arr1[i] = arr2[y];
            y++
        }

    }
    return arr1;

}

console.log(mergeSortedArray(arr1,arr2,m,n))