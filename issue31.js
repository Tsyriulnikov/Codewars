function sumStr(a,b) {
    let aInt=0;
    let bInt=0;
      if (a!='') aInt=parseInt(a,10); 
      if (b!='') bInt=parseInt(b,10);
    return (aInt+bInt).toString();
    }

    или

    function sumStr(a,b) {
        return String(Number(a)+Number(b));
      }

      или

      sumStr = (a,b) => String(+a + +b);