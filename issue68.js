function isPalindrome(num){
    let strNum = num.toString();
    if(strNum.length <= 1)
      return false
    return strNum === [...strNum].reverse().join('')
  }
  function palindrome(num) {
      if(typeof num === "string" || num < 0)
         return "Not valid";
    
      let i = 0;
  
      while(true)
       {
          if(isPalindrome(num + i))
            return num + i;
          if(isPalindrome(num - i))
            return num - i;
          i++;
       }
  }