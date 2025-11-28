let str = 'A man, a plan, a canal: Panama';

function palidrome(str){
    str= str.toLowerCase();
    let filteredString = '';
    let rev='';



    for(let i=0;i<str.length;i++){
        if(str[i].match(/[a-z0-9]/i)){
            filteredString =filteredString + str[i];
            rev =str[i]+rev;
        }
    }

    // let rev = filteredString.split('').reverse().join('')
    console.log(rev)

    console.log(filteredString)
    return rev===filteredString;

}

console.log(palidrome(str))