
let arr = [2,2,3,3,3,8];

function RemoveDuplicates(arr){
    let seen ={};

    let x =0;

    for(let i=0;i<arr.length;i++){

        if(!seen[arr[i]]){
            seen[arr[i]] =true;
            arr[x] =arr[i];
            x= x+1;
        }

    }

    console.log(arr)
    return x+1;

}

console.log(RemoveDuplicates(arr))
console.log("---------")
let a=1


console.log(a%10, Math.floor(a/10))

console.log("---------")
function addTwoNumbers(l1, l2) {
    let arr = [];
    let borrow = 0;
    console.log(l1)
    let maxLength = Math.max(l1.length, l2.length)
    for(let i=0; i<maxLength;i++){
        let a = l1[i] || 0;
        let b =l2[i] || 0;

        
        let res = a+b + borrow;
    
   
        arr.push(res%10);

        borrow = Math.floor(res/10);
    }

    if(borrow){
        arr.push(borrow)
    }
    return arr;
    
};

console.log(addTwoNumbers([2,4,3],[5,6,4,4]))
