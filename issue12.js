const findNeedle = (haystack) => 
	
haystack.includes('needle') ? ("found the needle at position " + haystack.indexOf('needle')) :" There is no needly"  ;



или

function findNeedle(haystack) {
    var i = 0;
    while (i < haystack.length) {
      if (haystack[i] == 'needle') {
        return 'found the needle at position ' + i;
      }
      i++;  
    }
  }

  function findNeedle(array) {
    for (var i=0; i<array.length; i++){
      if (array[i] === 'needle')
        return 'found the needle at position ' + i;
    }
      // your code here
    }