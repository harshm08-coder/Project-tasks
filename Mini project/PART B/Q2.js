function reverseArray(){
    let arr=[5,6,7,8];
    let res = [];

    for(let i=arr.length-1;i>=0;i--){
        res.push(arr[i]);
    }
    return res;
}
console.log("Reversed array is:"+"["+reverseArray()+"]");