function celsiusToFahrenheit(){
    let c = 35;
    return (c*9/5)+32;
}
console.log("The temperature in fahrenheit is:"+celsiusToFahrenheit());

function EvenOdd(){
    let n=5;
    if(n%2==0){
        return "Number is Even";
    }
    else{
        return "Number is Odd";
    }
}
console.log(EvenOdd());

function LargestNum(a,b){
    var a = 5;
    var b = 4;
    return a > b ? a : b;
}
console.log("The largest number is:"+LargestNum());

