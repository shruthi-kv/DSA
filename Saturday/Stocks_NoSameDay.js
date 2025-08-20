let arr = [7,1,5,3,6,4];

function BestTimeToBuyStocks(arr){
    let MaxReturn =0;
    for(let i=1;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] -arr[i] > MaxReturn){
                MaxReturn = arr[j]-arr[i]
            }
        }
    }
    return MaxReturn;
}

console.log(BestTimeToBuyStocks(arr))