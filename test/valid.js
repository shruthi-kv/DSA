/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n =s;
    let stack=[];
    for(let i=0;i<n.length;i++){
        if(n[i] === '{' || n[i] === '[' || n[i] === '('){
            stack.push(n[i])
        }else{
            let top = stack.pop();
            if(!top ||
            (top === '{' && n[i] !== '}') ||
            (top === '(' && n[i] !== ')') ||
            (top === '[' && n[i] !== ']')
            ){
                return false;
            }
        }
    }

    return stack.length === 0
};