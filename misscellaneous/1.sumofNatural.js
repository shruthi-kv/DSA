// Sum of N Natural Numbers
// Write a program to find the sum of the first n natural numbers.
// Example: n = 5 → Output: 15


function NaturalSum(n){
    let sum=0;

    for(let i = 0; i<=n;i++){

        sum= sum+i

    }

    return sum;
}

console.log(NaturalSum(15))