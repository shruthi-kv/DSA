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

let rows =5
for (let i = rows; i >= 1; i--) {
    let line = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }

    console.log(line);
  }


console.log("-----------------------------------")
console.log("-----------------------------------");

  function printDiamond(rows) {
  // Top half (including the middle line)
  for (let i = 1; i <= rows; i++) {
    let line = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }

    console.log(line);
  }

  // Bottom half (excluding the middle line to avoid duplication)
  for (let i = rows - 1; i >= 1; i--) {
    let line = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }

    console.log(line);
  }
}

printDiamond(5);
