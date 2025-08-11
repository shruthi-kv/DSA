// Count Digits in a Number
// Count how many digits are there in a given integer.
// Example: n = 1256 → Output: 4


function countDigit(n){
    let count=0;
    if(n==0) return 1;
    n = Math.abs(n)

    

    while(n>0){
        n =Math.floor(n/10);
        count = count+1;
    }

    return count;
}

console.log(countDigit(-1124))