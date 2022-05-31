const maxProduct=(numbers, size)=> {
    let result=1
    numbers.sort((a,b)=>a-b).reverse()
    for(let i=0; i<size; i++){
    result = result * numbers[i] 
    }
    return result
    }
    