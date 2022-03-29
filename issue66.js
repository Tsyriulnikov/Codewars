/*
Complete the function to test if the given number (num) can be rearranged to form a numerical palindrome or not. Return a boolean (true if it can be rearranged to a palindrome, and false if it cannot). Return "Not valid" if the input is not an integer or is less than 0.

For this kata, single digit numbers are NOT considered numerical palindromes.

Examples
5        =>  false
2121     =>  true
1331     =>  true 
3357665  =>  true 
1294     =>  false 
"109982" =>  "Not valid"
-42      =>  "Not valid"
*/

function palindrome(num) { 
    if ( num > 0 && Number.isInteger(num)){
    
    let numStr = Array.from(num.toString(), Number)
    let result = false  
    const countItem = numStr.reduce((acc,item)=> {
                 
    acc[item] = acc[item] ? acc[item] + 1 : 1;
            
    return acc;
    },{}); 
    
    const arrayOddNumber = Object.keys(countItem).filter((item)=> countItem[item]%2);
    
    if (arrayOddNumber.length<2 && num>=10) result = true
    
    return result
    } else return "Not valid"
    
    }
 
    
    или
    function palindrome(num) { 

        if (num !== +num || num < 0) 
          return 'Not valid';
      
        return num > 10 && 2 > `${num}`.split('').sort().join('').replace(/(.)\1/g, '').length;
        
      }