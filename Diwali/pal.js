function pal(n){
    n = Math.abs(n)
    let res = '';

    if(n===0) return 'inp should be more than 1 ch'

    while(n>0){
           res = res + (n%10);
        n = Math.floor(n/10)
     
    }

    
    return res;
}

console.log(pal(2537234))