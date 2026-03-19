function longestUniqueSubstring(){
    let maxLength = 0;
    let str = "Javascript";
    for(let i=0;i<str.length;i++){
        let seen="";
        for(let j=i;j<str.length;j++){
            if(seen.includes(str[j]))
                break;
            seen+=str[j]
            maxLength=Math.max(maxLength,seen.length);
        }
    }
    return maxLength;
}
console.log("The length of the longest substring without repeating characters:"+longestUniqueSubstring());
