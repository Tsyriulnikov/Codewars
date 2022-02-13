/*
 

*/



function eachCons(array, n) {
    let arrayOut=[];
    
      for (var i = 0; i < array.length; ++i)
    
      if (array.slice(i,i+n).length >= n)
        arrayOut.push(array.slice(i,i+n));
    
    
        return arrayOut;
    }


    или

    function eachCons(array, n) {
        return Array.from({length: array.length - n + 1}, (_, i) => array.slice(i, i + n))
      }

      или 

      function eachCons(ar, n) {
        let res=[];
        for (let i=0;i+n<=ar.length;i++)
            res.push(ar.slice(i,i+n));
        return res;
      }