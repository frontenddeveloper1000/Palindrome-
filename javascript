const isPalindrome= (str)=>{
let string=str;
return string==string.split('').reverse().join('');
}

console.log(isPalindrome("level"));
