/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/


function reverseSeq(n) {
    let array=[];  
      for (var i=1; i<=n; i++){
          array.unshift(i);
         }
     return array;    
    }

или 
const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };

  или 

  const reverseSeq = length => Array.from({length}, () => length--)