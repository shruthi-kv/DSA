/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n =s;
    let stack=[];
    let map = {
        '{' :'}',
        '[' : ']',
        '(' : ')'
    }

    for(let i=0;i<n.length;i++){
        if(map[n[i]]){
            stack.push(n[i])
        }else{
            let top = stack.pop();
            if(!top || n[i] !== map[top]){
                return false;
            }
        }
    }

    return stack.length === 0
};