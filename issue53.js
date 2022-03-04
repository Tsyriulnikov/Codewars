/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/
function sum() {    
    return  Array.from(arguments).reduce((sum, current)=>{ 
    return sum + current}, 0)}
  
    или

    const sum = (...xs) => xs.reduce((x, y) => x + y);