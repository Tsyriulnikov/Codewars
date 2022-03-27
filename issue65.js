/*
Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']*/
function sort(initialArray, sortingArray) {
    let result = [];
   for (let i=0; i<initialArray.length;i++){
   result[sortingArray[i]] =  initialArray[i]
   }
   return result
   }

   или 

   const sort = (initialArray, sortingArray) =>
  initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]);

  или 

  const sort = (iArr, sArr) => iArr.reduce((p, c, i) => (p[sArr[i]] = c, p), [])