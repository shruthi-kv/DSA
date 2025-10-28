let n=12;

function print(x){
    
    if(x > n) return;
    console.log(x);
    print(x+1)

}

print(1)