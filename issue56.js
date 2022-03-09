/*
You will be given the number of angles of a shape with equal sides and angles, and you need to return the number of its sides, and the measure of the interior angles.

Should the number be equal or less than 2, return:

"this will be a line segment or a dot"
Otherwise return the result in the following format:

"This shape has s sides and each angle measures d"
(replace s with number of sides and d with the measure of the interior angles).

Angle measure should be floored to the nearest integer.

Number of sides will be tested from 0 to 180
*/
function describeTheShape( angles ){
    let result=""
       if (angles>2) {result=
         "This shape has " + angles + " sides and each angle measures "+ Math.floor(180*(angles-2)/angles)}
      else result = "this will be a line segment or a dot"
     return result
    }
    
    или

    function describeTheShape( angl ){
        return angl > 2 ? `This shape has ${angl} sides and each angle measures ${parseInt(1/angl * (angl-2)*180)}` : "this will be a line segment or a dot"
      }