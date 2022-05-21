/*
The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
*/



const missingNo=(nums)=> {
    let result = nums.sort((a,b)=>a-b).reduce((acc,el,i,arr)=>{
    if (arr[i+1]-el >1) acc=el+1
    return acc
    },0)
    return result
    }


    или

    function missingNo(nums) {
        let arr=nums.sort(function(a,b){return a-b});
        for(let i=0;i<= arr.length;i++)
            if(i!=arr[i])
                return i;    
     }

     или

     const missingNo = (nums) => ([...Array(101).keys()].filter(x => !nums.includes(x))[0])

     или

     function missingNo(nums) {
        return nums.sort((a, b) => a - b).find((num, i) => num !== i) - 1;
      }