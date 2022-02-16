const rps = (p1, p2) => {  
    let game = p1+p2;
   switch (game) {
     case 'rockscissors':  
     case 'scissorspaper':
     case 'paperrock':	
   return 'Player 1 won!';
       break;
   
   case 'scissorsrock':
   case 'paperscissors':
   case 'rockpaper':
   return 'Player 2 won!';
       break;
   case 'rockrock':
   case 'scissorsscissors':
   case 'paperpaper':
   return "Draw!";
       break;
   
   }
   } 

   или

   const rps = (p1, p2) => {
    var map = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock'
    };
    
    if (p1 == p2) {
      return 'Draw!';
    } else {
      return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
    }
  };