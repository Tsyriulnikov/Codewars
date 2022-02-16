function uniTotal (string){

    let outStr = [];
    let outSum = 0; 
    outStr= string.split('');
     for (let i=0; i<outStr.length; i++) 
          outSum=outSum + outStr[i].charCodeAt(0);  
    return outSum;
    }


    или


    const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

    или 
    function uniTotal(str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
          count += str.charCodeAt(i);
        }
        return count;
      }