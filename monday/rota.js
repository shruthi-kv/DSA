let arr =[10,20,30,40,50,60,70,80,90];
let k=4

function reverse(arr, a,b){

   let i=a;
   let j=b;

   while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] =temp;
    i++;
    j--;
   }
   return arr;

}

function rotateArray(arr,k){

    k = k%(arr.length);
    if(k<0){
        k=k+arr.length
    }


    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);
    reverse(arr,0,arr.length-1)
    console.log(arr)
}

rotateArray(arr,k)
//  console.log(rotateArray(arr,k))