/*
Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).


*/

var arrayLeaders = numbers => {
    return numbers.filter((item, index, arr)=>{
    let sum = 0;
        for(let i = index+1; i < arr.length; i++){
        sum += arr[i];
        }
     return item > sum
    });
    }

    
    или


    var arrayLeaders = numbers => {
        return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)}