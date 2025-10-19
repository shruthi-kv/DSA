let n=10

for (let i=0;i<n;i++){
    let r ='';
    for(let j =0;j< (n-(i+1));j++){
        r = r +' '
    }

    for(let k = 0;k<(i+1);k++){
        r = r + " *"
    }

    console.log(r)
}

for(let i = 0 ;i<n;i++){
    let r = '';
    for(let j=0;j<(i+1);j++){
        r = r+ ' ';
    }
    for(let k=0;k<(n-(i+1)); k++){
        r = r + ' *'
    }

    console.log(r)
}