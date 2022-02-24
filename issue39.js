function makeUpperCase(str) {
    return str.toUpperCase();
  }

  или

  function makeUpperCase(str) {
    let output = '';
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str[i].charCodeAt(0);
      const chr = (charCode >= 97 && charCode <= 122) ? String.fromCharCode(charCode - 32) : str[i];
  
      output += chr;
    }
    
    return output;
  }

  или

  function makeUpperCase(str) {
    return str.replace(/[a-z]/g,s=>String.fromCharCode(s.charCodeAt(0)-32))
  }