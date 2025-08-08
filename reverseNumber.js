
//1234
function Palindrome(n){
    let nCopy = n;
    let rev =0;

    if(n<0) return false;

    while(n>0){

        let rem = n%10;
        rev = (10*rev)+rem;
        n= Math.floor(n/10);
    }

    // if(rev === nCopy) return true;
    // else return false
    return  rev===nCopy

}

console.log(Palindrome(4576142))