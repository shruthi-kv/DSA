let arr = [7,6,4,3,1];

function BuyStocks(arr){

    let maxReturn =0;

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] - arr[i] > maxReturn){
                maxReturn = arr[j]- arr[i]
            }
        }
    }

    return maxReturn;

}

console.log(BuyStocks(arr))