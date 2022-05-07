const sepStr=(str)=> {
let strToArr = str.split(' ');

let result =[];

let result1 = Array(str.match(/\S+?\s|\S+?$/g).length)




for(let i=0; i<strToArr.length; i++){ 


result1 = (strToArr.reduce((acc,el) => { 

return  acc+el[i]
},[]).split(''))  

}



return result1

}
console.log(sepStr("The Mitochondria is the powerhouse of the cell"));

//sepStr("Just Live Life Man")
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);