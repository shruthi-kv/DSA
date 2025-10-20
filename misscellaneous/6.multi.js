// Multiplication Table Pattern
// Print the multiplication table from 1 to n in a grid format.
// Example: For n = 3
// 1  2  3
// 2  4  6
// 3  6  9


function Multiple(n){
    

    for(let i=1; i<=n;i++){
        let row=" ";
        for(let j=1; j<=n ;j++){
          row = row +(i*j);
        }
        console.log(row)
    }
}
Multiple(3)


function printMultiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      // padEnd ensures columns line up nicely in console
      row += String(i * j).padEnd(4, " ");
    }
    console.log(row.trimRight());
  }
}

// Example
printMultiplicationTable(3);