function shortcut (string) {

    let outStr= string.split('');
  
     for (let i=0; i<string.length; i++){
      
      if (outStr[i]=="a" || outStr[i]=="e" || outStr[i]=="i" || outStr[i]=="o" || outStr[i]=="u" ){
          outStr.splice(i, 1);
          i--;
  }
  }
  return outStr.join('');
  }



  или

  function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }

  или

  function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }

