/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    var vowelsCount = 0;
    let outStr= str.split('');
        for (let i=0; i<str.length; i++){
      
        if (outStr[i]=="a" || outStr[i]=="e" || outStr[i]=="i" || outStr[i]=="o" || outStr[i]=="u" )
           vowelsCount++;
            
     }
    return vowelsCount;
  }

  или
  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  или 

  function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }

  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }