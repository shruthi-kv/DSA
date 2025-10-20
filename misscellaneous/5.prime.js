// Check Prime Number
// Check if a given number is prime using a single loop.
// Example: n = 7 → Output: Prime

function PrimeNumber(n){

    if(n<=1) return "Prime"
    
    for(let i=2; i<n ; i++){
        if(n%i ===0) return "Not Prime"
    }
    return "Prime"

   
}

console.log(PrimeNumber(8))