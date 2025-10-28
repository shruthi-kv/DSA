
function fabi(n){
    if(n <=1) return n;
    return fabi(n-1)+fabi(n-2)
}

console.log(fabi(6))