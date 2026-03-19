function longestCommonPrefix(){
    let arr=["WorldWide","World War","World Wide Web"];
    if(arr.length===0){
        return "";
    }
    let prefix = arr[0];
    for(let i=1;i<arr.length;i++){
        while(!arr[i].startsWith(prefix)){
            prefix = prefix.slice(0,-1);
            if(prefix===""){
                return "";
            }
        }
    }
    return prefix;
}
console.log("The longest common prefix is:"+longestCommonPrefix());