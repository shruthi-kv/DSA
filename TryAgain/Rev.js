let str = 'Hello';

function reverse(str){
    let a = str.split('')


    let mid =Math.floor(a.length/2);


    for(let i=0;i<mid;i++){
        if(i === mid){
            break;
        }else{
            
            let temp = a[i];
            a[i] = a[a.length-i-1];
            a[a.length-i-1] = temp;
        }
   
    }
   
    return a.join('');
}

console.log(reverse(str))