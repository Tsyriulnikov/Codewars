function leastLarger(a,i) {
    let result=-1
   a.forEach((item,index,arr)=>
    {if(item>arr[i])
              if (result===-1 || item < arr[result])    
     result=index}
   )
    return result
   
   }

   или
   const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))