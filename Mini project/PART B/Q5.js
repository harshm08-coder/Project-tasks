function isPalindrome(){
    let str = "madam";
    let reversed = str.split("").reverse().join("");  
    return str === reversed;
}
console.log("The Array is palindrome:"+isPalindrome());