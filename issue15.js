const solution=str=>str.split('').reverse().join('');

или
function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }


  или

  let solution = str => [...str].reverse().join('');