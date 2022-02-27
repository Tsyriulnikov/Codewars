function powersOfTwo(n){
    let result= []; 
     for (let i=0; i<=n; i++) 
       result.push(Math.pow(2, i));
     return result;
   }

   или

   function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }

  или

  function powersOfTwo(n) {
    return [...Array(n + 1)].map((_, i) => 2 ** i)
  }