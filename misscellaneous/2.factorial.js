// Factorial of a Number
// Find the factorial of a given number n using a single loop.
// Example: n = 4 → Output: 24


function factorial(n){
    if(n<0) return "input number greater than 0"
    if(n==0) return 1;
    let fact = 1;
    if(n>=1){
        
        for(let i=2; i<=n;i++){
            fact = fact*i
        }
        return fact
        
    }


}

console.log(factorial(1))