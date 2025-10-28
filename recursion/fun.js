function fun(num){
    if(num == 0){
        return;
    }
    console.log(num);
    num = num-1;
    fun(num)
}

let a = 10;
fun(a)