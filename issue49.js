/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/
function amIWilson(p) {
    var factorial = 1;
    let n = p-1
    while(n){
        factorial *= n--;
    }
  return Number.isInteger((factorial + 1) / (p * p))
}

или

function amIWilson(p) {
    function fact(x) {
      return x <= 1 ? 1 : x * fact(x-1);
    }
    
    return (fact(p-1) + 1) / (p*p) % 1 === 0;
  }