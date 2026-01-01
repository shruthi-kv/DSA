/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(arr) {
    let stack = [];
    let map ={
        "+" : (a,b)=>(a+b),
        "-" : (a,b)=>(a-b),
        "*" : (a,b)=>(a*b),
        "/" : (a,b)=>Math.trunc((a/b)),
    }
    
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]){
            let a = stack.pop();
            let b = stack.pop();
            let result = map[arr[i]](+b,+a)
            stack.push(result)
        }else{
            stack.push(arr[i])
        }
    }

    return Number(stack.pop())
    
};