function sumMul(n,m){
    let sum = 0;
    let i = n;
    if (m > 0) {
     while(i < m) {
     sum = sum+i;    
           i=i+n;        
    }
    } else return "INVALID";
    return sum;
    }  

или

const sumMul = (n, m) => ~~(m/n) * (m+n - m%n) / 2 || 'INVALID';

или

function sumMul(n,m){
    return m<=n ? "INVALID" : Math.floor(m/n)*(Math.floor(m/n)+1)*(n/2);
  }

  