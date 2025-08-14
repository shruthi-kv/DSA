// Write a Program to reverse a string in JavaScript.

function reverseString(str){
    // return str.split('').reverse().join('')

    let rev = '';

    for(let i=str.length-1; i>=0;i--){
        rev= rev+str[i]
    }


    return rev;



}

console.log(reverseString('Helo'))






function isPalindrome(str){
    let stringB ='';
    for(let i=str.length-1; i>=0;i--){
        stringB= stringB + str[i]
    }
    if(stringB.toUpperCase() == str.toUpperCase()) return true;
    else return false;
}

console.log(isPalindrome('Malayalam'))




function largest(arr){
    let lar =arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]> lar){
            lar =arr[i]
        }
    }

    return lar


}

console.log(largest([12,5,6,2,4,567,45,3346]))


let obj={name:"Shruthi"}
obj.age = 25;
delete obj.name
console.log(obj)




function isPrime(num){

    if(num <=0 ) return "enter number greater than zero"
    if(num === 1) return 1;
    for(let i =2 ;i<num;i++){
        if( num % i == 0 ){
            return false;
        }
    }

    return true;
}


console.log(isPrime(5))



function FibonacciSeries(n){

    let num1=0;
    let num2=1;
    let nextnum;
 
    
    for(let i= 0; i<=n;i++){
        console.log(num1);
        nextnum = num1+num2;
        num1= num2;
        num2=nextnum;
    }


}

console.log(FibonacciSeries(5))


factorial

function factorial(n){
    let fact = 1;
    for(let i =1 ; i<=n;i++){
        fact = fact*i;
    }

    return fact
}


console.log(factorial(4))



console.log(2**3)


function frequency(arr){
    let freq ={};

    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]] = freq[arr[i]] +1;
        }else{
            freq[arr[i]] = 1;
        }
    }

    return freq;



}

console.log(frequency([2,6,7,8,9,3,2,2,4,67]))




console.log("-------------------")
function nums(nums, target) {

    for(let i=0; i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i] != nums[j]){
                
                if(nums[i] + nums[j] === target){
            
                    console.log(i)
                }
            }

        }
    }
    
};

console.log(nums([2,7,11,15],9))