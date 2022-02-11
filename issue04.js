/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

const points= games => {
let count=0;

for (let i = 0; i < games.length; i++) {

if (Number(games[i][0])>Number(games[i][2])) 
  count+= 3 ;
if (Number(games[i][0])==Number(games[i][2])) 
  count+= 1 ;

}

return count;


}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));


/*
Examples solutions 

const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)


points=g=>g.reduce((a,c)=>a+(c[0]>c[2]?3:c[0]<c[2]?0:1),0)


const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)


*/

