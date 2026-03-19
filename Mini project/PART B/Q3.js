function secondLargest(){
    let arr = [7,18,45,100];
    let largest = -Infinity;
    let second = -Infinity;

    for(let num of arr){
        if(num>largest){
            second = largest;
            largest=num;
        }
        else if(num>second && num!==largest){
            second=num;
        }
    }
    return second;
}
console.log("Second largest number is:"+secondLargest());