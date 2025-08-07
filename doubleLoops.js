
// for (let i=0; i< 3 ; i++){
//     for(let j=0; j<3;j++){
//         console.log("i = " + i + "" + " j = " + j)
//     }
// }

// for (let i=0; i< 3 ; i++){
//     for(let j=0; j<i;j++){
//         console.log("i = " + i + "" + " j = " + j)
//     }
// }

// //          * * * * *
// //          * * * * *
// //          * * * * *
// //          * * * * *
// //          * * * * *

for(let i = 0 ; i <5 ;i ++){
    let row = "  ";
    for(let j=0; j<5;j++){
        row = row + " * ";
    }
    console.log(row)
}


// //          * 
// //          * * 
// //          * * * 
// //          * * * * 

for(let i=0; i<8;i++){
    let row = " ";
    for(let j=0; j<=i;j++){
        row = row + " * ";
    }
    console.log(row)
}


// //          1 
// //          1 2 
// //          1 2 3 
// //          1 2 3 4 
// //          1 2 3 4 5

for(let i =1 ; i<=5 ;i++){
    let row = " ";
    for(let j=1; j<=i;j++){
        row = row+ j ;
    }
    console.log(row)
}

// //          1 
// //          2 2 
// //          3 3 3 
// //          4 4 4 4 
// //          5 5 5 5 5


for(let i=1; i<=5;i++){
    let row= " ";
    for(let j=1;j<=i;j++){
        row= row+i
    }
    console.log(row)
}


// //          1 2 3 4 5
// //          1 2 3 4 
// //          1 2 3 
// //          1 2 
// //          1

for(let i=0;i<5;i++){
    let row=" ";
    for(let j=0; j<=(4-i); j++){
        row = row + (j+1);
    }
    console.log(row)
}


// //          * * * * * 
// //          * * * * 
// //          * * * 
// //          * * 
// //          * 


for(let i=0;i<5;i++){
    let row = " ";
    for(let j=0;j<5-i;j++){
        row=row+ " * "
    }
    console.log(row)
}

// //          - - - - * 
// //          - - - * * 
// //          - - * * * 
// //          - * * * * 
// //          * * * * * 

for(let i = 0 ;i<5;i++){
    let row = " ";
    for(let j=0;j< 5-(i+1);j++){
        row=row+" _ ";
    }
    for(let k=0;k<(i+1);k++){
        row=row+" * "
    }

    console.log(row)
}


// //          1 
// //          1 0 
// //          1 0 1 
// //          1 0 1 0 
// //          1 0 1 0 1

for(let i = 0 ; i<5;i++){
    let row = " ";
    for(let j=0; j<=i;j++){
        if(j%2 === 0){
            row=row + '1';
        }else{
            row = row + "0"
        }
    }
    console.log(row)
}


for(let i = 0 ; i<5;i++){
    let row = " ";
    let toggle = 1;

    for(let j=0; j<=i;j++){
       row = row +toggle;

       if(toggle ===1) toggle =0;
       else toggle =1
    }
    console.log(row)
}


// //          1 
// //          0 1 
// //          0 1 0 
// //          1 0 1 0 
// //          1 0 1 0 1
      let toggle= 1;
for(let i=0;i<5;i++){
    let row = " ";

    for(let j=0; j<=i;j++){
     
        row = row + toggle;
        if(toggle ===1) toggle = 0;
        else toggle =1
    
        
    }

    console.log(row)
}
