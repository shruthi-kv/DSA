// Reverse a Number
// Reverse the digits of a given number using a single loop.
// Example: n = 123 → Output: 321


function reverseNumber(n){
    let revString = 0;
    let nCopy = n;

    n = Math.abs(n);
    
    

    while(n>0){
        let rem = Math.floor(n%10);
        revString =(10*revString)  + rem;
        n = Math.floor(n/10);
         
    }
    if(nCopy<0){
        return -revString
    }else{
        return revString
    }

}

console.log(reverseNumber(84))