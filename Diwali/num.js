let n=7

for (let i=0;i<n;i++){
    let r ='';
    for(let j =0;j< (n-(i+1));j++){
        r = r +' '
    }

    for(let k = 0;k<(i+1);k++){
        r = r + " " + (k+1)
    }

    console.log(r)
}

for(let i = 0 ;i<n;i++){
    let r = '';
    for(let j=0;j<(i+1);j++){
        r = r+ ' ';
    }
    for(let k=0;k<(n-(i+1)); k++){
        r = r + ' ' + (1+k)
    }

    console.log(r)
}