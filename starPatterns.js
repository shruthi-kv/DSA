console.log("-----------------------------------");
//   *
//   *  *
//   *  *  *
//   *  *  *  *
//   *  *  *  *  *
var n = 5;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + " * ";
  }
  console.log(row);
}
console.log("-----------------------------------");
//   *  *  *  *  *  *
//   *  *  *  *  *
//   *  *  *  *
//   *  *  *
//   *  *
//   *
for (let i = 0; i < n + 1; i++) {
  let row = " ";
  for (let j = n; j >= i; j--) {
    row = row + " * ";
  }
  console.log(row);
}

console.log("-----------------------------------");
//      *
//     ***
//    *****
//   *******
//  *********

for(let i=1;i<=n;i++){
    let row=" ";
    for(let j=1 ; j<=n-i; j++){
        row = row + " "
    }
    for(let k=1; k<=((2*i)-1);k++){
        row = row + "*"
    }

    console.log(row)
}


console.log("-----------------------------------");
//      *
//     **
//    ***
//   ****
//  *****

for(let i=1;i<=n;i++){
    let row=" ";
    for(let j=1 ; j<=n-i; j++){
        row = row + " "
    }
    for(let k=1; k<=i;k++){
        row = row + "*"
    }

    console.log(row)
}

console.log("-----------------------------------");
for(let i=1;i<=n;i++){
    let row=" ";
    for(let j=1 ; j<=i-1; j++){
        row = row + " "
    }
    for(let k=n; k>=i;k--){
        row = row + "*"
    }

    console.log(row)
}

