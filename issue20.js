function fakeBin(x){  
    xArray= [];
    xArray= x.split(''); 
   for (let i=0; i<xArray.length; i++){
      if (xArray[i] < "5") { 
         xArray[i] = "0"  
   } else xArray[i] = "1"
   }
   return xArray.join('');
   } 


   или 

   function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

или

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }

  или
  function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }