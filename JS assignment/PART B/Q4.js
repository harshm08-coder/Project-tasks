function removeDuplicates(){
    let unique=[];
    let arr = [1,2,3,3,4];
    
    for(let item of arr){
        if(!unique.includes(item)){
            unique.push(item);
        }
    }
    return unique;
}
console.log("array after removing duplicates:"+removeDuplicates());